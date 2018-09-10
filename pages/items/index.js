import React from 'react';
import NavBar from "../../comps/NavBar";
//import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {ITEM_CATEGORIES} from "../../static/consts/itemscats"
//import Loading from "./loading";
//import Card from "./card";
import Card from "../../comps/Card"

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
});

class CategoriesGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            loading: true,
            categories: []
        };
    }

    state = {
        spacing: '16',
    };

    handleChange = key => (event, value) => {
        this.setState({
            [key]: value,
        });
    };

    componentDidMount() {
        let itemsCategories = ITEM_CATEGORIES;
        let currentComponent = this;

        itemsCategories = itemsCategories.map((item, index) => itemsCategories[index]);
        currentComponent.setState({
            items: itemsCategories,
            loading: false
        });
    }

    render() {
        const {classes} = this.props;
        //const {spacing} = this.state;

        if (this.state.loading) {
            return (<div><NavBar/>Not loaded</div>)
        } else {
            return (
                <div className={classes.root}>
                    <NavBar/>
                    <Grid container spacing={24}>
                        <Grid item xs>
                            {this.state.items.map(item => (
                                <Card
                                    key={`${item.name}`}
                                    img={`${item.img}`}
                                    title={`${item.name}`}
                                    description={`${item.description}`}
                                ></Card>
                            ))}
                        </Grid>
                    </Grid>
                </div>)
        }
    }
}

// CategoriesGrid.propTypes = {
//     classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(CategoriesGrid);