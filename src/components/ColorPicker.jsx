import React, {useState} from 'react';


const colorNames = ['Aquamarine', 'BlueViolet', 'Chartreuse', 'CornflowerBlue', 'Thistle', 'SpringGreen', 'SaddleBrown', 'PapayaWhip', 'MistyRose','Tomato'];


const ColorPicker = () =>{
const [color,setColor] = useState('');

const divColor = {backgroundColor:color};
    return (
        <div style={divColor}>
         <p>The color name is {color}</p> 
          {colorNames.map((item)=>{
             return <button onClick ={()=>setColor(item)}key={item}>{item}</button>
          })}
        </div>
    )

}

export default ColorPicker;
