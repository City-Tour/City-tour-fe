import React from 'react'
import { Image, Button } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'
import './NavBar.scss'
const NavBar = props => {
  return (
    <nav>
      <section onClick={() => props.history.push('/')}>
        <div className="logo-header">
          <Image
            src={require('../assets/output-onlinepngtools.png')}
            size="small"
          />
        </div>
        <h3 className="sub-header">Explore cities like a local</h3>
      </section>
      <section>
        <div className="account-login-logout">
          <Button.Group color="blue" basic>
            <Button onClick={() => props.history.push('/packages/add')}>
              Create Package
            </Button>
            <Button onClick={() => props.history.push('/login')}>
              Login / Sign Up
            </Button>
          </Button.Group>
        </div>
      </section>
    </nav>
  )
}

export default withRouter(NavBar)
