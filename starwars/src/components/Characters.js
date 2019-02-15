import React, { Component } from 'react';


class Characters extends Component {

    getStyle = () => {
        if(this.props.starwarsChars.gender === 'male' || 'female') {
            return {
                color: 'purple'
            } 
        }   else {
            console.log(this.props.starwarsChars.gender);
            return {
                
                display: 'none'
            }
        }
    }


    render() {
        return (
            <div className='characterAttrs'>
                <h1 className='characterName'>Name: { this.props.starwarsChars.name }</h1>
                <p className='characterYear'>Birth Year: { this.props.starwarsChars.birth_year }</p>
                <p className='characterHeight'>Height: { this.props.starwarsChars.height }</p>
                <p style={this.getStyle()} className='characterGender'>Gender: { this.props.starwarsChars.gender }</p>
            </div>
        );
    }
}

export default Characters;