import React from "react"
import List from "./List"
import "./App.css"

const newRandomCard = () => {
  const id = Math.random().toString(36).substring(2, 4)
    + Math.random().toString(36).substring(2, 4);
  return {
    id,
    title: `Random Card ${id}`,
    content: 'lorem ipsum',
  }
}

class App extends React.Component {
  constructor(props){
    super(props);

    this.state= {
      lists: [
        {
          id: '1',
          header: 'First list',
          cardIds: [ 'a', 'b', 'e', 'f', 'g', 'j', 'l', 'm' ],
        },
        {
          id: '2',
          header: 'Second list',
          cardIds: ['b', 'c', 'd', 'f', 'h', 'i', 'k'],
        },
        {
          id: '3',
          header: 'Third list',
          cardIds: [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm' ],
        },
        {
          id: '4',
          header: 'Fourth list',
          cardIds: [ 'l', 'm' ],
        },
      ],

      allCards: {
        'a': { id: 'a', title: 'First card', content: 'lorem ipsum' },
        'b': { id: 'b', title: 'Second card', content: 'lorem ipsum' },
        'c': { id: 'c', title: 'Third card', content: 'lorem ipsum' },
        'd': { id: 'd', title: 'Fourth card', content: 'lorem ipsum' },
        'e': { id: 'e', title: 'Fifth card', content: 'lorem ipsum' },
        'f': { id: 'f', title: 'Sixth card', content: 'lorem ipsum' },
        'g': { id: 'g', title: 'Seventh card', content: 'lorem ipsum' },
        'h': { id: 'h', title: 'Eighth card', content: 'lorem ipsum' },
        'i': { id: 'i', title: 'Ninth card', content: 'lorem ipsum' },
        'j': { id: 'j', title: 'Tenth card', content: 'lorem ipsum' },
        'k': { id: 'k', title: 'Eleventh card', content: 'lorem ipsum' },
        'l': { id: 'l', title: 'Twelfth card', content: 'lorem ipsum' },
        'm': { id: 'm', title: 'Thirteenth card', content: 'lorem ipsum' },
      }
    }
  
  }

  //make sure this event handler binds to the App (use arrow function) READ UP MORE ON BINDING
  handleDeleteCard = (Card) => {
    //console.log(Card);
    const newLists = this.state.lists.map(list =>{
      list.cardIds = list.cardIds.filter(
        crd => crd !== Card
      )
      return list
    })
    this.setState({
      lists: newLists
    })
  }

   //make sure this event handler binds to the App (use arrow function) READ UP MORE ON BINDING
  handleRandomCard = (listID) => {
    const newCard = newRandomCard()
    console.log(newCard)
    
    const newLists = this.state.lists.map(list =>{
     if (list.id === listID){
       list.cardIds.push(newCard.id)
     }
      return list
      })
    this.state.allCards[newCard.id] = newCard

    this.setState({
      lists: newLists,
      allCards: this.state.allCards
    })
  }

  render() {

    //assign store to this.props to access props later 
    const {lists, allCards} = this.state

    return (
      <main className="App">
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div className="App-list">
          {lists.map((list) => (
            <List key={list.id} 
            header={list.header} 
            cards={list.cardIds.map((id) => allCards[id])}
            onRandomItem = {this.handleRandomCard}
            onDeleteItem = {this.handleDeleteCard}
            id = {list.id}
            />
          ))}
        </div>
      </main>
    )
  }
}

export default App
