##########################################
# Imports
from app import sib_lookup, parents_lookup, chitlins_lookup
from app import partner_lookup
from app import partners_lookup

##########################################
# Classes

class Node():
    def __init__(self, state, parentNode, action):
        self.state = state
        self.parentNode = parentNode
        self.action = action


class StackFrontier():
    def __init__(self):
        self.frontier = []

    def add(self, node):
        self.frontier.append(node)

    def contains_state(self, state):
        return any(node.state == state for node in self.frontier)

    def empty(self):
        return len(self.frontier) == 0

    def remove(self):
        if self.empty():
            raise Exception("empty frontier")
        else:
            node = self.frontier[-1]
            self.frontier = self.frontier[:-1]
            return node


class QueueFrontier(StackFrontier):

    def remove(self):
        if self.empty():
            raise Exception("empty frontier")
        else:
            node = self.frontier[0]
            self.frontier = self.frontier[1:]
            return node

##########################################
# Functions

def find_neighbors(sourceName):

    neighbors = []

    # action route: search for parents
    # action = "parent of"
    Parents, Father, Mother = parents_lookup(sourceName)
    neighbors.append(["father", Father])
    neighbors.append(["mother", Mother])


    # action route: search for partners
    action = "partner"
    partners = partners_lookup(sourceName)
    length = int(len(partners))
    for n in range(length):
        neighbors.append([action, partners[n]['Partner2']])


    # action route: search for children
    action = "child"
    chitlins = chitlins_lookup(sourceName)
    length = int(len(chitlins))
    for n in range(length):
        neighbors.append([action, chitlins[n]['Child']])

    """
    # action route: search for siblings
    action = "full sibling"
    siblings = sib_lookup(sourceName, "fullSib")
    length = int(len(siblings))
    for n in range(length):
        neighbors.append([action, siblings[n]['Child']])
    """

    return neighbors

def hunt(source, target):

    # initiatlize and define starting node
    current_node = Node(state=source , parentNode=None, action=None)

    # create frontier (Stack vs Queue)
    frontier = QueueFrontier()

    # add starting node to frontier
    frontier.add(current_node)

    # create explored set
    explored_set = []

    # initialize explored steps
    states_explored = 0


    while True:
        # if frontier has been completely emptied.
        if frontier.empty():
            return "No relationship found."

        # increment explored steps by +1.
        states_explored += 1

        # remove and redefine current_node
        current_node = frontier.remove()

        # if goal has been found
        if current_node.state == target:

            # trace back and start populating matrix
            path = []

            while current_node.parentNode != None:

                # populate action & state
                entry = (current_node.action, current_node.state)
                path.append(entry)

                # assign the parent node to be the current node
                current_node = current_node.parentNode

            # reverse the order of the matrix
            path.reverse()
            return path

        # if goal has not yet been found...
        # add to explored_set
        explored_set.append(current_node.state)

        # find neighbors
        neighbors = find_neighbors(current_node.state)

        # loop through each of the entries in neighbors and add them to the frontier.
        for (n) in range(int(len(neighbors))):
            action = neighbors[n][0]
            state = neighbors[n][1]

            # exclude current node & exclude items in the frontier
            if not frontier.contains_state(state) and state not in explored_set:

                # create child node
                childNode = Node(state=state, parentNode=current_node, action=action)

                # add immediate neighbors to the frontier.
                frontier.add(childNode)


def print_rel(source, target):
    path = hunt(source,target)
    print(source + "'s")
    length = int(len(path))
    for n in range(length):
        (action, state) = path[n]
        if n == length-1:
            print(action)
        else:
            print(action + "'s " + "(" + state + ")")
    print("is " + target)


##########################################
# Main script

# desired format:

source = "John"
target = "Adam"

sourceName = source

print("\n")
print_rel(source, target)

##########################################
