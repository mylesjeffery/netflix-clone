import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import { Header } from '../../components'

describe('<Header />', () => {
	it('renders the <Header /> with populated data', () => {
		const { container, getByText, getByTestId } = render(
			<Header>
				<Header.Frame>
					<Header.Logo src="/logo.svg" alt="Netflix" />
				</Header.Frame>
			</Header>
		)

		expect(getByTestId('header-bg')).toBeTruthy()
		expect(container.firstChild).toMatchSnapshot()
	})
})
