import {MainFrame} from './style'
import Background from '../assets/background.webp'
import Bird from '../Components/Bird'
import { useEffect } from 'react';

export default function Game() {

   
    
    return (
        <MainFrame>
            <header>
                <img src={Background} alt="" />
            <main>
                <Bird/>
            </main>
            </header>
            <footer></footer>
        </MainFrame>
    )
}