import * as React from 'react'
import { ConnectedRouter } from 'connected-react-router'
import { Route, Switch } from 'react-router-dom'
import { History } from 'history'
import './styles.css'
import Home from './views/Home'
import MenuContent from './views/MenuContent'
import Nav from './views/shared/Nav'

const App = ({ history }: any) => {
	return (
		<ConnectedRouter history={history}>
			<>
				<Nav />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/content" component={MenuContent} />
				</Switch>
			</>
		</ConnectedRouter>
	)
}

export default App
