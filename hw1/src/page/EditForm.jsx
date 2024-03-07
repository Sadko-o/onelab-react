import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const EditForm = ({ person, onSave, onCancel }) => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [phone, setPhone] = useState('');

    useEffect(() => {
        if (person) {
            setName(person.name);
            setSurname(person.surname);
            setPhone(person.phone);
        }
    }, [person]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({ ...person, name, surname, phone });
    };
    return (
        <Form onSubmit={handleSubmit}>
            <StyledInput 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                placeholder="Name" 
            />
            <StyledInput 
                type="text" 
                value={surname} 
                onChange={(e) => setSurname(e.target.value)} 
                placeholder="Surname" 
            />
            <StyledInput 
                type="text" 
                value={phone} 
                onChange={(e) => setPhone(e.target.value)} 
                placeholder="Phone" 
            />
            <Button type="submit">Save</Button>
            <Button type="button" onClick={onCancel}>Cancel</Button>
        </Form>
    );
};

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background-color: #f8f9fa;
`;

const StyledInput = styled.input`
    width: 80%;
    padding: 10px;
    margin: 5px 0;
    border-radius: 5px;
    border: 1px solid #ddd;
`;

const Button = styled.button`
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 15px;
    margin: 10px;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
        background-color: #0056b3;
    }

    &:nth-child(2) {
        background-color: #6c757d;
        &:hover {
            background-color: #545b62;
        }
    }
`;

export default EditForm;