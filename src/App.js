import {useState} from 'react';
import Calendar from 'react-calendar';
import './App.css';
import Time from './Time.js'
import Kalenteri from './Kalenteri';
import Kalenteri2 from './Kalenteri2';


function App() {
 
const [date, setDate] = useState(new Date());
const [showTime, setShowTime] = useState(false) 

console.log(date);

 return (
 <div className='app'>
   <h1 className='header'>Reeni Kalenteri</h1>
   <div>
    <Kalenteri/>
   </div>

 </div>
  )
}

export default App;