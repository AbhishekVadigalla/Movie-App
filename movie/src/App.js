import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import React,{useState} from 'react'
import axios from 'axios';
function App() {
  const [search,setSearch]=useState('')
  const [data,setData]=useState([])
  const submitHandler=(e)=>{
    e.preventDefault()
    axios.get(`http://www.omdbapi.com/?s=${search}&apikey=263d22d8`)
    .then(value=>{console.log(value.data.Search)
      setData(value.data.Search)
    })
  }
  return (
    <div>
      <h1 className='text-center mt-4 '>Explore A World Of Cinema</h1>
      <form onSubmit={submitHandler}>
      <div className='container col-5'>
      <input onChange={(e)=>setSearch(()=>e.target.value)}  className="form-control form-control-lg mt-4" style={{width:'700px'}} type="text" placeholder="Endless Movies, Just One Search Away!"/>
      </div>
      <center><input className='btn btn-primary mt-4 mb-4' type='submit' value='submit'/></center>  
      </form>
      <div className='row'>
        
      {
        data.map(movie=>
          <div className='col-md-3 m-4'>
            <div className='container - fluid'>
              <div class="card" style={{width: "18rem"}}>
  <img src={movie.Poster} class="card-img-top" alt={movie.Title}/>
  <div class="card-body">
    <h5 class="card-title">{movie.Title}</h5>
    <a href={movie.Poster} class="btn btn-primary" download>Download Poster</a>
  </div>
</div>
              </div>
          </div>
          
        )
      }
      </div>
      
    </div>
  );
}
export default App;
