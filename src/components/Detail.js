import {React, useEffect, useState} from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import db from '../firebase'
import { collection, doc, getDoc, getDocs } from '@firebase/firestore'

const Detail = () => {

  const {id} = useParams();
  const moviesCollectionRef = collection(db, "movies")
  const [movie, setMovie] = useState();
  // console.log(id)

  useEffect(()=>{
    const data = getDocs(moviesCollectionRef)
    setMovie(data.docs.map(doc => ({...doc.data()})))
  })

  return (
    <Container>
      <Background>
        <img src= {movie.backgroundImg}/>
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