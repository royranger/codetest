import React, {Component} from 'react';
import './Gallery.css';
import Searchbox from '../components/Searchbox';
import GalleryThumb from '../components/GalleryThumb/GalleryThumb';
import Footer from '../components/Footer/Footer';


class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeImage: '',
      images: [{active: "https://media3.giphy.com/media/RLVcsR93HsqlIefxAs/200.gif"}],
      caption: '#trending',
      searchTerm: ''
    }
  }

  getImages = () => {
    fetch('https://api.giphy.com/v1/gifs/trending?api_key=PEyIrGaWdf08Lw4nezyXejpD9Y0pO6Rt')
      .then(response=> response.json())
      .then(resp=> {
        return resp.data.map(gif=> {
          return({
            inactive: gif.images.original_still.url,
            active: gif.images.fixed_height.url
          });
        });
      })
      .then(giphies=> {
        this.setState({
          images: giphies
        });
      })
  }

  getSearchImages = () => {
    const {searchTerm} = this.state;
    const query = searchTerm.replace(/ /g, '+');
    const caption = searchTerm.replace(/ /g, '');

    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=PEyIrGaWdf08Lw4nezyXejpD9Y0pO6Rt`)
      .then(response=> response.json())
      .then(resp=> {
        return resp.data.map(gif=> {
          return({
            inactive: gif.images.original_still.url,
            active: gif.images.fixed_height.url
          });
        });
      })
      .then(giphies=> {
        this.setState({
          images: giphies,
          caption: `#${caption}`
        });
      })
  }

  handleEnter = (event) => {
    if (event.key === 'Enter') {
      this.getSearchImages();
    }
  }

  updateActiveImage = (newImage) => {
    this.setState({
      activeImage: newImage
    });
  }

  autoSetImage = () => {
    const {images} = this.state;
    const randomGifIndex = Math.floor(Math.random()*images.length);
    this.setState({
      activeImage: images[randomGifIndex].active
    });
    setTimeout(this.autoSetImage, 3000);
  }

  onSearchChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    });
  }

  deleteThumbnail = (index) => {
    const confirmDelete = window.confirm("Delete this gif?");
    const giphies = this.state.images;

    if (confirmDelete) {
      giphies.splice(index, 1);
      this.setState({
        images: giphies
      });
    } else {
      return;
    }
  }

  componentDidMount() {
    this.getImages();
    this.autoSetImage();
  }

  render () {
    const {activeImage, images, caption} = this.state;

    return(
      <div>
        <h1 className='f1 tc'>GIF GALLERY</h1>

        <Searchbox onSearchChange={this.onSearchChange}
                   getSearchImages={this.getSearchImages}
                   handleEnter={this.handleEnter}/>

        <div className='polaroidcontainer tc'>
          <div className='polaroid dib' caption={caption}>
            <img src={activeImage}
                 alt="activeimage"
                 className="vh-40 center db"/>
          </div>
        </div>

        <GalleryThumb images={images}
                      updateActiveImage={this.updateActiveImage}
                      deleteThumbnail={this.deleteThumbnail}/>
        <Footer/>

      </div>
    );
  }

}

export default Gallery;
