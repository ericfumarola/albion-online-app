import React from 'react';
import fetch from 'node-fetch';
import xml2js from 'xml2js';
import {ITEMS, ITEM_IMG, getItemData} from "../../static/consts/urls";
//import {ITEM_CATEGORIES} from "../../static/consts/itemscats"

import Card from "../../comps/Card";
import NavBar from "../../comps/NavBar";
import SimpleExpansionPanel from "../../comps/ExpansionPanel";

class ItemsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            loading: true,
            categories: []
        };
    }

    componentWillMount() {
        console.log('will mount')
    }

    componentDidMount() {
        let itemsList = [];
        let currentComponent = this;

        fetch(ITEMS)
            .then(res => res.text())
            .then(body => {
                let parser = new xml2js.Parser();

                parser.parseString(body, function (err, result) {
                    itemsList = result;
                    //console.log('itemsList complete (itemsList.items)', itemsList.items);

                    /*itemsList.map(item=>{
                        this.setState({
                            categories: this.state.categories.concat(item)
                        });
                        return false;
                    });
                    console.log('categories', this.state.categories)
                    */

                    /*itemsList =
                        $:              {requestinfo},
                        consumableitem: [{$:{data},...},{$:{data},...},..],
                        equipmentitem:  [{$:{data},...},{$:{data},...},..],
                        farmableitem:  [{$:{data},...},{$:{data},...},..],
                        furnitureitem:  [{$:{data},...},{$:{data},...},..],
                        journalitem:    [{$:{data},...},{$:{data},...},..],
                        mount:          [{$:{data},...},{$:{data},...},..],
                        simpleitem:     [{$:{data},...},{$:{data},...},..],
                        weapon:         [{$:{data},...},{$:{data},...},..]
                     */
                    console.log('itemsList', itemsList.items)
                    itemsList = itemsList.items.farmableitem;
                    itemsList = itemsList.map((item, index) => itemsList[index].$);

                    currentComponent.setState({
                        items: itemsList,
                        loading: false
                    });
                });
            });
    }

    render() {
        if (this.state.loading) {
            return (<p>loading</p>)
        } else {
            return (
                <div>
                    <NavBar/>
                    {this.state.items.map(item => {
                            let id = item.uniquename;
                            //console.log(getItemData(id))
                            //console.log('item', item)
                            return(
                                <SimpleExpansionPanel
                                    key={`${id}`}
                                    itemTitle={`${id}`}
                                    itemDescription={`Description${id}`}
                                ></SimpleExpansionPanel>
                            )
                        }
                    )}
                </div>)
        }
    }
}

export default ItemsList;