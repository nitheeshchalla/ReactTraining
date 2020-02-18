import React from 'react';
import {CarViewRow} from './CarViewRow'

export const CarTable = ({carData, deleteCar, selectedCarIds, onSelectCar:selectCar, 
onBulkDeleteCars: bulkDeleteCars }) => {

    return ( 
    <>
    <button type="button" onClick={bulkDeleteCars}>Bulk Delete</button>
    <table>
    <thead>
        <tr>
            
            <th>Select</th> 
            <th>Id</th>
            <th>Make</th>
            <th>Model</th>
            <th>Year</th>
            <th>Price</th>                        
            <th>Color</th>                        
            <th>Actions</th>
        </tr>
    </thead>
    <tbody>
        {
        carData.map(car => <CarViewRow key={car.id} carViewData={car} deleteCar={deleteCar}
        selected={ selectedCarIds.includes(car.id) } 
        onSelectCar={selectCar}/>)
        }
    </tbody>
</table>
</>
    );
}