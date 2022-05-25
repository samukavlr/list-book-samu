import React from 'react'
import {useParams} from 'react-router-dom'
import Newbooks from 'page/Newbooks/newbooks';



const Editbook=() =>{
    const {id} =useParams();


    return(
        <>
            <Newbooks id={id? Number.parseInt(id,10) : null} />    
        </>
    )
}
export default Editbook;