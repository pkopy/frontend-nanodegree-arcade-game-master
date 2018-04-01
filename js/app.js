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

class Enemy {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.sprite = 'images/enemy-bug.png';
    }
    update(dt) {
        
    }
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}

const enemy1 = new Enemy(0,0);
const enemy2 = new Enemy(0,1);
const enemy3 = new Enemy(0,2);
const allEnemies = [enemy1, enemy2, enemy3]
console.log(enemy1)
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player {
    constructor(look = 0, x, y) {
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
        this.x = x;
        this.y = y;
        
    }
    update() {

    }
    render() {
        ctx.drawImage(Resources.get(this.look), this.x, this.y);

    }
    handleInput(input) {
        switch(input) {
            case 'left':
            this.x -= 100;
            this.render();
            break;
            case 'right':
            this.x += 100;
            this.render();
            break;
            case 'up':
            this.y -= 85;
            this.render();
            break;
            case 'down':
            this.y += 85;
            this.render();
            break;
        }

    }
}
const player = new Player(2,100,400);
console.log(player)
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
console.log(allowedKeys[e.keyCode])
    player.handleInput(allowedKeys[e.keyCode]);
});
