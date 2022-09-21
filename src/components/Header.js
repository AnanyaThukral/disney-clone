import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <Nav>
      <Logo src='/images/logo.svg'></Logo>
      <NavMenu>
        <a>
            <img src='/images/home-icon.svg'></img>
            <span>HOME</span>
        </a>
        <a>
            <img src='/images/search-icon.svg'></img>
            <span>SEARCH</span>
        </a>
        <a>
            <img src='/images/watchlist-icon.svg'></img>
            <span>WATCHLIST</span>
        </a>
        <a>
            <img src='/images/original-icon.svg'></img>
            <span>ORIGINALAS</span>
        </a>
        <a>
            <img src='/images/movie-icon.svg'></img>
            <span>MOVIES</span>
        </a>
        <a>
            <img src='/images/series-icon.svg'></img>
            <span>SERIES</span>
        </a>
      </NavMenu>
      <UserImg src='https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80'/>
    </Nav>
  )
}

export default Header

const Nav = styled.nav`
    height: 70px;
    background-color: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;
    overflow-x: hidden;
`

const Logo = styled.img`
    width: 80px;
`

const NavMenu = styled.div`
    display: flex;
    a{
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;
    
    img{
        height: 20px;
    }
    span{
        font-size: 13px ;
        letter-spacing: 1.42px;
        position: relative;

        &:after{
            content: "";
            height: 2px;
            background: white;
            position: absolute;
            left: 0;
            right: 0;
            bottom: -6px;
            opacity: 0;
            transform-origin: left center;
            transform: scaleX(0);
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        }
    }


    &:hover{
        span:after{
            transform: scaleX(1);
            opacity: 1;
        }
    }
}

    flex: 1;
    margin-left: 25px;
    align-items: center;
`
const UserImg = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;
    
`