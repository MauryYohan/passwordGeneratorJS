import { prompt } from "./prompt.js";

// All asks functions are here
export function askPasswordLength() {
    try {
        let passwordLength = Number(prompt("Combien de caracteres ? (8-36) \n"));
        if (passwordLength < 8 || passwordLength > 36) {
            console.log("⚠ La longueur doit être comprise entre 8 et 36");
            return askPasswordLength();
        }
        return passwordLength;
    } catch (error) {
        console.error("Une erreur est survenue : ", error.message);
        return askPasswordLength();
    }
}

export function askSpecialChars() {
    try {
        let specialChars = prompt("Caracteres speciaux ? (y/n) \n").toLowerCase();
        if (specialChars !== "y" && specialChars !== "n") {
            console.log("⚠ La réponse doit être 'y' ou 'n'");
            return askSpecialChars();
        }
        return specialChars;
    } catch (error) {
        console.error("Une erreur est survenue : ", error.message);
        return askSpecialChars();
    }
}

export function askNumbers() {
    try {
        let numbers = prompt("Chiffres ? (y/n) \n").toLowerCase();
        if (numbers !== "y" && numbers !== "n") {
            console.log("⚠ La réponse doit être 'y' ou 'n'");
            return askNumbers();
        }
        return numbers;
    } catch (error) {
        console.error("Une erreur est survenue : ", error.message);
        return askNumbers();
    }
}

export function askUppercase() {
    try {
        let uppercase = prompt("Majuscules ? (y/n) \n").toLowerCase();
        if (uppercase !== "y" && uppercase !== "n") {
            console.log("⚠ La réponse doit être 'y' ou 'n'");
            return askUppercase();
        }
        return uppercase;
    } catch (error) {
        console.error("Une erreur est survenue : ", error.message);
        return askUppercase();
    }
}
