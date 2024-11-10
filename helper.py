import requests

from flask import redirect, render_template, session
from functools import wraps


# APOLOGY
def apology(message, code=400):
    """Render message as an apology to user."""

    def escape(s):
        """
        Escape special characters.

        https://github.com/jacebrowning/memegen#special-characters
        """
        for old, new in [
            ("-", "--"),
            (" ", "-"),
            ("_", "__"),
            ("?", "~q"),
            ("%", "~p"),
            ("#", "~h"),
            ("/", "~s"),
            ('"', "''"),
        ]:
            s = s.replace(old, new)
        return s

    return render_template("apology.html", top=code, bottom=escape(message)), code


# LOGIN FUNCTION
def login_required(f):
    """
    Decorate routes to require login.

    https://flask.palletsprojects.com/en/latest/patterns/viewdecorators/
    """

    @wraps(f)
    def decorated_function(*args, **kwargs):
        if session.get("user_id") is None:
            return redirect("/login")
        return f(*args, **kwargs)

    return decorated_function

# FUNCTION: generation lookup
def gen_lookup(DOB_year):

    gen_dict = [
    {"Gen": "GI", "Start": 1901, "End":1927},
    {"Gen": "Silent", "Start": 1928, "End":1945},
    {"Gen": "Boomer", "Start": 1946, "End":1964},
    {"Gen": "Gen X", "Start": 1965, "End":1980},
    {"Gen": "Gen Y", "Start": 1981, "End":1996},
    {"Gen": "Gen Z", "Start": 1997, "End":2012},
    {"Gen": "Gen A", "Start": 2010, "End":2024},
    {"Gen": "Gen B", "Start": 2025, "End":2039}
    ]

    found = False
    generation = ""
    for n in range(len(gen_dict)):
        if DOB_year >= gen_dict[n]['Start'] and DOB_year <= gen_dict[n]['End']:
            found = True
            generation = gen_dict[n]['Gen']
            break
    return generation

# FUNCTION: star sign lookup
from datetime import date
def star_lookup(DOB_year, DOB_month, DOB_day):

    birthdate = date(DOB_year, DOB_month, DOB_day)

    difference = birthdate - date(DOB_year, 1, 1)
    difference = difference.days + 1


    star_dict = [
        {
        "sign": "♈︎ aries",
        "start": 80,
        "end": 110
        },
        {
        "sign": "♉︎ taurus",
        "start": 111,
        "end": 141
        },
        {
        "sign": "♊︎ gemini",
        "start": 142,
        "end": 172
        },
        {
        "sign": "♋︎ cancer",
        "start": 173,
        "end": 204
        },
        {
        "sign": "♌︎ leo",
        "start": 205,
        "end": 235
        },
        {
        "sign": "♍︎ virgo",
        "start": 236,
        "end": 266
        },
        {
        "sign": "♎︎ libra",
        "start": 267,
        "end": 296
        },
        {
        "sign": "♏︎ scorpio",
        "start": 297,
        "end": 326
        },
        {
        "sign": "♐︎ sagittarius",
        "start": 327,
        "end": 356
        },
        {
        "sign": "♑︎ capricorn",
        "start": 357,
        "end": 366
        },
        {
        "sign": "♑︎ capricorn",
        "start": 1,
        "end": 19
        },
        {
        "sign": "♒︎ aquarius",
        "start": 20,
        "end": 49
        },
        {
        "sign": "♓︎ pisces",
        "start": 50,
        "end": 79
        },
    ]

    found = False
    starSign = ""
    for n in range(len(star_dict)):
        if difference >= star_dict[n]['start'] and difference <= star_dict[n]['end']:
            found = True
            starSign = star_dict[n]['sign']
            break

    return starSign



# FUNCTION: zodiac dictionary and lookup
from datetime import date
import math

def zodiac(DOB_year, DOB_month, DOB_day):


    # Animal lookup table
    animal_chart = [
    {'combo': '0', 'animal': ' 鼠 木 🐭 🪵'},
    {'combo': '1', 'animal': ' 牛 木 🐮 🪵'},
    {'combo': '2', 'animal': ' 虎 火 🐯 🔥'},
    {'combo': '3', 'animal': ' 兔 火 🐰 🔥'},
    {'combo': '4', 'animal': ' 龍 土 🐲 🪨'},
    {'combo': '5', 'animal': ' 蛇 土 🐍 🪨'},
    {'combo': '6', 'animal': ' 馬 金 🐴 ㊎'},
    {'combo': '7', 'animal': ' 羊 金 🐑 ㊎'},
    {'combo': '8', 'animal': ' 猴 水 🐵 💧'},
    {'combo': '9', 'animal': ' 雞 水 🐔 💧'},
    {'combo': '10', 'animal': ' 狗 木 🐶 🪵'},
    {'combo': '11', 'animal': ' 豬 木 🐷 🪵'},
    {'combo': '12', 'animal': ' 鼠 火 🐭 🔥'},
    {'combo': '13', 'animal': ' 牛 火 🐮 🔥'},
    {'combo': '14', 'animal': ' 虎 土 🐯 🪨'},
    {'combo': '15', 'animal': ' 兔 土 🐰 🪨'},
    {'combo': '16', 'animal': ' 龍 金 🐲 ㊎'},
    {'combo': '17', 'animal': ' 蛇 金 🐍 ㊎'},
    {'combo': '18', 'animal': ' 馬 水 🐴 💧'},
    {'combo': '19', 'animal': ' 羊 水 🐑 💧'},
    {'combo': '20', 'animal': ' 猴 木 🐵 🪵'},
    {'combo': '21', 'animal': ' 雞 木 🐔 🪵'},
    {'combo': '22', 'animal': ' 狗 火 🐶 🔥'},
    {'combo': '23', 'animal': ' 豬 火 🐷 🔥'},
    {'combo': '24', 'animal': ' 鼠 土 🐭 🪨'},
    {'combo': '25', 'animal': ' 牛 土 🐮 🪨'},
    {'combo': '26', 'animal': ' 虎 金 🐯 ㊎'},
    {'combo': '27', 'animal': ' 兔 金 🐰 ㊎'},
    {'combo': '28', 'animal': ' 龍 水 🐲 💧'},
    {'combo': '29', 'animal': ' 蛇 水 🐍 💧'},
    {'combo': '30', 'animal': ' 馬 木 🐴 🪵'},
    {'combo': '31', 'animal': ' 羊 木 🐑 🪵'},
    {'combo': '32', 'animal': ' 猴 火 🐵 🔥'},
    {'combo': '33', 'animal': ' 雞 火 🐔 🔥'},
    {'combo': '34', 'animal': ' 狗 土 🐶 🪨'},
    {'combo': '35', 'animal': ' 豬 土 🐷 🪨'},
    {'combo': '36', 'animal': ' 鼠 金 🐭 ㊎'},
    {'combo': '37', 'animal': ' 牛 金 🐮 ㊎'},
    {'combo': '38', 'animal': ' 虎 水 🐯 💧'},
    {'combo': '39', 'animal': ' 兔 水 🐰 💧'},
    {'combo': '40', 'animal': ' 龍 木 🐲 🪵'},
    {'combo': '41', 'animal': ' 蛇 木 🐍 🪵'},
    {'combo': '42', 'animal': ' 馬 火 🐴 🔥'},
    {'combo': '43', 'animal': ' 羊 火 🐑 🔥'},
    {'combo': '44', 'animal': ' 猴 土 🐵 🪨'},
    {'combo': '45', 'animal': ' 雞 土 🐔 🪨'},
    {'combo': '46', 'animal': ' 狗 金 🐶 ㊎'},
    {'combo': '47', 'animal': ' 豬 金 🐷 ㊎'},
    {'combo': '48', 'animal': ' 鼠 水 🐭 💧'},
    {'combo': '49', 'animal': ' 牛 水 🐮 💧'},
    {'combo': '50', 'animal': ' 虎 木 🐯 🪵'},
    {'combo': '51', 'animal': ' 兔 木 🐰 🪵'},
    {'combo': '52', 'animal': ' 龍 火 🐲 🔥'},
    {'combo': '53', 'animal': ' 蛇 火 🐍 🔥'},
    {'combo': '54', 'animal': ' 馬 土 🐴 🪨'},
    {'combo': '55', 'animal': ' 羊 土 🐑 🪨'},
    {'combo': '56', 'animal': ' 猴 金 🐵 ㊎'},
    {'combo': '57', 'animal': ' 雞 金 🐔 ㊎'},
    {'combo': '58', 'animal': ' 狗 水 🐶 💧'},
    {'combo': '59', 'animal': ' 豬 水 🐷 💧'},
    ]

    # Zodiac Dictionary 0
    zodiac_dict0 = [
    {'index': '0', 'start': 1, 'end': 354},
    {'index': '1', 'start': 355, 'end': 738},
    {'index': '2', 'start': 739, 'end': 1093},
    {'index': '3', 'start': 1094, 'end': 1447},
    {'index': '4', 'start': 1448, 'end': 1830},
    {'index': '5', 'start': 1831, 'end': 2184},
    {'index': '6', 'start': 2185, 'end': 2568},
    {'index': '7', 'start': 2569, 'end': 2923},
    {'index': '8', 'start': 2924, 'end': 3278},
    {'index': '9', 'start': 3279, 'end': 3662},
    {'index': '10', 'start': 3663, 'end': 4016},
    {'index': '11', 'start': 4017, 'end': 4370},
    {'index': '12', 'start': 4371, 'end': 4754},
    {'index': '13', 'start': 4755, 'end': 5108},
    {'index': '14', 'start': 5109, 'end': 5462},
    {'index': '15', 'start': 5463, 'end': 5846},
    {'index': '16', 'start': 5847, 'end': 6201},
    {'index': '17', 'start': 6202, 'end': 6585},
    {'index': '18', 'start': 6586, 'end': 6940},
    {'index': '19', 'start': 6941, 'end': 7294},
    {'index': '20', 'start': 7295, 'end': 7678},
    {'index': '21', 'start': 7679, 'end': 8032},
    {'index': '22', 'start': 8033, 'end': 8386},
    {'index': '23', 'start': 8387, 'end': 8770},
    {'index': '24', 'start': 8771, 'end': 9124},
    {'index': '25', 'start': 9125, 'end': 9479},
    {'index': '26', 'start': 9480, 'end': 9863},
    {'index': '27', 'start': 9864, 'end': 10218},
    {'index': '28', 'start': 10219, 'end': 10602},
    {'index': '29', 'start': 10603, 'end': 10956},
    {'index': '30', 'start': 10957, 'end': 11310},
    {'index': '31', 'start': 11311, 'end': 11693},
    {'index': '32', 'start': 11694, 'end': 12048},
    {'index': '33', 'start': 12049, 'end': 12402},
    {'index': '34', 'start': 12403, 'end': 12786},
    {'index': '35', 'start': 12787, 'end': 13141},
    {'index': '36', 'start': 13142, 'end': 13525},
    {'index': '37', 'start': 13526, 'end': 13879},
    {'index': '38', 'start': 13880, 'end': 14234},
    {'index': '39', 'start': 14235, 'end': 14617},
    {'index': '40', 'start': 14618, 'end': 14971},
    {'index': '41', 'start': 14972, 'end': 15326},
    {'index': '42', 'start': 15327, 'end': 15710},
    {'index': '43', 'start': 15711, 'end': 16064},
    {'index': '44', 'start': 16065, 'end': 16419},
    {'index': '45', 'start': 16420, 'end': 16803},
    {'index': '46', 'start': 16804, 'end': 17157},
    {'index': '47', 'start': 17158, 'end': 17541},
    {'index': '48', 'start': 17542, 'end': 17895},
    {'index': '49', 'start': 17896, 'end': 18249},
    {'index': '50', 'start': 18250, 'end': 18633},
    {'index': '51', 'start': 18634, 'end': 18987},
    {'index': '52', 'start': 18988, 'end': 19342},
    {'index': '53', 'start': 19343, 'end': 19726},
    {'index': '54', 'start': 19727, 'end': 20081},
    {'index': '55', 'start': 20082, 'end': 20465},
    {'index': '56', 'start': 20466, 'end': 20819},
    {'index': '57', 'start': 20820, 'end': 21173},
    {'index': '58', 'start': 21174, 'end': 21557},
    {'index': '59', 'start': 21558, 'end': 21911}
    ]

    # Zodiac Dictionary 1
    zodiac_dict1 = [
    {'index': '0', 'start': 1, 'end': 354},
    {'index': '1', 'start': 355, 'end': 739},
    {'index': '2', 'start': 740, 'end': 1093},
    {'index': '3', 'start': 1094, 'end': 1448},
    {'index': '4', 'start': 1449, 'end': 1832},
    {'index': '5', 'start': 1833, 'end': 2186},
    {'index': '6', 'start': 2187, 'end': 2569},
    {'index': '7', 'start': 2570, 'end': 2923},
    {'index': '8', 'start': 2924, 'end': 3278},
    {'index': '9', 'start': 3279, 'end': 3662},
    {'index': '10', 'start': 3663, 'end': 4017},
    {'index': '11', 'start': 4018, 'end': 4371},
    {'index': '12', 'start': 4372, 'end': 4755},
    {'index': '13', 'start': 4756, 'end': 5109},
    {'index': '14', 'start': 5110, 'end': 5493},
    {'index': '15', 'start': 5494, 'end': 5847},
    {'index': '16', 'start': 5848, 'end': 6201},
    {'index': '17', 'start': 6202, 'end': 6585},
    {'index': '18', 'start': 6586, 'end': 6940},
    {'index': '19', 'start': 6941, 'end': 7294},
    {'index': '20', 'start': 7295, 'end': 7679},
    {'index': '21', 'start': 7680, 'end': 8033},
    {'index': '22', 'start': 8034, 'end': 8387},
    {'index': '23', 'start': 8388, 'end': 8771},
    {'index': '24', 'start': 8772, 'end': 9125},
    {'index': '25', 'start': 9126, 'end': 9509},
    {'index': '26', 'start': 9510, 'end': 9863},
    {'index': '27', 'start': 9864, 'end': 10218},
    {'index': '28', 'start': 10219, 'end': 10602},
    {'index': '29', 'start': 10603, 'end': 10956},
    {'index': '30', 'start': 10957, 'end': 11311},
    {'index': '31', 'start': 11312, 'end': 11695},
    {'index': '32', 'start': 11696, 'end': 12049},
    {'index': '33', 'start': 12050, 'end': 12432},
    {'index': '34', 'start': 12433, 'end': 12787},
    {'index': '35', 'start': 12788, 'end': 13141},
    {'index': '36', 'start': 13142, 'end': 13525},
    {'index': '37', 'start': 13526, 'end': 13880},
    {'index': '38', 'start': 13881, 'end': 14234},
    {'index': '39', 'start': 14235, 'end': 14618},
    {'index': '40', 'start': 14619, 'end': 14973},
    {'index': '41', 'start': 14974, 'end': 15326},
    {'index': '42', 'start': 15327, 'end': 15710},
    {'index': '43', 'start': 15711, 'end': 16065},
    {'index': '44', 'start': 16066, 'end': 16449},
    {'index': '45', 'start': 16450, 'end': 16803},
    {'index': '46', 'start': 16804, 'end': 17158},
    {'index': '47', 'start': 17159, 'end': 17542},
    {'index': '48', 'start': 17543, 'end': 17896},
    {'index': '49', 'start': 17897, 'end': 18250},
    {'index': '50', 'start': 18251, 'end': 18634},
    {'index': '51', 'start': 18635, 'end': 18988},
    {'index': '52', 'start': 18989, 'end': 19372},
    {'index': '53', 'start': 19373, 'end': 19726},
    {'index': '54', 'start': 19727, 'end': 20081},
    {'index': '55', 'start': 20082, 'end': 20465},
    {'index': '56', 'start': 20466, 'end': 20820},
    {'index': '57', 'start': 20821, 'end': 21174},
    {'index': '58', 'start': 21175, 'end': 21558},
    {'index': '59', 'start': 21559, 'end': 21912}
    ]
    # Zodiac Dictionary 2
    zodiac_dict2 = [
    {'index': '0', 'start': 1, 'end': 384},
    {'index': '1', 'start': 385, 'end': 738},
    {'index': '2', 'start': 739, 'end': 1092},
    {'index': '3', 'start': 1093, 'end': 1476},
    {'index': '4', 'start': 1477, 'end': 1831},
    {'index': '5', 'start': 1832, 'end': 2186},
    {'index': '6', 'start': 2187, 'end': 2570},
    {'index': '7', 'start': 2571, 'end': 2924},
    {'index': '8', 'start': 2925, 'end': 3278},
    {'index': '9', 'start': 3279, 'end': 3661},
    {'index': '10', 'start': 3662, 'end': 4016},
    {'index': '11', 'start': 4017, 'end': 4400},
    {'index': '12', 'start': 4401, 'end': 4754},
    {'index': '13', 'start': 4755, 'end': 5109},
    {'index': '14', 'start': 5110, 'end': 5493},
    {'index': '15', 'start': 5494, 'end': 5847},
    {'index': '16', 'start': 5848, 'end': 6201},
    {'index': '17', 'start': 6202, 'end': 6585},
    {'index': '18', 'start': 6586, 'end': 6939},
    {'index': '19', 'start': 6940, 'end': 7294},
    {'index': '20', 'start': 7295, 'end': 7678},
    {'index': '21', 'start': 7679, 'end': 8032},
    {'index': '22', 'start': 8033, 'end': 8417},
    {'index': '23', 'start': 8418, 'end': 8771},
    {'index': '24', 'start': 8772, 'end': 9125},
    {'index': '25', 'start': 9126, 'end': 9509},
    {'index': '26', 'start': 9510, 'end': 9863},
    {'index': '27', 'start': 9864, 'end': 10217},
    {'index': '28', 'start': 10218, 'end': 10601},
    {'index': '29', 'start': 10602, 'end': 10956},
    {'index': '30', 'start': 10957, 'end': 11340},
    {'index': '31', 'start': 11341, 'end': 11694},
    {'index': '32', 'start': 11695, 'end': 12049},
    {'index': '33', 'start': 12050, 'end': 12433},
    {'index': '34', 'start': 12434, 'end': 12787},
    {'index': '35', 'start': 12788, 'end': 13141},
    {'index': '36', 'start': 13142, 'end': 13525},
    {'index': '37', 'start': 13526, 'end': 13879},
    {'index': '38', 'start': 13880, 'end': 14234},
    {'index': '39', 'start': 14235, 'end': 14618},
    {'index': '40', 'start': 14619, 'end': 14972},
    {'index': '41', 'start': 14973, 'end': 15356},
    {'index': '42', 'start': 15357, 'end': 15710},
    {'index': '43', 'start': 15711, 'end': 16064},
    {'index': '44', 'start': 16065, 'end': 16448},
    {'index': '45', 'start': 16449, 'end': 16803},
    {'index': '46', 'start': 16804, 'end': 17157},
    {'index': '47', 'start': 17158, 'end': 17541},
    {'index': '48', 'start': 17542, 'end': 17896},
    {'index': '49', 'start': 17897, 'end': 18280},
    {'index': '50', 'start': 18281, 'end': 18634},
    {'index': '51', 'start': 18635, 'end': 18988},
    {'index': '52', 'start': 18989, 'end': 19372},
    {'index': '53', 'start': 19373, 'end': 19726},
    {'index': '54', 'start': 19727, 'end': 20080},
    {'index': '55', 'start': 20081, 'end': 20464},
    {'index': '56', 'start': 20465, 'end': 20819},
    {'index': '57', 'start': 20820, 'end': 21174},
    {'index': '58', 'start': 21175, 'end': 21558},
    {'index': '59', 'start': 21559, 'end': 21912}
    ]

    sexagenary0_start = date(1864,2,8)
    sexagenary0_end = date(1924,2,4)

    sexagenary1_start = date(1924,2,5)
    sexagenary1_end = date(1984,2,1)

    sexagenary2_start = date(1984,2,2)
    sexagenary2_end = date(2044,1,29)

    birthday = date(DOB_year, DOB_month, DOB_day)

    # print("DOB: " + str(birthday) + " " + str(diff))

    # if born between 1864-02-05 - 1924-02-04, use zodiac_dict0
    if (birthday >= sexagenary0_start and birthday <= sexagenary0_end):
        zodiac_dict = zodiac_dict0
        sexagenary_start = sexagenary0_start

    # if born between 1924-02-05 - 1983-02-01, use zodiac_dict1
    elif (birthday >= sexagenary1_start and birthday <= sexagenary1_end):
        zodiac_dict = zodiac_dict1
        sexagenary_start = sexagenary1_start

    # if born bewteen 1984-02-02 - 2044-01-29, use zodiac_dict2
    elif (birthday >= sexagenary2_start and birthday <= sexagenary2_end):
        zodiac_dict = zodiac_dict2
        sexagenary_start = sexagenary2_start
    else:
        animal = ""
        return animal

    diff = (birthday - sexagenary_start).days

    index = int(zodiac_lookup(zodiac_dict, diff))

    animal = animal_chart[index]['animal']

    return animal

# FUNCTION: zodiac scan through all ranges
def zodiac_lookup(zodiac_dict,diff):
    found = False

    # initialize values.
    A = 0
    Z = 59
    counter = 0

    while(found == False):

        gap = Z - A # overwrite the founded gap value for the next cycle.
        gap = gap * 0.5 # (/2) might behave differently than (*0.5).


        """
        print("A before: " + str(A))
        print("Z before: " + str(Z))
        print("Z - A: " + str(Z - A))
        print("gap floor: " + str(math.floor(gap)))
        print("gap: " + str(gap))
        print("gap ceil: " + str(math.ceil(gap)))
        print(" ")
        """

        if counter == 12:
            break

        if (gap > 0.5):

            # Test Case 1: 1st half
            A1 = A
            Z1 = Z - math.floor(gap) # this one rounds up, so the other needs to round down.

            # Test Case 2: latter half
            A2 = A + math.ceil(gap)
            Z2 = Z

            if (diff >= zodiac_dict[A1]['start'] and diff <= zodiac_dict[Z1]['end']): # test to see if it is within the 1st half
                A = A1
                Z = Z1

            else:  # if the previous test failed, assume the latter half was the correct half.
                A = A2
                Z = Z2

        else: # if gap <= 1

            # Test Case 1
            A1 = A
            Z1 = A

            # Test Case 2
            A2 = Z
            Z2 = Z

            if (diff >= zodiac_dict[A1]['start'] and diff <= zodiac_dict[Z1]['end']):
                result = zodiac_dict[A]['index']
                found = True
            else: # if previous test failed, assume the latter range was the correct range.
                A = Z
                Z = Z
                result = zodiac_dict[Z]['index']
                found = True

        A1 = ""
        Z1 = ""
        A2 = ""
        Z2 = ""

        counter += 1

        """
        print("A after: " + str(A))
        print("Z after: " + str(Z))
        print("counter: " + str(counter))
        print("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
        """

    return result


# FUNCTION: QR Code VCARD generator

def qr_gen(fullName, email, phone, address, DOB):

    firstName = fullName[0]['first_EN']
    middleName = fullName[0]['middle_EN']
    lastName = fullName[0]['last_EN']

    if email == "unfound":
        email = ""
    else:
        email = email[0]['email']

    tel = phone

    if address == "unfound":
        adr_street1 = ""
        adr_street2 = ""
        adr_city = ""
        adr_state = ""
        adr_postal = ""
        adr_country = ""
    else:
        adr_street1 = address['street1']
        adr_street2 = ""
        adr_city = address['city']
        adr_state = address['state']
        adr_postal = address['postal']
        adr_country = address['country']

    DOB = DOB.replace("-", "")

    contents = f"""
    BEGIN:VCARD
    VERSION:4.0
    N:{lastName};{firstName};{middleName}
    FN:Displayname
    URL:
    EMAIL:{email}
    TEL;TYPE=voice,phone,pref:{tel}
    ADR;TYPE=intl,home,postal,parcel:;;{adr_street1};{adr_city};{adr_state};{adr_postal};{adr_country}
    BDAY:{DOB}
    END:VCARD
    """

    contents = contents.replace("    ", "") # for some reason a chunk of spaces are created when populating the f-string. using this workaround to fix it.
    contents = contents.replace(" ", "%20")
    contents = contents.replace("+", "%2B")
    contents = contents.replace("\n", "%0A")
    contents = contents.replace(":", "%3A")
    contents = contents.replace(";", "%3B")
    contents = contents.replace("@", "%40")
    contents = contents.replace("/", "%2F")

    QR_URL = "https://quickchart.io/qr?text=" + contents

    return QR_URL
