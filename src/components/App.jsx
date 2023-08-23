import { Component } from "react";
import { Searchbar } from "./Searchbar";
import { ImageGallery } from "./ImageGallery";
import { fetchImages } from "./api";
import { Button } from "./Button";
import { Circles } from 'react-loader-spinner';
import * as basicLightbox from 'basiclightbox'
<Circles
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="circles-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };

export class App extends Component {
  state = {
    query: '  ',
    images:[],
    page: 1,
    isLoading: false,
  }

  // async componentDidMount() {
  //   const images = await fetchImages(this.state.query);
  //   this.setState({
  //     images,
  //     loading: false,
  //   })
  //   console.log(this.state.query);
  // }
    changeQueryHandler = (newQuery) => {
    this.setState({
      query: newQuery,
      images: [],
      page: 1,
    })
    console.log(this.state.query);
  } 

  onSubmitHandler = event => {
    event.preventDefault();
    this.changeQueryHandler(event.target.elements.query.value);
    
    event.target.reset();
  }

  async componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state
    try {
      if (this.state.query === '') {
          console.log('please enter something');
          return
      } else {
        if (prevState.query !== this.state.query || prevState.page !== this.state.page) {
        this.setState({ isLoading: true });
        
      const imagesCollection = await fetchImages(query, page);
      const { hits } = imagesCollection;
          this.setState(prevState => {
            return {
              images: [...prevState.images, ...hits],
              isLoading: false
        }
        
      })
      }
      }
      
    } catch (error) {
      console.error (error)
    }
    
  }

  loadMoreHandler = async () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));

    }
    
  openModal = (image) => {
    const instance = basicLightbox.create(`
      <img src="${image}" width="800" height="600">
    `)
    console.log(instance);

    return instance.show()
  }




  render() {

    const { images, isLoading } = this.state;

    return (
      <>
        <Searchbar onSubmitHandler={this.onSubmitHandler} />
        {/* {images && <ImageGallery imagesCollection={this.state.images} />} */}
        {isLoading ? <Circles /> : (<ImageGallery imagesCollection={images} modal={ this.openModal} />)}
        <Button loadMore={this.loadMoreHandler}/>

      </>
      
    )
  }


  // на 35 хв додається ідентифікатор

  // -відловлювати помилку catch
}
