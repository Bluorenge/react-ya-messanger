import { Input } from '@chakra-ui/react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ForwardedRef, forwardRef } from 'react';

import { PRIMARY_COLOR } from 'shared/config/theme/constant';

const InputField = styled.div`
    position: relative;
    width: 100%;
`;

const InputLabel = styled.label`
    position: absolute;
    top: calc(50% - 10px);
    left: 0;
    pointer-events: none;
`;

interface InputFieldLabelLineProps {
    defaultValue: string | undefined;
    label: string;
    isReadOnly?: boolean;
}

export const InputFieldLabelLine = forwardRef(
    (
        { defaultValue, label, isReadOnly, ...props }: InputFieldLabelLineProps,
        ref: ForwardedRef<HTMLInputElement>
    ) => {
        return (
            <InputField ref={ref}>
                <InputLabel>{label}</InputLabel>
                <Input
                    defaultValue={defaultValue ?? undefined}
                    css={css`
                        border: none;
                        width: 100%;
                        text-align: right;
                        padding-left: 80px;
                        border-bottom: 1px solid ${PRIMARY_COLOR};
                    `}
                    isReadOnly={isReadOnly ? true : undefined}
                    {...props}
                />
            </InputField>
        );
    }
);
