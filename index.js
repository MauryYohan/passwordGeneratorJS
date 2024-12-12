import { askPasswordLength, askSpecialChars, askNumbers, askUppercase } from "./ask.js";

const LETTERS = "abcdefghijklmnopqrstuvwxyz";
const SPECIAL_CHARACTERS = "!@#$%^&*()_-+={}[];:'\"|\\?/<>,.";
const NUMBERS = "0123456789";
const UPPERCASE_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const generateChars = (specialChars, numbers, uppercase) => {
    let baseChars = LETTERS;
    if (specialChars === "y") {
        baseChars += SPECIAL_CHARACTERS;
    }
    if (numbers === "y") {
        baseChars += NUMBERS;
    }
    if (uppercase === "y") {
        baseChars += UPPERCASE_LETTERS;
    }
    return baseChars;
}

const checkPassword = (password, specialChars, numbers, uppercase) => {
    if (specialChars === "y") {
        if (!password.match(/[!@#$%^&*()_\-+={}[\];:'"|\\?/<>,.]/)) {
            return false;
        }
    }
    if (numbers === "y") {
        if (!password.match(/[0-9]/)) {
            return false;
        }
    }
    if (uppercase === 'y' && password === password.toLowerCase()) {
        return false;
    }
    return true;
}

const generatePassword = (passwordLength, specialChars, numbers, uppercase) => {
    let password = "";
    let baseChars = generateChars(specialChars, numbers, uppercase);
    for (let i = 0; i < passwordLength; i++) {
        const randomInteger = Math.floor(Math.random() * baseChars.length);
        password += baseChars[randomInteger];
    }
    if (checkPassword(password, specialChars, numbers, uppercase)) {
        return password;
    } else {
        return generatePassword(passwordLength, specialChars, numbers, uppercase);
    }
}

const main = () => {
    let passwordLength = askPasswordLength();
    let specialChars = askSpecialChars();
    let numbers = askNumbers();
    let uppercase = askUppercase();
    let password = generatePassword(passwordLength, specialChars, numbers, uppercase);
    console.log(`Voici votre mot de passe : ${password}`);
}


main();
