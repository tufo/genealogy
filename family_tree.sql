CREATE DATABASE familyTree;


/* CREATE TABLE FOR USERS AND USERNAMES */
CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL
    , username TEXT NOT NULL
    , hash TEXT NOT NULL
    );


/* CREATE TABLE FOR ADDRESSES (MAILING) */
CREATE TABLE addresses (
    personID NUMERIC
    , street1 TEXT
    , street2 TEXT
    , city TEXT
    , state TEXT
    , postal NUMERIC
    , country TEXT
    , Status TEXT
    );

/* CREATE TABLE FOR EMAILS */
CREATE TABLE emails (
    personID NUMERIC
    , email
    , type
    );

/* CREATE TABLE FOR PHONE NUMBERS */
CREATE TABLE phones (
    personID NUMERIC
    , countryCode VARCHAR(3)
    , ph VARCHAR(30)
    , type TEXT
    );

/* CREATE TABLE FOR DISPLAY PHOTOS */
CREATE TABLE DPs (
    personID NUMERIC
    , image TEXT
);


/* CREATE TABLE FOR URLs */
CREATE TABLE URLs (
    personID NUMERIC
    , site TEXT
    , URL TEXT
    );


/* INSERT LOGIN CREDENTIALS INTO TABLE */
INSERT into users (
    username
    ,hash)
VALUES(
    'jon'
    , 'pbkdf2:sha1:600000$Hb7eCSQe$6c2386fb25b9dd91d8f15ab0a131c24bce5e8976');
    -- password: crazies



/* LINE BREAK */

sqlite3 familyTree.db

/* LINE BREAK */
CREATE TABLE persons (
    id INTEGER
    , last_EN TEXT NOT NULL
    , middle_EN TEXT
    , first_EN TEXT NOT NULL
    , sex TEXT
    , DOB DATE
    , DOD DATE
    , DOB_year NUMERIC
    , DOB_month NUMERIC
    , DOB_day NUMERIC
    , DOD_year NUMERIC
    , PRIMARY KEY (id)
);

/* LINE BREAK */
CREATE TABLE users (

);

/* LINE BREAK */
/*
CREATE TABLE sqlite_sequence(name,seq);
CREATE UNIQUE INDEX username ON users (username);
*/


/* LINE BREAK */
CREATE TABLE lineage (
    --id INT
    childID INT NOT NULL
    , parentID INT
);

/* LINE BREAK */
CREATE TABLE partners (
    --id INT NOT NULL,
    partner1_id INT NOT NULL,
    partner2_id INT NOT NULL,
    status TEXT NOT NULL
);

/* LINE BREAK */
-- This script creates the table for chinese names.
CREATE TABLE CN_Names (
    personID INT
    , last_CN TEXT
    , middle_CN TEXT
    , first_CN TEXT
);

/* LINE BREAK */
-- This query looks up the english name.
SELECT
    first_EN
    , middle_EN
    , last_EN
FROM
    persons
WHERE
    first_EN IS 'Virginia'
;

/* LINE BREAK */
-- This query looks up the chinese name.
SELECT
    first_EN
    , last_EN
    , last_CN
    , middle_CN
    , first_CN
FROM CN_Names
JOIN persons
    ON personID = persons.id
WHERE First_EN IS 'Virginia';


/* LINE BREAK */
-- This query shows the each parent (father, mother, adopted parent) in separate rows for a specific child.
SELECT
    Child.First_EN AS Child
    , Parent.First_EN AS Parent
    , Parent.sex AS Parent_sex
    --, CONCAT(father.first_EN, ' ', father.last_EN) AS Father
    --, CONCAT(mother.first_EN, ' ', mother.last_EN) AS Mother
FROM lineage
JOIN persons AS Child
ON lineage.childID = Child.id
JOIN persons AS Parent
ON lineage.parentID = Parent.id
WHERE Child IS 'Virginia'
;


/* LINE BREAK */
-- (continued query)
-- This query shows all the full-siblings of a specific person (OLD)
SELECT
    child.first_EN AS Child
    , father.first_EN AS Father
    , mother.first_EN AS Mother
    , (strftime('%Y', CURRENT_TIMESTAMP) - Child.DOB_year) AS Age
FROM lineage
JOIN persons AS child
    ON childID = child.id
JOIN persons AS father
    ON fatherID = father.id
JOIN persons AS mother
    ON motherID = mother.id
WHERE Father IS (SELECT
                    father.first_EN AS Father
                    FROM lineage
                    JOIN persons AS child
                        ON childID = child.id
                    JOIN persons AS father
                        ON fatherID = father.id
                    WHERE
                        child.first_EN IS 'Joanne'
                )
AND Mother IS (SELECT
                    mother.first_EN AS Mother
                    FROM lineage
                    JOIN persons AS child
                        ON childID = child.id
                    JOIN persons AS mother
                        ON motherID = mother.id
                    WHERE child.first_EN IS 'Joanne'
                )
ORDER BY Age DESC
--AND child.first_EN IS NOT 'Joanne'
;



-- This query shows all the full-siblings of a specific person (works, but not elegant)
SELECT
    father_Table.childID
    , father_Table.parentID AS Father
    , mother_Table.Mother AS Mother
FROM lineage AS father_Table
JOIN (SELECT
    childID
    , parentID AS Mother
    FROM lineage
    WHERE Mother IS (SELECT
                    mother.id
                FROM lineage
                JOIN persons AS child
                ON lineage.childID = child.id
                JOIN persons AS mother
                ON lineage.parentID = mother.id
                WHERE child.first_EN IS 'Chau'
                AND mother.sex = 'F'
                )
    ) AS mother_Table
ON father_Table.childID = mother_Table.childID
WHERE father_Table.parentID IS (SELECT
                    father.id
                FROM lineage
                JOIN persons AS child
                ON lineage.childID = child.id
                JOIN persons AS father
                ON lineage.parentID = father.id
                WHERE child.first_EN IS 'Chau'
                AND father.sex = 'M'
                )
;


-- This query shows all the full-siblings of a specific person (NEW)
-- to change to half-siblings, just add/remove the NOT clause in the WHERE section.

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
AND manID IN (
    SELECT parentID
    FROM lineage
    JOIN persons AS Child
    ON childID = Child.id
    WHERE Child.First_EN = 'Joanne'
    )
AND womanID IN (
    SELECT parentID
    FROM lineage
    JOIN persons AS Child
    ON childID = Child.id
    WHERE Child.First_EN = 'Joanne'
    )
ORDER BY Age DESC
;


-- HALF-SIBLINGS (SAME MOTHER ONLY)
SELECT
    child.first_EN AS Child
    , father.first_EN AS Father
    , mother.first_EN AS Mother
    , (strftime('%Y', CURRENT_TIMESTAMP) - Child.DOB_year) AS Age
FROM lineage
JOIN persons AS child
    ON childID = child.id
JOIN persons AS father
    ON fatherID = father.id
JOIN persons AS mother
    ON motherID = mother.id
WHERE Father IS NOT (SELECT
                    father.first_EN AS Father
                    FROM lineage
                    JOIN persons AS child
                        ON childID = child.id
                    JOIN persons AS father
                        ON fatherID = father.id
                    WHERE
                        child.first_EN IS 'Joanne'
                )
AND Mother IS (SELECT
                    mother.first_EN AS Mother
                    FROM lineage
                    JOIN persons AS child
                        ON childID = child.id
                    JOIN persons AS mother
                        ON motherID = mother.id
                    WHERE child.first_EN IS 'Joanne'
                )
ORDER BY Age DESC
--AND child.first_EN IS NOT 'Joanne'
;

-- HALF-SIBLINGS (SAME FATHER ONLY)
SELECT
    child.first_EN AS Child
    , father.first_EN AS Father
    , mother.first_EN AS Mother
    , (strftime('%Y', CURRENT_TIMESTAMP) - Child.DOB_year) AS Age
FROM lineage
JOIN persons AS child
    ON childID = child.id
JOIN persons AS father
    ON fatherID = father.id
JOIN persons AS mother
    ON motherID = mother.id
WHERE Father IS (SELECT
                    father.first_EN AS Father
                    FROM lineage
                    JOIN persons AS child
                        ON childID = child.id
                    JOIN persons AS father
                        ON fatherID = father.id
                    WHERE
                        child.first_EN IS 'Joanne'
                )
AND Mother IS NOT (SELECT
                    mother.first_EN AS Mother
                    FROM lineage
                    JOIN persons AS child
                        ON childID = child.id
                    JOIN persons AS mother
                        ON motherID = mother.id
                    WHERE child.first_EN IS 'Joanne'
                )
ORDER BY Age DESC
--AND child.first_EN IS NOT 'Joanne'
;





-- This query shows all the children (i.e. siblings) of a specific parent (mother).

SELECT
    child.first_EN AS Child
    , mother.first_EN AS Mother
FROM lineage
JOIN persons AS child
    ON childID = child.id
JOIN persons AS mother
    ON motherID = mother.id
WHERE Mother IS (SELECT
                    mother.first_EN AS Mother
                    FROM lineage
                    JOIN persons AS child
                        ON childID = child.id
                    JOIN persons AS mother
                        ON motherID = mother.id
                    WHERE child.first_EN IS /*INPUT*/ 'Virginia'
                )
        AND child.first_EN IS NOT 'Virginia'
;

-- This is a generic query showing all the children of a specific individual.
SELECT
    child.first_EN AS Child
    , mother.first_EN AS Mother
    , father.first_EN AS Father
FROM lineage
JOIN persons AS child
    ON childID = child.id
JOIN persons AS mother
    ON motherID = mother.id
JOIN persons AS father
    ON fatherID = father.id
WHERE father.first_EN IS 'Virginia'
OR mother.first_EN IS 'Virginia'
;

/* LINE BREAK */
-- PARTNERS & THEIR CHILDREN (OLD)
-- CHILDREN WITH A SPECIFIC SPOUSE
-- UNION TEST (APPEND TWO TABLES TOGETHER)
-- This is a generic query showing all the children of a specific individual and of a specific partner.
SELECT
    Parent
    , Child
FROM(
    SELECT
        child.first_EN AS Child
        , mother.first_EN AS Parent
    FROM lineage
    JOIN persons AS child
        ON childID = child.id
    JOIN persons AS mother
        ON motherID = mother.id
    JOIN persons AS father
        ON fatherID = father.id
    WHERE father.first_EN IS 'Virginia'
    OR mother.first_EN IS 'Virginia'

    UNION

    SELECT
        child.first_EN AS Child
        , father.first_EN AS Parent
    FROM lineage
    JOIN persons AS child
        ON childID = child.id
    JOIN persons AS mother
        ON motherID = mother.id
    JOIN persons AS father
        ON fatherID = father.id
    WHERE father.first_EN IS 'Virginia'
    OR mother.first_EN IS 'Virginia'
    )
WHERE Parent IS NOT 'Virginia' --INPUT for the MAIN person
--AND Parent IS 'Imad' --INPUT for the OTHER partner
;

-- PARTNERS & THEIR CHILDREN (NEW)
-- chitlins
-- using the parent (virginia), return a list of all their children.

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
        WHERE parent.first_EN = 'Virginia'
    )
AND Parent IS NOT 'Virginia'
ORDER BY Age DESC
;


/* LINE BREAK */
-- This query calculates and sorts the ages of the members of the persons table.
--strftime(format, datetimestring, [modifier1,modifier2…,modifier])
SELECT
    first_EN
    , (strftime('%Y', CURRENT_TIMESTAMP) - DOB_year) AS Age
FROM persons
-- This filter excludes entries with missing birth dates.
--WHERE Age != CAST(strftime('%Y', CURRENT_TIMESTAMP) AS INT)
ORDER BY Age DESC
;


/*
*/

-- (OLD)
-- This query calculates the ages of the people in the persons table for directory.html
-- It takes into account the deceased.
-- DOB year is known, DOD is empty.
SELECT
    *
    ,(strftime('%Y', CURRENT_TIMESTAMP) - DOB_year) AS Age
FROM persons
WHERE DOD_year IS ''
AND DOB_year IS NOT ''
UNION
-- DOB year is known, DOD is known.
SELECT
    *
    ,(DOD_year - DOB_year) AS Age
FROM persons
WHERE DOD_year IS NOT ''
UNION
-- DOB not known.
SELECT
    *
    , '' AS Age
FROM persons
WHERE DOB_year IS ''
;



-- query for directory.html (NEW)
SELECT
    *
    --,(strftime('%Y', CURRENT_TIMESTAMP) - DOB_year) AS Age
    ,round((julianday('now') - julianday(DOB))/365.25,1) AS Age
    ,(strftime('%m', DOB)) AS DOBMonth
    ,(strftime('%d', DOB)) AS DOBDay
FROM persons
WHERE DOD_year IS ''
AND DOB_year IS NOT ''
UNION
-- DOB year is known, DOD is known.
SELECT
    *
    --,(DOD_year - DOB_year) AS Age
    ,(DOD_year - (strftime('%Y',DOB))) AS Age
    ,(strftime('%m', DOB)) AS DOBMonth
    ,(strftime('%d', DOB)) AS DOBDay
FROM persons
WHERE DOD_Year IS NOT ''
UNION
-- DOB not known.
SELECT
    *
    ,'' AS Age
    ,'' AS DOBMonth
    ,'' AS DOBDay
FROM persons
WHERE DOB_year IS ''
;




-- QUERY FOR EXPANDED DIRECTORY.HTML TABLE (WIP)

SELECT
    persons.id
    --,(strftime('%Y', CURRENT_TIMESTAMP) - DOB_year) AS Age
    ,persons.last_EN
    ,persons.middle_EN
    ,persons.first_EN
    ,persons.sex
    ,persons.DOB
    ,persons.DOD
    ,persons.DOB_year
    ,persons.DOB_month
    ,persons.DOB_day
    ,persons.DOD_year
    ,round((julianday('now') - julianday(DOB))/365.25,1) AS Age
    ,(strftime('%m', DOB)) AS DOBMonth
    ,(strftime('%d', DOB)) AS DOBDay
    ,concat(CN_Names.last_CN, CN_Names.middle_CN, CN_Names.first_CN) AS CN
    /*
    ,phones.ph
    ,emails.email
    ,addresses.street1
    ,addresses.city
    ,addresses.state
    ,addresses.postal
    ,addresses.country
    */
FROM persons
JOIN CN_Names
ON persons.id = CN_Names.personID
/*JOIN phones
ON persons.id = phones.personID
JOIN emails
ON persons.id = emails.personID
JOIN addresses
ON persons.id = addresses.personID
*/
WHERE DOD_year IS ''
AND DOB_year IS NOT ''
;
/**/


/* LINE BREAK */
-- This query shows the partners table.
SELECT DISTINCT
    Partner1.first_EN AS Partner1
    , Partner2.first_EN AS Partner2
    --, status
FROM partners
JOIN persons AS Partner1
    ON partner1_id = Partner1.id
JOIN persons AS Partner2
    ON partner2_id = Partner2.id
WHERE Partner1 IS 'Virginia'
;

-- This query shows the partners but assigned the in-law to be in the Partner1 column.
SELECT DISTINCT
    Partner1.first_EN AS Partner1
    , Partner2.first_EN AS Partner2
    --, status
FROM partners
JOIN persons AS Partner2
    ON partner1_id = Partner2.id
JOIN persons AS Partner1
    ON partner2_id = Partner1.id
WHERE Partner1 IS 'Imad'
;


/* LINE BREAK */
-- This query shows the marriage/divorce history for a specific individual.
-- TO DO



/* LINE BREAK */
-- This query looks up the address.
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
AND first_EN = 'Jason'
;

/* LINE BREAK */
-- This query looks up the email.
SELECT email
FROM emails
JOIN persons
ON emails.personID = persons.id
WHERE first_EN IS 'Melissa'
;
    ,
/* LINE BREAK */
-- This query looks up the phone number.
SELECT countryCode, ph
FROM phones
JOIN persons
ON phones.personID = persons.id
WHERE first_EN IS 'Joanne'
;

/* LINE BREAK */
-- This query looks up the URL for the Display photo.
SELECT image
FROM DPs
JOIN persons
ON DPs.personID = persons.id
WHERE first_EN = 'Joanne'
;

/* LINE BREAK */
-- This query looks up birth date.
SELECT
    DOB_year
    ,DOB_month
    ,DOB_day
FROM persons
WHERE persons.first_EN IS 'Joanne'
;


/* LINE BREAK */
DROP TABLE persons;

/* LINE BREAK */
DELETE FROM persons;

/* LINE BREAK */
SELECT *
FROM persons
;

SELECT *
FROM lineage
;



-- This query is for the ancestor tracing python function.
SELECT
    parent.first_EN
    --, child.first_EN
FROM lineage
JOIN persons as child
ON lineage.childID = child.id
JOIN persons as parent
ON lineage.parentID = parent.id
WHERE child.first_EN = "Virginia"
AND lineage.parentID
    IN (SELECT
    partner1_id
    FROM partners
    )
;



-- This query orders the birth order of the siblings coming from the main bloodline.

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
                WHERE Child.first_EN = 'Henry'
                )
            )
    )
WHERE first_EN IS 'Henry'
;


-- determine if their address can be found. if no...
-- find if they have a spouse. if yes, look up their spouse. if no...
-- find if they are under 18. if yes, look up their bloodline parent.


-- [x] determine if their address can be found. if no...

-- find if they have a spouse. if yes, look up their spouse. if no...
SELECT
    Partner1.first_EN AS Partner1
    , Partner2.first_EN AS Partner2
    , status
FROM partners
JOIN persons AS Partner1
    ON partner1_id = Partner1.id
JOIN persons AS Partner2
    ON partner2_id = Partner2.id
WHERE (Partner1 IS 'Greg' AND status IS 'Active')
OR (Partner2 IS 'Greg' AND status IS 'Active')
;


-- This query manipulates the results of the partner table to return a single value, which is the partner of the input person, regardless of bloodline affiliation.

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
    WHERE Partner1 IS 'Virginia' AND status IS 'Active'
    OR Partner2 IS 'Virginia' AND status IS 'Active'
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
    WHERE Partner1 IS 'Virginia' AND status IS 'Active'
    OR Partner2 IS 'Virginia' AND status IS 'Active'
    )
WHERE Partner1 IS NOT 'Virginia'
;

-- find if they are under 18. if yes, look up their bloodline parent.



-- birth day formatting (WIP)



-- FB IG URLs
SELECT
    persons.first_EN
    ,FB.URL AS FB
    ,IG.URL AS IG
FROM persons
FULL JOIN (SELECT * FROM URLs WHERE URLs.site = 'facebook') FB
ON FB.personID = persons.id
FULL JOIN (SELECT * FROM URLs WHERE URLs.site = 'instagram') IG
ON IG.personID = persons.id
;
