/*<!--function blink(ob) {
    if (ob.style.visibility == "visible") {
        ob.style.visibility = "hidden";
    } else {
        ob.style.visibility = "visible";
    }
}
setInterval("blink(bl)", 500);*/
function init() {
    document.getElementById("decryptedarea").focus();
}
var mode = "encryption";

function findRour(char) {
    // Par défaut, la lettre ne change pas
    var charRour = char;
    switch (char.toLowerCase()) {
        case "a":
            charRour = "4";
            break;
        case "b":
            charRour = "8";
            break;
        case "e":
            charRour = "3";
            break;
        case "l":
            charRour = "1";
            break;
        case "o":
            charRour = "0";
            break;
        case "s":
            charRour = "5";
            break;
        case "t":
            charRour = "7";
            break;
    }
    return charRour;
}

function findBrut(char) {
    // Par défaut, la lettre ne change pas
    var charBrut = char;
    switch (char.toLowerCase()) {
        case "4":
            charBrut = "a";
            break;
        case "8":
            charBrut = "b";
            break;
        case "3":
            charBrut = "e";
            break;
        case "1":
            charBrut = "l";
            break
        case "0":
            charBrut = "o";
            break;
        case "5":
            charBrut = "s";
            break;
        case "7":
            charBrut = "t";
            break;
    }
    return charBrut;
}

function getInRour(word) {

    var wordRour = "";
    for (var i = 0; i < word.length; i++) {
        wordRour = wordRour + findRour(word[i]);
    }
    return wordRour;

}

function getInBrut(word) {

    var wordBrut = "";
    for (var i = 0; i < word.length; i++) {
        wordBrut = wordBrut + findBrut(word[i]);
    }
    return wordBrut;

}

function encrypt() {
    var decrypted = document.getElementById('decryptedarea');
    var encrypted = getInRour(decrypted.value);
    var elEncrypted = document.getElementById('encryptedarea');
    elEncrypted.value = encrypted;
    elEncrypted.select();
}

function decrypt() {
    var decrypted = document.getElementById('decryptedarea');
    var encrypted = getInBrut(decrypted.value);
    var elEncrypted = document.getElementById('encryptedarea');
    elEncrypted.value = encrypted;
    elEncrypted.select();
}

function switchIt() {
    var before1 = document.getElementById('encryptedarea');
    var before2 = document.getElementById('decryptedarea');
    var after1 = before2.value;
    var after2 = before1.value;
    before1.value = after1;
    before2.value = after2;
    if (mode === "encryption") {
        mode = "decryption";
        var actualMode = document.getElementById('actualmode');
        actualMode.textContent = "Mode : Decryption";
        var button = document.getElementById('encryptbutton');
        button.onclick = function () {
            decrypt();
        };
        button.textContent = "Decrypt";
        var area1 = document.getElementById('decryptedarea');
        area1.placeholder = "Ex : L0r3m 1psum D0l0r s1t 4m3t, ";
        var area2 = document.getElementById('encryptedarea');
        area2.placeholder = "Ex : Lorem Ipsum dolor sit amet, "
    } else if (mode === "decryption") {
        mode = "encryption";
        var actualMode = document.getElementById('actualmode');
        actualMode.textContent = "Mode : Encryption";
        var button = document.getElementById('encryptbutton');
        button.onclick = function () {
            encrypt();
        };
        button.textContent = "Encrypt";
        var area1 = document.getElementById('decryptedarea');
        area1.placeholder = "Ex : Lorem Ipsum dolor sit amet, ";
        var area2 = document.getElementById('encryptedarea');
        area2.placeholder = "Ex : L0r3m 1psum D0l0r s1t 4m3t, ";
    }
}

function clearIt() {
    var decryptedo = document.getElementById('decryptedarea');
    var encryptedo = document.getElementById('encryptedarea');
    decryptedo.value = "";
    encryptedo.value = "";
}
function search(ele) {
    if(event.keyCode == 13) {
        if (mode === "encryption") {
            encrypt();
        } else if (mode === "decryption") {
            decrypt();
        }    
    }
}
