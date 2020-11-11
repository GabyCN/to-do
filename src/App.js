import {useState} from 'react';

function App(){
  const [testi, setTesti] = useState([]);
  const [testo, settesto] = useState('');

  function handleFormSubmit(event){
    event.preventDefault();
    setTesti([...testi,testo])
  }

  return(
    <form onSubmit={handleFormSubmit}>
      <input type="text" onChange={(e) => settesto(e.target.value)}/>
      <button type="submit">+</button>
      <ul>
        {testi.map((item,index)=>{
          return <li>{item}</li>
        })}
      </ul>
    </form>
  )
}




export default App;
