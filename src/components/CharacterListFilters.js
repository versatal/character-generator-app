import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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
      <div className="content-container">
        <div className="page-header">
          <div className="content-container header-dashboard">
            <h1 className="page-header__title">Viewing All Characters</h1> 
            <Link className="button" to="/create">Add Character</Link>
          </div>
        </div>


        <div className="input-group">
          <div className="input-group__item">
            <input 
              type="text" 
              value={this.props.filters.text} 
              onChange={this.onTextChange}
            />
          </div>
          <div className="input-group__item">
            <select 
              value={this.props.filters.sortBy} 
              onChange={this.onSortChange}
            >
              <option value="name">Name</option>
              <option value="system">System</option>
            </select>
          </div>
        </div>
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