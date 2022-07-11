globe = new ENCOM.Globe(window.innerWidth, window.innerHeight - (main.clientTop + main.clientHeight), {
    font: "Inconsolata",
    data: [],
    tiles: grid.tiles,
    baseColor: "#000000",
    markerColor: "#8e44ad",
    pinColor: "#aacfd1",
    satelliteColor: "#aacfd1",
    scale: 1,
    dayLength: 14000,
    introLinesDuration: 2000,
    maxPins: 500,
    maxMarkers: 4,
    viewAngle: 0.1
});

document.getElementById('details').appendChild(globe.domElement);

function animate() {
    if (globe) {
        globe.tick();
    }
    requestAnimationFrame(animate);
}

let initGlobe = () => {
    globe.init();
    animate();
}

window.addEventListener('resize', () => {
    console.log("%d %d %d", window.innerHeight, main.clientTop, main.clientHeight);
    let h = window.innerHeight - (main.clientTop + main.clientHeight);
    globe.camera.aspect = window.innerWidth / h;
    globe.camera.updateProjectionMatrix();
    globe.renderer.setSize(window.innerWidth, h);
})