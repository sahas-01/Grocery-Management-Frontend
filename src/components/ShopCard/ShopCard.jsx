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

    return (
        <div className="club-test-tile">
            <img src={grocery} alt="grocery" width="150" height="150" />
            <span className="tile-title">Shop Name</span>
            {/* <span className="tile-subtitle">Type: {roundType}</span> */}
            <span className="tile-subtitle"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, a?</span>
        </div>
    );

}

