let numberOfBalls = [];

class Balls {
    
    container = document.getElementById('outerBox');
    constructor(speed){
        this.speed = parseInt(speed);   
        this.topWise = Math.floor(Math.random() * 470);
        this.leftWise = Math.floor(Math.random() * 470) ;
        this.towardsLeft = true;
        this.towardsTop = true;
    }
    
    selectColor() {
        this.colors = ['red','blue','green','yellow','orange','pink','black','cyan','white','indigo']; 
        return this.colors[Math.floor(Math.random() * 10)];
    }

    createBall(){
        this.div = document.createElement('div');
        this.div.className = 'ball';
        this.div.style.left = this.leftWise + 'px';
        this.div.style.top = this.topWise + 'px';
        this.div.style.backgroundColor = this.selectColor();
        this.container.appendChild(this.div);    
    }

    moveBall(ball){
        if(ball.leftWise < 470 && ball.towardsLeft) {
            (ball.leftWise + ball.speed >= 470) ? ball.leftWise = 470  : ball.leftWise+=ball.speed;
        }
        else{
            ball.towardsLeft = false;
            if(ball.leftWise - ball.speed <= 0) ball.towardsLeft = true;
            (!(ball.leftWise - ball.speed <= 0)) ?  ball.leftWise -= ball.speed : ball.leftWise = 0;
        } 
       
        if(ball.topWise  < 470 && ball.towardsTop) {
            (ball.topWise + ball.speed >= 470) ? ball.topWise = 470 : ball.topWise+=ball.speed;
        }
        else{
            ball.towardsTop = false;
            if(ball.topWise - ball.speed <= 0) ball.towardsTop = true;
            (!(ball.topWise - ball.speed <= 0))? ball.topWise-=ball.speed : ball.topWise = 0;
        } 

        this.div.style.top = ball.topWise + "px";
        this.div.style.left = ball.leftWise + "px";
    }

    start(option) { 
        //console.log(option);
        setInterval( function() { option.moveBall(option); } ,100);
    }
}

let numberOfBallsInput = prompt("Enter the number of balls?","3");
for(let i=0 ; i < numberOfBallsInput ; i++){
    let speedInput = prompt("Enter the speed of Ball " + (i+1) + " ? (Ex :- 1x,2x,3x,...,10x) ","2");
    numberOfBalls[i] = new Balls(speedInput);
    numberOfBalls[i].createBall();
    numberOfBalls[i].start(numberOfBalls[i]);
    console.log(numberOfBalls[i]);
}