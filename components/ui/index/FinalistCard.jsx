import React from 'react';

const FinalistCard = ({
  title,
  origin,
  finalistLink,
  className,
  ...props
}) => (
  <article className={`bg-white rounded shadow ${className}`} {...props}>
    <a href={finalistLink} target="_blank">
      <h2 className="my-4 font-medium text-2xl text-center text-purple-500">{title}</h2>
      <blockquote className="px-4 pt-2 pb-4 text-center italic">
        {origin}
      </blockquote>
    </a>
  </article>
);

export default React.memo(FinalistCard);
