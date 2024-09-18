// Function to play individual notes
function playNote(note) {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease(note, '8n');

    // Highlight the key being played
    highlightKey(note);
}

// Function to play the tonic triad (C major: C4, E4, G4)
function playTonicTriad() {
    const synth = new Tone.PolySynth(Tone.Synth).toDestination();
    const tonicTriad = ['C4', 'E4', 'G4'];
    synth.triggerAttackRelease(tonicTriad, '2n');

    // Highlight the keys of the tonic triad
    highlightKeys(tonicTriad);
}

// Function to highlight individual keys
function highlightKey(note) {
    const keyElement = document.getElementById(note);
    keyElement.classList.add('active');
    setTimeout(() => keyElement.classList.remove('active'), 500);
}

// Function to highlight multiple keys (e.g. for chords)
function highlightKeys(notes) {
    notes.forEach(note => {
        const keyElement = document.getElementById(note);
        keyElement.classList.add('active');
    });

    setTimeout(() => {
        notes.forEach(note => {
            const keyElement = document.getElementById(note);
            keyElement.classList.remove('active');
        });
    }, 1500); 
}