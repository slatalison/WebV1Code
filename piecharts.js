let bigPieD = 160;
let smallPieD = 120;
let XSPieD = 75;
let clickSwitch = 0;

let marginLeft = 360;
let interval = 250;
let piePosXDelta = [0, interval, 2 * interval, 3 * interval, 0, interval, 2 * interval];
let piePosYLine1 = 230;
let piePosYLine2 = 460;
let piePosY = [piePosYLine1, piePosYLine1, piePosYLine1, piePosYLine1, piePosYLine2, piePosYLine2, piePosYLine2];


for (i = 0; i < 7; i++) {
    $('body').append('<div class = masking id="masking' + i + '" />');
    $('#masking' + i + '')
        .offset({ top: piePosY[i] - 34, left: piePosXDelta[i] + marginLeft - 34 })
}
$('.masking')
    .prepend('<img class = maskImg src="mask.png" />');

for (i = 0; i < 7; i++) {
    $('body').append('<div class = rings id="ring' + i + '" />');
    $('#ring' + i + '')
        .offset({ top: piePosY[i] - 75, left: piePosXDelta[i] + marginLeft - 75 })
}
$('.rings')
    .prepend('<img src="ring.png" />');

let dataTotal = [
    [113.505, 161.745, 84.75],
    [123.255, 236.745, 0],
    [119.745, 240.255, 0],
    [129.255, 230.745, 0],
    [142.5, 217.5, 0],
    [131.25, 228.75, 0],
    [99.495, 160.5, 100.005]
];

let dataMore = [
    [0],
    [59.25],
    [39.255],
    [66],
    [142.5],
    [153.75],
    [0]
];

let dataScreen = [
    [133.54, 56.19, 170.27],
    [209.8, 55.33, 94.87],
    [183.54, 107.55, 68.92],
    [181.97, 127.38, 50.64],
    [180, 67.5, 112.5],
    [204.71, 42.35, 112.94],
    [269.16, 25.23, 65.61]
]

// let dataSleep = [7.567, 8.217, 7.983, 8.617, 9.5, 8.75, 6.633];
// let dataSleepPercent = [31.529, 34.238, 33.263, 35.904, 39.583, 36.458, 27.638];
// let dataMore = [10.783, 19.733, 18.634, 19.783, 24, 25.5, 10.7];


function setup() {
    createCanvas(1448, 693);
    noStroke();
    noLoop(); // Run once and stop
}

function draw() {
    background(15, 15, 15);

    for (let i = 0; i < 7; i++) {
        pieChart(dataTotal[i], piePosXDelta[i] + marginLeft, piePosY[i]);
        pieChartSmall(dataMore[i], piePosXDelta[i] + marginLeft, piePosY[i]);
        pieChartXS(dataScreen[i], piePosXDelta[i] + marginLeft, piePosY[i]);
    }



    fill(244, 193, 69);
    textSize(13);
    rect(1030, 380, 15, 15);
    fill(255);
    text('Sleep, eat and exercise', 1060, 391);

    fill(222, 116, 173);
    rect(1030, 415, 15, 15);
    fill(255);
    text('Screen time, sum', 1060, 426);

    fill(20, 71, 20);
    rect(1030, 450, 15, 15);
    fill(255);
    text('Others', 1060, 461);

    fill(255, 85, 0);
    rect(1030, 485, 15, 15);
    fill(255);
    text('Screen time exceeding 24h', 1060, 496);

    fill(47, 6, 252);
    rect(1030, 520, 15, 15);
    fill(255);
    text('Screen time in detail', 1060, 531);

}

function pieChart(data, posX, posY) {
    let lastAngle = 0;
    for (let i = 0; i < data.length; i++) {

        let colors = [color(244, 193, 69), color(222, 116, 173), color(20, 71, 20)];
        fill(colors[i]);

        arc(
            posX,
            posY,
            bigPieD,
            bigPieD,
            lastAngle,
            lastAngle + radians(data[i])
        );
        fill(15, 15, 15);
        ellipse(posX, posY, bigPieD - 25);
        lastAngle += radians(data[i]);
    }
}

function pieChartSmall(data, posX, posY) {
    let lastAngle = 0;
    for (let i = 0; i < data.length; i++) {
        fill(255, 85, 0);
        arc(
            posX,
            posY,
            smallPieD,
            smallPieD,
            lastAngle,
            lastAngle + radians(data[i])
        );
        fill(15, 15, 15);
        ellipse(posX, posY, smallPieD - 25);
        lastAngle += radians(data[i]);
    }

}

function pieChartXS(data, posX, posY) {
    let lastAngle = 0;
    for (let i = 0; i < data.length; i++) {
        let color = map(i, 0, data.length, 0, 255);
        fill(47, color, 252);
        arc(
            posX,
            posY,
            XSPieD,
            XSPieD,
            lastAngle,
            lastAngle + radians(data[i])
        );
        lastAngle += radians(data[i]);
    }
}