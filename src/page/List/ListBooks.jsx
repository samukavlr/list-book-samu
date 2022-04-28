import React,{useState, useEffect} from 'react';
import Books from '../../components/Books/Books';
import axios from 'axios';

const PagesPromotionList=() =>{
 
       const [promotions, setPromotions] = useState([]);
  
       useEffect( () => {
  
      axios.get('http://localhost:5000/promotions?_embed=comments')
        .then(
          (response) => {
          console.log(response.data);
          setPromotions(response.data);
          }
        );
  
      }, [] );
      return (
          <div>
            {promotions.map(( promotions) => (
              <PromotionCard promotion={promotions} key ={promotions.id}/>
              )
              )
            }
          </div>
      )
  }
  
  export default PagesPromotionList;

