import React from 'react';

//export const CarViewRow = (props) => {
export const CarViewRow = ({ carViewData, deleteCar, selected, onSelectCar: selectCar }) => { //Object Destructuring. Alternate to above line

    return (
        <tr>
            <td><input type="checkbox" checked={selected} onChange={() => selectCar(carViewData.id)} /></td>
            <th>{carViewData.id}</th>
            <th>{carViewData.make}</th>
            <th>{carViewData.model}</th>
            <th>{carViewData.year}</th>
            <th>{carViewData.price}</th>
            <th>{carViewData.color}</th>
            <th><button type="button" onClick={() => deleteCar(carViewData.id)}>Delete</button></th>
        </tr>
    )
}