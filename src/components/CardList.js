import React, {Component} from 'react';
import Card from './Card';

class CardList extends Component {
    
    render (){
        if (this.props.breeds.length === 0){
            return(
                <div>
                    No results found.
                </div>
            );
        }
        let index = 0;
        let breedList = this.props.breeds.map((breed) =>{
            return <Card key={index++} data={breed.name} image={breed.image}/>
        });
        return(
            <ul className='list-group'>{breedList}</ul>     
        );
    }
    
}

export default CardList;