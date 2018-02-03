import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByName, sortByLevel } from '../actions/filters';

export class CharacterListFilters extends React.Component{
  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  };
  onSortChange = (e) => {
    if (e.target.value === "name") {
      this.props.sortByName();  
    } else if (e.target.value === "level") {
      this.props.sortByLevel();  
    }
  };
  render() {
    return (
      <div>
        <input 
          type="text" 
          value={this.props.filters.text} 
          onChange={this.onTextChange}
        />
        <select 
          value={this.props.filters.sortBy} 
          onChange={this.onSortChange}
        >
          <option value="name">Name</option>
          <option value="level">Level</option>
        </select>
      </div>
    )
  }
}

const mapDispacthToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  sortByName: () => dispatch(sortByName()),
  sortByLevel: () => dispatch(sortByLevel()) 
});

const mapStateToProps = (state, props) => {
  return {
    filters: state.filters
  }
}

export default connect(mapStateToProps, mapDispacthToProps)(CharacterListFilters);