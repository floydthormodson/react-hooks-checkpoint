import React, {useState, useEffect} from "react";
import './App.css';
import {Card,CardContent,CardMedia,} from '@material-ui/core';
import DisplayContent from "./DisplayContent.js";


function App() {

  const [productList, setProductList] = useState([])
  const [currentProduct, setCurrentProduct] = useState("0");
  const [currentName, setCurrentName] =useState('');
  const [currentSlogan, setCurrentSlogan] = useState('');
  const [currentCategory, setCurrentCategory] =useState('');
  const [currentPrice, setCurrentPrice]=useState('');
  const [currentImage, setCurrentImage] =useState('')

  
  useEffect(() =>{
    async function callProductList(){
      let res =await fetch("http://52.26.193.201:3000/products/list");
      let json = await res.json();
      setProductList(json)
    };
    callProductList();
  }, []);

  useEffect(() =>{
    async function callProductID(){
      let res =await fetch(`http://52.26.193.201:3000/products/${currentProduct}`);
      let json = await res.json();
      setCurrentName(json.name);
      setCurrentSlogan(json.slogan);
      setCurrentCategory(json.category);
      setCurrentPrice(json.default_price);
    };
    callProductID();
  }, [currentProduct]);

  useEffect(() =>{
    async function callImage(){
      let res =await fetch(`http://52.26.193.201:3000/products/${currentProduct}/styles`);
      let json = await res.json();
      setCurrentImage(json.results[0]?.photos[0]?.url);
      
    };
    callImage();
  }, [currentProduct]);

  console.log(currentProduct)
  return (
    <div className="App">
      <div className="app-title flex-column">
        <h1>React Hooks Checkpoint</h1>
      </div>
      <div className="Card-Section">
        <Card class="card" id="main-display">
          You are currently Viewing:<br /> 
          {currentName}<br />
          {currentSlogan}<br />
          {currentCategory}<br />
          {currentPrice}<br />
          <img src={currentImage}/>
        </Card>
        <Card className="card" id="0">
          <CardMedia />
          <CardContent className="card">
            <button onClick={()=> setCurrentProduct(1)}>See More</button><br />
            {productList[0]?.name}<br />
            <DisplayContent currentProduct={currentProduct} selector = {1}
            name={currentName} slogan={currentSlogan} category={currentCategory} price={currentPrice}/>
            <img src={currentProduct === 1? currentImage: ''}/>
            
          </CardContent>
        </Card>
        <Card className="card" id="1">
            <CardMedia />
            <CardContent className="card">
              {productList[1]?.name}<br />
              <img src={currentProduct === 2? currentImage: ''}/>
              <button onClick={(e)=> setCurrentProduct(2)}>See More</button>
            </CardContent>
        </Card>
        <Card className="card" id="2">
            <CardMedia src={currentImage}/>
            <CardContent className="card">
              {productList[2]?.name}<br />
              <img src={currentProduct === 3? currentImage: ''}/>
              <button onClick={(e)=> setCurrentProduct(3)}>See More</button>
            </CardContent>
        </Card>
        <Card className="card" id="3">
            <CardMedia />
            <CardContent className="card">
              {productList[3]?.name}<br />
              <img src={currentProduct === 4? currentImage: ''}/>
              <button onClick={(e)=> setCurrentProduct(4)}>See More</button>
            </CardContent><br/>
        </Card>
        <Card className="card" id="4">
            <CardMedia />
            <CardContent className="card">
              {productList[4]?.name}<br />
              <img src={currentProduct === 5? currentImage: ''}/>
              <button onClick={(e)=> setCurrentProduct(5)}>See More</button>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
export default App;
