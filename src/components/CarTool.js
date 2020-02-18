import React, {useState} from 'react';
import {ToolHeader} from './ToolHeader';
import { CarTable } from './CarTable';
// const car = [
//     {id:1, model:'Elantra', color:'Beige', make:'Hyundai', year:2014, price:13000},
//     {id:2, model:'Sevillie', color:'Beige', make:'Cadillac', year:1999, price:2000}
// ];



export const CarTool = (props) => {
    const [cars, setCars ] = useState( props.cars.concat() );
    const [carForm, setCarForm] = useState({
        id:'',
        make: '',
        model: '', 
        year:'', 
        color:'', 
        price:'',
    });
    
    
    const change = (e) => {
        setCarForm({
            ...carForm,
            //colorName: e.target.value,
            [e.target.name]: e.target.value,
        })

    };

    const addCar = () => {
        setCars(cars.concat({

            ...carForm,
            id: Math.max(...cars.map(x => x.id), 0)+1
        }
            
            ));

        setCarForm({
            id:'',
            make: '',
            model: '',
            year: '',
            color: '',
            price: '',
        });

        
        console.log(cars);
    };

    return (
        <>
        
            <ToolHeader headerText="Car Tool" />
            <form>
                <div>
                    <label htmlFor="make-input">Make: </label>
                    <input type="text" id="make-input" name="make" value={carForm.make} onChange={change} />
                </div>
                <div>
                    <label htmlFor="model-input">Model: </label>
                    <input type="text" id="model-input" name="model" value={carForm.model} onChange={change} />
                </div>
                <div>
                    <label htmlFor="year-input">Year: </label>
                    <input type="text" id="year-input" name="year" value={carForm.year} onChange={change} />
                </div>
                <div>
                    <label htmlFor="color-input">Color: </label>
                    <input type="text" id="color-input" name="color" value={carForm.color} onChange={change} />
                </div>
                <div>
                    <label htmlFor="price-input">Price: </label>
                    <input type="text" id="price-input" name="price" value={carForm.price} onChange={change} />
                </div>
                <button type="button" onClick={addCar}>Add Car</button>
            </form>

            <CarTable carData={cars} />
            {/* <table>
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
                    cars.map(c => <tr key={c.id}>
                        <th>{c.id}</th>
                        <th>{c.make}</th>
                        <th>{c.model}</th>
                        <th>{c.year}</th>
                        <th>{c.price}</th>
                        <th>{c.color}</th>
                    </tr>
                    
                    )
                    
                    }
                </tbody>
            </table> */}
        </>
    )
};