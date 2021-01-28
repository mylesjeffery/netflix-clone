import styled from 'styled-components/macro'

export const Title = styled.p`
	font-size: 24px;
	color: #e5e5e5;
	font-weight: bold;
	margin-left: 56px;
	margin-right: 56px;
	margin-top: 0;
`

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 50px;

	> ${Title} {
		@media (max-width: 1000px) {
			margin-left: 30px;
		}
	}

	&:last-of-type {
		margin-bottom: 0;
	}
`

export const Group = styled.div`
	display: flex;
	flex-direction: ${({ flexDirection }) => (flexDirection === 'row' ? 'row' : 'column')};
	${({ alignItems }) => alignItems && `align-items: ${alignItems}`};
	${({ margin }) => margin && `margin: ${margin}`};
	overflow-x: hidden;
	@media (min-width: 1100px) {
		margin-top: -100px;
	}
`

export const SubTitle = styled.p`
	font-size: 12px;
	color: #fff;
	font-weight: bold;
	margin-top: 0;
	margin-bottom: 0;
	user-select: none;
	display: none;
`

export const Text = styled.p`
	margin-top: 5px;
	font-size: 10px;
	color: #fff;
	margin-bottom: 0;
	user-select: none;
	display: none;
	line-height: normal;
`
export const Pane = styled.div`
	position: relative;
`

export const PrevButton = styled.button`
	position: absolute;
	width: 56px;
	height: 100%;
	left: 0;
	top: 0;

	background-color: rgba(0, 0, 0, 0.3);
	border: none;
	font-size: 50px;
	color: white;
	z-index: 99;
	cursor: pointer;

	transition: font-size 0.1s;
	&:hover {
		font-size: 75px;
	}
	@media (max-width: 1000px) {
		width: 30px;
	}
`

export const NextButton = styled.button`
	position: absolute;
	width: 56px;
	height: 100%;
	right: 0;
	top: 0;
	background-color: rgba(0, 0, 0, 0.3);
	border: none;
	font-size: 50px;
	color: white;
	z-index: 99;
	cursor: pointer;

	transition: font-size 0.1s;
	&:hover {
		font-size: 75px;
	}

	@media (max-width: 1000px) {
		width: 30px;
	}
`

// export function Entities() {
// 	const { sliderIndex } = useContext(SliderContext)
// 	return styled.div`
// 		display: block;
// 		margin: 0 56px;
// 		overflow-x: visible;
// 		white-space: nowrap;
// 		transform: translateX(-${sliderIndex}00%);
// 		@media (max-width: 1000px) {
// 			margin: 0 30px;
// 		}
// 	`
// }
export const Entities = styled.div`
	display: block;
	margin: 0 56px;
	overflow-x: visible;
	white-space: nowrap;
	transform: translateX(-${({ sliderIndex }) => sliderIndex}00%);

	transition: transform 0.3s ease;
	@media (max-width: 1000px) {
		margin: 0 30px;
	}
`

export const Meta = styled.div`
	display: none;
	position: absolute;
	bottom: 0;
	padding: 10px;
	background-color: #0000008f;
`

export const Image = styled.img`
	border: 0;
	width: 100%;
	max-width: 305px;
	cursor: pointer;
	height: auto;
	padding: 0;
	margin: 0;
`

export const Item = styled.div`
	width: ${100 / 2}%;
	display: inline-block;
	flex-direction: column;
	padding: 0 2px;

	position: relative;
	cursor: pointer;
	transition: transform 0.2s;

	@media (min-width: 600px) {
		width: ${100 / 3}%;
		&:hover {
			transform: scale(1.3);
			z-index: 99;
		}
	}
	@media (min-width: 900px) {
		width: ${100 / 4}%;
	}
	@media (min-width: 1200px) {
		width: ${100 / 5}%;
	}
	@media (min-width: 1500px) {
		width: ${100 / 6}%;
	}

	@media (min-width: 1200px) {
		&:hover ${Meta}, &:hover ${Text}, &:hover ${SubTitle} {
			display: block;
			width: 100%;
			white-space: normal;
			z-index: 100;
		}
	}
`
export const FeatureGroup = styled.div`
	display: flex;
	flex-direction: ${({ flexDirection }) => (flexDirection === 'row' ? 'row' : 'column')};
	${({ alignItems }) => alignItems && `align-items: ${alignItems}`};
	${({ margin }) => margin && `margin: ${margin}`};
	overflow-x: hidden;
`

export const FeatureText = styled.p`
	font-size: 18px;
	color: white;
	font-weight: ${({ fontWeight }) => (fontWeight === 'bold' ? 'bold' : 'normal')};
	margin: 0;

	@media (max-width: 600px) {
		line-height: 22px;
	}
`

export const Feature = styled.div`
	display: flex;
	flex-direction: row;
	background: url(${({ src }) => src});
	background-size: contain;
	position: relative;
	height: 360px;
	background-position-x: right;
	background-repeat: no-repeat;
	background-color: black;

	@media (max-width: 1000px) {
		height: auto;
		background-size: auto;

		${Title} {
			font-size: 20px;
			line-height: 20px;
			margin-bottom: 10px;
		}
		${FeatureText} {
			font-size: 14px;
		}
	}
`

export const FeatureTitle = styled(Title)`
	margin-left: 0;
`

export const FeatureClose = styled.button`
	color: white;
	position: absolute;
	right: 20px;
	top: 20px;
	cursor: pointer;
	background-color: transparent;
	border: 0;

	img {
		filter: brightness(0) invert(1);
		width: 24px;
	}
`

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	margin: 56px;
	max-width: 500px;
	line-height: normal;

	@media (max-width: 1000px) {
		margin: 30px;
		max-width: none;
	}
`

export const Maturity = styled.div`
	background-color: ${({ rating }) => (rating >= 15 ? '#f44336' : '#2f9600')};
	border-radius: 15px;
	width: 28px;
	line-height: 28px;
	text-align: center;
	color: white;
	font-weight: bold;
	text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
	margin-right: 10px;
	font-size: 12px;
`
