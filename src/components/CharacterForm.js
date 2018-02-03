import React from 'react';
import moment from 'moment';

export default class CharacterForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: props.character ? props.character.name : '',
      level: props.character ? props.character.level : 1,
      characterClass: props.character ? props.character.characterClass : '',
      race: props.character ? props.character.race : '',
      alignment: props.character ? props.character.alignment : '',
      createdAt: props.character ? moment(props.character.createdAt) : moment(),
      error: ''
    };
  
  };
  onNameChange = (e) => {
    const name = e.target.value;
    this.setState(() => ({ name }));
  };
  onLevelChange = (e) => {
    const level = e.target.value;
    this.setState(() => ({ level }));
  };
  onCharacterClassChange = (e) => {
    const characterClass = e.target.value;
    this.setState(() => ({ characterClass }));
  };
  onRaceChange = (e) => {
    const race = e.target.value;
    this.setState(() => ({ race }));
  };
  onAlignmentChange = (e) => {
    const alignment = e.target.value;
    this.setState(() => ({ alignment }));
  };
  onSubmit= (e) => {
    e.preventDefault();
    this.setState(() => ({ createdAt: moment() })); 
    if (!this.state.name || !this.state.characterClass) {
      this.setState(() => ({ error: 'Please provide name and character class' }));
    } else {
      this.setState(() => ({ error: '' }));
      console.log('Submitted');
      this.props.onSubmit({
        name: this.state.name,
        level: this.state.level,
        createdAt: this.state.createdAt.valueOf(),
        characterClass: this.state.characterClass,
        race: this.state.race,
        alignment: this.state.alignment,
      })            
    };
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
             type="text"
             placeholder="Name"
             autoFocus
             value={this.state.name}
             onChange={this.onNameChange}
          />
          <input 
            type="number"
            placeholder="Level"
            value={this.state.level}
            onChange={this.onLevelChange}
          />
          <input 
            type="text"
            placeholder="Character Class"
            value={this.state.characterClass}
            onChange={this.onCharacterClassChange}
          />
          <input 
            type="text"
            placeholder="Race"
            value={this.state.race}
            onChange={this.onRaceChange}
          />
          <input 
            type="text"
            placeholder="Alignment"
            value={this.state.alignment}
            onChange={this.onAlignmentChange}
          />
          <button>Add Character</button>
        </form>
      </div>
    )
  }
}