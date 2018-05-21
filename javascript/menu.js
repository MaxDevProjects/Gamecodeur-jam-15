var group;
var startText;
var gameName;
var tweenButton;
var tweenText;
var menuState = {
    
    create : function() {
        
        this.game.stage.backgroundColor = "#24783a";
        gameName = game.add.text(game.world.centerX, game.world.centerY - 250, '-Gestion / Simulation-', { font: '75px monospace', fill: '#000000'});
        gameName.anchor.setTo(0.5);

        startButton = game.add.button(game.world.centerX, game.world.height - 80, 'startButton', this.actionOnClick, this, 2, 1, 0);        
        startButton.anchor.setTo(0.5);
        startButton.scale.setTo(2.5);
        
        startText = game.add.text(game.world.centerX, game.world.height - 80, 'Start', { font: '50px monospace', fill: '#ffffff' });
        startText.anchor.setTo(0.5);

        startText.stroke = '#000000';
        startText.strokeThickness = 8;
        startText.fill = '#e8b535';
        
        // startButton.alpha = 1;
        // startText.alpha = 1;
        
        // tweenButton = game.add.tween(startButton).to({ alpha: 1 }, 1000, "Linear", true, 0, -1);
        // tweenText = game.add.tween(startText).to({ alpha: 1 }, 1000, "Linear", true, 0, -1);
        // game.add.tween(gameName).to( { y: game.world.centerY - 200}, 3000, Phaser.Easing.Bounce.Out, true);
        
        // tweenButton.yoyo(true, 1000);
        // tweenText.yoyo(true, 1000);        
        

        // group = game.add.group();

        // group.add(startButton);
        // group.add(startText);
    },

    actionOnClick : function () {
        game.state.start('play');
        game.world.remove(startButton);
        game.world.remove(startText);        
    },

    start : function() {
        game.state.start('play');

        console.log('play');
    }

};