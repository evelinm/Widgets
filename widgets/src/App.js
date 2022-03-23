import React from 'react';
// import Accordion from './Components/Accordion';
import SearchBar from './Components/SearhBar';

const items = [
    {
        title: "What is React?",
        content: "React is a front end JavaScript FrameWork"
    },
    {
        title: "Why use React?",
        content: "React is a favorite JS library among engineers"
    },
    {
        title: "How do you use React?",
        content: "You use React by creating components"
    }
];

const  App = () => {
  
    return <div>
        <SearchBar/>
    </div>
};
export default App;