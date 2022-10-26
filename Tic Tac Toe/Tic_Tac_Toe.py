"""
To be added:
save game feature
winning condition
"""
rows = 3
cols = 3

class Square():
    """each playable square is here."""
    def __init__(self, row, col):
        """all these squares are initially empty"""
        self.row = row
        self.col = col
        self.value = '   '

    def __str__(self):
        "this is the name of this object!"
        return self.row + self.col

    def play(self):
        if self.value != '   ': # invalid choice
            print('This square has already been played, try again.')
            return False
        if player == True:
            self.value = ' O '
        else:
            self.value = ' X '

class Grid: #the game board.

    def __init__(self):
        self.squares = []
        for i in range(rows): #creation of individual squares
            for j in range(cols):
                self.squares.append(Square(str(i), str(j))) #important that row and col are in str format

        self.winsets = (self.squares[0:3], self.squares[3:6], self.squares[6:], self.squares[0::3], self.squares[1::3], self.squares[2::3], self.squares[0::4], self.squares[2:7:2]) #set of winning squares

    def print_grid(self):
        """will print the board, taking care with rows and column and the values of each square object.
        need to include: check to the square value."""
        count = 0
        for i in self.squares:
            count += 1
            val = i.value
            if count == 3 or count == 6:
                print(val, end = "\n------------\n")
            elif count == 9:
                print(val)
            else:
                print(val, end = "|")

    def Turn(self):
        """turn rotation on this grid"""
        self.print_grid()
        choice = False
        count = 0 #NOTE
        #while loop to deal with all possible choices.
        while choice == False:
            choice = grid_choice(self)
            if choice != False:
                choice = choice.play()
            if count >= 5: # NOTE failsafe for while loop during debug
                break
            count += 1
        for i in self.winsets:
            if i[0].value == i[1].value == i[2].value != '   ':
                return 'Winner'
        global player
        player = not player # switch player at end (local variable?)

    def EndGame(self):
        """what happens when the game ends"""
        pass

#Functions
def grid_choice(self):
    """indicates player must choose a tile"""
    pick_row = input('choose a col: ')
    pick_col = input('choose a row: ')
    print('You have picked ' + str(pick_row) + str(pick_col) + '.')
    try:
        return self.squares[int(pick_row) - 1::3][int(pick_col) - 1]
    except:
        print('you haven\'t picked a square on the grid, try again.')
        return False

#creating the Game board
grid = Grid()

#begin the game

turn = 0
player = True

while turn < 9:
    q = grid.Turn()
    turn += 1
    if q == 'Winner':
        if player == True:
            p = 'Player 1'
        else:
            p = 'player 2'
        print('Congratualtions ' + p + ' you win!')
        break
grid.print_grid()
if turn >= 9 :
    print('It was a draw!')
