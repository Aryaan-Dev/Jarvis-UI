$(document).ready(function () {
    $(".ask-text").textillate({
        in: { effect: "fadeIn", delay: 100 },
        out: { effect: "fadeOut", delay: 100 },
        loop: true,
    });

    var siriWave;

    function startSiriWave() {
        if (!siriWave) {
            siriWave = new SiriWave({
                container: document.getElementById("siri-container"),
                width: 700,
                height: 200,
                style: "ios9",
                amplitude: 1,
                speed: 0.30,
                autostart: true
            });
        } else {
            siriWave.start();
        }
    }

    document.querySelector(".mic-btn").addEventListener("click", function() {
        console.log("Microphone button clicked!");
        startSiriWave();
    });

    document.querySelector(".chat-btn").addEventListener("click", function() {
        console.log("Chat button clicked!");
    });

    document.querySelector(".settings-btn").addEventListener("click", function() {
        console.log("Settings button clicked!");
    });

    $('.siri-message').textillate({
        loop: true,
        sync: true,
        in: {
            effect: "fadeInUp",
            sync: true,
        },
        out: {
            effect: "fadeOutUp",
            sync: true,
        },
    });
});