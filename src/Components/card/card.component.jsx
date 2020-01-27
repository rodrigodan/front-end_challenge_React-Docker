import React from 'react';

import './card.styles.scss';

const Card = (props) => (
    <div className = "card-container">
        {/* <img alt = "monster" src = {`https://robohash.org/1?set=set2`} */}
        <img className = "profile" alt = "monster" src = {require(`../../ressources/${props.users.name}.svg`)}/>
        <div className = "user-infos">
            <h2 className = "main-title"> {props.users.name} </h2>
            <p>{props.users.email}</p>
            <button class="button-details button2">Details</button>
        </div>
    </div>
)

export default Card;