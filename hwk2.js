<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Penetration Graph</title>
    <style>
        body {
            font-family: Verdana, sans-serif;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        canvas {
            border: 2px solid black;
            margin-bottom: 15px;
        }
        #avgScoreDisplay {
            font-size: 18px;
            font-weight: bold;
            margin: 12px 0;
        }
    </style>
</head>
<body>

<canvas id="mainCanvas" width="900" height="450"></canvas>
<div id="avgScoreDisplay">Average Score: 0.00</div>
<canvas id="barChartCanvas" width="900" height="400"></canvas>

<script>
const mainCanvas = document.getElementById("mainCanvas");
const ctx = mainCanvas.getContext("2d");
const barChartCanvas = document.getElementById("barChartCanvas");
const barChartCtx = barChartCanvas.getContext("2d");

// Canvas dimensions
const canvasWidth = mainCanvas.width;
const canvasHeight = mainCanvas.height;
const barChartHeight = barChartCanvas.height;

// Simulation parameters
const servers = 18; // Number of servers
const attackers = 12; // Number of attackers
const penetrationProb = 0.65; // Probability of penetration
const serverBlockHeight = 25; // Height of each server block
const attackerGapWidth = canvasWidth / (servers + 1); // Width between attackers

const colors = ["blue", "green", "purple", "yellow", "orange", "cyan", "magenta", "red", "lime", "grey", "brown", "lightblue", "violet"];

// Data for average calculation
let levelCounts = new Array(servers).fill(0);
let accumulatedScore = 0;
let countScores = 0;
let avgScore = 0;

// Function to draw the grid
function drawGridLines() {
    ctx.strokeStyle = "#eee";
    ctx.lineWidth = 1;

    for (let i = 0; i <= canvasHeight; i += serverBlockHeight) {
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(canvasWidth, i);
        ctx.stroke();
    }

    for (let i = 0; i <= canvasWidth; i += attackerGapWidth) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, canvasHeight);
        ctx.stroke();
    }

    // Axes
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, canvasHeight);
    ctx.lineTo(canvasWidth, canvasHeight);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(0, canvasHeight);
    ctx.stroke();
}

function plotGraph() {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    levelCounts.fill(0);
    accumulatedScore = 0;
    countScores = 0;
    avgScore = 0;

    drawGridLines();

    for (let i = 0; i < attackers; i++) {
        let posX = (i + 1) * attackerGapWidth;
        let posY = canvasHeight;

        ctx.beginPath();
        ctx.moveTo(posX, posY);
        drawAttackPath(posX, posY, colors[i % colors.length]);
    }

    updateBarChart();
    document.getElementById("avgScoreDisplay").textContent = "Average Penetration Score: " + avgScore.toFixed(2);
}

// Function to draw attack paths
function drawAttackPath(startX, startY, color) {
    let currX = startX;
    let currY = startY;
    let levelReached = 0;

    ctx.strokeStyle = color;
    ctx.lineWidth = 2;

    for (let j = 0; j < servers; j++) {
        const penetrationSuccess = Math.random() < penetrationProb;

        if (penetrationSuccess && currY - serverBlockHeight >= 0) {
            currY -= serverBlockHeight;
            ctx.lineTo(currX, currY);
            levelReached++;
        }

        currX += attackerGapWidth;
        ctx.lineTo(currX, currY);
    }

    if (levelReached > 0) {
        levelCounts[levelReached - 1]++;
        calculateAverage(levelReached);
    }

    ctx.stroke();
}

// Function to calculate the average score
function calculateAverage(level) {
    countScores++;
    avgScore += (level - avgScore) / countScores;
}

// Function to draw the histogram
function updateBarChart() {
    barChartCtx.clearRect(0, 0, canvasWidth, barChartHeight);
    const barWidth = canvasWidth / servers;
    const maxLevelCount = Math.max(...levelCounts);

    for (let i = 0; i < servers; i++) {
        const barHeight = (levelCounts[i] / maxLevelCount) * (barChartHeight - 50);

        barChartCtx.fillStyle = colors[i % colors.length];
        barChartCtx.fillRect(i * barWidth, barChartHeight - barHeight - 30, barWidth - 2, barHeight);

        barChartCtx.fillStyle = "black";
        barChartCtx.fillText(levelCounts[i], i * barWidth + (barWidth / 2) - 10, barChartHeight - barHeight - 35);
    }

    barChartCtx.strokeStyle = "black";
    barChartCtx.beginPath();
    barChartCtx.moveTo(0, barChartHeight - 30);
    barChartCtx.lineTo(canvasWidth, barChartHeight - 30);
    barChartCtx.stroke();

    barChartCtx.beginPath();
    barChartCtx.moveTo(0, 0);
    barChartCtx.lineTo(0, barChartHeight);
    barChartCtx.stroke();
}

plotGraph();
</script>
</body>
</html>
