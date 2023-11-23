import React, { Component } from 'react';
import "../index.scss";

class Movies extends Component {
   render(){
     return(
    <div className='movie_content'>
        <div className='movie_item'>
        <h4>The best of me - Nicolas Sparks</h4>
        <iframe title='The best of me - Nicolas Sparks' src="https://youtu.be/B7gQTfHwlyo">
</iframe>
        </div>
        <div className='movie_item'>
        <iframe  title='The best of me - Nicolas Sparks' src="https://www.youtube.com/embed/tgbNymZ7vqY">
</iframe>
        </div>
        <div className='movie_item'>
        <iframe  title='The best of me - Nicolas Sparks' src="https://www.youtube.com/watch?v=1qcoEfk4Z2E">
</iframe>
        </div>
    </div>
    )}
}
export default Movies;