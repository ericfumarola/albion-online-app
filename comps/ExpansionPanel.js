import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

class SimpleExpansionPanel extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;

        this.state = {
            itemData: null
        };
    }


    getItemData = itemId => {
        let query = `http://localhost:5000/item/${itemId}`;

        axios.get(query)
            .then((response) => {
                this.setState({itemData: response.data})
            })
    };

    render() {
        const {classes, itemDescription, itemTitle, itemId} = this.props;
        const {itemData} = this.state;
        console.log('itemData', itemData)
        return (
            <div className={classes.root}>
                <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>} onClick={() => this.getItemData(itemId)}>
                        <Typography className={classes.heading}>{itemTitle}</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                            {itemDescription}
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
        );
    }

}

const styles = theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
});


SimpleExpansionPanel.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleExpansionPanel);
