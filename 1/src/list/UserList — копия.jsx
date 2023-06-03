import React, { useState, useEffect } from "react";
import style from './Style.module.scss'

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react'

export const UserList = () => {
    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);
    const [openStates, setOpenStates] = useState([]);
  
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
          setUsers(data);
          setOpenStates(new Array(data.length).fill(false));
        })
  
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
          setPosts(data);
        })
    }, []);
  
  
  
    const getUserPosts = (userId) => {
      const userPosts = posts.filter(post => post.userId === userId);
      return userPosts;
    }
  
    return (
      <div className={style.container}>
        {users.map((user, index) => (
          <div key={user.id}>
            <h2>Имя: {user.name}</h2>
            <p>@emai :{user.email}</p>
            <p>tel: {user.phone}</p>
  
            <Accordion >
              <AccordionItem>
                <h2>
                  <AccordionButton onClick={() => {
                    const newOpenStates = [...openStates];
                    newOpenStates[index] = !newOpenStates[index];
                    setOpenStates(newOpenStates);
                  }}>
                    <Box as="span" flex='1' textAlign='centry'>
                      Нажмите что бы увидеть посты
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel display={openStates[index] ? "block" : "none"}>
                  {getUserPosts(user.id).map(post => (
                    <div key={post.id} className={style.post}>
                      <h1>{post.title}</h1>
                      <h2>{post.body}</h2>
                    </div>
                  ))}
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
  
          </div>
        ))}
  
      </div>
    );
  }