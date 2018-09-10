import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
        // maxWidth: 300,
        // height: 300
    },
    media: {
        // ⚠️ object-fit is not supported by IE11.
        //objectFit: 'cover'
        width: 220
    }
};

function ImgMediaCard(props) {
    const { classes } = props;
    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    className={classes.media}
                    image={props.img}
                    title={props.title}
                />
                <CardContent style={{padding: 12}}>
                    <Typography gutterBottom variant="headline" component="h2">
                        {props.title}
                    </Typography>
                    <Typography component="p">
                        {props.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

ImgMediaCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImgMediaCard);