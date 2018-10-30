import React from 'react';
import Card from './Card';

const CardList = (props) => {

    let index = 0;
    const breedList = props.breeds.map((breed) =>{
        return <Card key={index++} data={breed.name} image={breed.image}/>
    });

    return(
        <ul className="list-group">
            {breedList}
        </ul>
    );
}

export default CardList;