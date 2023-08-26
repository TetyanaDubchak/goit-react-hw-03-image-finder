import { Component } from "react";
import { Searchbar } from "../Searchbar/Searchbar";
import { ImageGallery } from "../ImageGallery/ImageGallery";
import { fetchImages } from "../api";
import { Button } from "../Button/Button";
import { Wrapper } from "./App.styled";
import { Loader } from "../Loader/Loader";
import {Notify} from 'notiflix';


export class App extends Component {
  state = {
    query: '  ',
    images:[],
    page: 1,
    isLoading: false,
  }

 
  changeQueryHandler = (newQuery) => {
    this.setState({
      query: `${Date.now()}/${newQuery}`,
      images: [],
      page: 1,
    })
    
  } 

  onSubmitHandler = event => {
    event.preventDefault();
    if (event.target.elements.query.value.trim() === '') {
      Notify.warning('Please, enter something what you want to see')
      return;
    }
    this.changeQueryHandler(event.target.elements.query.value);   
    event.target.reset();
  }

  async componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.query;
    const currentQuery = this.state.query;
    const prevPage = prevState.page;
    const currentPage = this.state.page;

    if (prevQuery !== currentQuery || prevPage !== currentPage) {
      this.loadResult();
    }
    
  }

  loadResult = async () => {
    const searchQuery = this.state.query;
    const nextPage = this.state.page;
    try {
      this.setState({ isLoading: true });
        
      const imagesCollection = await fetchImages(searchQuery, nextPage);
      const { hits } = imagesCollection;
      if (hits.length) {
        this.setState(prevState => {
            return {
              images: nextPage > 1 ? [...prevState.images, ...hits] : hits,
              isLoading: false
        }
      })
      }
    } catch (error) {
      console.error(error)
      Notify.failure('Sorry, something went wrong')
      this.setState({ isLoading: false });
    }
  }


  loadMoreHandler = async () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
    }

  render() {

    const { images, isLoading } = this.state;

    return (
      <Wrapper>
        <Searchbar onSubmitHandler={this.onSubmitHandler} />
        {isLoading ? <Loader/> : (<ImageGallery imagesCollection={images} />)}
        {images.length > 0 && <Button loadMore={this.loadMoreHandler}/>}
      </Wrapper>
      
    )
  }

}
