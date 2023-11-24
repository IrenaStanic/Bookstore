import React from "react";
import PropTypes from "prop-types";

const AWeekInWinter = ({ embedId }) => (
  <div className="video-responsive">
    <iframe 
    width="1128" 
    height="634" 
    src="https://www.youtube.com/embed/IY-VHCRGfxk" 
    title="A Week in Winter by Maeve Binchy" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowfullscreen></iframe>
  </div>
);

AWeekInWinter.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default AWeekInWinter;