import React, {useState} from 'react';

const getInitCarForm = () => ({
    make: '',
    model: '',
    year: '',
    color: '',
    price: '',
});

export const CarForm = ({onSubmitCar, buttonText}) => {
    const [carForm, setCarForm] = useState(getInitCarForm());


    const change = (e) => {
        setCarForm({
            ...carForm,
            //colorName: e.target.value,
            [e.target.name]: e.target.type === 'number' ? Number(e.target.value) : e.target.value,
        });

    };

    const submitCar = () => {
        onSubmitCar({ ...carForm});
        setCarForm(getInitCarForm());
    }

    return (
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
                    <input type="number" id="year-input" name="year" value={carForm.year} onChange={change} />
                </div>
                <div>
                    <label htmlFor="color-input">Color: </label>
                    <input type="text" id="color-input" name="color" value={carForm.color} onChange={change} />
                </div>
                <div>
                    <label htmlFor="price-input">Price: </label>
                    <input type="text" id="price-input" name="price" value={carForm.price} onChange={change} />
                </div>
    <button type="button" onClick={ submitCar }>{buttonText}</button>
        </form>

    );

};