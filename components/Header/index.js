import React, { Component } from "react";
import Link from "next/link";
import Navbar from "../Navbar"

class Header extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <header className="shadow">
                <div className="mobile-fix-option"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="main-menu">
                                <div className="menu-left">
                                    <div className="brand-logo">
                                        <Link href="/"><a>
                                            <img
                                                src="/static/assets/images/icon/logo.jpg"
                                                className="img-fluid lazyload"
                                                alt=""
                                            /></a>
                                        </Link>
                                    </div>
                                </div>
                                <Navbar />
                                <div className="menu-right pull-right">
                                    <div className="call-us contact-right">
                                        <div>
                                            <p className="name-title">Need help? Call us at</p>
                                            <p className="call-numbar mb-0">1.800.228.8379</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;