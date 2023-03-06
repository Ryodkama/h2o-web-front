import React, { useRef } from "react";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar";
import styled from "styled-components";
import { BaseDiv } from "../../components/Base";
import PianoRoll from "react-piano-roll";
import FileUpload from "../../components/FileUpload/FileUpload";

function App() {
  const playbackRef = useRef();

  window.addEventListener("keydown", ({ key }) => {
    if (key === " ") {
      playbackRef.current.toggle("0:0:0");
    } else if (key === "Enter") {
      playbackRef.current.play("0:0:0");
    }
  });

  return (
    <PianoRoll
      ref={playbackRef}
      width={800}
      height={400}
      zoom={2}
      resolution={2}
      gridLineColor={0x333333}
      blackGridBgColor={0x1e1e1e}
      whiteGridBgColor={0x282828}
      noteData={[
        ["0:0:0", "F5", ""],
        ["0:0:0", "C4", "2n"],
        ["0:0:0", "D4", "2n"],
        ["0:0:0", "E4", "2n"],
        ["0:2:0", "B4", "4n"],
        ["0:3:0", "A#4", "4n"],
        ["0:4:0", "F2", "3n"],
        ["0:4:0", "F5", ""],
        ["0:4:0", "C4", "2n"],
        ["0:5:0", "D4", "2n"],
        ["0:5:0", "E4", "2n"],
        ["0:6:0", "B4", "4n"],
        ["0:6:0", "A#4", "4n"],
        ["0:7:0", "F2", ""],
        ["0:7:0", "F5", ""],
        ["0:7:0", "C4", "2n"],
        ["0:8:0", "D4", "2n"],
        ["0:8:0", "E4", "2n"],
        ["0:9:0", "B4", "4n"],
        ["0:9:0", "A#4", "4n"],
        ["0:9:0", "F2", ""],
      ]}
    />
  );
}

const WorkDiv = styled.div`
  /* display: inline-block; */
  height: 100%;
  width: auto;
  margin-left: 240px;
  /* margin-top: 70px; */
  padding: 80px 0px 0px 10px;

  .box {
    width: 800px;
    height: 800px;
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
    font-weight: 700;
    font-size: 20px;
  }

  .textbox {
    border: solid 2px #b6b6b6;
    padding-top: 10px;
    font-weight: 700;
    font-size: 20px;
    width: 600px;
    height: 100px;
    background-color: #f6f4f4;
    border-radius: 5px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    color: #4a5568;
  }

  .pianoroll {
    padding-top: 40px;
    width: 100px;
    margin-bottom: 40px;
  }
  .playBtn {
    width: 90px;
    height: 90px;
    opacity: 0.5;
  }
  .playBtn:hover {
    opacity: 1;
    transition: 0.3s;
  }

  .play {
    list-style-type: none;
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 25px;
    color: #4a5568;
  }
  .titleli {
    padding: 50px 0px 20px 30px;
    list-style-type: none;
  }
`;

function Studio() {
  return (
    <>
      <BaseDiv>
        <Header />
        <Sidebar />
        <WorkDiv>
          <li className="titleli">オーケストラを作る</li>
          <div className="box">
            <div className="textbox">
              鼻歌を入力する
              <FileUpload />
            </div>
            <div className="pianoroll">
              <App />
            </div>
            <object
              className="playBtn"
              data={`${process.env.PUBLIC_URL}/image/playBtn2.svg`}
              type="image/svg+xml"
              aria-label="a"
            ></object>
            <li className="play"> オーケストラを再生する</li>
          </div>
        </WorkDiv>
      </BaseDiv>
    </>
  );
}

export default Studio;
