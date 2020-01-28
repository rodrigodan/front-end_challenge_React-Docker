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
         city: 'João Pessoa',
         country: 'Brazil',
         code: 1232
       },
       {
         name: 'user2',
         id: 2,
         email:'example2@server.com',
         city: 'Rio de Janeiro',
         country: 'Brazil',
         code: 12352
       },
       {
         name: 'user3',
         id: 3,
         email:'example3@server.com',
         city: 'New Delhi',
         country: 'India',
         code: 12329
       },
       {
         name: 'user4',
         id: 4,
         email:'example4@server.com',
         city: 'London',
         country: 'England',
         code: 5832
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
