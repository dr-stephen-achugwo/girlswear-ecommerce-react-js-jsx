import styled from "styled-components";

export const StyledCard = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: #fff;
	border-radius: 15px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
	margin: 40px 0;
	padding: 40px;
	flex-direction: ${({ layout }) => layout || 'row-reverse'};

	img {
		width: 500px;
	}

	h2 {
		text-align: center;
		font-size: 2rem;
		font-weight: 400;
		color: ${({ theme }) => theme.colors.secondary};
	}

	p,
	ul {
		text-align: justify;
		width: 500px;
		margin: 0 auto;
	}

	ul {
		text-align: left;
	}

	li::marker {
		color: ${({ theme }) => theme.colors.tertiary};
	}

	& > div {
		flex: 1;
	}

	@media (max-width: 1150px) {
		img {
			width: 40vw;
		}

		p,
		ul {
			width: 40vw;
		}
	}

	@media (max-width: 450px) {
		flex-direction: column;
		padding: 20px;

		p,
		ul {
			font-size: 16px;
			margin: 10px auto;
			width: 80vw;
		}

		h2 {
			font-size: 25px;
		}

		img {
			width: 80vw;
		}
	}
`;
