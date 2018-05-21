var i = 0;
var j = 0;
var loadingEnd = false;
var loading;
var startButton;
var loadState = {

    preload : function() {
        loading = game.add.text(10, 10, "loading...0%", { font: '30px monospace', fill: '#ffffff'});

        game.load.image('startButton', 'assets/buttons/orange-button.png');

        
    },
    
    update : function() {
        i = i + 1 * 0.5;
        //console.log(i);            
        loading.text = `loading...${Math.floor(i)}%`
        if(i >= 99){
            i =100;
            j++;
            //console.log(j);           
            if(j >= 50){
                loadingEnd = true;
                this.create();
            }
        }
    },
    
    create : function() {
        //keep loading state fiew seconds
        if(loadingEnd == true){
            game.state.start("menu");
        }
    }
};