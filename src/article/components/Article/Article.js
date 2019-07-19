import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SimpleModal from '../../../components/Modal/ModalSimple'
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
    card: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
});

function Article (props) {
    const { src } = props;
    const classes = useStyles();

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };

    const saveItemToLocalStorage = () => {
        let event = [];
        if (localStorage.getItem('items')) {
            let valueLocal = JSON.parse(localStorage.getItem('items')) 

            if(!searchItem(valueLocal, props)) {
                valueLocal.push({...props, quantity: 1})
            } else {
                valueLocal[searchItemIndex(valueLocal, props)] = {
                    ...valueLocal[searchItemIndex(valueLocal, props)],
                    quantity: valueLocal[searchItemIndex(valueLocal, props)].quantity + 1
                }
            }
            localStorage.setItem('items', JSON.stringify(valueLocal));
        } else {
            event.push({...props, quantity: 1})
            localStorage.setItem('items', JSON.stringify(event));
        }
        
    }

    function searchItem(items, article) {
        return items.find(item => item.id == article.id)
    }

    function searchItemIndex(items, article) {
        return items.findIndex(item => item.id == article.id)
    }

    return (
        <div>
            <SimpleModal open={open} onClose={handleClose} src={props.src} />
            <Card className={classes.card} style={{width: '200px'}}>
                <CardActionArea onClick={handleOpen}>
                    <CardMedia
                        className={classes.media}
                        image={src}
                        title="Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                        Lizard
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            price : {props.price}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" onClick={saveItemToLocalStorage}>
                        addToCart
                    </Button>
                    <Button size="small" color="primary" onClick={handleOpen}>
                        Details
                    </Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default Article