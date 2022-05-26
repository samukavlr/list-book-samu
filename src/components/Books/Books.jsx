import React from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import booksCss from './books.module.css';
import {Link} from 'react-router-dom'
import UIButton from 'components/UI/Button/Button'
import {Trash} from 'phosphor-react'


//function Books(){
//}


const ItemContainer= styled.div`
    border-radius: 10px;
    background-color: rgb(255, 60, 0);
    height: 120px;
    width: 262px;
    color:#29303b;
    margin-bottom: 10px;
    margin-right: 10px;
    padding: 10px;
`;
const TitlePane = styled.div`
    font-weight: 700;
    margin-borrom: 5px;
`;
const ItemLink = styled.a`
    text-decoration:none;
`;
const PricePane = styled.div`
    margin-bottom: 5px;
`;
const Thunbnail = styled.img`
    width:auto;
    height: 100%;
    border: 0;
    vertical-align: middle;
    float: left;
    margin-right: 10px;

`;


const Books = ({books}) => {
    return(
        // hfef= {books.url} title="Clique para comprar"
            <ItemLink>
                <ItemContainer>
                    <Thunbnail src={books.image}></Thunbnail>
                    <TitlePane >{books.title.substring(0,26)}...</TitlePane>
                    <PricePane >R$ {books.price}</PricePane>
                    <Button 
                        href={books.url} target="_blank" variant="primary">
                        Comprar
                    </Button>
                    <UIButton
                        className={booksCss.editar}
                        component={Link}
                        to={`/edit/${books.id}`}
                        >
                        Editar
                    </UIButton>
                    <button>
                        <Trash size={32} color="#f91201" weight="light" />
                    </button>
                </ItemContainer>
            </ItemLink>       
    )
}

export default Books;

