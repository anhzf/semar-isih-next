import React from 'react';

const TheChampionCard = ({
  teamName,
  collegeOrigin,
  countryOrigin,
  pictureUrl,
  badgeLabel,
  className,
  ...props
}) => (
  <div className={`group h-full flex flex-col items-center ${className}`} {...props}>
    <div className="relative w-full max-w-sm h-full pb-8 bg-white shadow-sm flex flex-col items-center gap-y-3">
      <div className="overflow-hidden relative w-full h-64 shadow-inner">
        <img src={pictureUrl} alt={teamName} className="w-full h-full object-cover transition-transform transform group-hover:scale-105" />

        {/* <div className="absolute top-0 left-0 w-full h-full bg-yellow-500 bg-opacity-30 group-hover:bg-opacity-5 flex flex-col justify-center items-center">
          <span className="font-medium text-3xl text-center text-white transition-transform transform group-hover:scale-150">{badgeLabel}</span>
        </div> */}
        <div className="absolute top-0 left-0 w-full h-full bg-yellow-500 bg-opacity-30 backdrop-filter backdrop-blur-[1px] group-hover:bg-opacity-5 group-hover:backdrop-blur-0" />
      </div>

      <div className="relative">
        <div className="absolute bottom-0 left-1/2 w-16 h-16 bg-yellow-500 rounded-full shadow-sm transform -translate-x-1/2 translate-y-3 flex flex-col justify-center items-center">
          <span className="text-3xl text-center text-white">{badgeLabel}</span>
        </div>
      </div>

      <div className="flex-grow w-full relative flex flex-col items-center gap-y-3">
        <h5 className="justify-self-stretch my-auto font-bold text-2xl text-center text-purple-500 leading-tight">{teamName}</h5>

        <div className="text-center flex flex-col">
          <span className="font-semibold text-lg text-blue-500">{collegeOrigin}</span>
          <small className="font-semibold text-gray-500">{countryOrigin}</small>
        </div>
      </div>
    </div>
  </div>
);

export default React.memo(TheChampionCard);
