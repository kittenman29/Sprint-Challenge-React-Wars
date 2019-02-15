import React, { Component } from 'react';


class Characters extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className='characterAttrs'>
                <h1 className='characterName'>Name: { this.props.starwarsChars.name }</h1>
                <p className='characterYear'>Birth Year: { this.props.starwarsChars.birth_year }</p>
                <p className='characterHeight'>Height: { this.props.starwarsChars.height }</p>
            </div>
        );
    }
}

export default Characters;