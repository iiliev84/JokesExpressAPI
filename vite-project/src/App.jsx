import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [jokes,setJokes] = useState([]);

  const getJokes = async () => {
    try{
    const response = await fetch('http://localhost:3000/jokes');
    const result = await response.json();
    console.log(result)
    return result;
  } catch (err) {
    console.error("Uh oh, trouble fetching jokes!", err);
  }
}

useEffect(() => {
  async function fetchData() {
    const result = await getJokes();
    
    setJokes(result.data);
  }
  fetchData();
}, []);

const getRandom = async () => {
  try{
  const response = await fetch('http://localhost:3000/jokes/random');
  const result = await response.json();
  console.log(result)
  return result;
} catch (err) {
  console.error("Uh oh, trouble fetching jokes!", err);
}
}

useEffect(() => {
async function fetchData() {
  const result = await getRandom();
  
  setJokes(result.data);
}
fetchData();
}, []);


return (
  <>
    <div >
        <h2>Jokes: {jokes}</h2>
      </div>
    
  </>
)
}

export default App
