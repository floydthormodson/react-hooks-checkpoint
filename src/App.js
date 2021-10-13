import React, {useState, useEffect} from "react";
import './App.css';
import {Card,CardContent,CardHeader,CardMedia,} from '@material-ui/core';
import { FormatAlignJustify } from "@material-ui/icons";

function App() {

  const [productList, setProductList] = useState([])
  const [currentProduct, setCurrentProduct] = useState([]);
  const [url, setUrl] = useState("http://52.26.193.201:3000/products/list")

  useEffect(() =>{
    async function callProductList(){
      let res =await fetch(url);
      let json = await res.json();
      setProductList(json.product)
    };
    callProductList();
  }, [currentProduct]);

  console.log(productList[0].name)

  
  return (
    <div className="App">
      <div className="app-title flex-column">
        <h1>React Hooks Checkpoint</h1>
        <button onClick={(e)=> setCurrentProduct(e.target.value)}>Product 1</button>
      </div>
      <Card styles={FormatAlignJustify}>
          <CardMedia />
          <CardContent>
            First Card
            {productList[0]}
          </CardContent>
      </Card>
    </div>
  );
}
export default App;
