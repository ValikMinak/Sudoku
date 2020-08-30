import React, { FC } from "react";
import {Container} from "./styles";

interface IProps {
    rowIndex:number
    colIndex:number
}

const Block:FC<IProps>=({ colIndex,rowIndex })=>{
    return(<Container data-cy={`block ${rowIndex}-${colIndex}`}>0</Container>)
}

export default Block
