import React from 'react';
import { Image, Button} from 'semantic-ui-react'
import './NavBar.scss'
const NavBar = () => {
    return (
    <nav>
        <section>
        <div className="logo-header">
        <Image src={require('../assets/citytour.png')} size ='small'/>
        <h2>City Tour </h2>
        </div>
        <h3 className="sub-header">Explore cities like a local</h3>
        </section>
        <section>
        <div className="account-login-logout">
            <Button.Group color='blue' basic>
                <Button>My Purchases</Button>
                <Button>Login / Sign Up</Button>
            </Button.Group>
        </div>
        </section>
    </nav>
    );
}
 
export default NavBar;