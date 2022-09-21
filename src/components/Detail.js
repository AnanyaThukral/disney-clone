import React from 'react'
import styled from 'styled-components'

const Detail = () => {
  return (
    <Container>
      <Background>
        <img src='https://cdn.vox-cdn.com/thumbor/wJ71E7nJ_4Wj0btm5seEnHNJ4Xk=/0x0:4096x2304/1200x800/filters:focal(1973x1175:2627x1829)/cdn.vox-cdn.com/uploads/chorus_image/image/60190709/BO_RGB_s120_22a_cs_pub.pub16.318.0.jpg'></img>
      </Background>
      <ImageTilte></ImageTilte>
      <Controls>
        <PlayButton>
          <img src='/images/play-icon-black.png'></img>
          <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
          <img src='/images/play-icon-white.png'></img>
          <span>TRAILER</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWatchButton>
          <img src='/images/group-icon.png'></img>
        </GroupWatchButton>
      </Controls>
      <SubTitle>subtitle</SubTitle>
      <Description>Description</Description>
    </Container>
  )
}

export default Detail

const Container = styled.div`
  min-height: calc(100vh-70px);
  padding: calc(3.5vw + 5px);
  position: relative;
`

const Background = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
  opacity: 0.8;
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const ImageTilte = styled.div``

const Controls = styled.div`
  display: flex;
  align-items: center;
`
const PlayButton = styled.button`
  border-radius: 4px;
  font-size: 15px;
  padding: 0px 24px;
  margin-right: 22px;
  display: flex;
  align-items: center;
  height: 56px;
  border: none;
  background: rgb(249, 249, 249);
  border-radius: 4px;
  letter-spacing: 1.8px;
  cursor: pointer;

  &:hover{
    background: rgb(198, 198, 198);
  }
`
const TrailerButton = styled(PlayButton)`
  background: rgba(0,0,0,0.3);
  border: 1px solid rgb(249, 249, 249, 249);
  color: rgb(249,249,249);
`
const AddButton = styled.button`
  height: 44px;
  width:44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid white;
  background: rgba(0,0,0,0.6);
  margin-right: 16px;
  cursor: pointer;
  span{
    font-size: 30px;
    color: white;
  }
`
const GroupWatchButton = styled(AddButton)`
  background: rgb(0,0,0);
`

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-top:26px;
`

const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  margin-top: 16px;
  color: rgb(249,249,249);
`