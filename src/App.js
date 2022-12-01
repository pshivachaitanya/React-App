import React from 'react';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header.js'
import Stopwatch from './components/Stopwatch/Stopwatch.js'
import Home from './components/MovieItem/index.js'
import Flames from './components/Semalf/Flames.js'
import Faqs from './components/Faqs'



const faqsList = [
  {
    id: 0,
    questionText: 'What is Routing?',
    answerText:
      'Routing is a process in which a user is directed to different pages based on their action or request. ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application.',
  },
  {
    id: 1,
    questionText: 'Life Cycle Method in React',
    answerText:
    'Each component in React has a lifecycle which you can monitor and manipulate during its three main phases. The three phases are: Mounting, Updating, and Unmounting.',
  },
  {
    id: 2,
    questionText:
      'React Dom Events',
    answerText:
      'An event is an action that could be triggered as a result of the user action or system generated event. For example, a mouse click, loading of a web page, pressing a key, window resizes, and other interactions are called events..',
  },
  {
    id: 3,
    questionText: 'Fragments in React',
    answerText:
      'A common pattern in React is for a component to return multiple elements. Fragments let you group a list of children without adding extra nodes to the DOM..',
  },
  {
    id: 3,
    questionText: 'Functinal and Class components in React',
    answerText:
      'A functional component is just a plain JavaScript pure function that accepts props as an argument and returns a React element(JSX). A class component requires you to extend from React. Component and create a render function which returns a React element.',
  },
  {
    id: 3,
    questionText: 'What is Props',
    answerText:
      'In ReactJS, the props are a type of object where the value of attributes of a tag is stored. The word “props” implies “properties”, and its working functionality is quite similar to HTML attributes. Basically, these props components are read-only components.',
  },{
  id: 3,
    questionText: 'What is Context',
    answerText:
      'React Context is a method to pass props from parent to child component(s), by storing the props in a store(similar in Redux) and using these props from the store by child component(s) without actually passing them manually at each level of the component tree.',
  }
]



  

function App() {
  
  return (
    <BrowserRouter>
    
   
    
    <Routes>
     <Route path='/' element={< Header/>}/>
     <Route path='/accordion' element={<Faqs faqsList={faqsList} />}/>
     <Route exact path='/flames' element={< Flames/>}/>

     <Route exact path='/timer' element={< Stopwatch/>}/>
     <Route exact path='/movies' element={< Home/>}/>

     

      </Routes>
      
    
    
      </BrowserRouter>
    
  );
}

export default App;
