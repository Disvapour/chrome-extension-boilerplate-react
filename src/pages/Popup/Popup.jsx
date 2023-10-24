import React from 'react';
import logo from '../../assets/img/logo.svg';
import Greetings from '../../containers/Greetings/Greetings';
import styled from '@emotion/styled';
import { useState } from 'react';
import { useEffect } from 'react';
import { IoMdAdd } from '../../assets/icons/icons';
import ListItem from './ListItem';
import uniqid from 'uniqid'

const Container = styled.div`
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  text-align: start;
  height: 100%;
  width: 100%;
  background-color: #121212;
  max-height: 600px;
  overflow: hidden;
  overflow-y: auto;
  &::-webkit-scrollbar{
    width: 1rem;
    background-color: #121212;
  }
  &::-webkit-scrollbar-thumb{
    border-radius: 100vmax;
    background-color: #fff5;
    border: .25rem solid #121212;
    &:hover{
      background-color: #fff9;
    }
    &:active{
      background-color: #fffe;
    }
  }
`;
const Header = styled.header`
  width: 100%;
  height: 3rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 1rem;
  padding-right: 1rem;
  align-items: center;
  background-color: #0b0b0b;
  position: sticky;
  top: 0;
  z-index: 999999;
`;
const Button = styled.div`
  height: 2rem;
  width: 2rem;
  background-color: var(--theme-color);
  color: #fff;
  font-size: 24px;
  line-height: 0;
  margin: 0;
  padding: 0;
  font-weight: 600;
  border-radius: 50%;
  box-shadow: 0 5px 10px -4px #0003;
  display: grid;
  place-items: center;
  cursor: pointer;
  margin-right: 2rem;
`;
const ListContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  padding-top: 0;
  gap: .5rem;
  margin: 0;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: #fff;
  margin: 1.5rem;
  margin-left: 1rem;
  text-align: start;
  line-height: 1rem;
`;
const NoItems = styled.h3`
  color: #fffa;
  font-size: 20px;
  font-weight: 400;
`

const Popup = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    let localItems = localStorage.getItem('sites');
    localItems && setItems(JSON.parse(localStorage.getItem('sites')), []);
  }, [])
  const handleAddSite = () => {
    let id = uniqid();
    setItems([...items, {
      link: 'https://localhost:3000',
      title: "Localhost",
      css: 'background: red;',
      id: id
    }])
  }
  const handleRemoveSite = (index) => {
    console.log("running")
    let newItems = items
    newItems.splice(index, 1); // 2nd parameter means remove one item only
    console.log(newItems, index)
    setItems([...newItems]);
  }
  useEffect(() => { setTimeout(() => { localStorage.setItem('sites', JSON.stringify(items)) }, 100) }, [items])
  return (
    <Container>
      <Header>
        <img style={{ height: "100%", aspectRatio: 1 }} src={logo} alt='' />
        <Button onClick={handleAddSite}><IoMdAdd /></Button>
      </Header>
      <Title>Your Styles</Title>
      <ListContainer>
        {items?.length > 0 ? items?.map((item, i) => {
          return (
            <li key={`${item.title}_${item.link}_${item.id}`}><ListItem handleRemoveItem={() => { handleRemoveSite(i) }} link={item.link} title={item.title}></ListItem></li>
          )
        }) : <NoItems>There are no custom Styles</NoItems>
        }
      </ListContainer>
    </Container>
  );
};

export default Popup;
