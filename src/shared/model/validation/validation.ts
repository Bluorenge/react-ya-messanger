export const name = {
    required: 'This is required',
    pattern: {
        value: /^[A-ZА-ЯЁ](.*)$/,
        message: 'First letter must be uppercase',
    },
    validate: (val: string) =>
        /^[A-ZА-ЯЁa-zа-яё-]+$/.test(val) || 'Only latin and hyphen.',
};

export const email = {
    required: 'This is required',
    pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: 'Incorrect email',
    },
};

export const login = {
    required: 'This is required',
    min: {
        value: 3,
        message: 'Min lenght must be 3 character',
    },
    max: {
        value: 20,
        message: 'Max lenght must be 20 character',
    },
    validate: {
        notOnlyNum: (val: string) =>
            /^\d+$/.test(val) || 'Login must not contain only numbers',
        validChar: (val: string) =>
            /^[A-Za-z0-9_-]+$/.test(val) ||
            'Valid characters: Latin, numbers, _ and -',
    },
};

export const phone = {
    required: 'This is required',
    min: {
        value: 8,
        message: 'Min lenght must be 8 character',
    },
    max: {
        value: 15,
        message: 'Max lenght must be 15 character',
    },
    validate: {
        onlyNum: (val: string) =>
            /^\+?[0-9]+$/.test(val) ||
            'The phone must contain only numbers (a plus at the beginning is possible)',
    },
};

export const password = {
    required: 'This is required',
    min: {
        value: 8,
        message: 'Min lenght must be 8 character',
    },
    max: {
        value: 40,
        message: 'Max lenght must be 40 character',
    },
    validate: {
        notOnlyNum: (val: string) =>
            /^\d+$/.test(val) || 'Login must not contain only numbers',
        validChar: (val: string) =>
            (/[A-Z]/.test(val) && /[0-9]/.test(val)) ||
            'The password must contain at least one uppercase letter and a number',
    },
};

export const confirmPassword = (watchVal: string) => ({
    validate: (val: string) => {
        if (watchVal !== val) {
            return 'Your passwords do no match';
        }
    },
});
