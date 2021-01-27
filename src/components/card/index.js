import React, { useState, useContext, createContext, useEffect } from 'react'
import { useWindowSize } from '../../hooks'

import {
	Container,
	Group,
	Title,
	SubTitle,
	Text,
	Feature,
	FeatureTitle,
	FeatureText,
	FeatureClose,
	Maturity,
	Content,
	Meta,
	Item,
	Image,
	Entities,
	Pane,
	PrevButton,
	NextButton,
	FeatureGroup,
} from './styles/card'

export const FeatureContext = createContext()

export default function Card({ children, ...restProps }) {
	const [showFeature, setShowFeature] = useState(false)
	const [itemFeature, setItemFeature] = useState({})

	return (
		<FeatureContext.Provider
			value={{ showFeature, setShowFeature, itemFeature, setItemFeature }}
		>
			<Container {...restProps}>{children}</Container>
		</FeatureContext.Provider>
	)
}

Card.Group = function CardGroup({ children, ...restProps }) {
	return <Group {...restProps}>{children}</Group>
}

Card.Title = function CardTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>
}

Card.SubTitle = function CardSubTitle({ children, ...restProps }) {
	return <SubTitle {...restProps}>{children}</SubTitle>
}

Card.Text = function CardText({ children, ...restProps }) {
	return <Text {...restProps}>{children}</Text>
}

export const SliderContext = createContext()

Card.Pane = function CardPane({ children, ...restProps }) {
	const [sliderIndex, setSliderIndex] = useState(0)

	const width = useWindowSize()
	const maxRows = width > 1200 ? 1 : width > 900 ? 2 : width > 600 ? 3 : 4

	if (sliderIndex > maxRows) {
		setSliderIndex(maxRows)
	}

	return (
		<SliderContext.Provider value={{ sliderIndex, setSliderIndex, maxRows }}>
			<Pane {...restProps}>{children}</Pane>
		</SliderContext.Provider>
	)
}

Card.Entities = function CardEntities({ children, ...restProps }) {
	const { sliderIndex } = useContext(SliderContext)
	return (
		<Entities {...restProps} sliderIndex={sliderIndex}>
			{children}
		</Entities>
	)
}

Card.PrevButton = function CardPrevButton({ children, ...restProps }) {
	const { sliderIndex, setSliderIndex } = useContext(SliderContext)

	function handleclick() {
		if (sliderIndex > 0) {
			setSliderIndex((sliderIndex) => sliderIndex - 1)
		}
	}
	return sliderIndex === 0 ? null : (
		<PrevButton onClick={() => handleclick()} {...restProps}>
			{children}
		</PrevButton>
	)
}

Card.NextButton = function CardNextButton({ children, ...restProps }) {
	const { sliderIndex, setSliderIndex, maxRows } = useContext(SliderContext)

	function handleclick() {
		if (sliderIndex < maxRows) setSliderIndex((sliderIndex) => sliderIndex + 1)
	}

	return sliderIndex === maxRows ? null : (
		<NextButton onClick={() => handleclick()} {...restProps}>
			{children}
		</NextButton>
	)
}

Card.Meta = function CardMeta({ children, ...restProps }) {
	return <Meta {...restProps}>{children}</Meta>
}

Card.Item = function CardItem({ item, children, ...restProps }) {
	const { setShowFeature, setItemFeature } = useContext(FeatureContext)

	return (
		<Item
			onClick={() => {
				setItemFeature(item)
				setShowFeature(true)
			}}
			{...restProps}
		>
			{children}
		</Item>
	)
}

Card.Image = function CardImage({ ...restProps }) {
	return <Image {...restProps} />
}

Card.Feature = function CardFeature({ children, category, ...restProps }) {
	const { showFeature, itemFeature, setShowFeature } = useContext(FeatureContext)

	return showFeature ? (
		<Feature
			{...restProps}
			src={`/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`}
		>
			<Content>
				<FeatureTitle>{itemFeature.title}</FeatureTitle>
				<FeatureText>{itemFeature.description}</FeatureText>
				<FeatureClose onClick={() => setShowFeature(false)}>
					<img src="/images/icons/close.png" alt="Close" />
				</FeatureClose>

				<FeatureGroup margin="30px 0" flexDirection="row" alignItems="center">
					<Maturity rating={itemFeature.maturity}>
						{itemFeature.maturity < 12 ? 'PG' : itemFeature.maturity}
					</Maturity>
					<FeatureText fontWeight="bold">
						{itemFeature.genre.charAt(0).toUpperCase() + itemFeature.genre.slice(1)}
					</FeatureText>
				</FeatureGroup>

				{children}
			</Content>
		</Feature>
	) : null
}
