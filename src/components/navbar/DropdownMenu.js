import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components'

import DropdownItem from './DropdownItem'

import AccountBoxIcon from '@material-ui/icons/AccountBox';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import AddIcon from '@material-ui/icons/Add';
import MenuBookIcon from '@material-ui/icons/MenuBook';

const Dropdown = styled.div`
  position: absolute;
  top: 58px;
  width: 300px;
  transform: translateX(-45%);
  background-color: var(--bg);
  border: var(--border);
  border-radius: var(--border-radius);
  padding: 1rem;
  overflow: hidden;
  transition: height var(--speed) ease;
  z-index: 1;
`

const Container = styled.div`
    position: relative;
`

const Menu = styled.div`
    width: 100%;
`


function DropdownMenu() {
    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);
    const dropdownRef = useRef(null);

    useEffect(() => {
        setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
    }, [])

    function calcHeight(el) {
        const height = el.offsetHeight;
        setMenuHeight(height);
    }

    function setMenu(name) {
        setActiveMenu(name);
    }

    return (
        <Dropdown style={{ height: menuHeight }} ref={dropdownRef}>
            <Container>
                <CSSTransition in={activeMenu === 'main'} unmountOnExit onEnter={calcHeight} timeout={500} classNames="menu-primary">
                    <Menu>
                        <DropdownItem leftIcon={<SupervisorAccountIcon />} rightIcon={<KeyboardArrowRightIcon />} goToMenu="admin" setMenu={setMenu}>Admin</DropdownItem>
                        <DropdownItem leftIcon={<AccountBoxIcon />} url="/profile">My Profile</DropdownItem>
                        <DropdownItem leftIcon={<RestaurantMenuIcon />} url="/orders">My orders</DropdownItem>
                        <DropdownItem leftIcon={<ExitToAppIcon />} url="#">Sign Out</DropdownItem>
                    </Menu>
                </CSSTransition>

                <CSSTransition in={activeMenu === 'admin'} unmountOnExit onEnter={calcHeight} timeout={500} classNames="menu-secondary">
                    <Menu>
                        <DropdownItem leftIcon={<KeyboardArrowLeftIcon />} goToMenu="main" setMenu={setMenu}>Back to main</DropdownItem>
                        <DropdownItem leftIcon={<AddIcon />} url="/add-category">Add Category</DropdownItem>
                        <DropdownItem leftIcon={<AddIcon />} url="/add-product">Add Product</DropdownItem>
                        <DropdownItem leftIcon={<MenuBookIcon />} url="/get-orders">View Orders</DropdownItem>
                    </Menu>
                </CSSTransition>
            </Container>
        </Dropdown >
    )

}
export default DropdownMenu;