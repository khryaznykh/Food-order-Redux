import dataDishes from '../../Data/DataDiashes.js';
import Dish from './Dish.js';
import { getSelectedCategory } from '../../redux/dishesSlice.js';
import { useSelector } from 'react-redux';

const Dishes = () => {
    const selectedCategory = useSelector(getSelectedCategory)
    return(
        <div>
            {dataDishes
            .filter(dish => {
                if (selectedCategory === 'ALL') return true;
                return selectedCategory === dish.category;
            })
            .map ((dish)=> <Dish dish={dish}/>)}
        </div>
    )
}
export default Dishes;