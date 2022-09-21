import React from 'react'
import styled from 'styled-components'

const Login = () => {
  return (
    <Container>
      <CTA>
        <CTALogoOne src = '/images/cta-logo-one.svg'/>
        <SignUp>GET ALL THERE</SignUp>
        <Description>Description, the text will be replaced with the data from database</Description>
        <CTALogoTWo src = '/images/cta-logo-two.png'/>
      </CTA>
    </Container>
  )
}

export default Login

const Container = styled.div`
    position: relative;
    height: calc(100vh - 70px);
    overflow-x: hidden;
    display: flex;
    justify-content: center;
    align-items: center;

    &:before{
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        position: absolute;
        opacity: 0.7;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        content: "";
        z-index: -1;
        background-image: url('/images/login-background.jpg');
    }
`

const CTA = styled.div`
    max-width: 650px;
    padding: 80px 40px;
    width: 90%;
    display: flex;
    flex-direction: column;
    margin-bottom: 150px;
`

const CTALogoOne = styled.img`
`

const SignUp = styled.a`
    width: 100%;
    background-color: #0063e5;
    font-weight: bold;
    padding: 17px 0;
    color: #f9f9f9;
    border-radius: 4px;
    text-align: center;
    cursor: pointer;
    font-size: 18px;
    transition: all 250ms;
    letter-spacing: 1.5px;
    margin-top: 18px;
    margin-bottom: 12px;
    &:hover{
        background-color: #0483ee;
    }
`

const Description = styled.p`
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;
`

const CTALogoTWo = styled.img`
    margin-top: 10px;
`