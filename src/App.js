import React, { Component } from 'react';
import Abilities from './Abilities';
import SavingThrows from './SavingThrows';
import test_input from './data/test_input.json';
import './css/Container.css';

class App extends Component {
    // console.log(test_input);
    // console.log(json); // this will show the info it in firebug console
    state = {
        abilities: test_input["abilities"],
        saving_throws: test_input["saving_throws"]
    };

    // removeCharacter = index => {
    //     const { characters } = this.state;
    //
    //     this.setState({
    //         characters: characters.filter((character, i) => {
    //             return i !== index;
    //         })
    //     });
    // }

    // handleSubmit = character => {
    //     this.setState({characters: [...this.state.characters, character]});
    // }
    render() {
        const { abilities, saving_throws } = this.state;
        return (
            <div className="container">
              <div className="Abilities">
                  <h1>Abilities</h1>
                  <Abilities abilitiesData={abilities}/>
              </div>
              <div className="SavingThrows">
                <h1>Saving Throws</h1>
                <SavingThrows savingThrowsData={saving_throws}/>
              </div>
            </div>
        );
    }
}
// return (

// <Abilities abilitiesData={test_input["abilities"]}/>
//
//     <div className="container">
//         <h1>React Tutorial</h1>
//         <p>Add a character with a name and a job to the table.</p>
//         <Table
//             characterData={characters}
//             removeCharacter={this.removeCharacter}
//         />
//         <h3>Add New</h3>
//         <Form handleSubmit={this.handleSubmit} />
//         <h1>abilities</h1>
//     </div>
// );

export default App;
