var friendNames = ["Aaron", "Hunter", "Jillian", "Ryan", "Connor"];
var locationNames = ["Pool room", "Bathroom", "Office", "Theatre", "Hallway", "Den", "Kitchen", "Garage", "Backyard", "Anime Shrine"]
var weaponNames = ["a brick", "a hammer", "a rock", "a lamp", "subtweeting", "bad sushi", "toxic masculinity", "poison shoelaces", "a bad Yelp review", "yahoo answers", "tiktok fame", "some instagram clout", "a mystery-flavored gatorade", "stale memes", "a boneless coffee", "the 7 Chaos Emeralds", "a shrink ray", "a samurai sword", "the electric triangle", "4 exploding geese", "a trojan virus", "console.logging everything", "morning breath", "27 shots of expresso"]



var count = 100;
function clickHandler(index) {
    return function (e) {
       
        var accNum = e.target.innerText
        alert(accNum + ": I think " + friendNames[index % friendNames.length] + " did it in the " + locationNames[index % locationNames.length] + " with " + weaponNames[index % weaponNames.length])
    }
}

for (var i = 1; i < 101; i++) {
    var accusation = document.createElement('h3', 'ul');
    var list = document.createElement('li');
    var text = document.createTextNode('accusation ' + i);
    list.appendChild(text);
    accusation.appendChild(list);
    document.body.appendChild(accusation);

    accusation.addEventListener("click", clickHandler(i));
}






    // function fuck() {
    //     let fuck = 'FUCK';
    //     for (var i = 0; i < Friends.length; i++) {
    //         console.log(Friends[i])
    //     }

    //     return function () {
    //         return fuck;
    //     }
    // }

    // // console.log(fuck()());

    // let test = fuck();

    // // alert(test());

