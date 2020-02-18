import React from 'react';
import { CarViewRow } from './CarViewRow'
import { CarEditRow } from './CarEditRow'

export const CarTable = ({ carData,
    onDeleteCar: deleteCar,
    selectedCarIds,
    onSelectCar: selectCar,
    onBulkDeleteCars: bulkDeleteCars,
    onEditCar: editCar,
    onUpdate:change }) => {

    return (
        <>
            <button type="button" onClick={bulkDeleteCars}>Bulk Delete</button>
            <table>
                <thead>
                    <tr>

                        <th>Select</th>
                        <th>Id</th>
                        <th>
                            <label htmlFor="make-input">Make</label></th>
                        <th>
                            <label htmlFor="model-input">Model</label></th>
                        <th>
                            <label htmlFor="year-input">Year</label></th>
                        <th>
                            <label htmlFor="price-input">Price</label></th>
                        <th>
                            <label htmlFor="color-input">Color</label></th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        
                        carData.map(car => {
                            return !car.update ?
                            <CarViewRow key={car.id} carViewData={car} selected={selectedCarIds.includes(car.id)} onDeleteCar={deleteCar} onSelectCar={selectCar} onEditCar={editCar}  />
                            :
                            <CarEditRow key={car.id} carViewData={car} onUpdate={change} />
                        })
                        //car => <CarViewRow key={car.id} carViewData={car} selected={selectedCarIds.includes(car.id)} onDeleteCar={deleteCar} onSelectCar={selectCar} onEditCar={editCar} />
                    }
                </tbody>                
            </table>
            

        </>
    );
}