import React, { useState } from "react";
import {ToolHeader} from './ToolHeader';

//const colorListItems = colors.map(c => <li>{c}</li>);
export const ColorTool = (props) => {
    const [colors, setColors ] = useState( props.colors.concat() );

    const [colorForm, setColorForm] = useState({
        colorName: '',
        colorHexcode: '',
    });

    const change = (e) => {
        setColorForm({
            ...colorForm,
            //colorName: e.target.value,
            [e.target.name]: e.target.value,
        })
    };

    const addColor = () => {
        setColors(colors.concat(colorForm.colorName));

        setColorForm({
            colorName:'',
            colorHexCode:'',
        });

        console.log(colors);
    };

    return (
        <>
            <ToolHeader headerText="Color Tool" />
            <ul>
                {colors.map(c => <li key={c}>{c}</li>)}
            </ul>
            <form>
                <div>
                    <label htmlFor="color-name-input">Color Name</label>
                    <input type="text" id="color-name-input" name="colorName" value={colorForm.colorName} onChange={change} />
                    
                </div>
                <div>
                    <label htmlFor="color-hexcode-input">Color Hexcode</label>
                    <input type="text" id="color-hexcode-input" name="coloeHexcode" value={colorForm.colorHexcode} onChange={change} />
                </div>
                <button type="button" onClick={addColor}>Add Color</button>
            </form>
        </>
    )
};