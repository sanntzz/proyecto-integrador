
const SearchBar= (props) => {

   return ( 
      <div className="container"> 
         <input type="search"  />
         <button onClick={props.onSearch}>agregar </button>
      </div>
         
      
      
   );
}

export default SearchBar
