import styled from "styled-components";
import Ground from '../assets/ground.webp'
export const MainFrame = styled.div`
    position: relative;
    width: 500px;
    height: 700px;
    background-color: red;
    margin: 50px auto;
    overflow: hidden;
    header {
        position: absolute;
        width: 100%;
        height: 85%;
        img {
            width: 100%;
            height: 100%;
        }
    }
    footer {
        position: absolute;
        bottom: 0;
        height: 15%;
        width: 200%;
        background-image: url(${Ground});
        background-repeat: repeat-x;
        background-size: 31px;
        z-index: 9;
        animation: sider 4s linear infinite;

        @keyframes sider {
            0% {
                transform: translateX(0);
            }
            100% {
                transform: translateX(-50%);
            }
        }
    }
`