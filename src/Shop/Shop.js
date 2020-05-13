import React from 'react'
import Card from './Card/Card'
import DB from './DB.json'
// Fake DB

 //Intoducir estado para asegurar un good rendereo.

    
const HomeShop = (props) => {

    
    return (
        <div>
        <p className="centered shop-title" > {props.title} </p>

           
             <div className="shopDiv">
            {
                
                DB.map(data =>{
                     

                    if (props.search !== '') {

                        if (data.title.toLowerCase().startsWith(props.search)) {
                           if (data.oferta  === props.target || data.type === props.target )  { 
                               
                            return <Card 
                                key = {data.id}
                                productId = {data.id}
                                title = {data.title}
                                image = {data.image}
                                price = {data.price}
                                desc = {data.desc}
                                
                            />
                        }   else return null
                        }   else return null    
                    } 
                   

              
                    else { 
                        if (data.oferta  === props.target || data.type === props.target )  { 
                
                        return <Card 
                        key = {data.id}
                        productId = {data.id}
                        title = {data.title}
                        image = {data.image}
                        price = {data.price}
                        desc = {data.desc}
                        />
                    }
                    else return null
                }})}
         
         
               

                

                

            </div>
        </div>
    )
}

export default HomeShop