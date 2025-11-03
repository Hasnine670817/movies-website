import { useEffect, useState } from "react";
import JoinCard from "../DynamicCards/JoinCard";

const JoinSection = () => {

    const [joinCards, setJoinCards] = useState([]);

    useEffect(() => {
        fetch('/DataCard.json')
            .then(res => res.json())
            .then(data => setJoinCards(data))
    }, [])


    return (
        <section className="pb-14">
            <div className='container-custom'>
                <h3 className="text-2xl md:text-3xl mb-3 md:mb-5">More Reasons to Join</h3>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 text-white'>
                    {
                        joinCards.map(card => <JoinCard key={card.id} card={card}></JoinCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default JoinSection;