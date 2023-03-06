import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar";
import styled from "styled-components";
import { BaseDiv } from "../../components/Base";
import OrcheCard from "../../components/OrcheCard/OrcheCard";
import React, { useState, useEffect } from "react";
import axios from "axios";

const WorkDiv = styled.div`
  display: inline-block;
  height: 100%;
  width: auto;
  margin-left: 240px;
  margin-top: 70px;
  padding: 10px 0px 0px 10px;

  .dicli {
    display: flex;
    flex-flow: wrap row;
    align-items: start;
    padding: 0px 0px 0px 0px;
  }

  .titleli {
    padding: 50px 0px 0px 30px;
    list-style-type: none;
  }
`;

const GetOrche = () => {
  const [randomOrche, setRandomOrche] = useState([]);

  const getNum = async () => {
    await axios
      .get("http://localhost:8080/api/", {
        withCredentials: true,
      })
      .then((response) => {
        // orcheNum(response.data["orchestraMIDI_num"]);
        console.log(response.data["orchestraMIDI_num"]);
      })
      .catch((error) => {
        // console.log(error.response.data);
      });
  };

  useEffect(() => {
    const getRandomOrcheData = async (num) => {
      await axios
        .post(
          "http://localhost:8080/api/getrnd",
          {
            random_num: num,
          },
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        )
        .then((response) => {
          setRandomOrche(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          // console.log(error.response.data);
        });
    };
    var num = 9;
    getRandomOrcheData(num);
  }, []);

  return randomOrche;
};

const FindOrche = () => {
  const orche = GetOrche();
  console.log(orche);

  return (
    <>
      <BaseDiv>
        <Header />
        <Sidebar />
        <WorkDiv>
          <li className="titleli">みんなのオーケストラ</li>
          <div className="dicli">
            {Object.keys(orche).map((id) => (
              <OrcheCard key={id} info={orche[id]} />
            ))}
          </div>
        </WorkDiv>
      </BaseDiv>
    </>
  );
};

export default FindOrche;
