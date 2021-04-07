import { useState } from 'react';
import './App.css';

function App() {

  const [value, setValue] = useState('');
  const [results, setResults] = useState([]);
  const [totalPhotos, setTotalPhotos] = useState(12);
  const fetchImage = ()=>{
    fetch(`https://api.unsplash.com/search/photos?client_id=muEVC55Spl69vtSuQpBRCNf4j9_-iwqUwlhsTe9cq0Q&query=${value}&per_page=${totalPhotos}&orientation=squarish`)
    .then(res=>res.json())
    .then(data=>{console.log(data)
      setResults(data.results);
    })
  }

  return (
    <div className="App">
      <div className="header">
        <input type="search" placeholder="Search photos here" className="search-input" value={value} onChange={(e)=>setValue(e.target.value)}/>
        <div className="total"><p>Total Photos:</p><input type="number" className="totalPhotos" max="60" value={totalPhotos} onChange={(e)=>setTotalPhotos(e.target.value)}/></div>
        <button type="submit" onClick={()=>fetchImage()}>Search</button>
      </div>
      <div className="label">Photos of {value}</div>
      <div className="show">
        {
        results.map((item)=>{
          return <img className="image" key={item.id} src={item.urls.regular}/>
        })
        }
      </div>
    </div>
  );
}

export default App;
