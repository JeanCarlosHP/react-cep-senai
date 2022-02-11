import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.div`
  width: 100%;
  margin: auto;
`;

export const Title = styled.h2`
  font-size: 48px;
  color: #3a3a3a;
  line-height: 56px;
  text-align: center;

  margin-top: 40px;

  @media (max-width: 480px) {
    & {
      width: 90%;
    }
  }
`;

export const Form = styled.div`
  display: flex;

  margin: 40px auto 0 auto;
  max-width: 700px;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 2px solid #fff;
    border-right: 0;
    border-radius: 5px 0 0 5px;
    outline: none;
    color: #3a3a3a;

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    height: 70px;
    background: #04d361;
    border-radius: 0 5px 5px 0;
    border: 0;
    color: #fff;
    font-weight: bold;

    transition: background-color 0.2s;

    &:hover {
      background-color: ${shade(0.2, "#04d361")};
    }
  }
`;

export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;

  max-width: ;

  margin-top: 4.375rem;
  margin-bottom: 3rem;
`;

export const Card = styled.div`
  background-color: #fafafa;
  padding: 20px;

  border: 1px solid #d4d4d4;
  border-radius: 8px;
  
  p {
    line-height: 20px;
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 0.5rem;
`;
