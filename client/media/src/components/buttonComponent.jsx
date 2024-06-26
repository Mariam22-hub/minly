import React from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons';

function ButtonComponent ({name, onClick, icon, bg, type, disabled}) {
    return (
        <ButtonStyled style={{
            background: bg
        }} onClick={onClick} type={type} disabled={disabled}>
            <FontAwesomeIcon icon={faCloudArrowUp} />
            {name}
        </ButtonStyled>
    )
}

const ButtonStyled = styled.button`
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.8rem 1.5rem;
    border-radius: 7px;
    cursor: pointer;
    transition: all .4s ease;
    color: rgba(255,255,255,0.8);
    font-weight: 600;
    &:hover{
        color: rgba(255,255,255, 1);
    }
`;
export default ButtonComponent;