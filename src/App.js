import './App.css';
import Cart from './Components/CartComponent/Cart';
import Dishes from './Components/DishesComponents/Dishes';
import AllCategories from './Components/FilterComponent/AllCategories';

function App() {
  return (
    <div className="App">
      <div className='component'>
        <AllCategories/>
        <Cart/>
      </div>
      <div className='component'>
        <Dishes/>
      </div>
      
    </div>
  );
}

export default App;
