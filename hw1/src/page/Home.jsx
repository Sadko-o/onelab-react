import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Home() {
    return (
        <StyledContainer>
            <StyledNav>
                <StyledLink to="/add">
                    Go to Add page
                </StyledLink>
                <StyledLink to="/list">
                    Go to List page
                </StyledLink>
            </StyledNav>
        </StyledContainer>
    );
}

const StyledContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;  /* This makes the container take up the full viewport height */
    text-align: center;
    background-color: #282828;
    
`;

const StyledNav = styled.nav`
    border-radius: 20px;
    background-color: #f8f9fa;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;


const StyledLink = styled(Link)`
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

    @media (max-width: 768px) {
        padding: 8px 15px;
        font-size: 0.9em;
    }
`;
