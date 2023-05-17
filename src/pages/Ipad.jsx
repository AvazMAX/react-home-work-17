import React from "react";
import { GrPrevious } from "react-icons/gr";
import { useNavigate } from "react-router";
import { styled } from "styled-components";

export const Ipad = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <GrPrevious className="GoBackProd" onClick={() => navigate(-1)} />
      <h1>Ipad</h1>
    </Container>
  );
};
const Container = styled.div`
  margin: 0 10%;
  h1 {
    color: #fff;
  }
`