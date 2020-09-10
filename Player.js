class Player{
    constructor(){
    }
    getCount(){
        var dateBaseRef = dataBase.ref("playerCount");
        dateBaseRef.on("value", function(data){
            dateBaseRef = data.val();
        })
    }
    updateCount(Count){
        dataBase.ref("/").update({
            playerCount : Count
        })
    }
    update(name){
        var playerIndex = "player" + playerCount
        dataBase.ref(playerIndex).set({
            name : name
        })
    }
}