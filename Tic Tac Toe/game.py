
A = B = C = D = E = F = G = H = I = "  "
grid  =  [A, B, C, D, E, F, G, H, I]


def print_grid():
    print A, "|", B, "|", C
    print "____________"
    print D, "|", E, "|", F
    print "____________"
    print G, "|", H, "|", I
print_grid()


#choice = input("pick a grid square(1-9)")
#player = "one"
#player = "two"


class Grid(object):
    value = "  "

    def X(self):
        self.value =  "X"

    def O(self):
        self.value = "O"

    def print_grid():
        print A, "|", B, "|", C
        print "____________"
        print D, "|", E, "|", F
        print "____________"
        print G, "|", H, "|", I

player = "player one"

def next_turn():
    if player == "player one":
        player = "player two"
    else:
        player = "player one"

print "Welcome to Tic Tac Toe. \n "
raw_input("Please select a grid square %s: " %(player))
