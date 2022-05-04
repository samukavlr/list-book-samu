import React from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components'

//function Books(){
//}


const ItemContainer= styled.div`
    border-radius: 4px;
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
       
            <ItemLink hfef= {books.url} title="Clique para comprar">
                <ItemContainer>
                    <Thunbnail src={books.image}></Thunbnail>
                    <TitlePane >{books.title}</TitlePane>
                    <PricePane >R$ {books.price}</PricePane>
                    <Button variant="primary">Comprar</Button>
                </ItemContainer>
            </ItemLink>
        
    )
}

export default Books;

