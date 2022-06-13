class Form {
  constructor() {
    
    this.input = createInput('').attribute("placeholder", "Digite seu nome");
    this.button = createButton('Play');
    this.greeting = createElement('h3');
    this.title = createImg('./assets/TITULO.png');

  }

  setElementsPosition(){

    this.title.position(120, 50);
    this.input.position(width/2 - 110, height/2 - 80);
    this.button.position(width/2 - 90, height/2 - 20);
    this.greeting.position(width/2 - 300, height/2 - 100);

  }

  setElementsStyle(){

    this.title.class("gameTitle");
    this.input.class("customInput");
    this.button.class("customButton");
    this.greeting.class("greeting");

  }

  esconder(){

    this.greeting.hide();
    this.button.hide();
    this.input.hide();

  }

  randomMousePressed() {

    this.button.mousePressed( () => {

      this.input.hide();

      this.button.hide();

      player.name = this.input.value();
      playerCount += 1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);

      this.greeting.html('Hello ' + player.name);
      

    })
  }

  display(){

    this.setElementsPosition();
    this.setElementsStyle();
    this.randomMousePressed();

  }
}
