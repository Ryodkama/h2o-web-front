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
    padding: 0px 0px 0px 0px;
  }

  .titleli {
    padding: 50px 0px 0px 30px;
    list-style-type: none;
  }
`;

const GetOrche = () => {
  const [myOrche, setMyOrche] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      await axios
        .get("http://localhost:90/api/user", {
          withCredentials: true,
        })
        .then((response) => {
          console.log(response.data["ID"]);
          const getMyOrcheData = async (user_id) => {
            await axios
              .post(
                "http://localhost:8080/api/getmy",
                {
                  user_id: user_id,
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
                setMyOrche(response.data);
                console.log(response.data);
              })
              .catch((error) => {
                // console.log(error.response.data);
              });
          };
          getMyOrcheData(response.data["ID"]);
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    };
    getUser();
  }, []);

  return myOrche;
};

const FindOrche = () => {
  const orche = GetOrche();

  return (
    <>
      <BaseDiv>
        <Header />
        <Sidebar />
        <WorkDiv>
          <li className="titleli">作品管理</li>
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
