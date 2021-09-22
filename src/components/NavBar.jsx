import React, { useContext } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/auth';

function NavBar() {
  const { user, logout } = useContext(AuthContext);
  const pathName = window.location.pathname;
  const path = pathName === '/' ? 'home' : pathName.substr(1);
  const [activeItem, setActiveItem] = React.useState(path);

  const handleItemClick = (e, { name }) => setActiveItem(name);

  const navbar = user ? (
    <Menu pointing secondary>
      <Menu.Item
        name={user.username}
        active
        as={Link}
        to="/"
      />
      <Menu.Menu position='right'>
        <Menu.Item
          name='logout'
          onClick={logout}
        />
      </Menu.Menu>
    </Menu>
  ) : (
    <Menu pointing secondary>
      <Menu.Item
        name='home'
        active={activeItem === 'home'}
        onClick={handleItemClick}
        as={Link}
        to="/"
      />
      <Menu.Menu position='right'>
        <Menu.Item
          name='login'
          active={activeItem === 'login'}
          onClick={handleItemClick}
          as={Link}
          to="/login"
        />
        <Menu.Item
          name='register'
          active={activeItem === 'register'}
          onClick={handleItemClick}
          as={Link}
          to="/register"
        />
      </Menu.Menu>
    </Menu>
  )

  return navbar;
}

export default NavBar;
