import React, { Component } from 'react';
import Characters from './Characters'
import './StarWars.css'

class CharacterList extends Component {
    constructor() {
        super();
    }

    render() {
        return this.props.starwarsChars.map((starwarsChars, index) => (
            <Characters key={index} starwarsChars={starwarsChars} />
        ));
    }
}

export default CharacterList;

