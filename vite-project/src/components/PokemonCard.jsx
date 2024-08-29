// TODO: This component should render a single pokemon's stats and image.

import { useState } from "react";

const PokemonCard = ({frontImage, backImage, hp, name}) => {
    const [isFront, setIsFront] = useState(frontImage);

    const toggleFlip = () => {
        if(isFront === frontImage){
            setIsFront(backImage)
        }else{
            setIsFront(frontImage)
        }     
    };


    return (
        <div className="ui card" onClick={toggleFlip}>
            <div>
                <div className="image" >
                    <img alt="pokemon name" src={isFront} />
                </div>
                <div className="content">
                    <div className="header">{name}</div>
                </div>
                <div className="extra content">
                    <span>
                        <i className="icon heartbeat red" />
                        {hp}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default PokemonCard;