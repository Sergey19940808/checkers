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
        create: create,
        update: update
    }
};


const game = new Phaser.Game(config);

function preload() {
    this.load.image('white_checker', 'assets/images/white_checker.png');
    this.load.image('black_checker', 'assets/images/black_checker.png');
    this.load.image('board', 'assets/images/chessboard.jpg');
};

function create() {
    // create board and ball
    this.add.image(600, 310, 'board');
    let checker = this.physics.add.staticGroup();
    
    for(let i = 373; i < 800; i += 130) {
        // white checker
        checker.create(i, 75, 'white_checker');
        checker.create(i + 65, 142, 'white_checker');
        checker.create(i, 208, 'white_checker');

        // black checker
        checker.create(i + 65, 410, 'black_checker');
        checker.create(i, 475, 'black_checker');
        checker.create(i + 65, 540, 'black_checker');
    }

    checker.inputEnabled = true;

};

function update() {
     
};

function print() {
    console.log('HELLO');
};