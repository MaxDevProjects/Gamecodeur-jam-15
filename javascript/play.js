var counter = 0.2;
var time = 1;
var maxTime = 50;
var eventsList;
var gameStart;
var timerText;

var playState = {
    
    
    create: function () {
        //initialiser le jeu
        eventsList = ['new_build', 'human attack pet', 'pet_attack_human', 'forest_burning'];
        timerText = game.add.text(10, 10, "time = 0", { font: '30px monospace', fill: '#ffffff' });
        eventText = game.add.text(10, 35, "event = null", { font: '30px monospace', fill: '#ffffff' });
    },
    new_event:function() {
        var randomEvent = Math.floor(Math.random() * eventsList.length);
        console.log(eventsList[randomEvent]);
        eventText.text = `event = ${eventsList[randomEvent]}`
    },

    timer: function() {
        time = (time + 1 *counter);
        timerText.text = `time = ${Math.floor(time/10)}`;

        if(time >= maxTime + 10){
            time = 0;
            this.new_event();
        }
        
    },
    
    
    update: function () {
        //mise à jour pendant le jeu
        this.timer();
        // this.new_event();
    }
    
};