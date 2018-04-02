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

const goodItems = [
    'images/Gem-Blue-small.png',
    'images/Gem-Green-small.png',
    'images/Gem-Orange-small.png'
];

class Enemy {
    constructor(x, y, dt = Math.floor(Math.random()*10+1)) {
        this.x = x;
        this.y = y;
        this.dt = dt;
        this.sprite = 'images/enemy-bug.png';
    }
    update(dt) {
        const posY = [60, 140, 220]
        this.x +=  speed * this.dt;
        if(this.x >=505) {
            this.x = -100;
            this.y = posY[Math.floor(Math.random()*3)];
            // this.sprite = playerImages[Math.floor(Math.random()*5)]
            this.dt = Math.floor(Math.random()*10+1)
        }
    }
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}

const enemy1 = new Enemy(-100,60);
const enemy2 = new Enemy(-100,140);
const enemy3 = new Enemy(-100,220);
const enemy4 = new Enemy(-100, 60)
const enemy5 = new Enemy(-100, 140)
const enemy6 = new Enemy(-100, 220)
const allEnemies = [enemy1, enemy2, enemy3, enemy4]

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player {
    constructor(look = 0, x, y) {
        this.look = this.changeLook(look, playerImages);
        this.x = x;
        this.y = y;
        this.points = 0;
        
    }
    changeLook(look, array) {

        this.look = array[look]
        return this.look;
    }
    update() {
        this.render(); 
    }
    render() {
        ctx.drawImage(Resources.get(this.look), this.x, this.y);
    }
    
    adPoints() {
        if (this.y > -25 && this.y < 240) {
            this.points += 10;
        }
    }

    /*
     * handleinput moves player on the board, and prevent him from leaving the game place 
     */

    handleInput(input) {
        switch(input) {
            case 'left':
            if (this.x > 0){
                this.x -= 100; 
                this.adPoints();  
            }
            break;
            case 'right':
            if (this.x < 399){
                this.x += 100; 
                this.adPoints();     
            }
            break;
            case 'up':
            if (this.y > 0){
                this.y -= 85;  
                this.adPoints();    
            }
            break;
            case 'down':
            if (this.y < 399){
                this.y += 85; 
                this.adPoints();     
            }
            break;
        }

    }
}

class GoodItem {
    constructor (look = 0, x, y) {
        this.x = x;
        this.y = y;
        this.look = this.changeLook(look, goodItems)
    }
    changeLook(look, array) {

        this.look = array[look]
        return this.look;
    }

    update() {
        this.render(); 
    }
    render() {
        ctx.drawImage(Resources.get(this.look), this.x, this.y);
    }
}
const player = new Player(0,200,400);
const item1 = new GoodItem(0, 325, 200)
console.log(item1)
// ;
 


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.

