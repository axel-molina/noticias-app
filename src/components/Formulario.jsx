import React from 'react';
import styled from 'styled-components';

const Buscar = styled.input`
    background-color: #803fe7;
    font-family: 'Poppins', sans-serif;
    border: none;
    border-radius: 5px;
    font-size: 1.4vw;
    font-weight: 800;
    color: white;
    padding: 5px 15px;
    cursor: pointer;
    transition: all .1s ease ;

    &:hover{
        background-color:#A06EF2;
    }
`;

const Subtitulo = styled.h2`
    font-family: 'Poppins', sans-serif;
    text-align: center;
`;

const Formulario = () => {
    return (
        <div>
            <form action=""> 
                <Subtitulo>Encuentra Noticias por categoría</Subtitulo>

                <div>
                    <Buscar 
                    type="submit"
                    value="Buscar" 
                    />
                </div>
            </form>
        </div>
    )
}

export default Formulario;