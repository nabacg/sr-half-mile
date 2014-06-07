var Cars = function(paper, w, h) {
    var defaultHeight = 20;
    var defaultWidth = 10;
    var removeAll = false;
    var moveAnimateTime = 1000;
    var paperWidth = w;
    var paperHeight = h;

    var cars = [];
    var moveCar = function(c, delta) {
        if(c && !removeAll)
        {
            var bBox = c.getBBox();
            var newY = bBox.y - delta;
            if(newY >= 0)
                c.animate({"y": newY}, moveAnimateTime);
        }
    };

    var moveCarAbs = function(c, distance) {
        if(c && !removeAll) {
            var newY = h - defaultHeight -distance;
            //todo refactor moveCarAbs and moveCar to one method that takes newY
            //or lambda to calc new Y, rest is the same
            if(newY >= 0)
                c.animate({"y": newY}, moveAnimateTime);
        }
    };


    var makeCar = function(x, color) {
        var rect = paper
                .rect(x, h-defaultHeight, defaultWidth, defaultHeight)
                .attr({fill: color, stroke:"none"});
        cars.push(rect);
        return rect;
    };

    var move = function(){
        if(cars && cars.length > 0)
        {
            for(var i = 0; i < cars.length; i++) {
                moveCar(cars[i], 10);
            }
        }
        setTimeout(move, 3000);
    };


    var destroy = function() {
        removeAll = true;
    };

    return {
        addCar: makeCar,
        moveCars: move,
        moveCarAbs: moveCarAbs,
        destroy: destroy
    };
};


var Player = function(paper, x, y, name) {

  var nameLength = 150;
  var fontSize = 20;

  var score = 0;

  var nameText = paper.text(x, y, name).attr({
    "font-size": fontSize,
    "text-anchor": "start"});
  var scoreText = paper.text(x + nameLength, y, score).attr({
    "font-size": fontSize,
    "text-anchor": "end"});
  var st = paper.set();
  st.push(nameText, scoreText);

  return {
    setScore: function(n) {
      score = n;
      scoreText.attr({text: score});
    },
    moveTo: function(y) {
      st.animate({y: y}, 400);
    }
  };
};

var Leaderboard = function(paper, cars, x, y) {

  var playerSpacing = 30;

  var players = {};

  var playerY = function(i) {
    return 50 + (i * playerSpacing);
  };

  var countPlayers = function() {
    var count = 0;
    for(var i in players) {
      if(players.hasOwnProperty(i))
        count++;
    }
    return count;
  };

  return {
    addPlayer: function(name) {
      var i = countPlayers();
      var p = Player(paper, x, playerY(i), name);
      p.car = cars.addCar(20*i, "#F53");
      players[name] = p;
    },
    setScore: function(name, score) {
      var p = players[name];
      p.setScore(score);
      cars.moveCarAbs(p.car, 10*score);
    },
    setOrder: function(name, i) {
      var p = players[name];
      if(p)
        p.moveTo(playerY(i));
    },
    count: function() {
      return countPlayers();
    }
  };
};


var BubbleGame = function(id) {

  var paper = Raphael(id, 800, 400);

   //var circles = Circles(paper, 500, 380);
  var cars = Cars(paper, 500, 300);
  // var c1 = cars.addCar(0, "#f00");
  // cars.addCar(30, "#FF9");
  // cars.moveCar(c1);

  var leaderboard = Leaderboard(paper, cars, 550, 0);

  var destroy = function() {
    leaderboard = null;
    paper.remove();
    paper = null;
  };

  // This will be removed as we make improvements to the game.
  // The dataflow will control when circles are created.
  var makeCars = function() {
    if(leaderboard) {
      var p = leaderboard.count();
      for(var i=0;i<p;i++) {
          cars.addCar(i*30, "#f5"+i*3);
      }
    }
  };

  // setTimeout(makeCars, 2000);
  // cars.moveCars();
 // setInterval(makeCircles, 2000);

  var setStat = function(key, value) {
      // if(console)
      //     console.log("received stat:" + key + value);
  };

  return {
    addPlayer: leaderboard.addPlayer,
    setScore: leaderboard.setScore,
    setOrder: leaderboard.setOrder,
    setStat : setStat,
    destroy: destroy
  };
};
