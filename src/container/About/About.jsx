import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {getdata } from '../../feature/controller/refresher';
// import {  useDispatch } from 'react-redux';
import { store } from '../../app/store';
import { AppWrap } from '../../wrapper';
import './About.scss';
import { urlFor, client} from '../../client';

const About = () => {
  const [abouts, setAbouts] = useState([]);



  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query)
          .then((data) => setAbouts(data));
    
    
  }, []);
  store.dispatch(getdata(abouts));
  return (
    <>
      <h2 className="head-text">I Know that <span>Good Development</span> <br />means  <span>Good Business</span></h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl).url()} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(About, 'about');