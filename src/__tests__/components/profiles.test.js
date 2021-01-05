import React from 'react'
import { getByText, render } from '@testing-library/react'
import { Profiles } from '../../components'

describe('<Profiles />', () => {
	it('renders the <Profiles /> with populated data', () => {
		const { container, getByText, getByTestId } = render(
			<Profiles>
				<Profiles.Title>Who's watching?</Profiles.Title>
				<Profiles.List>
					<Profiles.User onClick={() => {}}>
						<Profiles.Picture src="/images/karl.png" data-testid="profile-picture" />
						<Profiles.Name>Myles Jeffery</Profiles.Name>
					</Profiles.User>
				</Profiles.List>
			</Profiles>
		)
		expect(getByText("Who's watching?")).toBeTruthy()
		expect(getByTestId('profile-picture')).toBeTruthy()
		expect(getByText('Myles Jeffery')).toBeTruthy()
		expect(container.firstChild).toMatchSnapshot()
	})
})
