import styled from "styled-components";

type ContainerProps = {
    showBackGround: boolean
}

export const Container = styled.div<ContainerProps>`
    background-color: ${props => props.showBackGround ? '#FFF' : '#e2e3e3'};
    height: 180px;
    width: 130px;
    border-radius: 10px;
    display: flex;
    justify-content: center ;
    align-items: center;
    cursor: pointer;    
`;

type IconProps = {
    opacity?: number
}
export const Icon = styled.img<IconProps>`
    width: 100%;
    padding: 5px;
    opacity: ${props => props.opacity ?? 1};
`;