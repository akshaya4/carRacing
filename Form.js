class Form{
    constructor(){
    }
    display(){
        var title = createElement("h2");
        title.html("Car Racing Game");
        title.position(500,30);
        var input = createInput("name");
        var button = createButton("join here");
        var greeting = createElement("h1");
        input.position(530,160);
        button.position(600,250);
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var userName = input.value();
            playerCount += 1;
            player.update(form);
            player.updateCount(playerCount);
            greeting.html("Hello" + userName);
            greeting.position(530,160);
        })
    }
}