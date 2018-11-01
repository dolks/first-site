import React, { Component } from 'react';
import {updateSearchQuery, searchBreedsFunction} from '../actions';
import { connect } from 'react-redux';

class SearchBar extends Component {

    onButtonPress(term){
        this.props.searchBreedsFunction(term, this.props.allBreeds);
    }

    onEnterPress(charCode, term){
        if(charCode === 13){
            this.props.searchBreedsFunction(term, this.props.allBreeds);
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
                {this.props.searching ?<button className='buttonload'><i className="fa fa-circle-o-notch fa-spin"></i></button>
                : <button className='buttonload' onClick={() => {this.onButtonPress(this.props.searchQuery)}}>Search</button>}
            </div>
        
        );
    }
}

const mapStateToProps = ({ searchBar, home }) => {
    return {
        searchQuery: searchBar.searchQuery,
        allBreeds: home.allBreeds,
        searching: searchBar.searching,
    };
  };
  
  export default connect(mapStateToProps, {updateSearchQuery, searchBreedsFunction})(SearchBar);