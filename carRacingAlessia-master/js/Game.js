class Game {
  constructor() {

    this.resetTitle = createElement("h2");
    this.resetButton = createButton("");
    this.leaderTitle = createElement("h2");
    this.leader1 = createElement("h2");
    this.leader2 = createElement("h2");

  }

  showElements() {

    this.resetTitle.html("Resetar");
    this.resetTitle.position(width/2 + 200, 50);
    this.resetButton.class("resetButton");
    this.resetTitle.class("resetText");
    this.resetButton.position(width/2 + 230, 100);
    this.leaderTitle.html("Ranking");
    this.leaderTitle.class("resetText");
    this.leaderTitle.position(width/3 - 60, 50);
    this.leader1.class("leadersText");
    this.leader2.class("leadersText");
    this.leader1.position(width/3 - 50, 80);
    this.leader2.position(width/3 - 50, 130);

  }

  getState() {

    var gameStateRef = database.ref("gameState");

    gameStateRef.on("value", function (data){
      gameState = data.val();
    })

  }

  update(state) {

    database.ref("/").update({
      gameState: state
    });

  }

  start() {

      player = new Player();
      player.getCount();
      form = new Form();
      form.display();

      car1 = createSprite(width/2 - 50, height - 100);
      car1.addImage ("car1", car1Img);
      car1.scale = 0.07;

      car2 = createSprite(width/2 + 100, height - 100);
      car2.addImage ("car2", car2Img);
      car2.scale = 0.07;

      cars = [car1, car2];
      

  }

  handlrElements(){

    form.esconder();
    form.title.position(40,50);
    form.title.class("gameTitleAfterEffect");

  }

  leaderBoard(){

    var leader1, leader2
    var players = Object.values(allPlayers);
    if((players [0].ranking === 0 && players[1].ranking === 0) || players[0].ranking === 1){

      leader1 = players[0].ranking + "&emsp;" + players[0].name + "&emsp;" + players[0].score;
      leader2 = players[1].ranking + "&emsp;" + players[1].name + "&emsp;" + players[1].score;

      this.leader1.html(leader1);
      this.leader2.html(leader2);

    }

    if(players[1].ranking === 1){

      leader1 = players[1].ranking + "&emsp;" + players[1].name + "&emsp;" + players[1].score;
      leader2 = players[0].ranking + "&emsp;" + players[0].name + "&emsp;" + players[0].score;

      this.leader1.html(leader1);
      this.leader2.html(leader2);


    }
  }

  reset(){

    this.resetButton.mousePressed(() => {
      database.ref("/").set({
        carsAtEnd : 0,
        playerCount : 0,
        gameState : 0,
        players : {}
      });
      window.location.reload();
    })

  }

  play(){

    this.handlrElements();

    this.showElements();
    
    this.reset();

    Player.getPlayerInfo();

    this.leaderBoard();

    if(allPlayers !== undefined){

     image(trackImg, 0, - height * 5, width, height * 6);
     
     var index = 0;

     for(var plr in allPlayers){

      index = index + 1;

      var x = allPlayers[plr].positionX;
      var y = height - allPlayers[plr].positionY;

      cars[index - 1].position.x = x;
      cars[index - 1].position.y = y;

     }
     
    drawSprites();
    }

  }
}
