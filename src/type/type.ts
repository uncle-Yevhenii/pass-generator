export type GeneratePasswordProps = CheckboxProps &
    ButtonProps & {
        passwordOutput: HTMLElement;
        lengthOutput: HTMLElement;
    };

type CheckboxProps = {
    checkLength: HTMLInputElement;
    checkUppercase: HTMLInputElement;
    checkLowercase: HTMLInputElement;
    checkSymbol: HTMLInputElement;
    checkNumber: HTMLInputElement;
};

type ButtonProps = {
    buttonGenerate: HTMLButtonElement;
    buttonCopy: HTMLButtonElement;
};
