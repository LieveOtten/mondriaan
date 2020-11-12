
  function setup() {
    createCanvas(800,800);
    background(250);
  
    // BLAUW VIERKANT//
    noStroke();
    fill(9, 90, 156);
    rect(0, 665, 100, 135);
  
    //GELE VIEKANT//
    noStroke();
    fill(254, 214, 101);
    rect(750, 725, 50, 75);
  
    //RODE VIERKANT//
    noStroke();
    fill(214, 26, 23);
    rect(100, 0, 700, 665);
  
    //LIJNEN VERTICAAL//
    stroke(0);
    strokeWeight(20);
    line(100, 0, 100, 900);
  
    stroke(0);
    strokeWeight(20);
    line(750, 665, 750, 900);
    
    //LIJNEN HORIZONTAAL//
    stroke(0);
    strokeWeight(20);
    line(90, 320, 0, 320)
  
    stroke(0);
    strokeWeight(20);
    line(800, 660, 0, 660)
  
    stroke(0);
    strokeWeight(20);
    line(800, 725, 755, 725)
  
   
  }
  
  function draw() {
    // put drawing code here
  }  