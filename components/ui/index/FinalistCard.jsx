import React from 'react';

const FinalistCard = ({
  title,
  origin,
  className,
  ...props
}) => (
  <article className={`bg-white rounded shadow ${className}`} {...props}>
    <h5>{ title }</h5>
    <span>{ origin }</span>
  </article>
);

export default React.memo(FinalistCard);
