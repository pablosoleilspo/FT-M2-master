import React from "react";
import { useParams } from "react-router-dom"

export default function Ciudad({ cities }) { // [{}]

    let params = useParams() // {ciudadId:234234}

    if (!cities.length) return <h1>No hay ciudades</h1>

    // filtrar lista de ciudades
    let [city] = cities.filter(city => city.id === parseInt(params.id)) // array [{name: Avellaneda}]

    return (
        <div className="ciudad">
            <div className="container">
                <h2>{city.name}</h2>
                <div className="info">
                    <div>Temperatura: {city.temp} ºC</div>
                    <div>Clima: {city.weather}</div>
                    <div>Viento: {city.wind} km/h</div>
                    <div>Cantidad de nubes: {city.clouds}</div>
                    <div>Latitud: {city.latitud}º</div>
                    <div>Longitud: {city.longitud}º</div>
                </div>
            </div>
        </div>
    )
}


//Pueden pasarlo a clase
// import React from 'react';

// class Ciudad extends React.Component {
//     constructor(props){
//         super(props)
//         console.log(props)
//     }
//     render(){
//         return (
//             <div>
//                 <div className="container">
//                     <h2>{this.props.ciudad.name}</h2>
//                     <div className="info">
//                         <div>Temperatura: {this.props.ciudad.temp} ºC</div>
//                         <div>Clima: {this.props.ciudad.weather}</div>
//                         <div>Viento: {this.props.ciudad.wind} km/h</div>
//                         <div>Cantidad de nubes: {this.props.ciudad.clouds}</div>
//                         <div>Latitud: {this.props.ciudad.latitud}º</div>
//                         <div>Longitud: {this.props.ciudad.longitud}º</div>
//                     </div>
//                 </div> 
//             </div> 
//             )}
//         }

// export default Ciudad;