import React from "react";
import PropTypes from "prop-types";

const DeceptionPoint = ({ embedId }) => (
  <div className="video-responsive">
    <iframe 
    width="1128" 
    height="634" 
    src="https://www.youtube.com/embed/FpHH7HxqzdA" 
    title="Deception Point Trailer" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowfullscreen>
    </iframe>
  </div>
);

DeceptionPoint.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default DeceptionPoint;