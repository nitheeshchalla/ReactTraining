import React, { useState } from 'react';

import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';
import { CarForm } from "./CarForm";

export const CarTool = (props) => {
    const [cars, setCars] = useState(props.cars.concat());
    const [selectedCarIds, setSelectedCarIds] = useState([]);

    const addCar = (car) => {
        // const newCarModel = {
        //     ...car,
        //     id: Math.max(...cars.map(x => x.id), 0) + 1
        // };
        // setCars(cars.concat({newCarModel}));
        setCars(cars.concat({
            ...car,
            id: Math.max(...cars.map(x => x.id), 0) + 1
        }
        )); //Alternate to lines 11 to 15
    };

     const deleteCar = (carId) => {     
         setCars(cars.filter((e) => e.id !== carId));
         setSelectedCarIds(selectedCarIds.filter(id => id !== carId));
     };

     const selectCar=(carId)=>{
         if(selectedCarIds.includes(carId)){
            setSelectedCarIds(selectedCarIds.filter(id => id !== carId));
         } else{
            setSelectedCarIds(selectedCarIds.concat(carId));
         }
     }

     
     const bulkDeleteCars=()=>{       
        setCars(cars.filter(e => !selectedCarIds.includes(e.id)));
        setSelectedCarIds([]);
    }

    return (
        <>

            <ToolHeader headerText="Car Tool" />
            <CarForm buttonText="Add Car" onSubmitCar={addCar} />
            <CarTable carData={cars} deleteCar={deleteCar} onSelectCar={selectCar} 
            selectedCarIds={selectedCarIds}
            onBulkDeleteCars={bulkDeleteCars}/>

        </>
    )
};