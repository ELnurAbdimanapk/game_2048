import { styled } from "styled-components";
import Cell from "./Cell";

function Row(props) {
    const cells = props.values.map((value, index) => 
        <Cell key={index} value={value}  />);
    return <tr>{cells}</tr>;
}

export default Row
