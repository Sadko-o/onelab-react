import { useEffect, useState } from "react";
import styled from "styled-components";
import Person from "../components/Person";
import EditForm from "./EditForm";

export default function List() {
    const [data, setData] = useState([]);
    const [editingPerson, setEditingPerson] = useState(null);


    useEffect(() => {
        let list = sessionStorage.getItem("list");
        if (!list) {
            list = [];
        } else {
            list = JSON.parse(list);
        }
        setData(list);
    }, []);


    const handleEdit = (person) => {
        setEditingPerson(person);
    };
    
    const handleSaveEdit = (updatedPerson) => {
        let list = JSON.parse(sessionStorage.getItem("list") || "[]");
        list = list.map(p => p.id === updatedPerson.id ? updatedPerson : p);
        sessionStorage.setItem("list", JSON.stringify(list));
        setData(list);
        setEditingPerson(null); 
    };

    
    const handleDelete = (personToDelete) => {
        let list = JSON.parse(sessionStorage.getItem("list") || "[]");
        list = list.filter(p => !(p.name === personToDelete.name && p.surname === personToDelete.surname && p.phone === personToDelete.phone));
        console.log(list);
        sessionStorage.setItem("list", JSON.stringify(list));
        setData(list);
    };
    


    return (
        <div>
            {editingPerson && (
                <EditForm 
                    person={editingPerson} 
                    onSave={handleSaveEdit} 
                    onCancel={() => setEditingPerson(null)} 
                />
            )}
            <Table>
                <thead>
                    <TableRow>
                        <TableHeader>Name</TableHeader>
                        <TableHeader>Surname</TableHeader>
                        <TableHeader>Phone</TableHeader>
                        <TableHeader>Actions</TableHeader>
                    </TableRow>
                </thead>
                <tbody>
                    {data.map((person, index) => (
                        <Person key={index} person={person} onEdit={() => handleEdit(person)} onDelete={() => handleDelete(person)} />
                    ))}
                </tbody>
            </Table>
        </div>
        
    );
}


const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background-color: #f8f9fa;
`;

const TableHeader = styled.th`
    background-color: #007bff;
    color: white;
    text-align: left;
    border: 1px solid #ddd;
    padding: 12px 15px;
`;

const TableRow = styled.tr`
    &:nth-child(even) {
        background-color: #f2f2f2;
    }
    &:hover {
        background-color: #ddd;
    }
`;

const TableData = styled.td`
    border: 1px solid #ddd;
    padding: 12px 15px;
    text-align: left;
`;