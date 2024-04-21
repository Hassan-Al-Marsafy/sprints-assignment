<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Top 2 Songs</title>
    <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;700&display=swap" rel="stylesheet">
    <style>
        body {
            background-color: #532a7f;
            color: #efefef;
            font-family: 'Archivo', sans-serif;
            margin: 0;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }

        .container {
            text-align: center;
        }

        h1 {
            font-weight: bold;
            font-size: 24px;
        }

        p {
            font-size: 16px;
            margin: 20px 0;
        }

        .song-list-container {
            display: none; /* Hide the song list container by default */
        }

        .song-list {
            border: 2px solid #efefef;
            padding: 20px;
            width: 80%;
            margin-left: auto;
            margin-right: auto;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
        }

        .song-item {
            display: flex;
            align-items: center;
            margin-bottom: 10px;
        }

        .song-number {
            background-color: #9b7cc1;
            color: #efefef;
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            margin-right: 10px;
        }

        /* Styles for the button */
        .show-me-button {
            background-color: #efefef;
            color: #532a7f;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            font-size: 16px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>♫ Top 10 Songs</h1>
        <p>LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPESETTING INDUSTRY. LOREM IPSUM HAS BEEN THE INDUSTRY'S STANDARD DUMMY TEXT EVER SINCE THE 1500S, WHEN AN UNKNOWN PRINTER TOOK A GALLEY OF TYPE AND SCRAMBLED IT TO MAKE A TYPE SPECIMEN BOOK. IT HAS SURVIVED NOT ONLY FIVE CENTURIES, BUT ALSO THE LEAP INTO ELECTRONIC TYPESETTING, REMAINING ESSENTIALLY UNCHANGED. IT WAS POPULARISED IN THE 1960S WITH THE RELEASE OF LETRASET SHEETS CONTAINING LOREM IPSUM PASSAGES, AND MORE RECENTLY WITH DESKTOP PUBLISHING SOFTWARE LIKE ALDUS PAGEMAKER INCLUDING VERSIONS OF LOREM IPSUM.</p>
        <button id="show-button" class="show-me-button">Show Me!</button>
        <div class="song-list-container" id="song-list-container">
            <div class="song-list" id="song-list">
                <div class="song-item">
                    <div class="song-number">#1</div>
                Time to Pretend
            </div>
            <div class="song-item">
                <div class="song-number">#2</div>
                O-o-oh Child
            </div>
            <div class="song-item">
                <div class="song-number">#3</div>
                Wish You Were Here
            </div>
            <div class="song-item">
                <div class="song-number">#4</div>
                Heroes
            </div>
            <div class="song-item">
                <div class="song-number">#5</div>
                I Put a Spell on You
            </div>
            <div class="song-item">
                <div class="song-number">#6</div>
                Call Me
            </div>
            <div class="song-item">
                <div class="song-number">#7</div>
                Paper Planes
            </div>
            <div class="song-item">
                <div class="song-number">#8</div>
                Jolene
            </div>
            <div class="song-item">
                <div class="song-number">#9</div>
                You Don't Own Me
            </div>
            <div class="song-item">
                <div class="song-number">#10</div>
                Fast Car
            </div>
            <div class="song-item">
                <div class="song-number">#11</div>
                Run the World (Girls)
            </div>
            <div class="song-item">
                <div class="song-number">#12</div>
                Superstition
            </div>
        </div>
    </div>

    <script>
        var songListContainer = document.getElementById("song-list-container");
        var showButton = document.getElementById("show-button");
        
        showButton.addEventListener("click", function() {
            // Toggle the visibility of the song list container when the button is clicked
            if (songListContainer.style.display === "none") {
                songListContainer.style.display = "block";
            } else {
                songListContainer.style.display = "none";
            }
        });
    </script>
</body>
</html>
