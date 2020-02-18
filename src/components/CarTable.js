import React from 'react';
import {CarView} from './CarViewRow'

export const CarTable = (props) => {

    return  <table>
    <thead>
        <tr>
            <th>Id</th>
            <th>Make</th>
            <th>Model</th>
            <th>Year</th>
            <th>Price</th>                        
            <th>Color</th>
        </tr>
    </thead>
    <tbody>
        {
        props.carData.map(car => <CarView key={car.id} carViewData={car}/>
        
        )
        
        }
    </tbody>
</table>
}