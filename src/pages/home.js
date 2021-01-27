import React from 'react'
import { Feature, OptForm } from '../components'
import { HeaderContainer } from '../containers/header'
import { FaqsContainer } from '../containers/faqs'
import { FooterContainer } from '../containers/footer'
import { JumbotronContainer } from '../containers/jumbotron'
import * as ROUTES from '../constants/routes'

export default function Home() {
	return (
		<>
			<HeaderContainer>
				<Feature>
					<Feature.Title>Unlimited films, TV shows, and more.</Feature.Title>
					<Feature.SubTitle>Watch anywhere. Cancel at any time.</Feature.SubTitle>
					<OptForm>
						<OptForm.Input placeholder="Email address" />
						<OptForm.Link to={ROUTES.SIGN_UP}>
							<OptForm.Button>Try it now</OptForm.Button>
						</OptForm.Link>
						<OptForm.Break />
						<OptForm.Text>
							Ready to watch? Enter your email to create or restart your membership
						</OptForm.Text>
					</OptForm>
				</Feature>
			</HeaderContainer>
			<JumbotronContainer />
			<FaqsContainer />
			<FooterContainer />
		</>
	)
}
