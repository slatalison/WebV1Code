//cup frame
let w = window.innerWidth * 0.95;
let h = window.innerHeight * 0.8;
let cupWidth = 90;
let cupHeight = 160;
// let cupInterval = 15;


//bubbles
let gravity;
let drops = [];
// let gravitySlider;
// let sizeSlider;
// let tensionSlider;
// let frictionSlider;

let data;



for (i = 0; i < 7; i++) {
    $('#cupCanvas').append('<div class = cups id="cup' + i + '" />');
}
$('.cups')
    .width(cupWidth)

for (i = 0; i < 7; i++) {
    $('#cup' + i).append('<div class = innerCups id="innerCup' + i + '" />');
    $('#innerCup' + i)
        .height(cupHeight)
        .width(cupWidth)


}

dataTotal = [
    [7.567, 4, 1.683, 5.1, 10.783],
    [8.217, 11.5, 3.033, 5.2, 19.733],
    [7.983, 9.5, 5.567, 3.567, 18.634],
    [8.617, 10, 7, 2.783, 19.783],
    [9.5, 12, 4.5, 7.5, 24],
    [8.75, 14.5, 3, 8, 25.5],
    [6.633, 8, 0.75, 1.95, 10.7]
];

dataSleep = [7.567, 8.217, 7.983, 8.617, 9.5, 8.75, 6.633];
dataMore = [10.783, 19.733, 18.634, 19.783, 24, 25.5, 10.7];



function setup() {
    select("#cup6").child(createCanvas(cupWidth, h - dataSleep[6] * 20));
    for (let i = 0; i < dataMore[6] * 12; i++) {
        drops.push(new Drop());
    }
    noStroke();
}

function draw() {
    background(0, 25, 51);

    gravity = createVector(0, 0.5);
    dropSize = dataMore[6] * 1.5;
    repulsionForce = 0.8;
    friction = 0.8;

    drops.forEach(drop => {
        drop.applyForce(gravity);
        drops.forEach(otherDrop => {
            drop.applyForce(drop.interaction(otherDrop));
        });

        drop.show();
        drop.update();
    });
}