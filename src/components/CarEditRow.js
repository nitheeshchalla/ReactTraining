import React from "react";


export const CarEditRow = ({ carViewData, onUpdate:change}) => {
   // const [carForm, setCarForm] = useState(carViewData);


    // const change = (e) => {
    //     setCarForm({
    //         ...carForm,
    //         //colorName: e.target.value,
    //         [e.target.name]: e.target.type === 'number' ? Number(e.target.value) : e.target.value,
    //     });

    // };

    return (

            <tr>
                <td></td>
                <td>{carViewData.id}</td>
                <td>
                    <div>
                        <input type="text" id="make-input" name="make" value={carViewData.make} onChange={change}/>
                    </div>
                </td>
                <td>
                    <div>
                        <input type="text" id="model-input" name="model" value={carViewData.model} onChange={change}/>
                    </div>
                </td>
                <td>
                    <div>
                        <input type="number" id="year-input" name="year" value={carViewData.year} onChange={change}/>
                    </div>
                </td>
                <td>
                    <div>
                        <input type="text" id="price-input" name="price" value={carViewData.price} onChange={change}/>
                    </div>
                </td>
                <td>
                    <div>
                        <input type="text" id="color-input" name="color" value={carViewData.color} onChange={change}/>
                    </div>
                </td>
                <td>
                    <button type="button">Save</button>
                    <button type="button">Cancel</button>
                </td>
            </tr>
    )
}