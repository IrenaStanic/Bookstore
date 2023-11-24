import React from "react";
import PropTypes from "prop-types";

const TheBestOfMe = ({ embedId }) => (
  <div className="video-responsive">
    <iframe 
    width="1128" 
    height="634" 
    src="https://www.youtube.com/embed/cQszhfoP_WI" 
    title="The Best Of Me Official Trailer #2 (2014) - James Marsden, Michelle Monaghan Movie HD"
     frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      allowfullscreen>
      </iframe>
  </div>
);

TheBestOfMe.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default TheBestOfMe;