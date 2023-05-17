import React from "react";
import { products } from "../helpers/Araay";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { GrPrevious } from "react-icons/gr";

export const Products = () => {
  const navigate = useNavigate();
  const goBackPrev = () => {
    navigate(-1);
  };
  return (
    <Div>
      <GrPrevious className="GoBackProd" onClick={goBackPrev} />
      <Container>
        {products.map((el) => {
          return (
            <DivMap key={el.id}>
              <img src={el.img} />
              <h2>{el.title}</h2>
              <h3>{el.price} $</h3>
              <Link to={`${el.id}`}>
                <button>Details</button>
              </Link>
            </DivMap>
          );
        })}
        <Outlet />
      </Container>
    </Div>
  );
};
const Div = styled.div`
  margin: 0 10%;
`
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;
`;

const DivMap = styled.div`
  background-color: #fff;
  width: 230px;
  height: 430px;
  padding: 30px;
  text-align: center;
  border-radius: 12px;
  line-height: 40px;
  margin: 20px 0;
  button {
    width: 110px;
    border: 0;
    border-radius: 8px;
    height: 35px;
    background-color: #3f4548;
    color: #fff;
    font-weight: 600;
    font-size: 16px;
    transition: 0.3s;
    &:hover {
      background-color: #262626;
    }
    &:active {
      background-color: #adc9da;
    }
  }
  img {
    height: 300px;
  }
`;
const BtnGoback = styled.button`
  margin: 0px 300px;
`;
