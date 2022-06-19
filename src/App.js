import './App.css';
import ArrayComponent from './components/ArrayComponent';
import Container from './components/Container';
import TextMessage from './components/TextMessage';
import Main from './Product/Main';
import Products from './Product/Products';
import ProductList from './ProductsApp/App_1';

function App() {
  return (
    <div className="App">
      {/* <Page/> */}
      <Container/>
      <ArrayComponent/>
      <TextMessage/>
      <Main/>
      <h1>Products Information</h1>
      <ProductList/>
    </div>
  );
}

export default App;
