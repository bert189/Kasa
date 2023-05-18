import React from 'react';

function AccomodationCard({image, title}) {
  return (
    <>
    <img src={image} alt={"photo de "+title} />
      {title && <h2>{title}</h2>}
    </>
  );
}

export default AccomodationCard;