import styled from "styled-components";

export const Container = styled.div`

    width: 200px;
    height: 50px;
    display: flex;
    //background-color: #1550ff;
    background-color: red;
    border-radius: 10px;
    cursor: pointer;
    opacity: 1;
    transition: all ease .3s;

    &:hover{
        opacity: .8;
    }
`;

export const IconArea = styled.div`
    height: inherit;
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 2px solid rgba(255, 255, 255, .4);
    padding: 0, 15px;
`;

export const Icon = styled.img`
    height: 20px;
`;

export const Label = styled.div`
    height: inherit;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    padding: 0 20px;
`;