import React from 'react';

const TheChampionCard = ({
  productName,
  teamName,
  origin,
  pictureUrl,
  badgeLabel,
  className,
  ...props
}) => (
  <div className={`group relative flex flex-col items-center ${className}`} {...props}>
    <div className="w-full max-w-sm pb-8 bg-white shadow-sm flex flex-col items-center gap-y-2">
      <div className="overflow-hidden relative w-full h-64">
        <img src={pictureUrl} alt={productName} className="w-full h-full object-cover transition-transform transform group-hover:scale-105" />

        <div className="absolute top-0 left-0 w-full h-full bg-yellow-500 bg-opacity-30 group-hover:bg-opacity-5 flex flex-col justify-center items-center">
          <span className="font-medium text-4xl text-center text-white transition-transform transform group-hover:scale-150">{badgeLabel}</span>
        </div>
      </div>

      <h5 className="mt-2 font-bold text-2xl text-center text-purple-500">{productName}</h5>
      <div className="text-center flex flex-col">
        <span className="font-semibold text-lg text-blue-500">{teamName}</span>
        <small className="font-semibold text-gray-500">{origin}</small>
      </div>
    </div>
  </div>
);

export default React.memo(TheChampionCard);
