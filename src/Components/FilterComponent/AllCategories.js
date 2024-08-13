import Filter from "./Filter";

const AllCategories = () => {
    return(
        <div>
            <h2>What kind of food woukld you like?  </h2>
            {['SEAFOOD','ITALIAN', 'APPETIZERS', 'SALADS', 'ALL'].map((category)=> <Filter category={category}/> )}
        </div>
    )
}
export default AllCategories;