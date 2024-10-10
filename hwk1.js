<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Grafico di Penetrazione Personalizzato</title>
    <style>
        body {
            font-family: 'Courier New', Courier, monospace; /* Cambiato font globale */
            display: flex;
            flex-direction: column;
            align-items: center;
            background-color: #f0f0f0;
        }
        canvas {
            border: 2px solid #444; /* Colore più scuro per il bordo del canvas */
            margin-bottom: 10px;
            background-color: #ffffff; /* Sfondo bianco per il canvas */
        }
        #averageScore {
            font-size: 18px;
            font-weight: bold;
            margin: 10px 0;
            color: #00509E; /* Cambiato colore del testo */
        }
    </style>
</head>
<body>

<canvas id="canvasAttacco" width="800" height="400"></canvas>
<div id="mediaPunteggio">Media Punteggio: 0.00</div>
<canvas id="canvasIstogramma" width="800" height="350"></canvas>

<script>
    const canvasAttacco = document.getElementById("canvasAttacco");
    const contestoAttacco = canvasAttacco.getContext("2d");
    const canvasIstogramma = document.getElementById("canvasIstogramma");
    const contestoIstogramma = canvasIstogramma.getContext("2d");

    const larghezzaGrafico = canvasAttacco.width;
    const altezzaGrafico = canvasAttacco.height;
    const altezzaIstogramma = canvasIstogramma.height;
    const numeroLivelli = 20;
    const numeroAttaccanti = 14;
    const probabilitaPenetrazione = 0.7;
    const altezzaServer = 20;
    const larghezzaAttaccante = larghezzaGrafico / (numeroLivelli + 1);
    const coloriServer = [
        "#FF5733", "#33FF57", "#3357FF", "#FFC300", "#DAF7A6",
        "#C70039", "#900C3F", "#581845", "#1ABC9C", "#8E44AD",
        "#3498DB", "#E67E22", "#16A085", "#2980B9", "#D35400"
    ];

    let contaLivelli = new Array(numeroLivelli).fill(0);
    let punteggioTotale = 0;
    let numeroPunteggi = 0;
    let mediaPunteggio = 0;

    function disegnaGriglia() {
        contestoAttacco.strokeStyle = "#aaaaaa";  /* Linee della griglia in grigio chiaro */
        contestoAttacco.lineWidth = 1;
        contestoAttacco.font = "14px 'Courier New'";  /* Cambiato il font per il testo della griglia */
        contestoAttacco.fillStyle = "#333";  /* Colore del testo delle etichette */

        // Disegna le righe della griglia
        for (let i = 0; i <= altezzaGrafico; i += altezzaServer) {
            contestoAttacco.beginPath();
            contestoAttacco.moveTo(0, i);
            contestoAttacco.lineTo(larghezzaGrafico, i);
            contestoAttacco.stroke();
        }

        // Disegna le colonne della griglia
        for (let i = 0; i <= larghezzaGrafico; i += larghezzaAttaccante) {
            contestoAttacco.beginPath();
            contestoAttacco.moveTo(i, 0);
            contestoAttacco.lineTo(i, altezzaGrafico);
            contestoAttacco.stroke();
        }

        // Disegna gli assi in nero
        contestoAttacco.strokeStyle = "#000000";
        contestoAttacco.beginPath();
        contestoAttacco.moveTo(0, altezzaGrafico);
        contestoAttacco.lineTo(larghezzaGrafico, altezzaGrafico);
        contestoAttacco.stroke();

        contestoAttacco.beginPath();
        contestoAttacco.moveTo(0, 0);
        contestoAttacco.lineTo(0, altezzaGrafico);
        contestoAttacco.stroke();

        // Etichette
        contestoAttacco.fillText("HACKERS", larghezzaGrafico - 70, altezzaGrafico - 10);
        contestoAttacco.fillText("SERVERS", 10, 20);

        for (let i = 0; i < numeroLivelli; i++) {
            contestoAttacco.fillText(i + 1, -30, altezzaGrafico - (i + 1) * altezzaServer + 5);
        }

        for (let i = 0; i < numeroAttaccanti; i++) {
            contestoAttacco.fillText(i + 1, (i + 1) * larghezzaAttaccante - 10, altezzaGrafico + 20);
        }
    }

    function disegnaGrafico() {
        contestoAttacco.clearRect(0, 0, larghezzaGrafico, altezzaGrafico);
        contaLivelli.fill(0);
        punteggioTotale = 0;
        numeroPunteggi = 0;
        mediaPunteggio = 0;

        disegnaGriglia();

        for (let i = 0; i < numeroAttaccanti; i++) {
            let x = (i + 1) * larghezzaAttaccante;
            let y = altezzaGrafico;

            contestoAttacco.beginPath();
            contestoAttacco.moveTo(x, y);
            disegnaAttaccante(x, y, coloriServer[i % coloriServer.length]);
        }

        disegnaIstogramma();

        document.getElementById("mediaPunteggio").textContent = 
            "Media aritmetica dei punteggi di penetrazione: " + mediaPunteggio.toFixed(2);
    }

    function disegnaAttaccante(inizioX, y, colore) {
        let attualeX = inizioX;
        let attualeY = y;
        let livelloRaggiunto = 0;

        contestoAttacco.strokeStyle = colore;
        contestoAttacco.lineWidth = 3;  /* Linee degli attaccanti più spesse */

        for (let j = 0; j < numeroLivelli; j++) {
            const penetrazione = Math.random() < probabilitaPenetrazione;

            if (penetrazione && attualeY - altezzaServer >= 0) {
                attualeY -= altezzaServer;
                contestoAttacco.lineTo(attualeX, attualeY);
                livelloRaggiunto++;
            }
            attualeX += larghezzaAttaccante;
            contestoAttacco.lineTo(attualeX, attualeY);
        }

        if (livelloRaggiunto > 0) {
            contaLivelli[livelloRaggiunto - 1]++;
            aggiornaMedia(livelloRaggiunto);
        }

        contestoAttacco.stroke();
    }

    function aggiornaMedia(livello) {
        numeroPunteggi++;
        mediaPunteggio += (livello - mediaPunteggio) / numeroPunteggi;
    }

    function disegnaIstogramma() {
        contestoIstogramma.clearRect(0, 0, larghezzaGrafico, altezzaIstogramma);
        const larghezzaBarra = larghezzaGrafico / numeroLivelli;
        const conteggioMassimo = Math.max(...contaLivelli);

        for (let i = 0; i < numeroLivelli; i++) {
            const altezzaBarra = (contaLivelli[i] / conteggioMassimo) * (altezzaIstogramma - 40);
            contestoIstogramma.fillStyle = coloriServer[i % coloriServer.length];
            contestoIstogramma.fillRect(i * larghezzaBarra, altezzaIstogramma - altezzaBarra - 30, larghezzaBarra - 2, altezzaBarra);

            contestoIstogramma.fillStyle = "#333";  /* Colore del testo delle barre */
            contestoIstogramma.font = "14px 'Courier New'";  /* Cambiato font */
            contestoIstogramma.fillText(contaLivelli[i], i * larghezzaBarra + (larghezzaBarra / 2) - 10, altezzaIstogramma - altezzaBarra - 35);
        }

        // Disegna gli assi
        contestoIstogramma.strokeStyle = "#000000";
        contestoIstogramma.beginPath();
        contestoIstogramma.moveTo(0, altezzaIstogramma - 30);
        contestoIstogramma.lineTo(larghezzaGrafico, altezzaIstogramma - 30);
        contestoIstogramma.stroke();

        contestoIstogramma.beginPath();
        contestoIstogramma.moveTo(0, 0);
        contestoIstogramma.lineTo(0, altezzaIstogramma);
        contestoIstogramma.stroke();

        // Etichette
