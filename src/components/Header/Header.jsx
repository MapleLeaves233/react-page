import classes from './Header.module.scss';

import { Button } from "../Button/Button";
import {MenuIcon, CartIcon, UserIcon} from "../../assets/icons";
import {Container} from "../Container/Container";

const links = [
    {
        name: 'О нас',
        url: '/'
    },
    {
        name: 'Магазин',
        url: '/'
    },
    {
        name: 'Клуб сомелье',
        url: '/'
    },
    {
        name: 'Фотоотчёты',
        url: '/'
    },
    {
        name: 'Партнерам',
        url: '/'
    }
]

export const Header = () => {


    return <header className={classes.root}>

        <Container>
            <nav className={classes.firstRow}>
                <ul className={classes.list}>
                    {links.map((link) => {
                        return <li><a href={link.url} className={classes.navLink}>{link.name}</a></li>
                    })}
                </ul>
            </nav>


            <div  className={classes.secondRow}>
                <Button color="red" icon={MenuIcon}>Каталог</Button>

                <input type="text" />

                <Button icon={UserIcon}>Профиль</Button>
                
                <Button icon={CartIcon}>Корзина</Button>
            </div>
        </Container>
    </header>
}