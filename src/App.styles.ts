import styled from 'styled-components';


export const Container = styled.div`
    width: 100%;
    max-width: 750px;
    margin: auto;
    display: flex;
    padding: 20px 0;
    background-color: #bf722b ;
    @media (max-width: 750px){
        flex-direction: column;
    }
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    width: auto;
    color: white;
    @media (max-width: 750px){
        margin-bottom: 50px;
        align-items: center;
    }
`;

export const LogoLink = styled.a`
    display: block;
`;

export const InfoArea = styled.div`
    width: 100%;
    margin: 10px 0;
    color: white;
    @media (max-width: 750px){
        display: flex;
        justify-content: space-around;
        text-align: center;
    }
`;

export const CreateBy = styled.div`
    display: flex;
    margin-top: 20px;
    font-size: 16px;
    color: white;
    justify-content: center;
    align-items: center;
`;

export const GridArea = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    @media (max-width: 750px){
        justify-content: center;
        margin: 0 20px;
    }
`;

export const Grid = styled.div`
    width: 430px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
`;