import React from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

function NavBar() {
  const pathName = window.location.pathname;
  const path = pathName === '/' ? 'home' : pathName.substr(1);
  const [activeItem, setActiveItem] = React.useState(path);

  const handleItemClick = (e, { name }) => setActiveItem(name)

  return (
    <Menu pointing secondary>
      <Menu.Item
        name='home'
        active={activeItem === 'home'}
        onClick={handleItemClick}
        as={Link}
        to="/"
      />
      {/* <Menu.Item
        name='todoList'
        active={activeItem === 'todoList'}
        onClick={handleItemClick}
        as={Link}
        to="/todoList"
      /> */}
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
}

export default NavBar;
