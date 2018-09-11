import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import cors from 'cors';

const styles = theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
});

const getItemData = itemId => {
    let options = {
        method: 'GET',
        headers: {
            'Access-Control-Allow-Origin':'*'
        }
    };
    let query = `http://localhost:5000/item/${itemId}`;

    fetch(query, options)
        .then((response) => {
            return response.json()
        })
        .then((recurso) => {
            console.log(recurso)
        });

   return '';
};

function SimpleExpansionPanel(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} onClick={() => getItemData(props.itemId)}>
                    <Typography className={classes.heading}>{props.itemTitle}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>
                        {props.itemDescription}
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    );
}

SimpleExpansionPanel.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleExpansionPanel);
