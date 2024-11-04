################################################

import os

# from cs50 import SQL
import sqlite3
from flask import Flask, flash, redirect, render_template, request, session
from flask_session import Session
from werkzeug.security import check_password_hash, generate_password_hash

from helper import apology, login_required, gen_lookup, star_lookup, zodiac, zodiac_lookup, qr_gen

################################################

# FUNCTION: Chinese Name
def CN_lookup(personName):
    CN_Name = db.execute("""
        SELECT
            first_EN
            , last_EN
            , last_CN
            , middle_CN
            , first_CN
        FROM CN_Names
        JOIN persons
        ON personID = persons.id
        WHERE First_EN IS ?
    """,
    personName)

    if not CN_Name:
        CN_Name = "unfound"
    else:
        CN_Name = CN_Name[0]
    return CN_Name

# FUNCTION: Full name
def full_name(personName):
    fullName = db.execute("""
        SELECT
            first_EN
            , middle_EN
            , last_EN
        FROM
            persons
        WHERE
            first_EN IS ?
        """,
        personName)
    return fullName

# FUNCTION: display photo
def display_photo(personName):
    dp_img = db.execute("""
    SELECT image
    FROM DPs
    JOIN persons
    ON DPs.personID = persons.id
    WHERE first_EN = ?
    """,
    personName)
    if dp_img:
        dp_img = dp_img[0]
    else:
        dp_img = "unfound"

    return dp_img

# FUNCTION: sibling lookup (full, half, half)
def sib_lookup(personName, type):

    if type == "fullSib":
        keyword1="IN"
        keyword2="IN"
    if type == "ofFather":
        keyword1="IN"
        keyword2="NOT IN"
    if type == "ofMother":
        keyword1="NOT IN"
        keyword2="IN"

    siblings = db.execute(f"""
        SELECT
            child.First_EN AS Child
            , father.first_EN AS Father
            , mother.first_EN AS Mother
            , (strftime('%Y', CURRENT_TIMESTAMP) - Child.DOB_year) AS Age
        FROM
            (SELECT
                childID AS WchildID
                , parentID AS womanID
            FROM lineage
            WHERE lineage.parentID IN (
                SELECT
                    women.id
                FROM persons AS women
                WHERE women.sex = 'F'
                )
            ) AS woman
        ,
            (SELECT
                childID AS MchildID
                , parentID AS manID
            FROM lineage
            WHERE lineage.parentID IN (
                SELECT
                    men.id
                FROM persons AS men
                WHERE men.sex = 'M'
                )
            ) AS man
        JOIN persons AS child
        ON man.MchildID = child.id
        JOIN persons AS father
        ON man.manID = father.id
        JOIN persons AS mother
        ON woman.womanID = mother.id
        WHERE woman.WchildID = man.MchildID
        AND manID {keyword1} (
            SELECT parentID
            FROM lineage
            JOIN persons AS Child
            ON childID = Child.id
            WHERE Child.First_EN = ?
            )
        AND womanID {keyword2} (
            SELECT parentID
            FROM lineage
            JOIN persons AS Child
            ON childID = Child.id
            WHERE Child.First_EN = ?
            )
        ORDER BY Age DESC
        """,
        personName, personName)
    return siblings

# FUNCTION: Age Order
def age_order(personName):
    order = db.execute("""
            SELECT
                _Order_
                , first_EN
            FROM(
                SELECT
                    ROW_NUMBER() OVER(ORDER BY persons.DOB_Year ASC) _Order_
                    ,lineage.childID
                    , persons.first_EN
                    , persons.DOB_Year
                FROM lineage
                JOIN persons
                ON lineage.childID = persons.id
                WHERE lineage.parentID
                    IN(
                        SELECT
                        partner1_id
                        FROM partners
                        WHERE partner1_id
                        IN(
                            SELECT
                                Parent.id
                            FROM lineage
                            JOIN persons AS Child
                            ON lineage.childID = Child.id
                            JOIN persons AS Parent
                            ON lineage.parentID = Parent.id
                            WHERE Child.first_EN = ?
                            )
                        )
                )
            WHERE first_EN IS ?
            """,
            personName, personName)

    if not order:
        order = 0
    else:
        order = order[0]['_Order_']

    return order

# FUNCTION: parent lookup along the bloodline.
def parent_lookup(personName):
    bloodline_parent = db.execute("""
    SELECT
        parent.first_EN
        --, child.first_EN
    FROM lineage
    JOIN persons as child
    ON lineage.childID = child.id
    JOIN persons as parent
    ON lineage.parentID = parent.id
    WHERE child.first_EN = ?
    AND lineage.parentID
        IN (SELECT
        partner1_id
        FROM partners
        )
    """,
    personName)
    return bloodline_parent

# FUNCTION: look up both parents
def parents_lookup(personName):
    Parents = db.execute("""
    SELECT
        Child.First_EN AS Child
        , Parent.First_EN AS Parent_First_EN
        , Parent.sex AS Parent_sex
    FROM lineage
    JOIN persons AS Child
    ON lineage.childID = Child.id
    JOIN persons AS Parent
    ON lineage.parentID = Parent.id
    WHERE Child IS ?
    """,
    personName)

    if not Parents:
        Father = "unfound"
        Mother = "unfound"
    else:
        for n in range(len(Parents)):
            if Parents[n]['Parent_sex'] == "M":
                Father = Parents[n]['Parent_First_EN']
            if Parents[n]['Parent_sex'] == "F":
                Mother = Parents[n]['Parent_First_EN']
    return Parents, Father, Mother


# FUNCTION: children of each partner
def chitlins_lookup(personName):
    chitlins = db.execute(
        """
        SELECT
            Parent.first_EN AS Parent
            , Child.first_EN AS Child
            , (julianday('now') - julianday(Child.DOB))/365.25 AS Age
            --, (strftime('%Y', CURRENT_TIMESTAMP) - Child.DOB_year) AS Age
        FROM lineage
        JOIN persons AS Child
        ON lineage.childID = Child.id
        JOIN persons AS Parent
        ON lineage.parentID = Parent.id
        WHERE lineage.childID
            IN (
                SELECT lineage.childID
                FROM lineage
                JOIN persons AS parent
                ON lineage.parentID = parent.id
                WHERE parent.first_EN = ?
            )
        AND Parent IS NOT ?
        ORDER BY Age DESC
        """,
        personName, personName)
    return chitlins

# FUNCTION: Generation counter
def gen_delta(personName, count=0, matrix={}):
    """
    Counts the number of generations displaced from root ancestor.
    """

    if personName == 'Thanh':
        ancestor = personName
        return ancestor, count, matrix

    if count == 0:
        ancestor = personName
        matrix = [{'first_EN': personName, 'order': age_order(personName), 'gens': count}]

    ancestor = parent_lookup(personName)

    if not ancestor:
        matrix = [{'first_EN': personName, 'order': "", 'gens': ""}]
        return ancestor, count, matrix

    count -= 1
    personName = ancestor[0]['first_EN']
    personName = str(personName)

     # insert age order calculator

    if personName == "Thanh":
        ancestor[0]['order'] = 0
    else:
        ancestor[0]['order'] = age_order(personName)

    ancestor[0]['gens'] = count
    matrix.append(ancestor[0])

    # very important to include the word 'return' when using recursion
    return gen_delta(personName, count, matrix)

# FUNCTION: address lookup
def address_lookup(personName):
        address = db.execute("""
        SELECT
        first_EN
        , street1
        , street2
        , city
        , state
        , postal
        , country
        FROM addresses
        JOIN persons on personID = persons.id
        WHERE addresses.Status IS 'Active'
        AND first_EN = ?
        """,
        personName)
        return address

# FUNCTION: email lookup
def email_lookup(personName):
    email = db.execute("""
    SELECT email
    FROM emails
    JOIN persons
    ON emails.personID = persons.id
    WHERE first_EN IS ?
    """,
    personName)
    if not email:
        email = "unfound"
    return email

# FUNCTION: phone number lookup
def phone_lookup(personName):
    phP = db.execute("""
    SELECT countryCode, ph
    FROM phones
    JOIN persons
    ON phones.personID = persons.id
    WHERE first_EN IS ?
    """,
    personName)
    if phP:
        phP = phP[0]
        phone = "+"+str(phP['countryCode'])+"-"+str(phP['ph'][:3])+"-"+str(phP['ph'][3:6]+"-"+str(phP['ph'][6:]))
    else:
        phone=""
    return phone

# FUNCTION: birth date pull & formatting for HTML (OLD)
def DOB_pulling(personName):
    DOB = db.execute("""
    SELECT
        DOB_year
        ,DOB_month
        ,DOB_day
    FROM persons
    WHERE persons.first_EN IS ?
    """,
    personName)

    if DOB:
        # .zfill makes the number into 2 digits.
        DOB = str(DOB[0]['DOB_year'])+"-"\
        +str(DOB[0]['DOB_month']).zfill(2)+"-"+str(DOB[0]['DOB_day']).zfill(2)
    else:
        DOB = "unfound"
    return DOB

# FUNCTION: birth date pull & formatting for HTML (NEW)
def DOB_pull(personName):
    DOB = db.execute("""
    SELECT
        DOB
    FROM persons
    WHERE persons.first_EN IS ?
    """,
    personName)

    if DOB:
        DOB = DOB[0]['DOB']
    else:
        DOB = "unfound"
    return DOB

# FUNCTION: birthday pull already in correct format
def bday_pull(personName):
    bday = db.execute("""
    SELECT
        DOB_month
        ,DOB_day
    FROM persons
    WHERE persons.first_EN IS ?
    """,
    personName)

    if bday:
        # .zfill makes the number into 2 digits.
        bday = str(bday[0]['DOB_month']).zfill(2)+"-"+str(bday[0]['DOB_day']).zfill(2)
    else:
        bday = "unfound"
    return bday


# FUNCTION: calculate age (NEW)
from datetime import datetime
def calc_age(personName):

        persons = db.execute("""
            SELECT
                strftime('%Y', DOB) AS DOBYear
                ,strftime('%m', DOB) AS DOBMonth
                ,strftime('%d', DOB) AS DOBDay
                ,persons.DOD_year
                ,"" AS Age
            FROM persons
            WHERE persons.first_EN = ?;
            """,
            personName)

        current_date = datetime.now()
        n = 0 # define n=0 since we are not using a for loop in this version of the script.
        if not persons[n]['DOBYear']: # DOB_year does not exist.
            persons[n]['DOBYear'] = ""
            persons[n]['DOBMonth'] = ""
            persons[n]['DOBDay'] = ""
            age = ""
        elif persons[n]['DOBYear'] and persons[n]['DOD_year']: # DOB_year exists, DOD_year exists.
            DOByear = int(persons[n]['DOBYear'])
            DOD_year = int(persons[n]['DOD_year'])
            age = round(DOD_year - DOByear, 1)
            persons[n]['Age'] = age
        else: # DOB_year exists, DOD_year does not exist.
            DOByear = int(persons[n]['DOBYear'])
            DOBmonth = int(persons[n]['DOBMonth'])
            DOBday = int(persons[n]['DOBDay'])
            DOB = datetime(DOByear, DOBmonth, DOBday)
            age = (current_date - DOB)
            age = round(age.days/365.25,1)
            persons[n]['Age'] = age

        return age

# FUNCTION: partner lookup, agnostic, active relationships
def partner_lookup(personName):
    partner = db.execute("""
    SELECT
        Partner1 AS Partner
    FROM(
        SELECT
            Partner1.first_EN AS Partner1
            , Partner2.first_EN AS Partner2
            , status
        FROM partners
        JOIN persons AS Partner1
            ON partner1_id = Partner1.id
        JOIN persons AS Partner2
            ON partner2_id = Partner2.id
        WHERE Partner1 IS ? --AND status IS 'Active'
        OR Partner2 IS ? AND status IS 'Active'
        UNION
        SELECT
            Partner1.first_EN AS Partner1
            ,Partner2.first_EN AS Partner2
            , status
        FROM partners
        JOIN persons AS Partner2
            ON partner1_id = Partner2.id
        JOIN persons AS Partner1
            ON partner2_id = Partner1.id
        WHERE Partner1 IS ? AND status IS 'Active'
        OR Partner2 IS ? AND status IS 'Active'
        )
    WHERE Partner1 IS NOT ?
    """,
    personName, personName, personName, personName, personName)
    if not partner:
        return [{'Partner': ""}]
    return partner


# FUNCTION: partner lookup, alternative query, looks up history
def partners_lookup(personName):
    partners = db.execute(
            """
            SELECT DISTINCT
                Partner1.first_EN AS Partner1
                , Partner2.first_EN AS Partner2
                --, Status
            FROM partners
            JOIN persons AS Partner1
                ON partner1_id = Partner1.id
            JOIN persons AS Partner2
                ON partner2_id = Partner2.id
            WHERE Partner1 IS ?
            """,
            personName)
    # this if statement fixes a bug where the partners of the in-law's page doesn't appear.
    if not partners:
        partners = db.execute(
                """
                SELECT DISTINCT
                    Partner1.first_EN AS Partner1
                    , Partner2.first_EN AS Partner2
                    --, Status
                FROM partners
                JOIN persons AS Partner1
                    ON partner1_id = Partner2.id
                JOIN persons AS Partner2
                    ON partner2_id = Partner1.id
                WHERE Partner1 IS ?
                """,
                personName)
    return partners




# FUNCTION: space escape
def spaces(url):
    """
    Replaces spaces with %20 for URLs
    """
    url = url.replace(" ", "%20")
    return url

################################################################################################


# Configure application
app = Flask(__name__)

# Configure session to use filesystem (instead of signed cookies)
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
Session(app)

# Configure CS50 Library to use SQLite database
db = SQL("sqlite:///familyTree.db")

@app.after_request
def after_request(response):
    """Ensure responses aren't cached"""
    response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    response.headers["Expires"] = 0
    response.headers["Pragma"] = "no-cache"
    return response

# INDEX
import qrcode
from PIL import Image
import base64
import io

@app.route("/")
@login_required
def index():

    '''
    [Pass Images to HTML Without Saving Them as Files Using Python Flask.]
    (https://buraksenol.medium.com/pass-images-to-html-without-saving-them-as-files-using-python-flask-b055f29908a)
    '''

    contents="this is a calcifer test"

    img = qrcode.make(contents)
    type(img)  # qrcode.image.pil.PilImage
    # img.save("some_file.png")
    data = io.BytesIO()
    img.save(data, "PNG")
    encoded_img_data = base64.b64encode(data.getvalue())

    return render_template("index.html", img_data=encoded_img_data.decode('utf-8'))

# DIRECTORY
@app.route("/directory", methods=["GET", "POST"])
@login_required
def directory():

    from datetime import datetime

    ## using CONCAT in query SELECT is a good cheat way to blank out a field that is None.

    persons = db.execute("""
            SELECT
                *
                ,strftime('%Y', DOB) AS DOBYear
                ,strftime('%m', DOB) AS DOBMonth
                ,strftime('%d', DOB) AS DOBDay
                ,"" AS bday
                ,persons.DOD_year
                ,"" AS Age
                ,"" AS Zodiac
                ,"" AS starSign
                ,"" AS Gen
                ,CONCAT(CN_Names.last_CN,CN_Names.middle_CN,CN_Names.first_CN) AS CN_Name
                ,CONCAT(emails.email) AS Email
                ,FB.URL AS FB
                ,IG.URL AS IG
            FROM persons
            FULL JOIN CN_Names
            ON CN_Names.personID = persons.id
            FULL JOIN emails
            ON emails.personID = persons.id
            FULL JOIN (SELECT * from addresses WHERE addresses.status IS 'Active') addresses
            ON addresses.personID = persons.id
            FULL JOIN (SELECT * from URLs WHERE URLs.site IS 'facebook') FB
            ON FB.personID = persons.id
            FULL JOIN (SELECT * from URLs WHERE URLs.site IS 'instagram') IG
            ON IG.personID = persons.id
            """,)
     # calculate age
    for n in range(len(persons)):

        current_date = datetime.now()

        if not persons[n]['DOBYear']: # DOB_year does not exist.
            persons[n]['DOBYear'] = ""
            persons[n]['DOBMonth'] = ""
            persons[n]['DOBDay'] = ""
            age = ""
        elif persons[n]['DOBYear'] and persons[n]['DOD_year']: # DOB_year exists, DOD_year exists.
            DOByear = int(persons[n]['DOBYear'])
            DOD_year = int(persons[n]['DOD_year'])
            age = round(DOD_year - DOByear,1)
            persons[n]['Age'] = age
        else: # DOB_year exists, DOD_year does not exist.
            DOByear = int(persons[n]['DOBYear'])
            DOBmonth = int(persons[n]['DOBMonth'])
            DOBday = int(persons[n]['DOBDay'])
            DOB = datetime(DOByear, DOBmonth, DOBday)
            age = (current_date - DOB)
            age = round(age.days/365.25,1)
            persons[n]['Age'] = age

    # calculate birthday
    for n in range(len(persons)):
        if persons[n]['DOBMonth']:
            persons[n]['bday'] = persons[n]['DOBMonth'] + "-" + persons[n]['DOBDay']

    # calculate zodiac
    for n in range(len(persons)):
        if persons[n]['DOBMonth']:
            persons[n]['Zodiac'] = zodiac(int(persons[n]['DOBYear']), int(persons[n]['DOBMonth']), int(persons[n]['DOBDay']))

    # calculate star sign
    for n in range(len(persons)):
        if persons[n]['DOBMonth']:
            persons[n]['starSign'] = star_lookup(int(persons[n]['DOBYear']), int(persons[n]['DOBMonth']), int(persons[n]['DOBDay']))


    # calculate generation (X, Y, Z)
    for n in range(len(persons)):
        if persons[n]['DOBYear']:
            persons[n]['Gen'] = gen_lookup(int(persons[n]['DOBYear']))

    # calculate generation depth
    '''
    for n in range(len(persons)):
        outputs = gen_delta(persons[n]['first_EN'])
        outputs = outputs[2][0]['gens'] # the [2] refers to the matrix
    '''

    return render_template("directory.html", persons_ = persons)

# PROFILES
@app.route("/profiles", methods=["GET", "POST"])
def profiles():

    """Look up profile and generate card"""

    # FULL NAME
    # personName string might be case-sensitive, resulting in IndexError: list index out of range
    personName = request.form.get("firstName")

    fullName = full_name(personName)

    # CHINESE NAME
    CN_Name = CN_lookup(personName)

    # DISPLAY PHOTO
    dp_img = display_photo(personName)

    # PARENTS (NEW)
    ## FATHER, MOTHER
    Parents, Father, Mother = parents_lookup(personName)

    ## SIBLINGS (HALF, SAME FATHER ONLY)
    ofDadHalfSiblings = sib_lookup(personName, "ofFather")

    ## SIBLINGS (HALF, SAME MOTHER ONLY)
    ofMomHalfSiblings = sib_lookup(personName, "ofMother")

    # SIBLINGS (FULL)
    fullSiblings = sib_lookup(personName, "fullSib")

    # EMAIL
    email = email_lookup(personName)

    # PHONE NUMBER
    phone = phone_lookup(personName)

    # BIRTHDAY
    bday = bday_pull(personName)

    # GENERATION DELTA
    outputs = gen_delta(personName) # TO DO: change this to be a variable.
    outputs = outputs[2]

    # Partners, marriages, divorces, spouses TO DO: convert this into a function (agnostic?)
    partners = partners_lookup(personName)

    # CHILDREN OF EACH PARTNER
    chitlins = chitlins_lookup(personName)

    # ADDRESS FOR MAP
    address = address_lookup(personName)

    # lookup Partner address
    '''
    if not address:
        partnerName = partner_lookup(personName)[0]['Partner'] # TO DO
    address = address_lookup(partnerName)
    '''

    if address:
        address = address[0];
        address_str = address['street1']+" "+address['city']\
        +" "+address['state']+" "+str(address['postal'])+" "+address['country']
        address_str = spaces(address_str)
    else:
        address = "unfound"
        address_str = "unfound"

    # query BIRTH DATE elements
    DOB1 = db.execute("""
    SELECT
        DOB_year
        ,DOB_month
        ,DOB_day
    FROM persons
    WHERE persons.first_EN IS ?
    """,
    personName)

    DOB_year = DOB1[0]['DOB_year']
    DOB_month = DOB1[0]['DOB_month']
    DOB_day = DOB1[0]['DOB_day']

    # calculate zodiac
    if DOB1[0]['DOB_month']:
        animal = zodiac(DOB_year, DOB_month, DOB_day)
    else:
        animal = ""

    # calculate star sign
    if DOB1[0]['DOB_month']:
        starSign = star_lookup(DOB_year, DOB_month, DOB_day)
    else:
        starSign = ""

    # calculate generation (X, Y, Z)
    if DOB1[0]['DOB_year']:
        generation = gen_lookup(DOB_year)
    else:
        generation = ""

    # BIRTH DATE
    DOB = DOB_pull(personName)

    # calculate age
    age = calc_age(personName)

    # Create QR CODE VCARD
    QR_URL = qr_gen(fullName, email, phone, address, DOB)


    return render_template("profiles.html",
    personName_ = personName, fullName_ = fullName[0],
    CN_Name_ = CN_Name,
    Father_ = Father, Mother_ = Mother,
    dp_img_ = dp_img,
    fullSiblings_ = fullSiblings,
    ofDadHalfSiblings_ = ofDadHalfSiblings,
    ofMomHalfSiblings_ = ofMomHalfSiblings,
    partners_ = partners, chitlins_ = chitlins,
    address_ = address, address_str_ = address_str,
    email_ = email[0], phone_ = phone, QR_URL_ = QR_URL,
    DOB_ = DOB, bday_ = bday, age_ = age, animal_ = animal, starSign_ = starSign, generation_ = generation,
    outputs_ = outputs)

# LOG IN
@app.route("/login", methods=["GET", "POST"])
def login():
    """Log user in"""

    # Forget any user_id
    session.clear()

    # User reached route via POST (as by submitting a form via POST)
    if request.method == "POST":

        # Ensure username was submitted.
        if not request.form.get("username"):
            return apology("must profile username", 403)

        # Ensure password was submited.
        if not request.form.get("password"):
            return apology("must provide password", 403)

        # Query database for username.
        rows = db.execute(
            "SELECT * FROM users WHERE username = ?", request.form.get("username")
        )

        # Ensure username exists and password is correct.
        if len(rows) != 1 or check_password_hash(
            rows[0]["hash"], request.form.get("password")
        ):
            return apology("Invalid username and/or password", 403)

        # Remember which use has logged in.
        session["user_id"] = rows[0]["id"]

        # Redirect user to home page.
        return redirect("/")

    # User reached route via GET (as by clicking a link or via redirect)
    else:
            return render_template("login.html")

# LOG OUT
@app.route("/logout")
def logout():
    """Log user out"""

    # Forget any user_id
    session.clear()

    # Redirect user to login form
    return redirect("/")




# REGISTER
@app.route("/register", methods=["GET", "POST"])
def register():
    """Register user"""

    if request.method == "POST":

        # Ensure username was submitted.
        if not request.form.get("username"):
            return apology("Passwords do not match", 400)

        # Ensure username was submitted.
        if not request.form.get("password") or not request.form.get("confirmation"):
            return apology("Please enter the password twice", 400)

        # Ensure entries in both password fields match.
        if request.form.get("password") != request.form.get("confirmation"):
            return apology("passwords do not match", 400)

        # Query database for username
        # it is assumed that this query will only return one entry (row).
        rows = db.execute(
            "SELECT * FROM users WHERE username = ?", request.form.get("username")
            )

        # If the username already exists in the database.
        # If len(rows) is equal to 1, that means

        if len(rows) == 1:
            return apology("username already exists in database", 400)

        # Write information into database.
        db.execute(
            "INSERT into users (username, hash) VALUES(?, ?)",
            request.form.get("username"),
            generate_password_hash(request.form.get("password"),method='pbkdf2:sha1', salt_length=8))

        # Display the text "You have successfuly Registered."
        flash("You have successfuly Registered!")

        # Redirect user to home page
        return redirect("/")
    else:
        return render_template("register.html")


