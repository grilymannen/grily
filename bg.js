const artworks = [
    { image: 'Background Images/6dc316c8d5b343961a3547a575264507.jpg', imageSource: 'https://www.tumblr.com/tacheaway/791527145214263296/sneaked-the-lil-guy-on-the-family-holiday-he', artist: 'tacheaway', artistSource: 'https://www.tumblr.com/tacheaway'},
    { image: 'Background Images/GwJiBZLXsAEkS0F.jpg', imageSource: 'https://x.com/fryprai/status/1946225768234971632', artist: 'fryprai', artistSource: 'https://linktr.ee/fryprai'},
    { image: 'Background Images/Gy0hcQ7WYAAklpv.jpg', imageSource: 'https://x.com/salamitown/status/1890542383722340749', artist: 'salamitown', artistSource: 'https://salamitown.carrd.co/'},
    { image: 'Background Images/GyACQGeWUAI74ER.jpg', imageSource: 'https://x.com/shug8888/status/1954564731282333884', artist: 'SHUG888', artistSource: ''},
    { image: '', imageSource: '', artist: '', artistSource: ''},
    { image: '', imageSource: '', artist: '', artistSource: ''},
    { image: '', imageSource: '', artist: '', artistSource: ''},
    { image: '', imageSource: '', artist: '', artistSource: ''},
    { image: '', imageSource: '', artist: '', artistSource: ''},
    { image: '', imageSource: '', artist: '', artistSource: ''},
];
const colorPalettes = [
    {primaryColor: '#d68d71', secondaryColor: '#d1942e', backgroundColor: '#e9e2c5', textColor: '#460000'},
    {primaryColor: '#bebccb', secondaryColor: '#4f4d5f', backgroundColor: '#ffffff', textColor: '#17171c'},
    {primaryColor: '#e89788', secondaryColor: '#d25c56', backgroundColor: '#000309', textColor: '#e8b9b3'},
    {primaryColor: '#8ac2c3', secondaryColor: '#68719c', backgroundColor: '#b1fcf3', textColor: '#2e5986'},
];

function checkDate() {
    let d = new Date();
    let currentHour = d.getHours();

    let indexValue = currentHour % 4; // Change to artwork.length when all objects have full key value pairs

    console.log(indexValue, artworks.length, d.getMinutes());     //console.log values for debugging purposes
    // indexValue = 3;    // Manually set indexValue

    // Call update functions
    updateArtwork(indexValue)
    colorPaletteUpdate(indexValue)
};

function toggleBlur() {
    let element = document.getElementById('header-image');
    let currentBlurValue = window.getComputedStyle(element).filter;
    console.log(currentBlurValue)
    if (currentBlurValue.includes('blur')) {
        document.getElementById('header-image').style.filter = 'none';
    } else {
        document.getElementById('header-image').style.filter = 'blur(3px)';
    }
};

function colorPaletteUpdate(colorPaletteIndex) {
    const palette = colorPalettes[colorPaletteIndex];
    
    document.documentElement.style.setProperty('--primary-color', palette.primaryColor);
    document.documentElement.style.setProperty('--secondary-color', palette.secondaryColor);
    document.documentElement.style.setProperty('--background-color', palette.backgroundColor);
    document.documentElement.style.setProperty('--text-color', palette.textColor);    
};

function updateArtwork(artworkIndex) {
    // Check for array bounds
    if (!artworks[artworkIndex]) {
        console.error('Invalid artwork index:', artworkIndex);
        return;
    }
    document.getElementById('header-image').src = artworks[artworkIndex].image;
    document.getElementById('image-source').href = artworks[artworkIndex].imageSource;

    document.getElementById('artist').textContent = artworks[artworkIndex].artist
    document.getElementById('artist').href = artworks[artworkIndex].artistSource;

};




checkDate()