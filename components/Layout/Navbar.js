/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import React from "react";
import styled from "styled-components";
import Link from "next/link"
import {  Container } from '@mui/material'
import { FaBars, } from "react-icons/fa";
import {IoCloseSharp} from "react-icons/io5"
var scrollToElement = require("scroll-to-element");

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      sticky: false,
      sections: [
        { value: "home", link: '/' },
        // {value:"pricing", link:'/'},
        // {value:"All Services", link:'/services/allcountry'},
        { value: "blog", link: '/blog' ,external:true},
        // {value:"Client Portal", link:'https://books.zoho.in/portal/netart'},
        { value: "contact", link: '/contact' },
      ],
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll, { passive: true });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (window.pageYOffset >= 50 && this.state.sticky) {
      if (this.state.collapse !== nextState.collapse) {
        return true;
      }
      return false;
    } else {
      return true;
    }
  }

  handleScroll = (event) => {
    if (window.pageYOffset >= 50) {
      this.setState({ sticky: true });
    } else {
      this.setState({ sticky: false });
    }
  };
  collapseNav() {
    console.log(this.state, "col");
    if (!this.state.collapse) {
      this.setState({ collapse: true });
    } else {
      this.setState({ collapse: false });
    }
  }
  render() {
    const NavbarWrapperStyle = {
      position: `${this.state.sticky ? "fixed" : "absolute"}`,
      width: "100%",
      zIndex: 100,
      bg: `${this.state.sticky || this.props.bg ? "white" :  "transparent"}`,
      p: [null,`${this.state.sticky ? ".5rem 0rem 0 0" : "20px 5px"}`,`${this.state.sticky ? ".5rem 0rem 0.5rem 0" : "20px 5px"}`],
    };

    const navItem =(sticky,bg)=> {
      return{
        background: "none",
        border: "none",
        color: [null,`${sticky || bg ? "white" : "white"}`,`${sticky || bg ? "black" : "white"}`],
        textDecoration:"none !important",
        textTransform: " capitalize",
        fontWeight: "500",
        margin: "10px",
        cursor:"pointer",
        transition: ".5s",
        outline: "none",
        ":hover": {
          color: "#04e5e5",
        },
        fontSize: [null, "11px", null, "18px"],
      }
    };
    
    const NavbarContainer = {
      display: [null, "block", "flex"],
      position: "relative",
      padding: 0,
    };
    
    const LogoWrapper = {
      flex: [null, "0 0 100%", " 0 0 20%"],
      maxWidth: [null, "100%", "20%"],
      display: "flex",
      justifyContent: [null, "center", "center", "flex-start"],
      alignItems: [null,"center","start"],
      height:"100%",
      cursor:"pointer"
    };
    
    const Toggler = (sticky)=> {
      return{
        color: `${sticky ? "black" : "white"}`,
      position: "absolute",
      right: 0,
      top: 0,
      display: [null, "block", "none"],
      outline: "none",
      }
    };
    
    const NavStyle = {
      flex: [null, "0 0 100%", "0 0 80%"],
      p: "0",
      maxWidth: [null, "100%", "80%"],
      display: "flex",
      justifyContent: [null, "center", "flex-end"],
      alignItems: "center",
      mt: [null, "15px", "0"],
      bg: [null, "black", "transparent"],
    };
    
    
    

    return (
      <div
        sx={{ ...NavbarWrapperStyle, }}
        className={`header${this.state.sticky === true ? "sticky" : ""}`}
      >
        <Container sx={NavbarContainer}>
          <div className="logo" sx={LogoWrapper}>
            <Link href="/">
              <a sx={{padding:[null,".25rem 0","0.25rem 0"],margin:[null,"0","10px 0"]}}>
                <img
                  sx={{ height: [null, "22px", "20px"],width:"auto" }}
                  src={`${this.state.sticky || this.props.bg ? "/images/logoColor.png" : "/images/Logo.png"}`}
                  alt="logo"
                />
              </a>
            </Link>
          </div>
         { !this.state.collapse ? <button
            onClick={() => this.collapseNav()}
            sx={Toggler(this.state.sticky)}
            className="navbar-toggler navbar-toggler-right"
          >
            <FaBars className="bars" />
          </button>:null}
         {this.state.collapse ? <button
            onClick={() => this.collapseNav()}
            sx={Toggler(this.state.sticky)}
            className="navbar-toggler navbar-toggler-right"
          >
            <IoCloseSharp className="bars"/>
          </button>:null}
          <div
            sx={NavStyle}
            className={`navbar navbar-expand-sm ${this.state.collapse === true ? "expand" : "hidden_mobile"
              }`}
          >
            <div
              sx={{ justifyContent: "flex-end" }}
              className={`navbar-collapse collapse ${this.state.collapse === true ? "show" : ""
                }`}
            >
              <div className="navbar-nav">{this.navItems()}</div>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  navigate(id) {
    window.location.href = `${id}`;
  }

  navItems() {
    return this.state.sections.map((item, index) => {
      if(item.value == "Client Portal"){
        return <a sx={navItem(this.state.sticky,this.props.bg)} href={item.link} target="_blank">{item.value}</a>
      }
      else{
        return (
          <Link href={item.link} key={index}>
            <a sx={navItem(this.state.sticky,this.props.bg)}>{item.value}</a>
          </Link>
        );
      }
    });
  }
}

export default Navbar;
