import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';
import store from '../store/index';


class Tables extends Component {
    state = {
        characters: []
    };

    removeCharacter = index => {
        const { characters } = this.state;
    
        this.setState({
            characters: characters.filter((character, i) => { 
                return i !== index;
            })
        });
    }

    handleSubmit = character => {
        this.setState({characters: [...this.state.characters, character]});
    }

    render() {
        const { characters } = this.state;
        
        return (
            <div className="container">
                <h3>Add new User</h3>
                <tbody>
                    <table>
                        <tr>
                            <td>
                                <h3><button onClick={function(){
                                    store.dispatch({type: "logOut"})
                                    window.location.href = '/';
                                    }}>Logout</button> </h3>
                            </td>
                            <td>
                                <h3><button onClick={function(){
                                    store.dispatch({type: "logOut"})
                                    window.location.href = '/chart';
                                    }}>Chart</button> </h3>
                            </td>
                        </tr>
                    </table>
                </tbody>
                <Form handleSubmit={this.handleSubmit} />
                <h4>Users</h4>
                <Table
                    characterData={characters}
                    removeCharacter={this.removeCharacter}
                />
            </div>
        );
    }
}

export default Tables;