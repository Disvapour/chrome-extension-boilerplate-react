import React from 'react';
import styled from '@emotion/styled'
import { motion } from 'framer-motion';
import { MdDelete } from '../../assets/icons/icons';

const Container = styled(motion.div)`
    width: 100%;
    background-color: #1b1b1b;
    color: #fff;
    font-size: 20px;
    border-radius: 12px;
    box-shadow: 0 8px 16px -6px #0004;
    display: flex;
    padding: .5rem;
    gap: .5rem;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
const Image = styled(motion.img)`
    height: 3rem;
    width: 3rem;
    background-color: #2b2b2b;
    flex-shrink: 0;
    border-radius: 50%;
`;
const ItemDetails = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    height: 100%;
`;
const ItemTitle = styled.span`
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    white-space: nowrap;
    text-overflow: ellipsis;
`;
const ItemLink = styled.span`
    font-size: 14px;
    font-weight: 500;
    color: #fff9;
`;
const Controls = styled.div`
    height: 3rem;
    flex-shrink: 1;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    gap: .25rem;
`;
const GridOverlayButton = styled.button`
display: grid;
place-items: center;
font-size: 20px;
background-color: #121212a8;
backdrop-filter: blur(8px);
border: 0;
outline: 0;
width: 2.75rem;
aspect-ratio: 1;
margin: 0;
cursor: pointer;
border-radius: 50%;
z-index: 999;
isolation: isolate;
position: absolute;
color: #fff;
transition: font-size .2s ease;
&.overflow{
  &::before{
    right: 0;
  }
}
&::before{
  content: attr(name);
  position: absolute;
  top: 110%;
  z-index: -1;
  padding: .25rem;
  background-color: #12121290;
  color: #fff;
  pointer-events: none;
  backdrop-filter: blur(4px);
  font-size: 16px;
  border-radius: 4px;
  white-space: nowrap;
  transform: translateY(-10px);
  opacity: 0;
  transition: .2s ease;
}
&:hover{
  font-size: 24px;
  outline: 1px solid #fffe;
  &::before{
    opacity: 1;
    transform: translateY(0);
  }
}
&:active{
  font-size: 18px;
}
&.right{
  &::before{
      right: 0;
  }
}
&.left{
  &::before{
      left: 0;
  }
}
&.top{
  &::before{
      top: unset;
      bottom: 110%;
  }
}
`;

export default function ListItem(props) {
    const { title, link, handleRemoveItem } = props
    const Transition = { type: "spring", stiffness: 400, damping: 80 }
    return (
        <Container transition={Transition} viewport={{ once: true }} layout initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} exit={{ scale: 0, opacity: 0 }}>
            <Image src="" alt="" />
            <ItemDetails>
                <ItemTitle>{title}</ItemTitle>
                <ItemLink>{link}</ItemLink>
            </ItemDetails>
            <Controls>
                <GridOverlayButton onClick={handleRemoveItem} className='top right' name='Delete Styles'><MdDelete /></GridOverlayButton>
            </Controls>
        </Container>
    )
}