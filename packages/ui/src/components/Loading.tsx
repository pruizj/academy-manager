import styled from "@emotion/styled";
import { FC } from "react";
import { P4 } from "@academy-manager/ui/src/theme/styles";

export const LoadingOvercast: FC = () => {
  return (
    <Blur>
      <LoadingAnimation>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </LoadingAnimation>
      <LoadP4>Cargando</LoadP4>
    </Blur>
  );
};

const Blur = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 1;
    backdrop-filter: blur(3px);
    background-color: rgba(240, 240, 240, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const LoadingAnimation = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
	width:100px;
	height:100px;
	margin-left: auto;
	margin-right: auto;
    z-index: 2;
	.dot {
		display:block;
		width:7px;
		height:7px;
		border-radius:50%;
		margin-right:7px;
		background:#303131;
		animation: wave 1.3s linear infinite;

        &:nth-child(1) {
            background-color: #fe5000;
        }

		&:nth-child(2) {
			animation-delay: -1.1s;
            background-color: #e4002b;
		}

		&:nth-child(3) {
			animation-delay: -0.9s;
            background-color: #6d2077;
		}
	}
    
`;

const LoadP4 = styled(P4)`
    font-weight: normal;
`;
