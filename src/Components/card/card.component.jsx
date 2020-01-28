

import React from 'react';
import AlertDialog from '../modal-windows-card-user-details/modal.details.component';

import './card.styles.scss';


class Card extends React.Component{
    constructor(props){
        super(props);
    }





    render(){

        return(
        <div className = "card-container">
            {/* <img alt = "monster" src = {`https://robohash.org/1?set=set2`} */}
            <img className = "profile" alt = "monster" src = {require(`../../ressources/${this.props.users.name}.svg`)}/>
            <div className = "user-infos">
                <h2 className = "main-title"> {this.props.users.name} </h2>
                <p>{this.props.users.email}</p>

                    {/* <button
                    className="button-details button2"

                    >
                        Details
                    </button> */}
                    <AlertDialog users = {this.props.users}/>


            </div>
            
        </div>


        )
    }
}

export default Card;