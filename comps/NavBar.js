import React from 'react';
import PropTypes from 'prop-types';
import Link from "next/link";

//import CategoriesGrid from './categoriesgrid'

function TabContainer(props) {
    return (
        <Typography component="div" style={{padding: 8 * 3}}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
});

class SimpleTabs extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({value});
    };

    componentDidMount() {
        this.setState({value: this.props.value});
    }

    render() {
        const {classes} = this.props;
        const {value} = this.state;
        console.log('navbar value:', this.props.value);

        return (
            <div>


                    <Link href="/"><span>Home</span></Link>
                    <Link href="/about"><span>About</span></Link>


            </div>
        );
    }
}

SimpleTabs.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default SimpleTabs;