import React, { Component } from 'react';
import {updateSearchQuery} from '../actions';
import { connect } from 'react-redux';

class SearchBar extends Component {

    onButtonPress(term){
        this.props.onSearchPress(term);
    }

    onEnterPress(keyCode, term){
        if(keyCode === 13){
            this.props.onSearchPress(term);
        }
    }

    render() {
        return (
            <div className='search-bar'>
                <input
                placeholder='Search breed name'
                value={this.props.searchQuery}
                onKeyPress={(event) => {this.onEnterPress(event.charCode, this.props.searchQuery)}}
                onChange={(event) => {this.props.updateSearchQuery(event.target.value)}}/> 
                {this.props.loading ?<button className='buttonload'><i className="fa fa-circle-o-notch fa-spin"></i></button>
                : <button className='buttonload' onClick={() => {this.onButtonPress(this.state.searchQuery)}}>Search</button>}
            </div>
        
        );
    }
}

const mapStateToProps = ({ searchBar }) => {
    return {
        searchQuery: searchBar.searchQuery,
    };
  };
  
  export default connect(mapStateToProps, {updateSearchQuery})(SearchBar);