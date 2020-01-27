import React from 'react';
import './App.css';
import CardList from './Components/card-list/card-list.components'

class App extends React.Component{
  constructor(){
    super();

    /* state is a component object*/
    this.state = {
     users: [
       {
         name:'user1',
         id:1,
         email:'example1@server.com',
         city: 'São Paulo'
       },
       {
         name: 'user2',
         id: 2,
         email:'example2@server.com',
         city: 'Rio de Janeiro'
       },
       {
         name: 'user3',
         id: 3,
         email:'example3@server.com',
         city: 'Belo Horizonte'
       },
       {
         name: 'user4',
         id: 4,
         email:'example4@server.com',
         city: 'João Pessoa'
       }
     ]
   }
  }

   render(){
     return(
      <CardList users = {this.state.users}/>
     )
   }
}

export default App;
