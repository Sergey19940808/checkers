const config = {
    type: Phaser.AUTO,
    width: 1280,
    height: 620,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create
    }
};


const game = new Phaser.Game(config);
const indexBlack = [4, 5, 6, 10, 11, 12, 16, 17, 18, 22, 23, 24]

function preload() {
    this.load.image('white_checker', 'assets/images/white_checker.png');
    this.load.image('black_checker', 'assets/images/black_checker.png');
    this.load.image('board', 'assets/images/chessboard.jpg');
};

function create() {
    // create board and ball
    this.add.image(600, 310, 'board');
    
    for(let i = 373; i < 800; i += 130) {
        // white checker
        this.add.sprite(i, 75, 'white_checker');
        this.add.sprite(i + 65, 142, 'white_checker');
        this.add.sprite(i, 208, 'white_checker');

        // black checker
        this.add.sprite(i + 65, 410, 'black_checker');
        this.add.sprite(i, 475, 'black_checker');
        this.add.sprite(i + 65, 540, 'black_checker');
    }

    // add handler event
    for(let i = 1; i < this.children.list.length; ++i) {
        this.children.list[i].i = i;
        this.children.list[i].setInteractive();
        if (indexBlack.indexOf(i) == -1) this.children.list[i].on('pointerdown', (pointer) => pointerDown.call(this, pointer, this.children.list[i]));
        else this.children.list[i].on('pointerdown', (pointer) => pointerUp.call(this, pointer, this.children.list[i]));
    }
};

// handlers
function pointerDown(pointer, sprite) {
    setTimeout(()=> { sprite.y += 65}, 400);
    setTimeout(()=> {sprite.x += 65}, 400);
};

function pointerUp(pointer, sprite) {
    setTimeout(()=> { sprite.y -= 65}, 400);
    setTimeout(()=> {sprite.x -= 65}, 400);
}