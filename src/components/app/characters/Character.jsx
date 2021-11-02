import React from 'react';

const Character = ({ name, image, species, status }) => (
  <figure>
    <img src={image} alt={name} />
    <figcaption>
      <p>{name}</p>
      <p>{species}</p>
      <p>{status}</p>
    </figcaption>
  </figure>
);

export default Character;
