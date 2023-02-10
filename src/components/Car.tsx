import React from 'react';

type CarType={
    car:Array<MnogoCar>

}
type MnogoCar={
    manufacturer:string
    model:string
}
export const Car=(props:CarType)=>{
    return(
        <div>

            {props.car.map((el,index )=>{
                return(
                    <div key={index} >
                        {el.manufacturer}
                        {el.model}


                    </div>
                )
            })}

        </div>
    )
}