const SearchBar= (props) => {
   return ( 
      <h1> 
         <input type="search"  />
         <button onClick={props.onSearch}>agregar </button>
         
      </h1>
         
      
      
   );
}

export default SearchBar
