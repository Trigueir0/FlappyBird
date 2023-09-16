import styled from "styled-components";

export const BirdContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80px;
    height: 100%; /* Defina a altura desejada aqui, por exemplo, 85% da altura da janela (viewport height) */
  
`;

export const BirdStyle = styled.div`
    position: absolute;
    background-color: red;
    width: 35px;
    height: 100%;
    transition: .5s;

    img {
        position: absolute;
        width: 20px;
        height: 20px;
        bottom: 10%;
    }
    .upper {
        animation: upper .1s linear forwards;
    }

    @keyframes fly-up {
        0% {
            transform: translateY(0);
        }
        100% {
            transform: translateY(-50px); /* Ajuste a quantidade desejada de subida aqui */
        }
    }

    @keyframes upper{
        from {
            bottom: ${(props) => props.posX+'px'};
        }
        to {
            bottom: ${(props) => (props.posX + 30) +'px'};
        }
    }
`;
