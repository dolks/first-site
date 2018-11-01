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

  searchBreeds(term){
    this.props.toggleSearchingState();
    if (!term){
      window.alert("No results found.");
      this.props.toggleSearchingState();
      return;
    }
    let currBreeds  = this.props.allBreeds;
    let newBreeds = [];
    term = term.toLowerCase();
    for (let i=0; i<currBreeds.length; i++){
      if(~currBreeds[i].name.toLowerCase().indexOf(term)){
        newBreeds.push(currBreeds[i]);
      } else {
        continue;
      } 
    };
    this.props.updateSearchBreeds(newBreeds);
    this.props.toggleSearchingState();
    if (newBreeds.length === 0){
      window.alert("No results found.");
    }
  }

  render() {
    return (
        <div className='main-container'>
          <header className='site-title'>
            <p>
              DogDB
            </p>
          </header>
          <SearchBar loading={this.props.searching} onSearchPress={(term) => {this.searchBreeds(term)}}/>
          <CardList className='cardlist' breeds={this.props.searchBreeds.length===0? this.props.allBreeds : this.props.searchBreeds}/>
        </div>

    );
  }
}

const mapStateToProps = ({ app }) => {
  return {
    allBreeds: app.allBreeds,
    searchBreeds: app.searchBreeds,
    searching: app.searching,
  };
};

export default connect(mapStateToProps, {
  updateSearchBreeds,
  toggleSearchingState,
})(HomePage);
