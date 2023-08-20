import { Component } from "react";
import { Searchbar } from "./Searchbar";
import { ImageGallery } from "./ImageGallery";
import { fetchImages } from "./api";

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
    images: [],
    page: 1,
    loading: false,
  }

  async componentDidMount() {
    const images = await fetchImages(this.state.query);
    this.setState({
      images,
      loading: false,
    })
    console.log(images);
  }

  async componentDidUpdate(prevProps, prevState) {
    const {query} = this.state
    if (prevState.query !== this.state.query || prevState.page !== this.state.page) {
      const images = await fetchImages(query);
      this.setState({
        images
      })
      console.log(this.state.images);
    }
  }

  loadMoreHandler = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  }

  changeQueryHandler = (newQuery) => {
    this.setState({
      query: newQuery,
      images: [],
      page: 1,
    })
  }

  onSubmitHandler = event => {
    event.preventDefault();
    this.changeQueryHandler(event.target.elements.query.value);
    event.target.reset();
  }

  render() {

    const {loading} = this.state
    return (
      <>
        <Searchbar onSubmitHandler={this.onSubmitHandler} />
        <ImageGallery />
        
        {loading ? (<div>loading...</div>) : (<ImageGallery />)}

      </>
      
    )
  }


  // на 35 хв додається ідентифікатор
}
