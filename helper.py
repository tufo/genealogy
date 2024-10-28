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


    # Zodiac Dictionary 0
    zodiac_dict0 = [
    {'animal': '01 鼠 木 🐭 🪵', 'start': 1, 'end': 354},
    {'animal': '02 牛 木 🐮 🪵', 'start': 355, 'end': 738},
    {'animal': '03 虎 火 🐯 🔥', 'start': 739, 'end': 1093},
    {'animal': '04 兔 火 🐰 🔥', 'start': 1094, 'end': 1447},
    {'animal': '05 龍 土 🐲 🪨', 'start': 1448, 'end': 1830},
    {'animal': '06 蛇 土 🐍 🪨', 'start': 1831, 'end': 2184},
    {'animal': '07 馬 金 🐴 ㊎', 'start': 2185, 'end': 2568},
    {'animal': '08 羊 金 🐑 ㊎', 'start': 2569, 'end': 2923},
    {'animal': '09 猴 水 🐵 💧', 'start': 2924, 'end': 3278},
    {'animal': '10 雞 水 🐔 💧', 'start': 3279, 'end': 3662},
    {'animal': '11 狗 木 🐶 🪵', 'start': 3663, 'end': 4016},
    {'animal': '12 豬 木 🐷 🪵', 'start': 4017, 'end': 4370},
    {'animal': '01 鼠 火 🐭 🔥', 'start': 4371, 'end': 4754},
    {'animal': '02 牛 火 🐮 🔥', 'start': 4755, 'end': 5108},
    {'animal': '03 虎 土 🐯 🪨', 'start': 5109, 'end': 5462},
    {'animal': '04 兔 土 🐰 🪨', 'start': 5463, 'end': 5846},
    {'animal': '05 龍 金 🐲 ㊎', 'start': 5847, 'end': 6201},
    {'animal': '06 蛇 金 🐍 ㊎', 'start': 6202, 'end': 6585},
    {'animal': '07 馬 水 🐴 💧', 'start': 6586, 'end': 6940},
    {'animal': '08 羊 水 🐑 💧', 'start': 6941, 'end': 7294},
    {'animal': '09 猴 木 🐵 🪵', 'start': 7295, 'end': 7678},
    {'animal': '10 雞 木 🐔 🪵', 'start': 7679, 'end': 8032},
    {'animal': '11 狗 火 🐶 🔥', 'start': 8033, 'end': 8386},
    {'animal': '12 豬 火 🐷 🔥', 'start': 8387, 'end': 8770},
    {'animal': '01 鼠 土 🐭 🪨', 'start': 8771, 'end': 9124},
    {'animal': '02 牛 土 🐮 🪨', 'start': 9125, 'end': 9479},
    {'animal': '03 虎 金 🐯 ㊎', 'start': 9480, 'end': 9863},
    {'animal': '04 兔 金 🐰 ㊎', 'start': 9864, 'end': 10218},
    {'animal': '05 龍 水 🐲 💧', 'start': 10219, 'end': 10602},
    {'animal': '06 蛇 水 🐍 💧', 'start': 10603, 'end': 10956},
    {'animal': '07 馬 木 🐴 🪵', 'start': 10957, 'end': 11310},
    {'animal': '08 羊 木 🐑 🪵', 'start': 11311, 'end': 11693},
    {'animal': '09 猴 火 🐵 🔥', 'start': 11694, 'end': 12048},
    {'animal': '10 雞 火 🐔 🔥', 'start': 12049, 'end': 12402},
    {'animal': '11 狗 土 🐶 🪨', 'start': 12403, 'end': 12786},
    {'animal': '12 豬 土 🐷 🪨', 'start': 12787, 'end': 13141},
    {'animal': '01 鼠 金 🐭 ㊎', 'start': 13142, 'end': 13525},
    {'animal': '02 牛 金 🐮 ㊎', 'start': 13526, 'end': 13879},
    {'animal': '03 虎 水 🐯 💧', 'start': 13880, 'end': 14234},
    {'animal': '04 兔 水 🐰 💧', 'start': 14235, 'end': 14617},
    {'animal': '05 龍 木 🐲 🪵', 'start': 14618, 'end': 14971},
    {'animal': '06 蛇 木 🐍 🪵', 'start': 14972, 'end': 15326},
    {'animal': '07 馬 火 🐴 🔥', 'start': 15327, 'end': 15710},
    {'animal': '08 羊 火 🐑 🔥', 'start': 15711, 'end': 16064},
    {'animal': '09 猴 土 🐵 🪨', 'start': 16065, 'end': 16419},
    {'animal': '10 雞 土 🐔 🪨', 'start': 16420, 'end': 16803},
    {'animal': '11 狗 金 🐶 ㊎', 'start': 16804, 'end': 17157},
    {'animal': '12 豬 金 🐷 ㊎', 'start': 17158, 'end': 17541},
    {'animal': '01 鼠 水 🐭 💧', 'start': 17542, 'end': 17895},
    {'animal': '02 牛 水 🐮 💧', 'start': 17896, 'end': 18249},
    {'animal': '03 虎 木 🐯 🪵', 'start': 18250, 'end': 18633},
    {'animal': '04 兔 木 🐰 🪵', 'start': 18634, 'end': 18987},
    {'animal': '05 龍 火 🐲 🔥', 'start': 18988, 'end': 19342},
    {'animal': '06 蛇 火 🐍 🔥', 'start': 19343, 'end': 19726},
    {'animal': '07 馬 土 🐴 🪨', 'start': 19727, 'end': 20081},
    {'animal': '08 羊 土 🐑 🪨', 'start': 20082, 'end': 20465},
    {'animal': '09 猴 金 🐵 ㊎', 'start': 20466, 'end': 20819},
    {'animal': '10 雞 金 🐔 ㊎', 'start': 20820, 'end': 21173},
    {'animal': '11 狗 水 🐶 💧', 'start': 21174, 'end': 21557},
    ]

    # Zodiac Dictionary 1
    zodiac_dict1 = [
    {'animal': '01 鼠 木 🐭 🪵', 'start': 1, 'end': 354},
    {'animal': '02 牛 木 🐮 🪵', 'start': 355, 'end': 739},
    {'animal': '03 虎 火 🐯 🔥', 'start': 740, 'end': 1093},
    {'animal': '04 兔 火 🐰 🔥', 'start': 1094, 'end': 1448},
    {'animal': '05 龍 土 🐲 🪨', 'start': 1449, 'end': 1832},
    {'animal': '06 蛇 土 🐍 🪨', 'start': 1833, 'end': 2186},
    {'animal': '07 馬 金 🐴 ㊎', 'start': 2187, 'end': 2569},
    {'animal': '08 羊 金 🐑 ㊎', 'start': 2570, 'end': 2923},
    {'animal': '09 猴 水 🐵 💧', 'start': 2924, 'end': 3278},
    {'animal': '10 雞 水 🐔 💧', 'start': 3279, 'end': 3662},
    {'animal': '11 狗 木 🐶 🪵', 'start': 3663, 'end': 4017},
    {'animal': '12 豬 木 🐷 🪵', 'start': 4018, 'end': 4371},
    {'animal': '01 鼠 火 🐭 🔥', 'start': 4372, 'end': 4755},
    {'animal': '02 牛 火 🐮 🔥', 'start': 4756, 'end': 5109},
    {'animal': '03 虎 土 🐯 🪨', 'start': 5110, 'end': 5493},
    {'animal': '04 兔 土 🐰 🪨', 'start': 5494, 'end': 5847},
    {'animal': '05 龍 金 🐲 ㊎', 'start': 5848, 'end': 6201},
    {'animal': '06 蛇 金 🐍 ㊎', 'start': 6202, 'end': 6585},
    {'animal': '07 馬 水 🐴 💧', 'start': 6586, 'end': 6940},
    {'animal': '08 羊 水 🐑 💧', 'start': 6941, 'end': 7294},
    {'animal': '09 猴 木 🐵 🪵', 'start': 7295, 'end': 7679},
    {'animal': '10 雞 木 🐔 🪵', 'start': 7680, 'end': 8033},
    {'animal': '11 狗 火 🐶 🔥', 'start': 8034, 'end': 8387},
    {'animal': '12 豬 火 🐷 🔥', 'start': 8388, 'end': 8771},
    {'animal': '01 鼠 土 🐭 🪨', 'start': 8772, 'end': 9125},
    {'animal': '02 牛 土 🐮 🪨', 'start': 9126, 'end': 9509},
    {'animal': '03 虎 金 🐯 ㊎', 'start': 9510, 'end': 9863},
    {'animal': '04 兔 金 🐰 ㊎', 'start': 9864, 'end': 10218},
    {'animal': '05 龍 水 🐲 💧', 'start': 10219, 'end': 10602},
    {'animal': '06 蛇 水 🐍 💧', 'start': 10603, 'end': 10956},
    {'animal': '07 馬 木 🐴 🪵', 'start': 10957, 'end': 11311},
    {'animal': '08 羊 木 🐑 🪵', 'start': 11312, 'end': 11695},
    {'animal': '09 猴 火 🐵 🔥', 'start': 11696, 'end': 12049},
    {'animal': '10 雞 火 🐔 🔥', 'start': 12050, 'end': 12432},
    {'animal': '11 狗 土 🐶 🪨', 'start': 12433, 'end': 12787},
    {'animal': '12 豬 土 🐷 🪨', 'start': 12788, 'end': 13141},
    {'animal': '01 鼠 金 🐭 ㊎', 'start': 13142, 'end': 13525},
    {'animal': '02 牛 金 🐮 ㊎', 'start': 13526, 'end': 13880},
    {'animal': '03 虎 水 🐯 💧', 'start': 13881, 'end': 14234},
    {'animal': '04 兔 水 🐰 💧', 'start': 14235, 'end': 14618},
    {'animal': '05 龍 木 🐲 🪵', 'start': 14619, 'end': 14973},
    {'animal': '06 蛇 木 🐍 🪵', 'start': 14974, 'end': 15326},
    {'animal': '07 馬 火 🐴 🔥', 'start': 15327, 'end': 15710},
    {'animal': '08 羊 火 🐑 🔥', 'start': 15711, 'end': 16065},
    {'animal': '09 猴 土 🐵 🪨', 'start': 16066, 'end': 16449},
    {'animal': '10 雞 土 🐔 🪨', 'start': 16450, 'end': 16803},
    {'animal': '11 狗 金 🐶 ㊎', 'start': 16804, 'end': 17158},
    {'animal': '12 豬 金 🐷 ㊎', 'start': 17159, 'end': 17542},
    {'animal': '01 鼠 水 🐭 💧', 'start': 17543, 'end': 17896},
    {'animal': '02 牛 水 🐮 💧', 'start': 17897, 'end': 18250},
    {'animal': '03 虎 木 🐯 🪵', 'start': 18251, 'end': 18634},
    {'animal': '04 兔 木 🐰 🪵', 'start': 18635, 'end': 18988},
    {'animal': '05 龍 火 🐲 🔥', 'start': 18989, 'end': 19372},
    {'animal': '06 蛇 火 🐍 🔥', 'start': 19373, 'end': 19726},
    {'animal': '07 馬 土 🐴 🪨', 'start': 19727, 'end': 20081},
    {'animal': '08 羊 土 🐑 🪨', 'start': 20082, 'end': 20465},
    {'animal': '09 猴 金 🐵 ㊎', 'start': 20466, 'end': 20820},
    {'animal': '10 雞 金 🐔 ㊎', 'start': 20821, 'end': 21174},
    {'animal': '11 狗 水 🐶 💧', 'start': 21175, 'end': 21558},
    {'animal': '12 豬 水 🐷 💧', 'start': 21559, 'end': 21912}
    ]
    # Zodiac Dictionary 2
    zodiac_dict2 = [
    {'animal': '01 鼠 木 🐭 🪵', 'start': 1, 'end': 384},
    {'animal': '02 牛 木 🐮 🪵', 'start': 385, 'end': 738},
    {'animal': '03 虎 火 🐯 🔥', 'start': 739, 'end': 1092},
    {'animal': '04 兔 火 🐰 🔥', 'start': 1093, 'end': 1476},
    {'animal': '05 龍 土 🐲 🪨', 'start': 1477, 'end': 1831},
    {'animal': '06 蛇 土 🐍 🪨', 'start': 1832, 'end': 2186},
    {'animal': '07 馬 金 🐴 ㊎', 'start': 2187, 'end': 2570},
    {'animal': '08 羊 金 🐑 ㊎', 'start': 2571, 'end': 2924},
    {'animal': '09 猴 水 🐵 💧', 'start': 2925, 'end': 3278},
    {'animal': '10 雞 水 🐔 💧', 'start': 3279, 'end': 3661},
    {'animal': '11 狗 木 🐶 🪵', 'start': 3662, 'end': 4016},
    {'animal': '12 豬 木 🐷 🪵', 'start': 4017, 'end': 4400},
    {'animal': '01 鼠 火 🐭 🔥', 'start': 4401, 'end': 4754},
    {'animal': '02 牛 火 🐮 🔥', 'start': 4755, 'end': 5109},
    {'animal': '03 虎 土 🐯 🪨', 'start': 5110, 'end': 5493},
    {'animal': '04 兔 土 🐰 🪨', 'start': 5494, 'end': 5847},
    {'animal': '05 龍 金 🐲 ㊎', 'start': 5848, 'end': 6201},
    {'animal': '06 蛇 金 🐍 ㊎', 'start': 6202, 'end': 6585},
    {'animal': '07 馬 水 🐴 💧', 'start': 6586, 'end': 6939},
    {'animal': '08 羊 水 🐑 💧', 'start': 6940, 'end': 7294},
    {'animal': '09 猴 木 🐵 🪵', 'start': 7295, 'end': 7678},
    {'animal': '10 雞 木 🐔 🪵', 'start': 7679, 'end': 8032},
    {'animal': '11 狗 火 🐶 🔥', 'start': 8033, 'end': 8417},
    {'animal': '12 豬 火 🐷 🔥', 'start': 8418, 'end': 8771},
    {'animal': '01 鼠 土 🐭 🪨', 'start': 8772, 'end': 9125},
    {'animal': '02 牛 土 🐮 🪨', 'start': 9126, 'end': 9509},
    {'animal': '03 虎 金 🐯 ㊎', 'start': 9510, 'end': 9863},
    {'animal': '04 兔 金 🐰 ㊎', 'start': 9864, 'end': 10217},
    {'animal': '05 龍 水 🐲 💧', 'start': 10218, 'end': 10601},
    {'animal': '06 蛇 水 🐍 💧', 'start': 10602, 'end': 10956},
    {'animal': '07 馬 木 🐴 🪵', 'start': 10957, 'end': 11340},
    {'animal': '08 羊 木 🐑 🪵', 'start': 11341, 'end': 11694},
    {'animal': '09 猴 火 🐵 🔥', 'start': 11695, 'end': 12049},
    {'animal': '10 雞 火 🐔 🔥', 'start': 12050, 'end': 12433},
    {'animal': '11 狗 土 🐶 🪨', 'start': 12434, 'end': 12787},
    {'animal': '12 豬 土 🐷 🪨', 'start': 12788, 'end': 13141},
    {'animal': '01 鼠 金 🐭 ㊎', 'start': 13142, 'end': 13525},
    {'animal': '02 牛 金 🐮 ㊎', 'start': 13526, 'end': 13879},
    {'animal': '03 虎 水 🐯 💧', 'start': 13880, 'end': 14234},
    {'animal': '04 兔 水 🐰 💧', 'start': 14235, 'end': 14618},
    {'animal': '05 龍 木 🐲 🪵', 'start': 14619, 'end': 14972},
    {'animal': '06 蛇 木 🐍 🪵', 'start': 14973, 'end': 15356},
    {'animal': '07 馬 火 🐴 🔥', 'start': 15357, 'end': 15710},
    {'animal': '08 羊 火 🐑 🔥', 'start': 15711, 'end': 16064},
    {'animal': '09 猴 土 🐵 🪨', 'start': 16065, 'end': 16448},
    {'animal': '10 雞 土 🐔 🪨', 'start': 16449, 'end': 16803},
    {'animal': '11 狗 金 🐶 ㊎', 'start': 16804, 'end': 17157},
    {'animal': '12 豬 金 🐷 ㊎', 'start': 17158, 'end': 17541},
    {'animal': '01 鼠 水 🐭 💧', 'start': 17542, 'end': 17896},
    {'animal': '02 牛 水 🐮 💧', 'start': 17897, 'end': 18280},
    {'animal': '03 虎 木 🐯 🪵', 'start': 18281, 'end': 18634},
    {'animal': '04 兔 木 🐰 🪵', 'start': 18635, 'end': 18988},
    {'animal': '05 龍 火 🐲 🔥', 'start': 18989, 'end': 19372},
    {'animal': '06 蛇 火 🐍 🔥', 'start': 19373, 'end': 19726},
    {'animal': '07 馬 土 🐴 🪨', 'start': 19727, 'end': 20080},
    {'animal': '08 羊 土 🐑 🪨', 'start': 20081, 'end': 20464},
    {'animal': '09 猴 金 🐵 ㊎', 'start': 20465, 'end': 20819},
    {'animal': '10 雞 金 🐔 ㊎', 'start': 20820, 'end': 21174},
    {'animal': '11 狗 水 🐶 💧', 'start': 21175, 'end': 21558},
    {'animal': '12 豬 水 🐷 💧', 'start': 21559, 'end': 21912}
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

    animal = zodiac_lookup(zodiac_dict, diff)
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
                result = zodiac_dict[A]['animal']
                found = True
            else: # if previous test failed, assume the latter range was the correct range.
                A = Z
                Z = Z
                result = zodiac_dict[Z]['animal']
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
