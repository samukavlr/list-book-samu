import React from 'react'
import {useParams} from 'react-router-dom'
import Editform from 'components/Form/Form'



const Editbook=() =>{
    const {id} =useParams();


    return(
        <>
            <Editform id={id? Number.parseInt(id,10) : null} />    
        </>
    )
}
export default Editbook;