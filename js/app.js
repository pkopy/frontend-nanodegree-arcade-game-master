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

const enemyImages = [
    'images/enemy-bug.png',
    'images/enemy-walec2a.png'
]
const lines = {
    line0: true,
    line1: true,
    line2: true
}
let positionEnemy = 0;

class Enemy {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.dt = Math.floor(Math.random() * 10 + 1);
        this.collision = false;
        this.sprite = 'images/enemy-bug.png';
    }
    update() {
        let line;
        this.isCollison();
        this.isCollisionEnemy();
        const posY = [60, 145, 230, 600];
        const posX = [-100, -200 , -400, -600]
        this.x += speed * this.dt;
        // i = Math.floor(Math.random() * 4);
        // line = 'line' + i;
        // if(this.x >= 120 && this.x <=150) {

        //     // console.log(lines[line]);
        //     lines[line] = false

        // }

        if (this.x >= 505) {
            this.y = posY[positionEnemy];
            this.x = posX[positionEnemy];
            positionEnemy++;
            if (positionEnemy > posY.length - 1) {
                positionEnemy = 0;
            }
            this.sprite = enemyImages[Math.floor(Math.random() * 2)]
            this.dt = Math.floor(Math.random() * 6 + 1)
            console.log(this)
        }

    }
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
    isCollison() {
        if (this.x >= player.x - 70 && this.x <= player.x + 50 && this.y === player.y) {
            this.dt = 0;
            const hearts = document.querySelector('.lives ul')
            if(hearts.lastElementChild){
                hearts.removeChild(hearts.lastElementChild)
            }
            this.collision = true;
        }
    }
    
    //This function prevent to collision enemies
    isCollisionEnemy() {
        allEnemies.forEach(enemy => {
            if ((this.x > enemy.x - 200 && this.x <= enemy.x + 10 && this.y === enemy.y) && this.x < enemy.x - 90) {
                enemy.dt  = this.dt
            }    
        });
    }
}

const enemy1 = new Enemy(-100, 60);
const enemy2 = new Enemy(-100, 145);
const enemy3 = new Enemy(-100, 230);
const enemy4 = new Enemy(-100, 600)
const enemy5 = new Enemy(-100, 600)
const enemy6 = new Enemy(-100, 600)
const allEnemies = [enemy1, enemy2, enemy3, enemy4, enemy5]

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


class Player {
    constructor(look = 0, x, y) {
        this.look = this.changeLook(look, playerImages);
        this.x = x;
        this.y = y;
        this.lives = 3;
        this.points = 0;

    }
    changeLook(look, array) {
        this.look = array[look]
        return this.look;
    }

    update() {
        this.render();
        this.getGoodItem();
    }

    render() {
        ctx.drawImage(Resources.get(this.look), this.x, this.y);
    }

    adPoints() {
        if (this.y > -25 && this.y < 240) {
            this.points += 10;
        }
    }
    getGoodItem() {
        // console.log(this.x + " " + this.y)
        allItems.forEach(item => {
            if (this.x + 25 === item.x && this.y + 55 === item.y) {
                item.x = 1000;
                this.points += item.points;
            }

        })
    }



    /*
     * handleinput moves player on the board, and prevent him from leaving the game place 
     */

    handleInput(input) {
        switch (input) {
            case 'left':
                if (this.x > 0) {
                    this.x -= 100;
                    this.adPoints();
                }
                break;
            case 'right':
                if (this.x < 399) {
                    this.x += 100;
                    this.adPoints();
                }
                break;
            case 'up':
                if (this.y > 0) {
                    this.y -= 85;
                    this.adPoints();
                }
                break;
            case 'down':
                if (this.y < 399) {
                    this.y += 85;
                    this.adPoints();
                }
                break;
        }

    }
}

/* 
 * Goodies on board
 */

class GoodItem {
    constructor(look = 0, x, y, points) {
        this.x = x;
        this.y = y;
        this.points = points;
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

const player = new Player(0, 200, 400);
const item1 = new GoodItem(0, 325, 285, 400)
const allItems = [item1]
console.log(player)
