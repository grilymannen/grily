const artworks = [
    { image: 'Background Images/6dc316c8d5b343961a3547a575264507.jpg', imageSource: 'https://www.tumblr.com/tacheaway/791527145214263296/sneaked-the-lil-guy-on-the-family-holiday-he', artist: 'tacheaway', artistSource: 'https://www.tumblr.com/tacheaway', backgroundColor: '#e9e2c5' },
    { image: 'Background Images/GwJiBZLXsAEkS0F.jpg', imageSource: 'https://x.com/fryprai/status/1946225768234971632', artist: 'fryprai', artistSource: 'https://linktr.ee/fryprai', backgroundColor: '#ffffff' },
    { image: 'Background Images/Gy0hcQ7WYAAklpv.jpg', imageSource: 'https://x.com/salamitown/status/1890542383722340749', artist: 'salamitown', artistSource: 'https://salamitown.carrd.co/', backgroundColor: '#010103' },
    { image: 'Background Images/GyACQGeWUAI74ER.jpg', imageSource: 'https://x.com/shug8888/status/1954564731282333884', artist: 'SHUG888', artistSource: '', backgroundColor: '#b1fdf1' },
    { image: '', imageSource: '', artist: '', artistSource: '', backgroundColor: '' },
    { image: '', imageSource: '', artist: '', artistSource: '', backgroundColor: '' },
    { image: '', imageSource: '', artist: '', artistSource: '', backgroundColor: '' },
    { image: '', imageSource: '', artist: '', artistSource: '', backgroundColor: '' },
    { image: '', imageSource: '', artist: '', artistSource: '', backgroundColor: '' },
    { image: '', imageSource: '', artist: '', artistSource: '', backgroundColor: '' },
];
const colorPalettes = [
    {backgroundColor: '#e9e2c5', color_1: '', color_2: '', color_3: ''},
    {backgroundColor: '#e9e2c5', color_1: '', color_2: '', color_3: ''},
    {backgroundColor: '#e9e2c5', color_1: '', color_2: '', color_3: ''},
    {backgroundColor: '#b1fcf3', color_1: '#68719c', color_2: '#f0e4ed', color_3: '#8ac2c3'},
];

function checkDate() {
    let d = new Date();
    let currentHour = d.getHours();

    let indexValue = currentHour % 4; // Change to artwork.length when all objects have full key value pairs

    console.log(indexValue, artworks.length, d.getMinutes());     //console.log values for debugging purposes
    indexValue = 3;    // Manually set indexValue

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
    document.getElementById('page').style.backgroundColor = colorPalettes[colorPaletteIndex].backgroundColor
    document.getElementById('navigation-bar').style.backgroundColor = colorPalettes[colorPaletteIndex].color_3
    return;
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