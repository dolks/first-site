import React from 'react';

const Card = ({data, image}) => {
    return (
        <div className='card'>
            <li className='list-group-item'>
                <div className='media'>
                    <div className='media-left'>
                        <img className='media-object' src={image} alt='' height='100' width='200' />
                    </div>
                    <div className='media-body'>
                        <div className='media-heading' style={{paddingLeft: 10}}>{data}</div>
                    </div>
                </div>
            </li>
        </div>
        
    );
}

export default Card;