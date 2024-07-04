function generatePassword(lenght, includeLowerCase, includeUppercase, includeNumbers, includeSymbols) {

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolsChars ="!@#$%^&*()+-=";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowerCase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolsChars : "";

    if(lenght <= 0) {
        return `(password lenght must be at least 1)`;
    }
    if(allowedChars.lenght === 0) {
        return `(At least one set of characters needs to be selected)`
    }
    for(let i = 0; i < lenght; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}

const passwordLenght = 12;
const includeLowerCase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(passwordLenght, 
                              includeLowerCase, 
                              includeUppercase, 
                              includeNumbers, 
                              includeSymbols)
console.log(`Generated password: ${password}`);