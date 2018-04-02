// Enemies our player must avoid
// var Enemy = function() {
//     // Variables applied to each of our instances go here,
//     // we've provided one for you to get started

//     // The image/sprite for our enemies, this uses
//     // a helper we've provided to easily load images
//     this.sprite = 'images/enemy-bug.png';
// };

// // Update the enemy's position, required method for game
// // Parameter: dt, a time delta between ticks
// Enemy.prototype.update = function(dt) {
//     // You should multiply any movement by the dt parameter
//     // which will ensure the game runs at the same speed for
//     // all computers.
// };

// // Draw the enemy on the screen, required method for game
// Enemy.prototype.render = function() {
//     ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
// };

/*
 * every enemy has 3 attribute, pos x, pos y and dt a time delta between ticks
 * in this case dt is a random from 0 to 10, but dt maybe be also set while  
 * create object
 * 
 */
let speed = 1;
const playerImages = [
    'images/char-boy.png',
    'images/char-cat-girl.png',
    'images/char-horn-girl.png',
    'images/char-pink-girl.png',
    'images/char-princess-girl.png'
];

class Enemy {
    constructor(x, y, dt = Math.floor(Math.random()*10+1)) {
        this.x = x;
        this.y = y;
        this.dt = dt;
        this.sprite = 'images/enemy-bug.png';
    }
    update(dt) {
        this.x +=  speed * this.dt;
        if(this.x >=505) {
            this.x = -100;
            this.dt = Math.floor(Math.random()*10+1)
        }
    }
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}

const enemy1 = new Enemy(0,60);
const enemy2 = new Enemy(0,140);
const enemy3 = new Enemy(0,220);
const allEnemies = [enemy1, enemy2, enemy3]

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player {
    constructor(look = 0, x, y) {
        this.look = this.changeLook(look);
        this.x = x;
        this.y = y;
        
    }
    changeLook(look) {
        switch(look){
            case 0:
            this.look = 'images/char-boy.png';
            break;
            case 1:
            this.look = 'images/char-cat-girl.png';
            break;
            case 2:
            this.look = 'images/char-horn-girl.png';
            break;
            case 3:
            this.look = 'images/char-pink-girl.png';
            break;
            case 4:
            this.look = 'images/char-princess-girl.png';
            break;
        }
        return this.look;
    }
    update() {
        this.render(); 

    }
    render() {
        ctx.drawImage(Resources.get(this.look), this.x, this.y);
    }
    

    /*
     * handleinput moves player on the board, and prevent him from leaving the game place 
     */

    handleInput(input) {
        switch(input) {
            case 'left':
            if (this.x > 0){
                this.x -= 100;   
            }
            break;
            case 'right':
            if (this.x < 399){
                this.x += 100;    
            }
            break;
            case 'up':
            if (this.y > 0){
                this.y -= 85;    
            }
            break;
            case 'down':
            if (this.y < 399){
                this.y += 85;    
            }
            break;
        }

    }
}
const player = new Player(0,200,400);

 


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.

