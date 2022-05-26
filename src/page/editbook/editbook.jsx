import React from 'react'
import {useParams} from 'react-router-dom'
import Newbooks from 'page/Newbooks/newbooks';
import UIContainer from 'components/UI/Container/Container'


const Editbook=() =>{
    const {id} =useParams();


    return(
        <>
        <UIContainer>
            <Newbooks id={id? Number.parseInt(id,10) : null} />  
        </UIContainer>  
        </>
    )
}
export default Editbook;