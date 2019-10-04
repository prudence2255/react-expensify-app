import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      windoww: '',
      windowh: '',
      pagex: '',
      pagey: '',
      top: '',
      page: 1,
      per_page: 10,
      homeImages: [],
    }
  }
  componentDidMount() {
   this.homeImages();
    window.addEventListener('scroll', this.getTop,)
   
  }
 getTop = () => {
  const windowh = window.innerHeight;
  const el = document.querySelector(".lastBox");
 
  const box = document.querySelector(".box").getBoundingClientRect();
  const boxHeight = box.bottom;
  const clientH = window.pageYOffset;
  
  if((boxHeight <= windowh)) {
    this.setState((prev) => {
      return {
        page: prev.page + 1,
      }
    }, this.homeImages)
  }
  
 }

 homeImages = () => {
  const {per_page, page} = this.state;
        const accessKey = '126d5e789ac27e017e68c1a552ea86c1a55f4a7ba5a4710dfbaa0e01ae75c8ff';
  //const secreteKey = '258befa40a03a78d8b74a379105b9534f615937887980beda25a5a0667edaad6';
 fetch(`https://api.unsplash.com/search/photos?client_id=${accessKey}&query=photo&per_page=${per_page}&page=${page}`)
 .then(photo => {
     return photo.json();
  }).then(result => {
      console.log(result);
      this.setState(() => {
          return{
              homeImages: [...this.state.homeImages,...result.results],
              total_pages: result.total_pages,
          }
      })
 }).catch(() => {
  this.displayError();
}
   
)
   }

render() {
  return (
    <div className="App">
      <header className="App-header">
       <div className={'box'}>
         {
           this.state.homeImages.map(image => (
            <div key={image.id}>
            <img src={image.urls.small} alt={"house"} />
            </div>
           ))
         }
       </div>
      </header>
    </div>
  );
}
}

export default App;

