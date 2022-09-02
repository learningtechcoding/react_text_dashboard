import { useState } from 'react';
import './App.css';
import EnterForm from './component/EnterForm';
import Formdata from './component/Formdata';
import Home from './component/Home';
import Sidebar from './component/Sidebar';


function App() {


  const dummydata=[
    {
      title:'Learning',
      numb:"834958294856",
      pak:"Pakistan"
    },
    {
      title:'Coding',
      numb:"83495787",
      pak:"India"
    }
  ]



  const [olddata,setalldata]=useState(dummydata)
  const formdata=(formenterddata)=>{
      const wholedata=[formenterddata,...olddata];
      setalldata(wholedata);
  }

  return (
  <>
  <Home />
  <Sidebar  />
  <EnterForm   eneterddata={formdata}/>
  <Formdata  dummy={olddata}/>







  </>
  );
}

export default App;
