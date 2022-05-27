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
    background-color: hsl(210, 40%, 72%);
    height: 120px;
    width: 300px;
    color:#29303b;
    margin-bottom: 10px;
    margin-right: 10px;
    padding: 5px;
    position: relative;
`;
const TitlePane = styled.div`
    font-weight: 700;
    margin-borrom: 5px;
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


const Books = ({books, onclickDelete}) => {
    return(
        // hfef= {books.url} title="Clique para comprar"
            <main className={booksCss.itemLink}>
                <ItemContainer>
                    <Thunbnail src={books.image}></Thunbnail>
                    <TitlePane >{books.title.substring(0,26)}...
                    <button type='button'
                    onClick={onclickDelete}
                    className={booksCss.delete}>
                        <Trash size={16} color="#f91201" weight="light" />
                    </button>      
                    </TitlePane>
                    <PricePane >R$ {books.price}</PricePane>
                    <Button 
                        className={booksCss.btncomprar}
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
                </ItemContainer>
            </main>    
    )
}

export default Books;

