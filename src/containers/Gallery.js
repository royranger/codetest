import React, {Component} from 'react';
import './Gallery.css';
import Searchbox from '../components/Searchbox';
import Slideshow from '../components/Slideshow/Slideshow';
import ToggleTimer from '../components/ToggleTimer';
import GalleryThumb from '../components/GalleryThumb/GalleryThumb';
import Footer from '../components/Footer/Footer';


class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeImage: 'https://media1.giphy.com/media/xUPGGDNsLvqsBOhuU0/200.gif',
      images: [{active: "https://media1.giphy.com/media/xUPGGDNsLvqsBOhuU0/200.gif"}],
      caption: '#trending',
      searchTerm: '',
      timer: true
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
        if(giphies.length) {
          this.setState({
            activeImage: giphies[0].active,
            images: giphies,
            caption: `#${caption}`
          })
        } else {
          this.setState({
            activeImage: "https://media3.giphy.com/media/l3q30VK7ItN9a3Zg4/200.gif",
            images: [{inactive: "https://media3.giphy.com/media/l3q30VK7ItN9a3Zg4/giphy_s.gif", active: "https://media3.giphy.com/media/l3q30VK7ItN9a3Zg4/200.gif"}],
            caption: 'No results'
          });
        }
      })
  }

  handleEnter = (event) => {
    if (event.key === 'Enter' && this.state.searchTerm) {
      this.getSearchImages();
    }
  }

  updateActiveImage = (newImage) => {
    this.setState({
      activeImage: newImage
    });
  }

  autoSetImage = () => {
    const {images, timer} = this.state;
    const randomGifIndex = Math.floor(Math.random()*images.length);
    if (timer) {
      this.setState({
        activeImage: images[randomGifIndex].active
      });
      setTimeout(this.autoSetImage, 3000);
    }
  }

  toggleTimer = () => {
    const {timer} = this.state;
    if (timer) {
      this.setState({
        timer: false
      });
    } else {
      this.setState({
        timer: true
      });
      setTimeout(this.autoSetImage, 3000);
    }
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
    const {activeImage, images, caption, timer} = this.state;

    return(
      <div id='gallery' className='center'>
        <div id='wrapper'>
          <h1 className='f1 tc'>GIF GALLERY</h1>

          <Searchbox onSearchChange={this.onSearchChange}
                     getSearchImages={this.getSearchImages}
                     handleEnter={this.handleEnter}/>

          <Slideshow activeImage={activeImage}
                     caption={caption}/>

          <ToggleTimer toggleTimer={this.toggleTimer}
                       timer={timer}/>

          <GalleryThumb images={images}
                        updateActiveImage={this.updateActiveImage}
                        deleteThumbnail={this.deleteThumbnail}/>
        </div>


        <Footer/>

      </div>
    );
  }

}

export default Gallery;
