import * as React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Menu, ArrowBack } from '@material-ui/icons'

export const Nav = () => {
	const locationState = useSelector(
		(state: any) => state.router.location.pathname
	)

	return (
		<div style={{ backgroundColor: 'skyblue' }}>
			<div style={{ color: 'white', padding: '1rem' }}>
				{locationState === '/' ? (
					<div>
						<Link to="/content">
							<Menu />
						</Link>
						<h3 className="Navbar_title">Register card form</h3>
					</div>
				) : locationState === '/content' ? (
					<div>
						<Link to="/">
							<ArrowBack />
						</Link>
						<h3 className="Navbar_title">Menu</h3>
					</div>
				) : (
					locationState
				)}
			</div>
		</div>
	)
}

export default Nav
