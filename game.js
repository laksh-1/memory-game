var seq = [];
var newSeq = [];
var count = 0;
var start = false;


$(document).on("keypress", function () {
    if (start == false) {
        nextSeq(true);
        start = true;
        $("h1").text("Great! Keep Going!");
    }
});

function compareSeq(a, b) {
    if (a.length != b.length)
        return false;
    for (var i = 0; i < a.length; i++) {
        if (a[i] != b[i]) {
            return false;
        }
    }

    return true;
}

function nextSeq(flag) {
    if (flag == false) {
        var audio = new Audio('sounds/wrong.mp3');
        audio.play();
        $("h1").text("Game Over!");
        seq = [];
    } else {
        newSeq = [];
        count = 0;
        var randNum = Math.floor(Math.random() * 4);
        seq.push(randNum);
        if (randNum == 0) {
            $(".green").animate({
                opacity: 0.5
            }).animate({
                opacity: 1
            });
        } else if (randNum == 1) {
            $(".red").animate({
                opacity: 0.5
            }).animate({
                opacity: 1
            });
        } else if (randNum == 2) {
            $(".yellow").animate({
                opacity: 0.5
            }).animate({
                opacity: 1
            });
        } else {
            $(".blue").animate({
                opacity: 0.5
            }).animate({
                opacity: 1
            });
        }
    }

    console.log(seq);
}

$("#green").on("click", function () {
    var audio = new Audio('sounds/green.mp3');
    audio.play();
    console.log("0");
    newSeq.push(0);
    count++;
    if (seq[count - 1] != newSeq[count - 1] || seq.length == 0) {
        nextSeq(false);
    }
    if (count == seq.length) {
        nextSeq(true);
    }
})

$("#red").on("click", function () {
    var audio = new Audio('sounds/red.mp3');
    audio.play();
    console.log("1");
    newSeq.push(1);
    count++;
    if (seq[count - 1] != newSeq[count - 1] || seq.length == 0) {
        nextSeq(false);
    }
    if (count == seq.length) {
        nextSeq(true);
    }
})

$("#yellow").on("click", function () {
    var audio = new Audio('sounds/yellow.mp3');
    audio.play();
    console.log("2");
    newSeq.push(2);
    count++;
    if (seq[count - 1] != newSeq[count - 1] || seq.length == 0) {
        nextSeq(false);
    }
    if (count == seq.length) {
        nextSeq(true);
    }
})

$("#blue").on("click", function () {
    var audio = new Audio('sounds/blue.mp3');
    audio.play();
    console.log("3");
    newSeq.push(3);
    count++;
    if (seq[count - 1] != newSeq[count - 1] || seq.length == 0) {
        nextSeq(false);
    }
    if (count == seq.length) {
        nextSeq(true);
    }
})