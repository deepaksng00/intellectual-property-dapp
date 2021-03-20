import React, { Component } from 'react';
import style from '../styles/Header.module.css';
import { Link } from '../routes';

class Header extends Component  {
    state = {
        active: false
    }

    onMenuButtonClick = e => {
        e.preventDefault();
        this.setState({ active: !this.state.active });
    }

    render() {
        return (
            <div>
                <header className={style.header}>
                    <Link route="/"><h1>Intellectual Property</h1></Link>
                    { this.state.active ?
                        <div className={[style.menu_button, style.active].join(" ")} onClick={this.onMenuButtonClick}></div>
                    :
                        <div className={style.menu_button} onClick={this.onMenuButtonClick}></div>
                    }
                </header>
                { this.state.active ?
                    <div className={[style.menu, style.active].join(" ")}>
                        <ul>
                            <Link route="/"><li>Home</li></Link>
                            <Link route="/intellectualproperty/register"><li>Register your IP</li></Link>
                            <Link route="/userip"><li>Your IP</li></Link>
                            <Link route="/search"><li>Search IP</li></Link>
                        </ul>
                    </div>
                : 
                    <div className={style.menu}>
                        {/* <ul>
                            <Link route="/"><li>Home</li></Link>
                            <Link route="/intellectualproperty/register"><li>Register your IP</li></Link>
                            <Link route="/yourip"><li>Your IP</li></Link>
                            <Link path="/searchip"><li>Search IP</li></Link>
                        </ul> */}
                    </div>  
                }
            </div>        
        );
    }
}

export default Header;