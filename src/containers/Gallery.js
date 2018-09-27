import React, {Component} from 'react';
import './Gallery.css';
import GalleryThumb from '../components/GalleryThumb/GalleryThumb';
import Footer from '../components/Footer/Footer';

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeImage: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/10/Winniethepooh.png/220px-Winniethepooh.png',
      images: []
    }
  }

  populateImages = () => {
    fetch('https://api.giphy.com/v1/gifs/trending?api_key=PEyIrGaWdf08Lw4nezyXejpD9Y0pO6Rt')
      .then(response=> response.json())
      .then(resp=> {
        return resp.data.map(gif=> {
          return({
            inactive: gif.images.original_still.url,
            active: gif.images.original.url
          });
        });
      })
      .then(giphies=> {
        this.setState({
          images: giphies
        });
      })
  }

  updateActiveImage = (newImage) => {
    this.setState({
      activeImage: newImage
    });
  }

  componentDidMount() {
    this.populateImages();
  }

  render () {
    const {activeImage, images} = this.state;

    return(
      <div>
        <h1>GALLERY</h1>
        <img src={activeImage}
             alt="activeimage"/>
        <GalleryThumb images={images}
                      updateActiveImage={this.updateActiveImage}/>
        <Footer/>

      </div>
    );
  }

}

export default Gallery;
