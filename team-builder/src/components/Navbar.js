import React, { useState } from 'react'
import { Menu } from 'semantic-ui-react'

const Navbar = () => {

const [activeItem, setActiveItem] = useState();

  const handleItemClick = (e, { name }) => setActiveItem({ activeItem: name })

    return (
      <Menu>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={handleItemClick}
        >
          Home
        </Menu.Item>

        <Menu.Item name='about' active={activeItem === 'about'} onClick={handleItemClick}>
          About
        </Menu.Item>
      </Menu>
    )
  }

export default Navbar;