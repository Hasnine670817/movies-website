import React from 'react';

const JoinCard = ({card}) => {
    return (
        <div className='bg-[linear-gradient(_149deg,_#192247_0%,_#210e17_99.08%_)] py-6 px-5 rounded-2xl min-h-[280px] xl:min-h-[320px] relative'>
            <h3 className="text-xl sm:text-lg md:text-2xl xl:text-2xl">{card?.title}</h3>
            <p className='text-[15px] sm:text-sm md:text-[15px] text-[#BBBCC5] mt-2'>{card?.description}</p>
            <img className='absolute bottom-2 right-4' src={card?.image} alt="image" />
        </div>
    );
};

export default JoinCard;