import React from 'react';
import Link from "next/link";
import styled from 'styled-components';
import Head from "next/head";

const Section = styled.span`
   font-size: 1.5em;
   padding-left: 1.5em;
   padding-right: 1.5em;
   cursor: pointer;
   
   &:hover {
    background-color: red;
    color: white;
   }
`;

class NavBar extends React.Component {
    state = {
        value: 0,
    };

    // handleChange = (event, value) => {
    //     this.setState({value});
    // };

    componentDidMount() {
        //this.setState({value: this.props.value});
    }

    render() {
        //console.log('navbar value:', this.props.value);

        return (

            <div>
                <Head>
                    <title>AlbionOnline App</title>
                    <link href="../static/index.css" rel="stylesheet"/>
                </Head>
                <Link href="/"><Section>Home</Section></Link>
                <Link href="/items"><Section>Items</Section></Link>
                <Link href="/about"><Section>About</Section></Link>
            </div>
        );
    }
}

NavBar.propTypes = {
    //classes: PropTypes.object.isRequired,
};

export default NavBar;