import React from 'react';
import One from '../Gallery/assets/1.jpg';
import Two from '../Gallery/assets/2.jpg';
import Three from '../Gallery/assets/3.jpg';
import Four from '../Gallery/assets/4.jpg';
import Five from '../Gallery/assets/5.jpg';
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
            <img
              src={Four}
              style={{ width: '100%', height: '730px' }}
              alt=" "
            />
          </div>

          <div style={{ margin: '15px', marginRight: '0px' }}>
            <img src={Two} style={{ width: '100%', height: '350px' }} alt=" " />
          </div>

          <div style={{ margin: '15px', marginRight: '5px' }}>
            <img
              src={Three}
              style={{ width: '100%', height: '350px' }}
              alt=" "
            />
          </div>
          <div></div>

          <div style={{ margin: '15px', marginRight: '0px' }}>
            <img
              src={Five}
              style={{ width: '100%', height: '350px' }}
              alt=" "
            />
          </div>
        </Masonry>
      </ResponsiveMasonry>
    </>
  );
};

export default Gallery;
