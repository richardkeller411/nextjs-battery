import React, { Component } from "react";
import Link from "next/link";
import "./Navbar.scss";
import $ from 'jquery';
import 'smartmenus';




class Navbar extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  componentWillMount (){
      $(function() {
          $('#main-menu').smartmenus({
              subMenusSubOffsetX: 1,
              subMenusSubOffsetY: -8
          });
      });
  }

  render() {
    return (
      <nav id="main-nav">
            <ul id="main-menu" className="sm pixelstrap sm-horizontal" >
                <li className="mega"><Link href="/"><a>Home</a></Link></li>
                <li className="mega">
                    <Link href="/about"><a>About Next JS
                        <div className="lable-nav">Hello</div>
                    </a></Link>
                </li>
                <li>
                    <Link href="#"><a >More Pages</a></Link>
                    <ul>
                      <li><Link href="/" ><a>SignIn</a></Link></li>
                      <li><Link href="/" ><a>SignUP</a></Link></li>
                      <li><Link href="/" ><a>Contact US</a></Link></li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
  }
}

export default Navbar;
