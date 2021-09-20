class Player{
    constructor(){
        this.name= null
        this.index = null
        
    }

    addPlayer() {
        var playerIndex = "players/player"+this.index;
        database.ref(playerIndex).set({
            name:this.name
        });
    }
    updateCount(count){
        database.ref("/").update({
            playercount:count
        })
    }
}
