import React, { Component } from 'react';
import '../App.css';
import SearchBar from './SearchBar';
import YTSearch from 'youtube-api-search';
import CardList from './CardList';
import { updateSearchBreeds, toggleSearchingState } from '../actions';
import { connect } from 'react-redux';

const API_KEY = 'AIzaSyBre0COb_sHpD89t596qVRNGVe9rLQ-Smg';

YTSearch({key: API_KEY, term: 'dogs'}, function(data){
  console.log(data);
});

class HomePage extends Component {

  render() {
    return (
        <div className='main-container'>
          <header className='site-title'>
            <p>
              DogDB
            </p>
          </header>
          <SearchBar />
          <CardList className='cardlist' breeds={this.props.searchBreeds.length===0? this.props.allBreeds : this.props.searchBreeds}/>
        </div>

    );
  }
}

const mapStateToProps = ({ home }) => {
  return {
    allBreeds: home.allBreeds,
    searchBreeds: home.searchBreeds,
    searching: home.searching,
  };
};

export default connect(mapStateToProps, {
  updateSearchBreeds,
  toggleSearchingState,
})(HomePage);
