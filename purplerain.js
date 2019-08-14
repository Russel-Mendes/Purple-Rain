var canvas = document.querySelector('canvas');

var scalar = 1;

canvas.width = window.innerWidth * scalar;
canvas.height = window.innerHeight * scalar;
let ctx = canvas.getContext('2d');

function random(lower_bound, upper_bound){
    return Math.floor(Math.random()* upper_bound) + lower_bound
}

function Drop(){
    this.x = random(0,canvas.width);
    this.y = random(0, canvas.height);
    //this.width = random(1,5);
    this.height = random(1,8);
    this.fall_speed = random(1,3);

    this.show = function(){
        ctx.beginPath();
        ctx.strokeStyle = 'BlueViolet ';
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x, this.y + this.height);
        ctx.stroke();
        //ctx.rect(this.x, this.y, this.width, this.height);
        ctx.stroke();
    }

    this.update = function(){
        this.y += this.fall_speed;
        this.show();
    }


}





var drops = [];  
for (var i = 0; i < 500; i++) {
    drops[i] = new Drop();
  }

  let counter = 0;
function animate(){
    requestAnimationFrame(animate);
    ctx.clearRect(0,0, canvas.width, canvas.height);

    if(counter <6000){
        for (var i = 0; i < drops.length; i++) {
            drop = drops[i];
            drop.update();
            if(drop.y > canvas.height){
                drop.y -=canvas.height;
            }
        }
        console.log("I am called");

     

    }
    
    counter++;
    


}

animate();

