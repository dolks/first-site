import React, { Component } from 'react';
import {updateSearchQuery, searchBreedsFunction} from '../actions';
import { connect } from 'react-redux';

class SearchBar extends Component {

    constructor (props){
        super(props);

        this.onButtonPress = this.onButtonPress.bind(this);
    }

    // onButtonPress(event){
    //     event.preventDefault();
    //     this.props.searchBreedsFunction(event.target.value, this.props.allBreeds);
    // }

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
                style={{alignSelf:'center'}}
                placeholder='Enter breed name'
                value={this.props.searchQuery}
                onKeyPress={(event) => {this.onEnterPress(event.charCode, this.props.searchQuery)}}
                onChange={(event) => {this.props.updateSearchQuery(event.target.value)}}/>
                {this.props.searching ?<button className='buttonload'><i className="fa fa-circle-o-notch fa-spin"></i></button>
                : <button className='buttonload' onClick={() => {this.onButtonPress(this.props.searchQuery)}}>Search</button>}
            </div>

            // <form className='input-group new-form' onSubmit={(event) => {this.onButtonPress(event)}}>
            //     <input
            //     placeholder='Enter breed name'
            //     className='form-control new-input'
            //     value={this.props.searchQuery}
            //     onChange={(event) => {this.props.updateSearchQuery(event.target.value)}} />
            //     <span className='input-group-btn new-span'>
            //     {this.props.searching ?<button className='btn btn-secondary new-btn'><i className="fa fa-circle-o-notch fa-spin"></i></button>
            //     : <button className='btn btn-secondary new-btn'>Search</button>}
            //     </span>
            // </form>
        
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