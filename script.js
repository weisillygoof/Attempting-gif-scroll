// Sprite sheet settings
const totalFrames = 13; // Total number of frames in the sprite sheet
const spriteSheetWidth = 6000; // Total width of the sprite sheet (all frames combined)
const frameWidth = 333; // Width of a single frame

// Event listener for scrolling
window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = scrollTop / scrollHeight;

    // Calculate the current frame based on scroll position
    const frameIndex = Math.floor(scrollPercent * totalFrames);

    // Update the background position
    const backgroundPositionX = -frameIndex * frameWidth; // Shift to the left for the current frame
    document.body.style.backgroundPosition = `${backgroundPositionX}px center`;
});
