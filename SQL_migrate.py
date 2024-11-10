import sqlite3

##################################################

# Tuples vs Dicts
"""
as tuples:
[('Chau', 'Le', 'Thieu')]
versus
as dictionaries:
[{'first_EN': 'Chau', 'middle_EN': 'Le', 'last_EN': 'Thieu'}]
"""
##################################################
# Attempt 1

conn = sqlite3.connect('familyTree.db')
# if getting SQL thread error, add the check_same_thread argument.
#conn = sqlite3.connect('familyTree.db', check_same_thread=False)

cursor = conn.cursor()

personName = "Chau"


def full_name(personName):
    query = """
        SELECT
            first_EN
            , middle_EN
            , last_EN
        FROM
            persons
        WHERE
            first_EN IS ?
    """
    cursor.execute(query, (personName,))
    fullName = cursor.fetchall()
    return fullName

fullName = full_name(personName)
#print(fullName)

##################################################
# [CS50 SQL library alternative (for db.execute)]
# (https://www.reddit.com/r/cs50/comments/79qb6x/cs50_sql_library_alternative_for_dbexecute/)

# [How to create and use row factories]
# (https://docs.python.org/3/library/sqlite3.html)
# You can create a custom row_factory that returns each row as a dict, with column names mapped to values:

def dict_factory(cursor, row):
    fields = [column[0] for column in cursor.description]
    return {key: value for key, value in zip(fields, row)}


con = sqlite3.connect(":memory:")
con.row_factory = dict_factory

array=[]
query = """
    SELECT 1 AS a, 2 AS b
"""
for row in con.execute(query):
    array.append(row)
    #print(array)
{'a': 1, 'b': 2}
con.close()

##################################################
# Attempt to use dict_factory on familyTree.db
# 1
import sqlite3

# 2
def dict_factory(cursor, row):
    fields = [column[0] for column in cursor.description]
    return {key: value for key, value in zip(fields, row)}

# 3
con = sqlite3.connect("familyTree.db")
con.row_factory = dict_factory


query = """
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
"""

personName = "Chau"

array=[]
for row in con.execute(query, (personName, personName,)):
    array.append(row)
print(array)

con.close()

##################################################
# Inspect code in SQL library from cs50
"""
import inspect
from cs50 import SQL
print(inspect.getsource(SQL))
"""

##################################################
