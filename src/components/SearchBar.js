import React, { Component } from 'react';

class SearchBar extends Component {

    constructor(props){
        super(props);

        this.state = {searchQuery: ''};
    }

    render() {
        return (
            <div className='search-bar'>
                <input
                placeholder='Search breed name'
                value={this.state.searchQuery}
                onChange={(event) => {this.setState({searchQuery: event.target.value})}} />            
            </div>
        
        );
    }
}

export default SearchBar;