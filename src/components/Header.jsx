import React from 'react';
import styled from 'styled-components';

const Titulo = styled.h1`
    font-family: 'Dancing Script', cursive;
    text-align: center;
`;

const Header = ({titulo}) => {
    return (
        <Titulo>{titulo}</Titulo>
    )
}

export default Header;