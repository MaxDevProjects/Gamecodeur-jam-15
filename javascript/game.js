var __width_Size = "100%";
var __height_Size = "100%";

var game = new Phaser.Game(__width_Size , __height_Size, Phaser.AUTO, 'content', { preload: preload, create: create, update: update, render: render });


function preload() {

}

function create() {

}

function update() {
    
}

function render() {
}


game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('play', playState);
game.state.add('win', winState);
game.state.add('gameOver', gameOverState);

game.state.start('boot');