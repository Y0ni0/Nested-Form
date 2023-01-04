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
    max-width: 850px;
    padding: 20px;
    margin-top: 10px;
    margin-bottom: 1 0px;
    background-color: '#fff';
    border-radius: 10px;
    box-sizing: border-box;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
    display: block;
`
export const StyledGroupHeader = styled.header`
   display: flex;
   justify-content: space-around;
   .groupsHeader{
    padding-left: 20px;
    padding-right: 285px;
   }
   .slotHeader{
    flex-grow: 1;
   }
`
export const StyledFormSeparator = styled.div`
    display: flex;
    gap: 150px;
  .groupRemover{
    display: flex;
    gap: 5px;
    align-self: flex-start;
  }
`
export const StyledSubForm = styled.form`
        display: flex;
        flex-direction: column;
        gap: 6px;
        div{
            display: flex;
            gap: 8px;
        }
`
export const StyledInput = styled.input`
    display: block;
    width: 100%;
    background-color: #dddddd;
    height: 30px;
    border-radius: 3px;
    border: 1px solid rgb(112, 112, 112);
    margin: 10px 0 10px 0;
    padding: 12px;
    box-sizing: border-box;

`
export const StyledAddButton = styled.button`
    align-self: flex-start;
    border-radius: 5px;
    border: none;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    cursor: pointer;
    font-size: 13px;
    font-weight: 200;
    padding: 5px 15px;
    background-color: #129da1;
    color: #fff;
   
    &:hover {
        opacity: 0.9;
        transform: scale(1.5px);
        background-color: #0c4e50;
    }
`
export const StyledRemoveButton = styled.button`
    align-self: center;
    border-radius: 5px;
    border: none;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    cursor: pointer;
    font-size: 18px;
    font-weight: 100;
    padding: 0px 10px;
    background-color: #d14c4c;
    color: #fff;
   
    &:hover {
        opacity: 0.9;
        transform: scale(1.5px);
        background-color: #b80000;
    }
`