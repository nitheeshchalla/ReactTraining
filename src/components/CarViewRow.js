import React from 'react';

export const CarView = (props) => {

    return  <tr>
    <th>{props.carViewData.id}</th>
    <th>{props.carViewData.make}</th>
    <th>{props.carViewData.model}</th>
    <th>{props.carViewData.year}</th>
    <th>{props.carViewData.price}</th>
    <th>{props.carViewData.color}</th>
    </tr>
}