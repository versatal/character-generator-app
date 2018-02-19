import React from 'react';
import moment from 'moment';

export default class CharacterForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: props.character ? props.character.name : '',
      system: props.character ? props.character.system : '',
      shortDescription: props.character ? props.character.shortDescription : '',
      createdAt: props.character ? moment(props.character.createdAt) : moment(),
      error: ''
    };
  
  };
  onNameChange = (e) => {
    const name = e.target.value;
    this.setState(() => ({ name }));
  };
  onSystemChange = (e) => {
    const system = e.target.value;
    this.setState(() => ({ system }));
  };
  onShortDescriptionChange = (e) => {
    const shortDescription = e.target.value;
    this.setState(() => ({ shortDescription }));
  };
  onSubmit= (e) => {
    e.preventDefault();
    this.setState(() => ({ createdAt: moment() })); 
    if (!this.state.name || !this.state.system) {
      this.setState(() => ({ error: 'Please provide name and system' }));
    } else {
      this.setState(() => ({ error: '' }));
      console.log('Submitted');
      this.props.onSubmit({
        name: this.state.name,
        system: this.state.system,
        shortDescription: this.state.shortDescription,
        createdAt: this.state.createdAt.valueOf()
      })            
    };
  }
  render() {
    return (
        <form className="form" onSubmit={this.onSubmit}>
        {this.state.error && <p className="form__error">{this.state.error}</p>}
          <input
             type="text"
             className="text-input"
             placeholder="Name"
             autoFocus
             value={this.state.name}
             onChange={this.onNameChange}
          />
          <input
             type="text"
             className="text-input"
             placeholder="System"
             autoFocus
             value={this.state.system}
             onChange={this.onSystemChange}
          />
          <input
             type="text"
             className="text-input"
             placeholder="Short Description"
             autoFocus
             value={this.state.shortDescription}
             onChange={this.onShortDescriptionChange}
          />
          <button className="button">Submit Character</button>
        </form>
    )
  }
}