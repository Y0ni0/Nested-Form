import styled from "styled-components";
import { lightTheme } from "./theme";

export const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 0 20px;
    h4{
        padding: 2px;
        margin: 2px;
    }
`
export const StyledForm = styled.form`
    background: ${lightTheme.bg};
    width: 100%;
    max-width: 450px;
    padding: 20px;
    margin-top: 10px;
    margin-bottom: 1 0px;
    background-color: '#fff';
    border-radius: 10px;
    box-sizing: border-box;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
    display: block;
`
export const Header = styled.header`
    background: ${lightTheme.bg};
    width: 25%;
    max-width: 150px;
    padding: 5px;
    margin: 5px;
    background-color: '#fff';
    border-radius: 10px;
    box-sizing: border-box;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
    align-self: center;
`