import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';


import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export default function MediaControlCard(props) {
  const classes = useStyles();
  const theme = useTheme();

  return (

    <Card className={classes.root}>
    {console.dir(props.props)}
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {`${props.props.title}`}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {`$ ${props.props.price}. Cantidad: ${props.props.cantidad}`}
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          <IconButton >
                <AddIcon />
          </IconButton>
          <IconButton >
                <RemoveIcon />
          </IconButton>
          <IconButton >
                <DeleteIcon />
          </IconButton>
        
        </div>
      </div>
      <CardMedia
        className={classes.cover}
        image={`${props.props.image}`}
        title={`${props.props.title}`}
      />
    </Card>
  );
}

