import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  //Link
} from "react-router-dom";


import './App.css';
import Header from './Header/Header.js'
import Footer from './Footer/Footer.js'
import HomeShop from './Shop/HomeShop.js'
import HomeShop2 from './Shop/HomeShop2.js'



//https://www.freecodecamp.org/news/state-management-with-react-hooks/


export const AuthContext = React.createContext()

const initialState = { isAuthenticated: false, user: null, token: null };

export const shoppingCartContext = React.createContext();

const shoppingCartInitialState = { shoppingList : ["s"] }


//Ojo que no es el hook si no la función.
const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN": {
      localStorage.setItem("user", JSON.stringify(action.payload.user)); localStorage.setItem("token", JSON.stringify(action.payload.token));   
      return {
        ...state, isAuthenticated: true, user: action.payload.user, token: action.payload.token
      }}
    
    case "LOGOUT": {
      localStorage.clear()
      return { ...state, isAuthenticated: false, user: null, token: null
      }}
      default: return state
  }
}





const shoppingCartReducer = (state2, action2) => {
  switch (action2.type) {

    case "ADD": console.log("e")
    return {...state2.shoppingList }

    default: console.log("default")
    return {...state2.shoppingList}



  }

}



//El hook propiamente dicho. Devuelve el estado, y dispatch. Dispatch es la función para llamar a las acciones en el reductor.

const App = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  //Acá iria el reducer del shopping Cart

  const [state2, dispatch2] = React.useReducer(shoppingCartReducer, shoppingCartInitialState )
 
  return (
    
    
    <AuthContext.Provider
    value = {{ state, dispatch } /*El default, switch corre hasta return state */}
    
    > 

    <shoppingCartContext.Provider 
    value = {{state, dispatch2}}
    >
    

      <Router>

           <Header />
           
         

        <Switch>

   
          <Route exact path ="/">
            <HomeShop />
          </Route>

          <Route path="/2">
            <HomeShop2 />
          </Route>

          <Route path="*">
            <h2> 404 NOT FOUND  </h2>
          </Route>

         

        </Switch>

          <Footer />

      </Router>


      </shoppingCartContext.Provider> 

     </AuthContext.Provider>
  );
}

export default App;
