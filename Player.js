class Player{
    constructor(){
    }
    getCount(){
        var datebaseRef = database.ref("playerCount");
        datebaseRef.on("value", function(data){
            datebaseRef = data.val();
        })
    }
    updateCount(Count){
        database.ref("/").update({
            playerCount : Count
        })
    }
    update(name){
        var playerIndex = "player" + playerCount
        database.ref(playerIndex).set({
            userName : userName
        })
    }
}
