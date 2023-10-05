import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [sepuluh, setSepuluh] = useState(false);
  const [even, setEven] = useState(null);

  useEffect(()=>{
    if(count === 10){
      setSepuluh(true);
    }else{
      setSepuluh(false);
    }
  },[count]);

  useEffect(()=>{
    if(count % 2 === 10){
      setEven(true);
    }else{
      setEven(false);
    }
  },[count]);

  return(
    <>
    {even===true}
    <h3>Tugas Praktikum RPLBK Modul 3</h3>
    <h3>Kelompok 12</h3>
    <p>Program Counter</p>
    <div className='card'>
      {count===10 ? <p>Counter telah mencapai nilai 10 !</p> : <p>{count}</p>}
      {count === 10 ? (<button className='btn1' onClick={()=>setCount(count-1)}>Kurang</button>):(
        <>
        <button className='btn1' onClick={()=>setCount(count+1)}>Tambah</button>
        {count>0 && <button className='btn1' onClick={()=>setCount(count-1)}>Kurang</button>}
        </>
      )}
    </div>
    </>
  );
      }


export default App;

