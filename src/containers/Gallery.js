import React, {Component} from 'react';
import './Gallery.css';
import GalleryThumb from '../components/GalleryThumb/GalleryThumb';
import Footer from '../components/Footer/Footer';

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeImage: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/10/Winniethepooh.png/220px-Winniethepooh.png',
      images: [
        'https://static.tvtropes.org/pmwiki/pub/images/roo_9.gif',
        'https://t00.deviantart.net/NmDURWDhAXcpYU52i7qIgHpyh5M=/fit-in/500x250/filters:fixed_height(100,100):origin()/pre00/f4fc/th/pre/f/2011/229/1/7/roo___winnie_the_pooh_by_xdogpaw-d46uuro.png',
        'https://i.pinimg.com/236x/a1/e5/08/a1e508dd3b1d8073c20090aab358ddf1--baby-canvas-baby-joey.jpg',
        'https://margosnotebook.files.wordpress.com/2017/02/kanga.jpg?w=705'
      ]
    }
  }

  render () {
    const {activeImage, images} = this.state;

    return(
      <div>
        <img src={activeImage}
             alt="activeimage"/>
        <GalleryThumb images={images}/>
        <Footer/>

      </div>
    );
  }

}

export default Gallery;
