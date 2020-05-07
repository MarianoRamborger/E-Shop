import React, {useContext} from 'react';
import {shoppingCartContext} from '../../App'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Item from './Item'



const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});



export default function SwipeableTemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

  const shopList = useContext(shoppingCartContext)

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem>  <h3>   Mi Carrito  </h3> </ListItem>

      {

         shopList.state2.shoppingList.map(data => {
      
           return <Item props={data} key={data.productId} />
         } 
         )
        
       
      }
    
      </List>
      <Divider />
      <List>
    
      </List>
    </div>
  );

  return (
    <div>
    
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <ShoppingCartIcon onClick={toggleDrawer(anchor, true)} className="icono" > {anchor}</ShoppingCartIcon>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
      
    </div>
  );
}
