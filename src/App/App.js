import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

//components
import Product from '../Product/product';
import Wishlist from '../Wishlist/wishlist';

//services
import HttpService from '../Services/http-service';


const http = new HttpService();

class App extends Component {

  constructor (props) {
    super(props);
    this.state = {products:[]};
    //bind functions
    this.loadData = this.loadData.bind(this);
    this.productList = this.productList.bind(this);
    this.loadData();
  }

  loadData = () => {
    var self = this;
    http.getProducts().then(data => {
      self.setState({products: data})

    }, err => {

    });
  }

  productList = () => {
    const list = this.state.products.map((product) =>
        <div className="col-sm-4" key={product._id}>
        <Product product={product}/>
        </div>

    );
   return (list);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        <h2>Wish List</h2>
        </header>
        <div className="container-fluid App-main">
        <div className="row">
        <div className="col-sm-8">



        </div>
        <div className="row">
          {this.productList()}
        </div>
        <div className="col-sm-4">
        <Wishlist />
        </div>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
