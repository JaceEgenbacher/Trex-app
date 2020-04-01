import React, { Component } from 'react';
import Konva from 'konva';
import { render } from 'react-dom';
import { Stage, Layer, Rect, Text, Circle, Line } from 'react-konva';
import { useSelector } from 'react-redux';


// const setup = {
//     x: 100,
//     y: 100,
//     width: 100,
//     height: 100,
//     fill: "red",
//     shadowBlur: 10
// }

// const test = function (setup) {


//     return (
//         <Layer>
//             {[...Array(2)].map((_, i) => (
//                 <Rect
//                     x={setup.x}
//                     y={setup.y}
//                     width={setup.width}
//                     height={setup.height}
//                     fill={setup.fill}
//                     shadowBlur={setup.shadowBlur}
//                 />
//             ))}
//         </Layer>
//     );
// }



const CoasterTable = () => {


    // return (
    //     <Stage width={window.innerWidth} height={window.innerHeight}>
    //         {test(setup)}
    //     </Stage>-10
    // );






    return (
        <Stage width={1000} height={1000}>
            <Layer>

                <Rect
                    x={0}
                    y={0}
                    width={100}
                    height={100}
                    fill="red"
                    shadowBlur={10}
                />
                <Text
                    text="A"
                    fontSize={80}
                    x={20}
                    y={20}
                />
                <Rect
                    x={100}
                    y={100}
                    width={100}
                    height={100}
                    fill="blue"
                    shadowBlur={10}
                />
                <Text
                    text="D"
                    fontSize={80}
                    x={120}
                    y={120}
                />
                <Rect
                    x={100}
                    y={0}
                    width={100}
                    height={100}
                    fill="yellow"
                    shadowBlur={10}
                />
                <Text
                    text="B"
                    fontSize={80}
                    x={120}
                    y={20}
                />
                <Rect
                    x={0}
                    y={100}
                    width={100}
                    height={100}
                    fill="green"
                    shadowBlur={10}
                />
                <Text
                    text="C"
                    fontSize={80}
                    x={20}
                    y={120}
                />

            </Layer>
        </Stage>
    );

}

export default CoasterTable;
