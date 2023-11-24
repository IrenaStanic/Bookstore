import React, { Component } from 'react';
import "../index.scss";
import TheBestOfMe from "../components/TheBestOfMe";
import DeceptionPoint from "../components/DeceptionPoint";
import AWeekInWinter from "../components/AWeekInWinter";

class Movies extends Component {
   render(){
     return(
    <div className='movie_content'>
        <div className='movie_item'>
        <h4>The best of me - Nicolas Sparks</h4>
        <TheBestOfMe embedId="rokGy0huYEA" />
        </div>
        <div className='movie_item'>
        <h4>Deception point - Dan Brown</h4>
        <DeceptionPoint embedId="rokGy0huYEA" />
        </div>
        <div className='movie_item'>
        <h4> A Week In Winter - Maeve Binchy</h4>
        <AWeekInWinter embedId="rokGy0huYEA" />
        </div>
    </div>
    )}
}
export default Movies;