import React, { useState, useEffect } from "react";
import { Card } from 'antd';
import style from './Style.module.scss'

export const UserList = () => {
    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);
  
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            setUsers(data);
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
        { users.map((user, index) => (
          <div key={ user.id }>
            <h2>{ user.name + ' (' + user.email + ')' }</h2>
            {getUserPosts(user.id).map(post => (
              <div key={ post.id } className={ style.post }>
                <Card className={ style.card } title={ post.title } headStyle={{ backgroundColor: '#60AF60' }}>
                  <p> { post.body } </p>
                </Card>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
}