import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import styled from "styled-components";
import "../../App.css";
import OrcheCard from "../../components/OrcheCard/OrcheCard";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Topdiv = styled.div`
  width: 100%;
  height: 100vh;
  * {
    margin: 0%;
    padding: 0;
    box-sizing: border-box;
  }
`;

const WorkDiv = styled.div`
  display: block;
  height: 100%;
  width: auto;
  margin-top: 150px;
  padding: 10px 0px 0px 10px;
  text-align: center;
  justify-content: center;
  align-items: center;
  position: relative;

  .box {
    width: 800px;
    height: 500px;
    background-color: white;
    border-radius: 20px;
    box-shadow: 0px 0px 15px -5px #777777;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    padding-top: 30px;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .textbox {
    display: flex;
    border: solid 2px #b6b6b6;
    padding-top: 10px;
    font-weight: 700;
    font-size: 20px;
    width: 600px;
    height: 100px;
    background-color: white;
    border-radius: 5px;
    margin-left: auto;
    margin-right: auto;
  }

  .dicli {
    display: flex;
    flex-flow: wrap row;
    margin-top: 30px;
    margin-bottom: 40px;
    padding-left: auto;
    padding-right: auto;
    justify-content: space-evenly;
    align-items: center;
  }

  .title {
    margin-bottom: 20px;
    font-weight: 700;
    color: #4a5568;
  }
  .title li {
    list-style-type: none;
    margin-bottom: 10px;
    font-size: 35px;
  }
  .title .sub {
    font-size: 50px;
    margin-bottom: 50px;
  }
  .desc {
    list-style-type: none;
    margin-bottom: 10px;
    font-size: 25px;
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
        console.log(response.data["orchestraMIDI_num"]);
      })
      .catch((error) => {});
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
    var num = 4;
    getRandomOrcheData(num);
  }, []);

  return randomOrche;
};

const Top = () => {
  const orche = GetOrche();

  return (
    <>
      <Topdiv>
        <Header />
        <WorkDiv>
          <div className="title">
            <li>Humming to Orchestra</li>
            <li className="sub">鼻歌で誰でもオーケストラを作れる</li>
          </div>
          <div className="box">
            <div className="textbox">
              思いついたフレーズで、オーケストラ楽曲を作ってみよう！
            </div>
            <div className="dicli">
              {Object.keys(orche).map((id) => (
                <OrcheCard key={id} info={orche[id]} />
              ))}
            </div>
            <li className="desc">みんなのオーケストラを聞いてみる</li>
          </div>
        </WorkDiv>
        <Footer />
      </Topdiv>
    </>
  );
};

export default Top;
