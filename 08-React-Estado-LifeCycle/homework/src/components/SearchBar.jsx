import React, { useState } from "react";

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("")
  
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
    }}>
      <input
        type="text"
        placeholder="Ciudad..."
        onChange={e => setCity(e.target.value)}
      />
      <input type="submit" value="Agregar" />
    </form>
  );
}



// asi seria con una clase 

// import React from 'react'

// export default class SearchBar extends React.Component {
//   constructor(props){
//     super(props)
//     //estado inicial
//     this.state = {
//       city : ""
//     }
//   }

//   render() {
//     return (
//       <form onSubmit={(e) => {
//         e.preventDefault();
//         this.props.onSearch(this.state.city);
//       }}>
//         <input
//           type="text"
//           placeholder="Ciudad..."
          
//           onChange={(evento)=> this.setState({city: evento.target.value})}
//         />
//         <input type="submit" value="Agregar" />
//       </form>
//     );
//   }}