import React, { Component, useState } from 'react'
import { Menu, Container, Input } from "semantic-ui-react";
import { useAuth } from "../contexts/AuthContext";


const Navbar = () => {

const [activeItem, setActiveItem] = useState('home');
const { logout } = useAuth();

const handleItemClick = (itemName) => {
    setActiveItem(itemName)
    console.log(itemName)
}

    return (
        <div> 
            <Menu secondary pointing>
                <Menu.Item
                    name='home'
                    active={activeItem === 'home'}
                    onClick={e => handleItemClick('home')}
                />
                <Menu.Item
                    name='My shelves'
                    active={activeItem === 'My shelves'}
                    onClick={e => handleItemClick('My shelves')}
                />
                <Menu.Item
                    name='Browse books'
                    active={activeItem === 'Browse books'}
                    onClick={e => handleItemClick('Browse books')}
                />
                <Menu.Menu position='right'>
                    <Menu.Item>
                        <Input icon='search' placeholder='Search'/>
                    </Menu.Item>
                    <Menu.Item
                        name='logout'
                        onClick={logout}
                    />
                </Menu.Menu>
            </Menu>
        </div>
     );
}
 
export default Navbar;