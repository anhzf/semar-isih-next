import React from 'react';
import { IoLogoLinkedin } from 'react-icons/io';

const JuryCard = () => (
  <div className="relative w-96 p-8 flex flex-col items-center gap-y-4">
    <img
      src="http://placeimg.com/100/100/people"
      alt=""
      className="w-40 h-40 rounded-full ring-4 ring-blue-500 ring-offset-2 ring-offset-white object-cover"
    />

    <h5 className="my-4 font-medium text-2xl text-center text-purple-500">Squidward Tentpoles</h5>

    <blockquote className="px-4 pt-2 pb-4 text-center italic">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, possimus.
    </blockquote>

    <div className="p-4 flex flex-row gap-x-4">
      <a href="https://www.linkedin.com/" target="_blank">
        <IoLogoLinkedin className="w-10 h-10 text-blue-200 hover:text-blue-500" />
      </a>
    </div>
  </div>
);

export default React.memo(JuryCard);
