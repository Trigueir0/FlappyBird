import { useEffect, useState } from 'react'
import { BirdContainer, BirdStyle } from './style'
import animatedBird from '../../assets/animated2-unscreen.gif'
import staticBird from '../../assets/staticbird.png'

export default function Bird() {
    const [selectedBird,setBird] = useState('a')
    const [posx,setX] = useState(80)
    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.keyCode === 38) {
                let element = document.getElementsByClassName('bird');
                console.log(element[0].style.bottom)
            }
        };
        window.addEventListener('keydown', handleKeyPress);
    
        

        return () => {
          window.removeEventListener('keydown', handleKeyPress);
        };
    }, []); 
    return (
        <BirdContainer>
            <BirdStyle posx = {posx}>
                <img class='bird' src={animatedBird} alt="" />
            </BirdStyle>
        </BirdContainer>
    )
}