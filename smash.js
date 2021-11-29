function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1) + min);
}

function smash() {
    var smashLetters =  document.myform.letters.value;
    var smashLength = document.myform.length.value;
    var smashCase = document.myform.case.value;
    var smash = '';

    var letterLength = smashLetters.length - 1;
    for (i=0; i<parseInt(smashLength); i++) {
        smash += smashLetters.charAt(getRandomIntInclusive(0, letterLength));
    }

    if (smashCase == "upper"){
        document.getElementById('result').innerHTML = smash.toUpperCase();
    } else {
        document.getElementById('result').innerHTML = smash.toLowerCase()
    }
}

function info() {
    document.getElementById('info').setAttribute('style', 'display: block;')
}
function hideInfo() {
    document.getElementById('info').setAttribute('style', 'display: none;')
}

function theme() {
    if (document.getElementById('check').checked) {
        document.getElementById('style').setAttribute('href', 'style.css')
    } else {
        document.getElementById('style').setAttribute('href', 'style2.css')
    }
}