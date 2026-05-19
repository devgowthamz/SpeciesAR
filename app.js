document.addEventListener("DOMContentLoaded", () => {
    // Select UI Elements
    const scanningOverlay = document.getElementById('scanning-overlay');
    const foundOverlay = document.getElementById('found-overlay');
    const arTarget = document.getElementById('ar-target');

    // MindAR provides targetFound and targetLost events on the target entity
    arTarget.addEventListener('targetFound', () => {
        console.log("Target Found!");
        
        // Hide scanning overlay
        scanningOverlay.style.opacity = '0';
        setTimeout(() => {
            scanningOverlay.style.display = 'none';
        }, 500); // Wait for fade out transition

        // Show found overlay
        foundOverlay.classList.remove('hidden');
    });

    arTarget.addEventListener('targetLost', () => {
        console.log("Target Lost!");
        
        // Hide found overlay
        foundOverlay.classList.add('hidden');

        // Show scanning overlay again
        scanningOverlay.style.display = 'flex';
        // Small delay to allow display to apply before opacity transition
        setTimeout(() => {
            scanningOverlay.style.opacity = '1';
        }, 10);
    });
});
