import { useEffect, useState } from "react";
import axios from "axios";
import BookCard from "../components/BookCard";
import Details from '../components/Details';

const Home = ()=> {
    const [data, setData] = useState([]);
    useEffect(()=>{
        axios.get('https://private-anon-8bc0fac39c-bookstore.apiary-mock.com/data/books')
        .then(response => setData(response.data))
        .catch(error=>console.log(error))
    },[]);
    return(
        <div>
            <section>
                <div className="container">
                    <div className="home_content">
                        {data.map(elem =>(
                            <BookCard key={elem.ISBN} {...elem}></BookCard>
                        ))}
                        
                      <Details></Details> 
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Home;