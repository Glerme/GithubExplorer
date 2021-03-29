import styled from "styled-components";
import { shade } from "polished";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: color 0.2s;

    &:hover {
      color: #666;
    }

    svg {
      margin-right: 4px;
    }
  }
`;

export const RepositoryInfo = styled.section`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }

    div {
      margin-left: 50px;

      strong {
        font-size: 36px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #737380;
        margin-top: 4px;
        max-width: 500px;
      }

      & > a {
        background: #04d361;
        border-radius: 5px;
        width: 100%;
        padding: 26px;
        display: block;
        text-decoration: none;
        color: #fff;
        transition: transform 0.2s;
        font-size: 1.2rem;

        &:hover {
          background: ${shade(0.2, "#04d361")};
          transform: scale(1.1);
        }
      }
    }
  }

  section {
    margin: 26px;

    & > p {
      font-size: 22px;
      color: #6c6c80;

      & > a {
        color: #fff;
        background-color: #04d361;
        border-radius: 5px;
        padding: 10px;
        text-transform: capitalize;
        transition: transform 0.2s;
        display: inline-block;

        &:hover{
          background: ${shade(0.2, "#04d361")};
          transform: scale(1.1);
        }
      
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;

    li {
      & + li {
        margin-left: 80px;
      }

      strong {
        display: block;
        font-size: 36px;
        color: #3d3d4d;
      }

      span {
        display: block;
        margin-top: 4px;
        color: #6c6c80;
      }
    }
  }
`;

export const Issues = styled.section`
  margin-top: 80px;
  
  p{
    font-size: 25px;
    color: #3d3d4d;

  }

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: transform 0.2s;

    & + a {
      margin-top: 16px;
    }

    &:hover {
      transform: translateX(10px);
    }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3d3d4d;
        margin-top: 4px;
      }

      & > p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;
