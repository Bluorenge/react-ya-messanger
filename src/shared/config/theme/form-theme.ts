const floatingLabelStyles = {
    transform: 'translateY(-24px)',
};

const formTheme = {
    variants: {
        floating: {
            container: {
                _focusWithin: {
                    label: {
                        ...floatingLabelStyles,
                    },
                },

                'input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label':
                    {
                        ...floatingLabelStyles,
                    },

                label: {
                    top: '7px',
                    left: 0,
                    zIndex: 2,
                    position: 'absolute',
                    pointerEvents: 'none',
                    margin: 0,
                    transformOrigin: 'left top',
                },
            },
        },
    },
};

export { formTheme };
