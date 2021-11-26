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

    var letterLength = smashLetters.length;
    for (i=0; i<parseInt(smashLength); i++) {
        smash += smashLetters.charAt(getRandomIntInclusive(0, letterLength));
    }

    if (smashCase == "upper"){
        document.getElementById('result').innerHTML = smash.toUpperCase();
    } else {
        document.getElementById('result').innerHTML = smash.toLowerCase()
    }
}