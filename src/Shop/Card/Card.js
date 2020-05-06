import React, {useContext} from 'react'; //Vital para usar context
import {shoppingCartContext} from '../../App';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddShoppingCartSharpIcon from '@material-ui/icons/AddShoppingCartSharp';
import ZoomInSharpIcon from '@material-ui/icons/ZoomInSharp';




const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function SingleCard(props) {
  const classes = useStyles();

  
const ShopListAdd = () => {
    ShopList.dispatch2({
        type: "ADD"
    })
}

const ShopList = useContext(shoppingCartContext) /* CONTEXT */
  
//why shopping cart context me vuelve undefined



  return (
    <Card className={`${classes.root} card`} id={props.id}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.image}
          title={props.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <AddShoppingCartSharpIcon onClick={ShopListAdd} />
        </Button>
        <Button size="small" color="primary">
          <ZoomInSharpIcon />
        </Button>
      </CardActions>
    </Card>
  );
}