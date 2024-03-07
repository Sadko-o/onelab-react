import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Add() {

    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [phone, setPhone] = useState("")

    const navigateTo = useNavigate();

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleSurnameChange = (event) => {
        setSurname(event.target.value);
    }

    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    }

    const onSave = () => {
        if (!name || !surname || !phone) return;
        let list = sessionStorage.getItem("list");
        if (!list) {
            list = [];
        } else {
            list = JSON.parse(list);
        }
        list.push({
            name,
            surname,
            phone
        })
        sessionStorage.setItem("list", JSON.stringify(list));
        navigateTo("/");
    }

    return (
        <StyledContainer>
            <StyledForm>
                <StyledInput value={name} onChange={handleNameChange} type="text" name="name" placeholder="First Name"/>
                <StyledInput value={surname} onChange={handleSurnameChange} type="text" name="surname" placeholder="Last Name"/>
                <StyledInput value={phone} onChange={handlePhoneChange} type="text" name="phonenumber" placeholder="Phone Number"/>
                <StyledButton onClick={onSave}>Save</StyledButton>
            </StyledForm>
        </StyledContainer>
    );
}

const StyledContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #282828;
`;

const StyledForm = styled.div`
    border-radius: 20px;
    background-color: #f8f9fa;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const StyledInput = styled.input`
    margin: 10px;
    padding: 10px;
    border-radius: 15px;
    border: none;
    width: 80%;
`;

const StyledButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 15px;
    padding: 10px 20px;
    color: #4a4a4a;
    background-color: #ffffff;
    border: none;
    text-decoration: none;
    border-radius: 15px;
    font-size: 1em;
    font-weight: 500;
    transition: background-color 0.3s, color 0.3s;

    &:hover, &:focus {
        color: #ffffff;
        background-color: #007bff;
    }
`;