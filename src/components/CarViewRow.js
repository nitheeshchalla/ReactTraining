import React from 'react';

//export const CarViewRow = (props) => {
export const CarViewRow = ({ carViewData, selected, onDeleteCar: deleteCar, onSelectCar: selectCar, onEditCar: editCar }) => { //Object Destructuring. Alternate to above line

    return (
        <tr>
            <td><input type="checkbox" checked={selected} onChange={() => selectCar(carViewData.id)} /></td>
            <td>{carViewData.id}</td>
            <td>{carViewData.make}</td>
            <td>{carViewData.model}</td>
            <td>{carViewData.year}</td>
            <td>{carViewData.price}</td>
            <td>{carViewData.color}</td>
            <td><button type="button" onClick={() => deleteCar(carViewData.id)}>Delete</button></td>
            <td><button type="button" onClick={() => editCar(carViewData.id)}>Edit</button></td>
        </tr>
    )
}