import React from "react";
import { products } from "../helpers/Araay";
import { useNavigate, useParams } from "react-router-dom";
import { styled } from "styled-components";
import { GrPrevious } from "react-icons/gr";

export const PhoneDetail = () => {
  const navigate = useNavigate();
  const params = useParams();
  const filteredProducts = products.filter((el) => el.id === +params.detail);
  const goBackProducts = () => {
    navigate("/products");
  };
  return (
    <Div>
      {filteredProducts.map((el) => (
        <>
          <GrPrevious className="GoBackProd" onClick={goBackProducts} />
          <ContainerBlock1>
            <DivImg>
              <Img1 src={el.img1} />
            </DivImg>
            <h1>{el.description}</h1>
          </ContainerBlock1>
          <DivBlock2>
            <h3>{el.description2}</h3>
            <DivImg2>
              <img src={el.img2} />
            </DivImg2>
          </DivBlock2>
          <DivBlock3>
            <h3>{el.description3}</h3>
            <DivImg3>
              <img src={el.img3} />
            </DivImg3>
          </DivBlock3>
          <DivDes>
            <h1>{el.title}</h1>
            <h3>Цена: {el.price} $</h3>
            <button>Добавить</button>
          </DivDes>
        </>
      ))}
    </Div>
  );
};
const Div = styled.div`
  margin: 0 10%;
`;
const DivImg = styled.div`
  width: 440px;
  height: 550px;
  margin: 30px auto;
  background-color: #000;
  border-radius: 22px;
  padding: 30px;
`;
const Img1 = styled.img`
  margin-top: 70px;
  height: 500px;
  transition: 1s;
  &:hover {
    margin-top: 0;
  }
`;
const ContainerBlock1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;
  h1 {
    font-size: 30px;
    font-weight: 600;
    text-transform: uppercase;
    display: table;
    -webkit-text-fill-color: transparent;
    background-image: linear-gradient(180deg,#ffb6ff,#b344ff);
    -webkit-background-clip: text;
    color: #ffffff;
  }
`;
const DivImg2 = styled.div`
  width: 400px;
  img {
    height: 300px;
    margin-left: 100px;
    border-radius: 12px;
  }
`;
const DivBlock2 = styled.div`
  background-color: #000;
  width: 100%;
  height: 350px;
  display: flex;
  align-items: center;
  border-radius: 22px;
  overflow: hidden;
  &:hover {
    h3 {
      margin-left: 10%;
    }
  }
  h3 {
    text-transform: uppercase;
    transition: 2s;
    display: table;
    background-image: linear-gradient(180deg,#ffb6ff,#b344ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: #b344ff;
    width: 450px;
    margin-left: -500px;
  }
`;
const DivImg3 = styled.div`
  background-color: #000;
  border-radius: 22px;
  width: 300px;
  height: 280px;
  overflow: hidden;
  &:hover {
    img {
      margin-top: 80px;
      margin-left: 70px;
    }
  }
  img {
    transition: 1.5s;
    margin-top: 200px;
    margin-left: 200px;
    height: 250px;
  }
`;
const DivBlock3 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  h3 {
    text-transform: uppercase;
    display: table;
    background-image: linear-gradient(180deg,#ffb6ff,#b344ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: #b344ff;
    width: 500px;
  }
`;
const DivDes = styled.div`
  margin-top: 20px;
  background-color: #000;
  height: 200px;
  border-radius: 22px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  margin-bottom: 100px;
  padding: 30px;
  h1 {
    font-size: 40px;
    color: #fff;
  }
  h3 {
    font-size: 30px;
    color: #ffffff;
  }
  button {
    width: 110px;
    height: 35px;
    font-size: 17px;
    border: 0;
    border-radius: 10px;
    margin-top: 25px;
    transition: 0.2s;
    &:active {
      background-color: blueviolet;
      color: #fff;
    }
  }
`;
