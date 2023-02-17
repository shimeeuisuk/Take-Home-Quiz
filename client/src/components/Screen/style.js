import styled from "styled-components";

const Container = styled.div`
border: 1px solid black;
width: 250px;
display: flex;
justify-content: space-around;
align-items:center;
`
const Currency = styled.span`
font-weight: bold;
`

const Unit = styled.span`
color: gray;
font-size: 10px;
`

const S = {
    Container,
    Currency,
    Unit
}
export default S