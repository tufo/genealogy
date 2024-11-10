
from app import sib_lookup, parents_lookup, chitlins_lookup
from app import partner_lookup
from app import partners_lookup


def relDia (sourceName, targetName, backtrack=0):

    # sandbox
    print("####################################################################")
    print("SANDBOX\n")

    # base condition
    if targetName == sourceName:
        matrix = []
        # matrix = [{'name':"end", 'sex':"end", 'age':"end", 'title':"end"}]
        return matrix

##################################################


    # search for children
    # this search might have to happen before parents lookup
    if backtrack != 2 and chitlins_lookup(sourceName) != []:
        print("ENTERED CHILD")
        print("source: " + sourceName)
        print("target: " + targetName)
        print("\n")
        backtrack = 4 # this iteration is looking for children, so prevent subsequent iteration from looking for parent.
        rel_title = "child of"
        chitlins = chitlins_lookup(sourceName)
        length = int(len(chitlins))
        for n in range(length):
            name = chitlins[n]['Child']
            sex = "sex"
            age = 99
            row = {'name':name, 'sex':sex, 'age':age, 'title':rel_title}
            sourceName = name
            if relDia(sourceName, targetName, backtrack) != "notFound":
                matrix = relDia(sourceName, targetName, backtrack)
                matrix.append(row)
                return matrix



##################################################

    # search for partner
    # for simplicity, assume maximum 2 partners?
    # it might be important that the partner lookup happens before the parents lookup.

    if backtrack != 3 and partners_lookup(sourceName) != []:
        print("ENTERED PARTNER")
        print("source: " + sourceName)
        print("target: " + targetName)
        print("\n")
        backtrack = 3
        rel_title = "partner of"
        partners = partners_lookup(sourceName) # expect partners to have multiple entries
        length = int(len(partners))
        print(partners)
        for n in range(length):
            if partners[n]['Partner2'] != sourceName: # skips over the upstream partner.
                name = partners[n]['Partner2']
                sex = "sex"
                age = 99
                row = {'name':name, 'sex':sex, 'age':age, 'title':rel_title}
                sourceName = name
                if relDia(sourceName, targetName, backtrack) != "notFound":
                    matrix = relDia(sourceName, targetName, backtrack)
                    matrix.append(row)
                    return matrix


##################################################



    # search for parent
    if backtrack != 4 and parents_lookup(sourceName)[0] != []:
        Parents, Father, Mother = parents_lookup(sourceName)
        print("/* ENTERED PARENT")
        print("source: " + sourceName)
        print("target: " + targetName)
        print("*/ \n")
        backtrack = 2 # this iteration is looking for parent, so prevent subsequent iteration from looking for child.
        rel_title = "parent of"

        ## recursive call going down the father path
        if Father != "unfound":
            print("/* ENTERED FATHER")
            print("source: " + sourceName)
            print("target: " + targetName)
            print("*/ \n")
            name = Father
            sex = "sex"
            age = 99
            row = {'name':name, 'sex':sex, 'age':age, 'title':rel_title}
            sourceName = name # the current iteration's target becomes the next iteration's source.
            if relDia(sourceName, targetName, backtrack) != "notFound": # move on to the next line of code if this recursion call returns nothing.
                matrix = relDia(sourceName, targetName, backtrack)
                matrix.append(row)
                return matrix

        ## recursive call going down the mother path
        if Mother != "unfound":
            name = Mother
            print("/* ENTERED MOTHER")
            print("source: " + sourceName)
            print("target: " + targetName)
            print("*/ \n")
            sex = "sex"
            age = 99
            row = {'name':name, 'sex':sex, 'age':age, 'title':rel_title}
            sourceName = name
            if relDia(sourceName, targetName, backtrack) != "notFound":
                matrix = relDia(sourceName, targetName, backtrack)
                matrix.append(row)
                return matrix



    # if the code has managed to get down to this line, return a False up 1 level of the recursion.
    print("/* ENTERED TERMINATION */")
    print("\n")
    return "notFound"
'''



##################################################


    # search for siblings
    if backtrack != 1:
        print("/* ENTERED SIBLING")
        print("source: " + sourceName)
        print("target: " + targetName)
        print("*/ \n")
        ## full siblings
        if sib_lookup(sourceName, "fullSib") != "notFound":
            fullSiblings = sib_lookup(sourceName, "fullSib")
            length = int(len(fullSiblings))
            for n in range(length): # loop through list of full siblings.
                if fullSiblings[n]['Child'] != sourceName: # skips over the ego.
                    name = fullSiblings[n]['Child']
                    sex = "sex"
                    age = 99
                    rel_title = "full sibling of"
                    row = {'name':name, 'sex':sex, 'age':age, 'title':rel_title}
                    sourceName = name
                    if relDia(sourceName, targetName, backtrack) != "notFound":
                        matrix = relDia(sourceName, targetName, backtrack)
                        matrix.append(row)
                        return matrix

##################################################


        ## half siblings paternal
        if sib_lookup(sourceName, "ofFather"):
            ofDadHalfSiblings = sib_lookup(sourceName, "ofFather")
            length = int(len(ofDadHalfSiblings))
            if ofDadHalfSiblings[n]['Child'] != sourceName: # skips over the ego.
                for n in range(length):  # loop through list of paternal half siblings.
                    name = ofDadHalfSiblings[n]['Child']
                    sex = "sex"
                    age = 99
                    rel_title = "paternal half-sibling of"
                    row = {'name':name, 'sex':sex, 'age':age, 'title':rel_title}
                    sourceName = name
                    if relDia(sourceName, targetName, backtrack) != False:
                        matrix = relDia(sourceName, targetName, backtrack)
                        matrix.append(row)
                        return matrix

        ## half siblings maternal
        if sib_lookup(sourceName, "ofMother"):
            ofMomHalfSiblings = sib_lookup(sourceName, "ofMother")
            length = int(len(ofMomHalfSiblings))
            if ofMomHalfSiblings[n]['Child'] != sourceName: # skips over the ego.
                for n in range(length):  # loop through list of maternal half siblings.
                    name = ofMomHalfSiblings[n]['Child']
                    sex = "sex"
                    age = 99
                    rel_title = "maternal half-sibling of"
                    row = {'name':name, 'sex':sex, 'age':age, 'title':rel_title}
                    sourceName = name
                    if relDia(sourceName, targetName, backtrack) != False:
                        matrix = relDia(sourceName, targetName, backtrack)
                        matrix.append(row)
                        return matrix
'''



'''
output = chitlins_lookup('Virginia')
"""
[{'Parent': 'Imad', 'Child': 'Hawa', 'Age': 10.693002086280654},
{'Parent': 'Greg', 'Child': 'Andon', 'Age': 0.9681560903874307}]
"""

output = partner_lookup('Virginia')
"""
[{'Partner': 'Greg'}]
"""

output = partners_lookup('Virginia')
"""
[{'Partner1': 'Virginia', 'Partner2': 'Imad'},
{'Partner1': 'Virginia', 'Partner2': 'Greg'}]
"""

output = sib_lookup('Melissa','fullSib')
"""
[{'Child': 'Chris', 'Father': 'Andy', 'Mother': 'Chau', 'Age': 35},
{'Child': 'Melissa', 'Father': 'Andy', 'Mother': 'Chau', 'Age': 32}]
"""

output = sib_lookup('Hawa','ofMother')
"""
[{'Child': 'Andon', 'Father': 'Greg', 'Mother': 'Virginia', 'Age': 1}]
"""

output = sib_lookup('Andon','ofMother')
"""
[{'Child': 'Hawa', 'Father': 'Imad', 'Mother': 'Virginia', 'Age': 10}]
"""

Parents, Father, Mother = parents_lookup('Hawa')

backtrack blocking

1: if upstream was looking for siblings, forbid sibling lookup.
2: if upstream was looking for parent, forbid child lookup, also forbid spouse-then-child lookup.
3: if upstream was looking for partner, forbid spouse lookup of the most upstream partner.
    first 1st iteration of code, simplify by assuming no one person has had more than 2 partners.
    rebekah has had 2 partners.
    virginia has had 2 partners
4: if upstream was looking for child, forbid looking for parent

Test case 1
sourceName = "Chris"
targetName = "Chris"
fail

Test case 2
sourceName = "Chris"
targetName = "Chau"
pass

Test case 3
sourceName = "Chau"
targetName = "Chris"
pass

Test case 4
sourceName = "Chris"
targetName = "Melissa"
pass

Test case 5
sourceName = "Chris"
targetName = "Joanne"
pass

Test case 6
sourceName = "Chau"
targetName = "Andy"

Test case 7 (along bloodline)
sourceName = "Andy"
targetName = "Chau"

Test case 8 (not along bloodline)
sourceName = "Chau"
targetName = "Andy"
pass

Test case 8
sourceName = "John"
targetName = "Adam"
pass

Test case 9
sourceName = "Hawa"
targetName = "Andon"
pass

# Moves

## Ego to Partner
A to node to B
FuncE: call function: use A as source, use partners table, identify marriage id (A+B).
write blocker to prevent subsequent query from using partners table to look up A.
FuncG: call function: use marriage id, set B as new sourceName.
next function call: prevent from going to (A+B) node, must be from person to node.

## Ego to Child(ren)
A to node to C
FuncE: call function: use A as source, use partners table, identify marriage id (A+B).
write blocker to prevent subsequent query from using partners table to look up A.
FuncH: call function: use marriage id & lineage table, set C as new sourceName.
next function call: prevent from going to (A+B) node, must be from person to node.

## Ego to (Full) Sibling(s)
C to node to D
funcF: call function: use C as source, use marriage table, identify marriage id (A+B).
write blocker to prevent subsequent query from using lineage table to look up C.
FuncH: call function: use marriage id & lineage table, set D as new sourceName.
next function call: prevent from going to (A+B node), must be from person to node.

## Ego to Parent(s)
C to node to B
FuncF: call function: use C as source, use lineage table, use marriage table, identify marriage id (A+B).
write blocker to prevent subsequent query from using lineage table to look up C.
FuncI: call function: use marriage id & lineage table, set B as new sourceName.
next function call: prevent fom going to (A+B) node, must be from person to node.


# Functions

FuncE...
Inputs: sourceName
Tables: partners
Outputs: marriage_id, partner_matrix, route to FuncG or FuncH, blocked from accessing preceeding node's marriage id.

FuncF...
Inputs: sourceName
Tables: lineage, (partners)
Outputs: marriage_id, partner_matrix, route to FuncH or FuncI, blocked from accessing preceeding node's marriage id.

FuncG...
Inputs: sourceName, marriage_id, partner_matrix
Tables: (none)
Outputs: targetName, route ___, block ___

FuncH...
Inputs: sourceName, marriage_id, partner_matrix
Tables: lineage
Outputs: targetName, route ____, block ____

FuncI...
Inputs: marriage_id, partner_matrix
Tables: (none)
Outputs: targetName, route ____, block ____



'''

sourceName = "Chris"
targetName = "John"

backtrack = 0

matrix = relDia(sourceName, targetName)

print("\n/*")
print(targetName + " is the ")
print(matrix)
print(sourceName)
print("*/ \n")
