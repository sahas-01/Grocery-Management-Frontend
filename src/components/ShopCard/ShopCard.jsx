import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import grocery from "../../assets/grocery.jpg";
import './ShopCard.css';
import { useHistory } from 'react-router-dom';


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 250,
    },
});

export default function ShopCard() {

    const classes = useStyles();
    const history = useHistory();

    const checkSlots = () => {
        history.push('/viewslots');
    }

    return (
        <div className="club-test-tile">
            <img src={grocery} alt="grocery" />
            <span className="tile-title">Shop Name</span>
            {/* <span className="tile-subtitle">Type: {roundType}</span> */}
            <span className="tile-subtitle"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, a?</span>
            <button onClick={checkSlots} className="slotviewbtn">View Slots</button>
        </div>
    );

}

