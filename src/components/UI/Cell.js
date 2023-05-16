import { styled } from "styled-components";

function Cell(props) {
    return <StyledTd key={props.key}>{props.value === 0 ? "" : props.value}</StyledTd>;
}
export default Cell

const StyledTd = styled.td`
color:#FDD400;
font-size: 50px;
margin: auto;
text-align: center;
width:100px;
height:100px;
background-color:#18DB7F;
border:7px solid #FDD400;
border-radius:15px;`
