import React, { Component } from 'react';

class SearchBar extends Component {

    constructor(props){
        super(props);

        this.state = {searchQuery: ''};
    }

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
                value={this.state.searchQuery}
                onKeyPress={(event) => {this.onEnterPress(event.charCode, this.state.searchQuery)}}
                onChange={(event) => {this.setState({searchQuery: event.target.value})}}/> 
                {this.props.loading ?<button className='buttonload'><i className="fa fa-circle-o-notch fa-spin"></i></button>
                : <button className='buttonload' onClick={() => {this.onButtonPress(this.state.searchQuery)}}>Search</button>}
            </div>
        
        );
    }
}

export default SearchBar;