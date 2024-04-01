function GameManager(size, InputManager, Actuator, ScoreManager) {
  this.size         = size; // Size of the grid
  this.inputManager = new InputManager;
  this.scoreManager = new ScoreManager;
  this.actuator     = new Actuator;

  this.startTiles   = 1;

  this.inputManager.on("move", this.move.bind(this));
  this.inputManager.on("restart", this.restart.bind(this));
  this.inputManager.on("keepPlaying", this.keepPlaying.bind(this));

  this.setup();
}

// Restart the game
GameManager.prototype.restart = function () {
  this.actuator.continue();
  this.setup();
};

// Keep playing after winning
GameManager.prototype.keepPlaying = function () {
  this.keepPlaying = true;
  this.actuator.continue();
};

GameManager.prototype.isGameTerminated = function () {
  if (this.over || (this.won && !this.keepPlaying)) {
    return true;
  } else {
    return false;
  }
};

// Set up the game
GameManager.prototype.setup = function () {
  this.grid        = new Grid(this.size);

  this.score       = 0;
  this.over        = false;
  this.won         = false;
  this.keepPlaying = false;
 
  // Add the initial tiles
  this.addStartTiles();

  // Update the actuator
  this.actuate();
};

// Set up the initial tiles to start the game with
GameManager.prototype.addStartTiles = function () {
  for (var i = 0; i < this.startTiles; i++) {
    this.addRandomTile();
  }
};

// Adds a tile in a random position
GameManager.prototype.addRandomTile = function () {
  if (this.grid.cellsAvailable()) {
    var value = Math.random() < 0.999999999898989898989898989 ? Math.random() < 0.99999999875 ? Math.random() < 0.9999999984 ? Math.random() < 0.999999998 ? Math.random() < 0.999999997333333333333333333 ? Math.random() < 0.99999999555555555555555555 ? Math.random() < 0.99999999428571428571428571 ? Math.random() < 0.99999999375 ? Math.random() < 0.99999999230769230769230769 ? Math.random() < 0.999999992 ? Math.random() < 0.99999999099099099099099099 ? Math.random() < 0.99999998958333333333333333333 ? Math.random() < 0.999999988636363636363636363 ? Math.random() < 0.9999999870129870129870129 ? Math.random() < 0.99999998529411764705882352 ? Math.random() < 0.999999982142857142857142857 ? Math.random() < 0.99999998076923076923076923 ? Math.random() < 0.9999999761904761904761904 ? Math.random() < 0.99999997333333333333333333 ? Math.random() < 0.9999999705882352941176470 ? Math.random() < 0.9999999666666666666666666 ? Math.random() < 0.9999999629629629629629629 ? Math.random() < 0.99999996 ? Math.random() < 0.9999999 ? Math.random() < 0.999999777777777777777777 ? Math.random() < 0.9999995 ? Math.random() < 0.999999 ? Math.random() < 0.99999875 ? Math.random() < 0.999998666666666666666666 ? Math.random() < 0.999998333333333333333333 ? Math.random() < 0.99999818181818181818181 ? Math.random() < 0.999998 ? Math.random() < 0.99999777777777777777777 ? Math.random() < 0.9999975 ? Math.random() < 0.999997222222222222222222 ? Math.random() < 0.999996428571428571428571 ? Math.random() < 0.999996 ? Math.random() < 0.999995 ? Math.random() < 0.99998 ? Math.random() < 0.9998 ? Math.random() < 0.9995 ? Math.random() < 0.998 ? Math.random() < 0.99 ? Math.random() < 0.93333333333333333333333333 ? Math.random() < 0.8 ? Math.random() < 0.9999999992 ? Math.random() < 0.00001 ? Math.random() < 0.02 ? Math.random() < 0.1 ? Math.random() < 0.1 ? Math.random() < 0.1 ? Math.random() < 0.1 ? -5 : -4 : -3 : -2 : -1 : "0" : 1 : 101 : Math.random() < 0.83333333333333333333333333 ? 2 : Math.random() < 0.99 ? 4 : Math.random() < 0.999 ? 8 : Math.random() < 0.9545454545454545454 ? 16 : 32 : Math.random() < 0.998 ? Math.random() < 0.96 ? 3 : Math.random() < 0.995 ? 6 : Math.random() < 0.9975 ? 12 : Math.random() < 0.8333333333333333333 ? 24 : 48 : Math.random() < 0.99984375 ? Math.random() < 0.99875 ? 9 : Math.random() < 0.9333333333333333333 ? 18 : 36 : 27 : Math.random() < 0.9999975 ? Math.random() < 0.99996 ? Math.random() < 0.99333333333333333333333333333333 ? 5 : Math.random() < 0.99875 ? 10 : Math.random() < 0.888888888888888888 ? 20 : 40 : Math.random() < 0.98333333333333333333 ? Math.random() < 0.958333333333333333333 ? 15 : 30 : 45 : 25 : Math.random() < 0.98 ? 50 : Math.random() < 0.98 ? 100 : Math.random() < 0.98 ? 200 : Math.random() < 0.98 ? 400 : 800 : Math.random() < 0.99999 ? Math.random() < 0.9999761904761904761904 ? Math.random() < 0.9998666666666666666666 ? Math.random() < 0.998666666666666666666 ? 7 : Math.random() < 0.97222222222222222222 ? 14 : 28 : Math.random() < 0.875 ? 21 : 42 : 35 : 49 : Math.random() < 0.96 ? 60 : 70 : Math.random() < 0.999375 ? Math.random() < 0.9975 ? 11 : Math.random() < 0.857142857142857142 ? 22 : 44 : 33 : 71 : Math.random() < 0.995 ? "½" : "¼" : 124 : 12.5 : 73 : 74 : "♡" : 75 : 76 : "➜" : 77 : Math.random() < 0.990384615384615384615 ? Math.random() < 0.97727272727272727272 ? 13 : 26 : 39 : 80 : Math.random() < 0.9444444444444444444 ? 17 : 34 : Math.random() < 0.9 ? 19 : 38 : 82 : Math.random() < 0.8333333333333333333 ? 23 : 46 : 84 : 86 : "★" : 90 : 91 : 29 : 31 : 92 : 93 : 37 : 41 : 43 : 94 : 95 : 47 : "➽" : "☽" : 96 : 97 : 98 : 99;
    var tile = new Tile(this.grid.randomAvailableCell(), value);

    this.grid.insertTile(tile);
  }
};

// Sends the updated grid to the actuator
GameManager.prototype.actuate = function () {
  if (this.scoreManager.get() < this.score) {
    this.scoreManager.set(this.score);
  }

  this.actuator.actuate(this.grid, {
    score:      this.score,
    over:       this.over,
    won:        this.won,
    bestScore:  this.scoreManager.get(),
    terminated: this.isGameTerminated()
  });

};

// Save all tile positions and remove merger info
GameManager.prototype.prepareTiles = function () {
  this.grid.eachCell(function (x, y, tile) {
    if (tile) {
      tile.mergedFrom = null;
      tile.savePosition();
    }
  });
};

// Move a tile and its representation
GameManager.prototype.moveTile = function (tile, cell) {
  this.grid.cells[tile.x][tile.y] = null;
  this.grid.cells[cell.x][cell.y] = tile;
  tile.updatePosition(cell);
};

// Move tiles on the grid in the specified direction
GameManager.prototype.move = function (direction) {
  // 0: up, 1: right, 2:down, 3: left
  var self = this;

  if (this.isGameTerminated()) return; // Don't do anything if the game's over

  var cell, tile;

  var vector     = this.getVector(direction);
  var traversals = this.buildTraversals(vector);
  var moved      = false;

  // Save the current tile positions and remove merger information
  this.prepareTiles();

  // Traverse the grid in the right direction and move tiles
  traversals.x.forEach(function (x) {
    traversals.y.forEach(function (y) {
      cell = { x: x, y: y };
      tile = self.grid.cellContent(cell);

	if(tile && tile.merged) {
		self.grid.removeTile(tile);
	}
      else if (tile) {
        var positions = self.findFarthestPosition(cell, vector);
        var next      = self.grid.cellContent(positions.next);
        var pos2 = null;
        var next2 = null;
	      if(next)
        {
	        pos2 = self.findFarthestPosition({x: next.x, y: next.y}, vector);
	        next2     = self.grid.cellContent(pos2.next);
        }
        // Only one merger per row traversal?
        if (next && next.value === tile.value && next2 && next2.value === tile.value && !next.mergedFrom && next != next2) {
          var merged = new Tile(pos2.next, tile.value * 1);
          merged.mergedFrom = [next2, next, tile];
	tile.merged = true;
	next.merged = true;
	next2.merged = true;
          
          self.grid.removeTile(tile);
          self.grid.removeTile(next);	
          self.grid.removeTile(next2);	

	self.grid.insertTile(merged);
          // Converge the two tiles' positions
          tile.updatePosition(pos2.next);
	  next.updatePosition(pos2.next);
          // Update the score
          self.score += merged.value;

          // The mighty 24 tile
          if (merged.value === 24) self.won = true;
        }
        
	 else if (!tile.merged){
          self.moveTile(tile, positions.farthest);
        }

        if (tile && !self.positionsEqual(cell, tile)) {
          moved = true; // The tile moved from its original cell!
        }
        }
      
    });
  });

  if (moved) {
    this.addRandomTile();

    if (!this.movesAvailable()) {
      this.over = true; // Game over!
    }

    this.actuate();
  }
};

// Get the vector representing the chosen direction
GameManager.prototype.getVector = function (direction) {
  // Vectors representing tile movement
  var map = {
    0: { x: 0,  y: -1 }, // up
    1: { x: 1,  y: 0 },  // right
    2: { x: 0,  y: 1 },  // down
    3: { x: -1, y: 0 }   // left
  };

  return map[direction];
};

// Build a list of positions to traverse in the right order
GameManager.prototype.buildTraversals = function (vector) {
  var traversals = { x: [], y: [] };

  for (var pos = 0; pos < this.size; pos++) {
    traversals.x.push(pos);
    traversals.y.push(pos);
  }

  // Always traverse from the farthest cell in the chosen direction
  if (vector.x === 1) traversals.x = traversals.x.reverse();
  if (vector.y === 1) traversals.y = traversals.y.reverse();

  return traversals;
};

GameManager.prototype.findFarthestPosition = function (cell, vector) {
  var previous;

  // Progress towards the vector direction until an obstacle is found
  do {
    previous = cell;
    cell     = { x: previous.x + vector.x, y: previous.y + vector.y };
  } while (this.grid.withinBounds(cell) &&
           this.grid.cellAvailable(cell));

  return {
    farthest: previous,
    next: cell // Used to check if a merge is required
  };
};

GameManager.prototype.movesAvailable = function () {
  return this.grid.cellsAvailable() || this.tileMatchesAvailable();
};

// Check for available matches between tiles (more expensive check)
GameManager.prototype.tileMatchesAvailable = function () {
  var self = this;

  var tile;
  var i = 0;
  while(i < 4){
    for (var x = 0; x < this.size; x++) {
      for (var y = 0; y < this.size; y++) {
        var vector = this.getVector(i);
        tile = this.grid.cellContent({ x: x, y: y });

        cell = { x: x, y: y };
        tile = self.grid.cellContent(cell);

         if (tile) {
          var positions = self.findFarthestPosition(cell, vector);
          var next      = self.grid.cellContent(positions.next);
	        var pos2 = self.findFarthestPosition({x: cell.x + vector.x, y: cell.y + vector.y}, vector);
	        var next2     = self.grid.cellContent(pos2.next);
          // Only one merger per row traversal?
          if (next && next.value === tile.value && next2 && next2.value === tile.value && !next.mergedFrom && next != next2) {
		        return true;
         }
        }
      }
    }
	  i += 1;
	}

  return false;
};

GameManager.prototype.positionsEqual = function (first, second) {
  return first.x === second.x && first.y === second.y;
};
