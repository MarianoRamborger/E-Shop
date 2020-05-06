import React from 'react'
import Card from './Card/Card'
// Fake DB

const DB = [   
    {
        "id":"1",
        "title":"Manzana",
        "image":"https://choosemyplate-prod.azureedge.net/sites/default/files/myplate/foodgallerycupoz/apples.gif",
        "price":"1",
        "desc":"Roja!"
     
    },
     {
        "id":"2",
        "title":"Manzana",
        "image":"https://image.shutterstock.com/image-photo/green-apple-on-white-background-260nw-692320789.jpg",
        "price":"3",
        "desc":"Verde"
     
    },
    {
        "id":"3",
        "title":"Manzana",
        "image":"https://previews.123rf.com/images/artemkutsenko/artemkutsenko1812/artemkutsenko181200055/115249728-fresh-wet-golden-apple-fruit-isolated-on-white-background.jpg",
        "price":"3",
        "desc":"Dorada"
     
    },
    {
        "id":"4",
        "title":"Manzana",
        "image":"https://i.pinimg.com/originals/e0/fe/1c/e0fe1c0ebd2f75d5f682b058142618fd.jpg",
        "price":"3",
        "desc":"Azul??"
     
    },
    {
        "id":"5",
        "title":"Banana",
        "image":"https://www.kroger.com/product/images/xlarge/front/0000000004011",
        "price":"3",
        "desc":"Pa variar"
     
    },
    {
        "id":"6",
        "title":"No Mandarinas",
        "image":"https://www.nbnaturalcare.com/wp-content/uploads/2018/11/mandarina.jpg",
        "price":"3",
        "desc":"No"
     
    },
    {
        "id":"7",
        "title":"Durazno",
        "image":"https://www.elnacional.com/wp-content/uploads/2018/01/durazno-tiene-multiples-propiedades-medicinales_221238-696x526.jpg",
        "price":"3",
        "desc":"La Mejor Fruta"
     
    },
    {
        "id":"8",
        "title":"Ciruela",
        "image":"https://elpoderdelconsumidor.org/wp-content/uploads/2015/04/ciruelas-_rojas-3.jpg",
        "price":"3",
        "desc":"Cuando el durazno está caro"
     
    }
    
    ]
    

const HomeShop = () => {
    return (
        <div>
        <h2 className="centered"> Ofertas </h2>

             <div className="shopDiv">
            {
                DB.map(data =>{

                    
                
                return <Card 
                    key = {data.id}
                    title = {data.title}
                    image = {data.image}
                    price = {data.price}
                    desc = {data.desc}
                />

                })
            
            }
            </div>
        </div>
    )
}

export default HomeShop