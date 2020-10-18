  
import React from 'react';
import { Link } from 'react-router-dom';
import image from './../../images/404.jpg';
import routes from './../../routes.js';

const styles = {
  container: { textAlign: 'center' },
  status: { fontSize: 24, marginBottom: 16 },
};

const NotFound = () => (
  <div style={styles.container}>
    <img src={image} alt="cat detective" width="320" />
    <h1 style={styles.status}>Такой страницы не существует. Вернутся <Link to={routes.home}>на главную
      страницу?</Link> </h1>
  </div>
);

export default NotFound;