import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import BookCard from "../components/BookCard";
import Details from '../components/Details';
import Pagination from "../components/Pagination";
import { toggleCart } from "../store/reducer/cartSlice";
import { Link } from "react-router-dom";
const Home = ()=> {
    const [data, setData] = useState([]);
    const [records, setRecords] = useState([]);
    const [visibility, setVisibility] = useState(2);
    const dispatch = useDispatch();
    useEffect(()=>{
        axios.get('https://private-anon-8bc0fac39c-bookstore.apiary-mock.com/data/books')
        .then(response =>{ 
            setData(response.data)
            setRecords(response.data)
        })
        .catch(error=>console.log(error))
    },[]);
    const handleLoadMore = ()=>{
        setVisibility((prev)=>prev+3)
      }
    const handleSearch = (event) =>{
        setRecords(data.filter(f => f.title.toLowerCase().includes(event.target.value)).slice(0, visibility))
    }
    const handleOpenMovies = (open) =>{
        dispatch(toggleCart(open))
    }
    // const options = [
    //     {id:"Maeve Binchy", name: 1},
    // {id: "Dan Brown", name: 2},
    // {id: "Terry Brooks", name: 3},
    // {id: "Linda van Rijn", name: 4},
    // {id: "Nicholas Sparks", name: 5},
    // {id: "John Irving", name: 6},
    // {id:"Khaled Hosseini", name: 7},
    // {id: "Sophie Kinsella", name: 8},
    // {id: "David Baldacci", name: 9},
    // ]
    return(
        <div>
            <section>
                <div className="container container-sm">
                   
                     <div className="filterSearch">
                    <input
                      type="text"
                      style={{width:"100%", marginBottom: "1rem"}}
                      placeholder="Search..."
                      onChange={handleSearch}
                    />
                    
                    <Link to="/movies" onClick={()=>handleOpenMovies(false)} className="bton_movie">Movies based on the book</Link>
                    {/* <SelectFilter
                    name= "select"
                    options = {SelectFilter}
                    labelField="id"
                    valueField= "name"
                    multi
                    onChange={records => setRecords(records)}
                    >
                    </SelectFilter> */}
                    <div className="googleMaps">
                    <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d719035.7982682914!2d18.625890878124984!3d45.25317979999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475b105223513569%3A0x31a11bc04928a159!2sbulevar%20books%2C%20knji%C5%BEara%20koja%20svira!5e0!3m2!1ssr!2srs!4v1700779660503!5m2!1ssr!2srs" 
                    width="200" 
                    height="300" 
                    style={{border:"0", marginTop:"210px"}} 
                    allowfullscreen="" 
                    loading="lazy" 
                    title="googleMaps"
                    referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                   </div>
                   </div>
                    
                    <div className="home-content">   
                    <div className="bookCard">
                        {records.map(elem =>(

                            <BookCard key={elem.ISBN} {...elem}></BookCard>
                        ))}
                        </div>
                      <Details></Details> 
                    </div>
                   
                </div>
                {data && visibility <= data.length && (
        // <button onClick={()=>{
        //   handleLoadMore()
        // }}>Read more...</button>
        <Pagination onClick={handleLoadMore}></Pagination>
      )}
            </section>
        </div>
    )
}
export default Home;