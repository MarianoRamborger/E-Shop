import React from 'react'
import Card from './Card/Card'
import DB from './DB.json'
// Fake DB

 

    

const HomeShop = (props) => {

    
    return (
        <div>
        <h2 className="centered"> {props.title} </h2>


             <div className="shopDiv">
            {
                
                DB.map(data =>{

                    
                    if (data.oferta  === props.target || data.type === props.target)  { 
                
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

                })
            
            }
            </div>
        </div>
    )
}

export default HomeShop