import React from 'react'

export default class SWCharacter extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.person.name}</td>
                <td>{this.props.person.height}</td>
                <td>{this.props.person.mass}</td>
                <td>{this.props.person.gender}</td>
                <td>{this.props.person.birth_year}</td>
            </tr>
        );
    }
}