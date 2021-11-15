import React from 'react';
import One from '../Gallery/assets/1.jpg';
import Two from '../Gallery/assets/2.jpg';
import Three from '../Gallery/assets/3.jpg';
import Four from '../Gallery/assets/4.jpg';
import Five from '../Gallery/assets/5.jpg';
import Six from '../Gallery/assets/6.jpg';
import Seven from '../Gallery/assets/7.jpg';
import Eight from '../Gallery/assets/8.jpg';
import Nine from '../Gallery/assets/9.jpg';
import Ten from '../Gallery/assets/10.jpg';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

const Gallery = () => {
  return (
    <>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry>
          <div style={{ margin: '15px', marginRight: '0px' }}>
            <img src={One} style={{ width: '100%', height: '350px' }} alt=" " />
          </div>

          <div style={{ margin: '15px', marginRight: '0px' }}>
            <img src={Two} style={{ width: '100%', height: '450px' }} alt=" " />
          </div>

          <div style={{ margin: '15px', marginRight: '5px' }}>
            <img
              src={Three}
              style={{ width: '100%', height: '250px' }}
              alt=" "
            />
          </div>

          <div style={{ margin: '15px', marginRight: '0px' }}>
            <img
              src={Four}
              style={{ width: '100%', height: '550px' }}
              alt=" "
            />
          </div>

          <div style={{ margin: '15px', marginRight: '0px' }}>
            <img
              src={Five}
              style={{ width: '100%', height: '550px' }}
              alt=" "
            />
          </div>

          <div style={{ margin: '15px', marginRight: '5px' }}>
            <img src={Six} style={{ width: '100%', height: '650px' }} alt=" " />
          </div>

          <div style={{ margin: '15px', marginRight: '0px' }}>
            <img
              src={Seven}
              style={{ width: '100%', height: '400px' }}
              alt=" "
            />
          </div>

          <div style={{ margin: '15px', marginRight: '0px' }}>
            <img
              src={Eight}
              style={{ width: '100%', height: '650px' }}
              alt=" "
            />
          </div>

          <div style={{ margin: '15px', marginRight: '5px' }}>
            <img
              src={Nine}
              style={{ width: '100%', height: '750px' }}
              alt=" "
            />
          </div>

          <div style={{ margin: '15px', marginRight: '0px' }}>
            <img src={Ten} style={{ width: '100%', height: '320px' }} alt=" " />
          </div>
        </Masonry>
      </ResponsiveMasonry>
    </>
  );
};

export default Gallery;
