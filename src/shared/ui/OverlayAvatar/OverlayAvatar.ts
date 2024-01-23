import styled from '@emotion/styled';

export const OverlayAvatar = styled.div<{opacity: number}>`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    transition: all 0.3s ease-in-out;
    background-color: rgba(0, 0, 0, 0.5);
    text-align: center;
    color: #fff;
    pointer-events: none;
    opacity: ${props => props.opacity};
`;
