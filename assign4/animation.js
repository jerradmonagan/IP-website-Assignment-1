var canvas;
var laptop = new Image();
var phone = new Image();
var modem = new Image();
var mail = new Image();
var aim = new Image();

  // load all images before continuing
function init() {
  canvas = $('#mainCanvas')[0].getContext("2d");
  var loader = new PxLoader(),
      laptop = loader.addImage('../images/laptop-png-6751.png'),
      phone = loader.addImage('../images/phone.png'),
      modem = loader.addImage('../images/modem.png');
      mail =loader.addImage('../images/Mail-icon.png');
      aim=loader.addImage('../images/AOLIM.png');
  loader.addCompletionListener(function() {
    this.laptop = laptop;
    this.phone = phone;
    this.modem = modem;
    this.mail =mail;
    this.aim =aim;
    run()
  });
  loader.start();
}//end init function
//clears the screen on nthe laptop
function clearScreen(){
  canvas.clearRect(30,205,145,125);
  canvas.fillStyle ='blue';
  canvas.fillRect(30,205,145,125);
}//end clear screen
//connect function connects the user to simulated AOL connection
function connect(){
  canvas.fillStyle ='#41FF00';
  canvas.font='10px serif';
  canvas.fillText('Connecting to America On Line', 30, 215);
  laptopConnection('green');
  setTimeout(function()
  {
    canvas.fillStyle ='#41FF00';
    canvas.font='10px serif';
    canvas.fillText('You got Mail', 30, 225);
    new Audio('../sounds/youGotmail.mp3').play();
    canvas.drawImage(mail, 30, 235, 100,100);
    setTimeout(function()
    {
      clearScreen();
      canvas.drawImage(aim,30,225,20,20);
      canvas.fillStyle ='#41FF00';
      canvas.font='10px serif';
      canvas.fillText('Welcome the the' , 30, 265);
      canvas.fillText('internet of the 1990\'s' , 30, 275);
      setTimeout(function()
      {
        new Audio('../sounds/telephone-ring-01a.mp3').play();
        phoneConnection('green');
        laptopConnection('red');
        clearScreen();
        canvas.fillStyle ='#41FF00';
        canvas.font='10px serif';
        canvas.fillText('You have been disconnected', 30, 215);
        canvas.fillText('Please Try reconnecting', 30, 225);
        setTimeout(function()
        {
          clearScreen();
          laptopConnection('red');
          phoneConnection('red');
        }, 3000);
      }, 6000);
    }, 3000);
  }, 27000);
}//end connect function
function laptopConnection(colorIn){
  canvas.beginPath();
  canvas.lineWidth="5";
  canvas.moveTo(175,340);
  canvas.lineTo(400,300);
  canvas.strokeStyle=colorIn;
  canvas.stroke();
  canvas.closePath();
}
function phoneConnection(colorIn){
  canvas.beginPath();
  canvas.moveTo(600,300);
  canvas.lineTo(840,300);
  canvas.strokeStyle=colorIn;
  canvas.stroke();
  canvas.closePath();
}//end phoneConnection method
function run() {
  canvas.drawImage(laptop, 0, 200, 200,200);
  canvas.fillStyle ='blue';
  canvas.fillRect(30,205,145,125);
  canvas.drawImage(modem, 400, 200, 200, 200);
  canvas.drawImage(phone, 800, 200, 200, 200);
  laptopConnection('red');
  phoneConnection('red');
}//end run function
