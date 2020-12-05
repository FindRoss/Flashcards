import './App.css';
import Flashcards from './Flashcards';
import Nav from './Nav';



function App() {
  return (
    <div className="App">
      <Nav />
      <div className="app--content">
        <Flashcards />
      </div>
    </div>
  );
}

export default App;

// article use in front of a noun. 
// use 'keydown' event. fully supported across browsers. 
// state would look like: 
/* state = {
  words: [
    {
      german: "German word",
      english: "English version",
      gender: "male", or "female", "neutral", or null
      theme: ["Food", "Shopping"],
      id: "",
      date: ""
    }
  ],
  favorites: [ id, id, id, ...words to repeat like favorites]
}

*/
