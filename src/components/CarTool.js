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

    const selectCar = (carId) => {
        if (selectedCarIds.includes(carId)) {
            setSelectedCarIds(selectedCarIds.filter(id => id !== carId));
        } else {
            setSelectedCarIds(selectedCarIds.concat(carId));
        }
    }

    const editCar = (carId) => {
        //  const newCarModel = {
        //     ...car,
        //     update: Math.max(...cars.map(x => x.id), 0) + 1
        // };
        // setCars(cars.concat({newCarModel}));


        // this.setState({
        //     data: this.state.data.map(el => (el.id === id ? {...el, text} : el))
        //   });

          setCars(cars.map(c => (c.id === carId ? {...c, update:true}:c)));

    }

    const change = (car) => {
        //  const newCarModel = {
        //     ...car,
        //     update: Math.max(...cars.map(x => x.id), 0) + 1
        // };
        // setCars(cars.concat({newCarModel}));


        // this.setState({
        //     data: this.state.data.map(el => (el.id === id ? {...el, text} : el))
        //   });

         // setCars(cars.map(c => (c.id === carId ? {...c, update:true}:c)));

    }

    const bulkDeleteCars = () => {
        setCars(cars.filter(e => !selectedCarIds.includes(e.id)));
        setSelectedCarIds([]);
    }

    return (
        <>
            <ToolHeader headerText="Car Tool" />
            <CarForm buttonText="Add Car" onSubmitCar={addCar} />
            <CarTable carData={cars} selectedCarIds={selectedCarIds} onDeleteCar={deleteCar} onSelectCar={selectCar} onBulkDeleteCars={bulkDeleteCars} onEditCar={editCar} onUpdate={change} />
        </>
    )
};