import { styled } from "styled-components";
import Row from "./Row";

function GameBoard(props) {
    const rows = props.values.map((rowValues, index) => 
        <Row key={index} values={rowValues} />);
    return <StyledTable>{rows}</StyledTable>;
}

export default GameBoard

const StyledTable = styled.table`
background-color:#FDD400;
border-radius:5px;
margin:auto`