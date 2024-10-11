// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import ToDoList from './pages/TodoList';
// import Item from './pages/Item';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import NavBar from './components/Navbar';

import { useRoutes} from 'react-router-dom'

import './App.css'

function App() {
  let element = useRoutes([
    {path: "/", element: <Home/>},
    {path: "/list", element: <ToDoList/>},
    {path: "*", element: <NotFound/>},
  ])

  return (
    <>
      <NavBar />
      <div className="container">
      {element}
      {/* <Routes>
      
        { <Route path="/" element={<Home/>}/>
        <Route path="/list" element={<List />}/>
        <Route path="/list/:id" element={<Item />}/>
        <Route path="*" element={<NotFound />}/> }
 
       
      </Routes> */}
     </div>
      
      
    </>
  )
}

export default App
