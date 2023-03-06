import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const CardTag = styled.div`
  width: 180px;
  margin: 2em;
  border-radius: 4px;

  li {
    /* display: inline-block; */
    list-style: none;
    padding: 0px 0px 0px 0px;
  }

  .header {
    display: flex;
    width: 180px;
    height: 180px;
    background-color: rgb(69, 78, 91);
    border-radius: 20px;
    box-shadow: 0px 0px 15px -5px #777777;
    text-align: center;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .icon {
    border-radius: 50%;
    width: 150px;
    height: 150px;
    background-color: #f0efef;
  }

  .playBtn {
    position: absolute;
    width: 96px;
    height: 96px;
    opacity: 0;
  }
  .playBtn:hover {
    opacity: 1;
    transition: 0.3s;
  }
`;

const OrcheCard = (props) => {
  const orche = props.info;
  const imgRandom = (Math.floor(Math.random() * 1000) % 8) + 1;

  return (
    <CardTag>
      <div className="header">
        <img
          className="icon"
          src={`${process.env.PUBLIC_URL}/image/${imgRandom}.png`}
          alt="none"
        />
        <object
          className="playBtn"
          data={`${process.env.PUBLIC_URL}/image/playBtn2.svg`}
          type="image/svg+xml"
          aria-label="a"
        ></object>
      </div>
      <li>タイトル：{orche["title"]}</li>
    </CardTag>
  );
};

export default OrcheCard;
