const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LOWERCASE = 'abcdefghijklmnopqrstuvwxyz';
const NUMBERS = '0123456789';
const SYMBOLS = '!@#$%^&*()_+-=[]{}|;:,.<>?';

import { GeneratePasswordProps } from './type/type';

export function startGeneratePassword({
    passwordOutput,
    lengthOutput,
    checkLowercase,
    checkNumber,
    checkSymbol,
    checkUppercase,
    checkLength,
    buttonGenerate,
    buttonCopy,
}: GeneratePasswordProps) {
    passwordOutput.textContent = 'Configure password generation';

    checkLength.addEventListener('change', function (e) {
        e.preventDefault();

        lengthOutput.textContent = checkLength.value;

        const { password, error } = generator(
            checkUppercase.checked,
            checkLowercase.checked,
            checkNumber.checked,
            checkSymbol.checked,
            parseInt(checkLength.value)
        );

        if (password) passwordOutput.textContent = password;
        if (error) {
            passwordOutput.textContent = error;
            return alert(error);
        }
    });

    checkUppercase.addEventListener('change', function (e) {
        e.preventDefault();

        const { password, error } = generator(
            checkUppercase.checked,
            checkLowercase.checked,
            checkNumber.checked,
            checkSymbol.checked,
            parseInt(checkLength.value)
        );

        if (password) passwordOutput.textContent = password;
        if (error) {
            passwordOutput.textContent = error;
            return alert(error);
        }
    });

    checkLowercase.addEventListener('change', function (e) {
        e.preventDefault();

        const { password, error } = generator(
            checkUppercase.checked,
            checkLowercase.checked,
            checkNumber.checked,
            checkSymbol.checked,
            parseInt(checkLength.value)
        );

        if (password) passwordOutput.textContent = password;
        if (error) {
            passwordOutput.textContent = error;
            return alert(error);
        }
    });

    checkNumber.addEventListener('change', function (e) {
        e.preventDefault();

        const { password, error } = generator(
            checkUppercase.checked,
            checkLowercase.checked,
            checkNumber.checked,
            checkSymbol.checked,
            parseInt(checkLength.value)
        );

        if (password) passwordOutput.textContent = password;
        if (error) {
            passwordOutput.textContent = error;
            return alert(error);
        }
    });

    checkSymbol.addEventListener('change', function (e) {
        e.preventDefault();

        const { password, error } = generator(
            checkUppercase.checked,
            checkLowercase.checked,
            checkNumber.checked,
            checkSymbol.checked,
            parseInt(checkLength.value)
        );

        if (password) passwordOutput.textContent = password;
        if (error) {
            passwordOutput.textContent = error;
            return alert(error);
        }
    });

    buttonGenerate.addEventListener('click', function (e) {
        e.preventDefault();

        const { password, error } = generator(
            checkUppercase.checked,
            checkLowercase.checked,
            checkNumber.checked,
            checkSymbol.checked,
            parseInt(checkLength.value)
        );

        if (password) passwordOutput.textContent = password;
        if (error) {
            passwordOutput.textContent = error;
            return alert(error);
        }
    });

    buttonCopy.addEventListener('click', function (e) {
        e.preventDefault();

        if (passwordOutput.textContent) navigator.clipboard.writeText(passwordOutput.textContent);
    });
}

function generator(
    checkUppercase: boolean,
    checkLowercase: boolean,
    checkNumber: boolean,
    checkSymbol: boolean,
    length: number
) {
    const selectedSets = [];

    if (checkUppercase) selectedSets.push(UPPERCASE);
    if (checkLowercase) selectedSets.push(LOWERCASE);
    if (checkNumber) selectedSets.push(NUMBERS);
    if (checkSymbol) selectedSets.push(SYMBOLS);

    if (selectedSets.length === 0)
        return { error: 'At least one character type must be selected.' };

    let password = selectedSets
        .map(
            (set) =>
                set[
                    Math.floor(
                        (crypto.getRandomValues(new Uint32Array(1))[0] / 2 ** 32) * set.length
                    )
                ]
        )
        .join('');

    const allCharacters = selectedSets.join('');
    const remainingLength = length - password.length;

    for (let i = 0; i < remainingLength; i++) {
        const randomIndex = Math.floor(
            (crypto.getRandomValues(new Uint32Array(1))[0] / 2 ** 32) * allCharacters.length
        );
        password += allCharacters[randomIndex];
    }

    password = [...password].sort(() => Math.random() - 0.5).join('');

    return { password };
}
