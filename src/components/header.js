import React from 'react'
import Link from 'gatsby-link'
import logo from '../assets/images/logo.png'
import styled from 'styled-components'
import Img from "gatsby-image";

const HeaderWrapper = styled.div `
  height: 90vh;
  background: black;
  margin-bottom: 1.45rem;
  overflow: hidden;
  position: relative;
  h1 {
    margin: 0;
    img {
      width: 90px;
    }
  }
`
const HeaderContainer = styled.div `
  color: white;
  position: relative;
  z-index: 2;
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`
const NavLink = styled(Link) `
  color: white;
  text-decoration: none;
`
const HeaderBanner = styled.div `
  display: flex;
  div {
    margin-left: 10px;
  }
`

const Header = ({ data }) => {
  console.log(data)
  return (
  <HeaderWrapper>
    <HeaderContainer className="header">
    <NavLink to="/brews">

      <HeaderBanner className="banner">
        <h1>
          <Link to="/">
            <img src={logo} alt="My Brews" />
          </Link>
        </h1>
        <div>
          <h1>{data.site.siteMetadata.title}</h1>
          <h3>{data.site.siteMetadata.desc}</h3>
        </div>
      </HeaderBanner>
      </NavLink>
    </HeaderContainer>
    <Img 
      style={{
        position:'absolute',
        laft:0,
        top:0,
        width:'100%',
        height:'100%',
        opacity: 0.3,
      }}
      sizes={data.background.sizes} />
  </HeaderWrapper>
)}

export default Header
