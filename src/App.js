
import './App.css';
import "bootstrap"
import "bootstrap/scss/bootstrap.scss"
import NavBar from './Components/navbar/nav';
import "./App.css"
import Product from './Pages/Product/Product.js'; 


function App() {
  return (
      <div className='App'>
      

          <NavBar  />
          <Product />

      </div>

  );
}

export default App;
