import styled from 'styled-components';

export const Image = styled.img`
	width: 500px;
	max-width: 40vw;
	object-fit: contain;

	@media (max-width: 450px) {
		max-width: 80vw;
		margin-bottom: 40px;
	}
`;

export const StyledHeader = styled.header`
	width: 1400px;
	max-width: 90vw;
	/* height: 75vh; */
	margin: 20px auto;
	align-items: flex-start;

	h1 {
		text-align: center;
		font-size: 80px;
		font-weight: 500;
		margin: 0 0 60px 0;
	}

	h2 {
		text-align: center;
		font-size: 55px;
		font-weight: 400;
		margin: 0;
	}

	p {
		width: 500px;
		max-width: 90vw;
		text-align: justify;
		z-index: 10;
	}

	button {
		background-color: ${({ theme }) => theme.colors.tertiary};
		width: 150px;
		height: 150px;
		font-size: 20px;
		border-radius: 50%;
		margin: 60px auto;
		transition: all 0.4s ease;
	}

	button:hover {
		background-color: ${({ theme }) => theme.colors.secondary};
	}

	svg {
		color: ${({ theme }) => theme.colors.secondary};
		font-size: 2.5rem;
		text-decoration: none;
		transition: all 0.2s ease-in;
		margin: 20px auto;
		z-index: 10;
	}

	svg:hover {
		color: ${({ theme }) => theme.colors.tertiary};
	}

	/* @media (min-height: 700px) {
		min-height: 100vh;
	} */

	@media (max-width: 1150px) {
		p {
			max-width: 40vw;
		}

		button {
			background-color: ${({ theme }) => theme.colors.tertiary};
			width: 100px;
			height: 100px;
			font-size: 15px;
			margin: 40px;
		}
	}

	@media (max-width: 450px) {
		height: auto;
		margin: 5px auto;

		#flexContainer {
			flex-direction: column-reverse;
		}

		h1 {
			font-size: 55px;
			margin: 0 0 20px 0;
		}
		h2 {
			font-size: 45px;
		}
		p {
			max-width: 80vw;
			font-size: 18px;
		}
	}
`;
