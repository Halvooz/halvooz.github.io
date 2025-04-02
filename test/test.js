// Create an audio element
const audio = new Audio('path/to/your/file.mp3');
audio.loop = true; // Set the audio to loop

// Function to start playing the audio
function playAudio() {
    audio.play();
}

// Function to stop playing the audio
function stopAudio() {
    audio.pause();
    audio.currentTime = 0; // Reset the audio to the beginning
}

// Add event listeners to buttons
document.getElementById('playButton').addEventListener('click', playAudio);
document.getElementById('stopButton').addEventListener('click', stopAudio);