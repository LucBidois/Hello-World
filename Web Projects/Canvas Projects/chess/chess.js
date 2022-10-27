/*
1.8x8 board with numbers being presented on the side.
2.
3.
4.
5.
6.
7.
8.
9.
10.

extra: this could be done without a canvas however it may be smoother with one?

I want to use canvas for the board which displays the game.
however I will use css and html for buttons, and displaying the scores.
*/



const letterPos = ['A','B','C','D','E','F','G','H']
const numPos = ['1','2','3','4','5','6','7','8']

class Board {
  //this board takes in values to be able to be positioned in other places in the canvas
  //NOTE: i could use a board image and simply place pieces on top. rather than creating a board?
  constructor(topLeftX,topLeftY, width, height){
    this.startAxis = [topLeftX,topLeftY]; // change upon screen size changes
    this.width = width;  // change upon screen size changes
    this.height = height; // change upon screen size changes

    this.baseColours = ['white', 'black']; // the colours for the tiles - reference pictures
    this.highlightColour = highlightColour; //modifiable in settings
    this.takeColour = takeColour; //modifiable in settings
  }
}

class Tile {
  //this may not even be needed? if i only use the board to hold all the objects on the board.
  constructor(colour, piece){
    // (colour, highlightColour, Piece, )
    // ('brown', 'blue', Objectreference, )
    this.colour = colour;
    this.piece = piece;
  }
}

class Player {
  constructor(playedBy, difficulty, colour){
    this.player = playedBy;
    this.difficulty = difficulty;
    this.colour = colour;
    //(player or AI, if AI)
  }

  showScore() {
    return this.score;
  }

}

class Piece {
  constructor(type, player, position){
    //(Bishop, 2, A3)
    this.type = type;
    this.player = player;
    this.position = position;
  }

  hilightMoves() {
    // when a piece own by this player is selected this will highlight all the possible moves.
    // create a list of possible tiles.
    switch (this.type){
      case "Queen":
        /*
        1. get position
        2. calculate all possible tiles
        2b. remove tiles that are blocked by other pieces
        3. 

        */
        //num any,
        //letter any
        //num and letter same amount
        break;
      case "King":
        // Queen but size 1
        // Num or letter or both size 1
        break;
      case "Bishop":
        // change num or pos by modulus(same step)
        // stop at piece
        break;
      case "Rook":
        //change num or change letter not both.
        //stop at piece
        break;
      case "Knight":
        // 2 num 1 letter
        // 1 num 2 letter
        break;
      case "Pawn":
        //take diagonally
        //take coup du poisson
        //forwards 1
        //forwards 2 if on start position
        break;
    }
  }

  applyMove() {

  }

}


/// Test area
//test1 = display board smaller than size of canvas in center of canvas
