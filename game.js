class Game {
    constructor() {
        this.playButton = createImg("assets/frog.png");
        this.playButton2 = createImg("assets/dog.png");
        this.playButton3 = createImg("assets/penguin.png")

    this.greeting = createElement("h2");
    }
  
    start() {
      
        this.playButton.position(width / 2 - 90, height / 2 - 20);
        this.playButton.size(100,100);

        this.playButton2.position(width / 2 +90, height / 2 +20);
        this.playButton2.size(100,100);

        this.playButton2.position(width / 2 +90, height / 2 +50);
        this.playButton2.size(100,100);


        this.greeting.position(width / 2 , height / 2);

        var message = `Welcome to study time<br>Choose your pet !!!`;
        this.greeting.html(message);

        this.handleMousePressed();
        this.handleMousePressed1();
        this.handleMousePressed2();
    }
    hide() {
        this.greeting.hide();
        this.playButton.hide();
      
      }

  handleMousePressed() {
    this.playButton.mousePressed(() => {
     
      this.playButton.hide();
      this.playButton3.hide();      
      this.playButton2.hide();
      this.greeting.hide();
      gameState = 1;
      frog.visible = true;
    });
}

handleMousePressed1() {
    this.playButton2.mousePressed(() => {
     
      this.playButton2.hide();
      this.playButton3.hide();
      this.playButton.hide();
      this.greeting.hide();
      gameState = 1;
     // bunny.x=100;
      dog.visible = true;
    });
}

handleMousePressed2() {
  this.playButton3.mousePressed(() => {
   
    this.playButton3.hide();
    this.playButton2.hide();
    this.playButton.hide();
    this.greeting.hide();
    gameState = 1;
    //bunny.x=100;
    penguin.visible = true;
  });
}

}