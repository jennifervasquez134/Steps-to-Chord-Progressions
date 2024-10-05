let currentSynth;
let isPlaying = false;
let currentButton;
let playTimeout;

function createSynth() {
    return new Tone.PolySynth(Tone.Synth).toDestination();
}

function toggleSound(button, notes) {
    if (isPlaying && currentButton === button) {
        stopSound();
    } else {
        if (isPlaying) {
            stopSound();
        }

        playTriad(button, notes);
    }
}

function playTriad(button, notes) {
    if (currentSynth) currentSynth.dispose(); 
    currentSynth = createSynth();
    currentSynth.triggerAttack(notes); 
    isPlaying = true;
    currentButton = button; 
    button.querySelector('.icon').textContent = 'II'; 

    playTimeout = setTimeout(() => {
        stopSound();
    }, 3000);
}

function stopSound() {
    if (currentSynth) {
        currentSynth.triggerRelease(); 
        currentSynth.dispose();
        currentSynth = null; 
    }
    clearTimeout(playTimeout); 
    isPlaying = false; 

    resetButtonIcon(currentButton);
}

function resetButtonIcon(button) {
    if (button) {
        button.querySelector('.icon').textContent = '▶'; 
    }
}
