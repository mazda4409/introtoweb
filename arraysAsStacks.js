var friends = ["Aneki", "Quell", "Clarity", "Sleepy", "Roghar", "DM Crimson"];

var team1 = new Array();
var team2 = new Array();

for (var i = 0; i < friends.length; i++) {
    if (i % 2 == 0) {
        // if the index is even, add the person to team 1
        team1[team1.length] = friends[i];
    } else {
        // otherwise add them to team 2
        team2[team2.length] = friends[i];
    }
}
