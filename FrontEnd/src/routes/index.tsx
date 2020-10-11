import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Nav from '../views/shared/Nav'
import MenuContent from '../views/MenuContent'
import Home from '../views/Home'

export const routes = () => {
	return (
		<div>
			{/* <Nav /> */}

			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/content" component={MenuContent} />
			</Switch>
		</div>
	)
}

export default routes
