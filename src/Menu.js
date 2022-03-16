import { useState } from 'react';
import './Menu.css';

function MenuLink({ className, text, cb }) {
    const onClick = (e) => {
        if (cb) {
            cb();
        }
        e.preventDefault();
    }
    return (
        <a href="#" className={className} onClick={onClick}>{text}</a>
    )
}

function Menu({ updateViewCb }) {
    const [showMenuItems, setShowMenuItems] = useState(false);
    const [showSubmenuItems, setShowSubmenuItems] = useState(false);

    const handleMenuClick = () => {
        setShowMenuItems(!showMenuItems);
        if (showMenuItems === false) {
            setShowSubmenuItems(false);
        }
    };

    const handleMenuItemClick = (menu_item) => {
        setShowMenuItems(false);
        setShowSubmenuItems(false);
        updateViewCb(menu_item);
    };

    const handleSubmenuClick = () => {
        setShowSubmenuItems(!showSubmenuItems);
    };

    let submenu_items_class_name = "submenu-items";
    if (showSubmenuItems === false) {
        submenu_items_class_name = "submenu-items menu-hidden";
    }

    let menu_items_class_name = "menu-items";
    if (showMenuItems === false) {
        menu_items_class_name = "menu-items menu-hidden";
    }

    return (
        <div className="menu">
            <MenuLink className="menu-mobile" text="MENU" cb={handleMenuClick}/>
            <ul className={menu_items_class_name}>
                <li className="menu-item">
                    <MenuLink className="menu-item-link" text="HOME" cb={() => handleMenuItemClick('home')}/>
                </li>
                <li className="menu-item">
                    <MenuLink className="menu-item-link" text="ABOUT" cb={handleSubmenuClick}/>
                    <ul className={submenu_items_class_name}>
                        <li className="submenu-item"><MenuLink className="menu-item-link" text="About Us" cb={() => handleMenuItemClick('introduction')}/></li>
                        <li className="submenu-item"><MenuLink className="menu-item-link" text="Contact" cb={() => handleMenuItemClick('contact')}/></li>
                    </ul>
                </li>
                <li className="menu-item">
                    <MenuLink className="menu-item-link" text="I LOST A PET" cb={() => handleMenuItemClick('lostPet')}/>
                </li>
                <li className="menu-item">
                    <MenuLink className="menu-item-link" text="PRIVACY POLICY" cb={() => handleMenuItemClick('privacy')}/>
                </li>
            </ul>
        </div>
    );
}

export default Menu;
