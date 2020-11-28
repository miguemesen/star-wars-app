import './App.css';

import React from 'react'
import SWCharacter from './starwarscharacter'

export default class SWPeople extends React.Component {
    state = {
        loading: true,
        person: [],
    }

    async componentDidMount() {
        const url = 'https://swapi.dev/api/people/'
        const response = await fetch(url);
        const data = await response.json();

        this.setState({
            person: data.results || [], loading: false
        })
        // this.setState({person: data.results[0], loading: false})
        // console.log(data.results[0].name)
    }

    render() {
        return (
            <div>
                {this.state.loading || !this.state.person ? <div>loading...</div>
                    :
                    <div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Height</th>
                                    <th>Mass</th>
                                    <th>Gender</th>
                                    <th>Birth Year</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.person.map((c, index) => <SWCharacter key={index} person={c}></SWCharacter>)}
                            </tbody>
                        </table>
                    </div>}
            </div>
        );
    }
};
