import React, { useState } from "react";
import "./Signup.css";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// const BodyLogin = styled.body`
//   background: rgb(202, 202, 199);
// `;

const FormContainerdiv = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  form {
    background-color: white;
    width: 70%;
    max-width: 450px;
    padding: 30px;
    border-radius: 10px;
    border: 1px solid #dfdfdf;
    box-shadow: 19px 8px 45px -5px #777777;
    border-radius: 19px;
  }

  h1 {
    text-align: center;
  }

  .uiForm {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 400px;
  }

  .formField {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .formField input {
    border: 1px solid grey;
    padding: 20px;
    border-radius: 4px;
  }

  .formField input:focus {
    outline: none;
  }

  .formField label {
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 3px;
  }

  button {
    background-color: #0e528d;
    width: 100%;
    margin-top: 10px;
    border: none;
    border-radius: 5px;
    padding: 10px 30px;
    color: white;
    cursor: pointer;
    transition: all 0.2s;
  }

  button:hover {
    background-color: #175892;
  }
  .errorMsg {
    color: red;
    margin: 0;
    align-self: flex-start;
  }

  .magOk {
    color: green;
    margin-top: 15px;
  }
`;

const Signup = () => {
  const initialValues = {
    username: "",
    mailAddress: "",
    password: "",
    password_confirm: "",
  };
  const [formValues, setFromValues] = useState(initialValues);
  const [formErros, setFromErrors] = useState<any>({});
  const [isSubmit, setIsSubmit] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target);
    const { name, value } = e.target;
    setFromValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //?????????????????????????????????
    //??????????????????????????????????????????
    setFromErrors(validate(formValues));
    if (Object.keys(formErros).length === 0) {
      await axios
        .post(
          "http://localhost:90/api/register",
          {
            FirstName: formValues.username,
            LastName: formValues.username,
            email: formValues.mailAddress,
            password: formValues.password,
            password_confirm: formValues.password_confirm,
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
          console.log("body:", response.status);
          if (response.status === 200) {
            setIsSubmit(true);
          }
        });
    }
  };

  if (isSubmit === true) {
    console.log("suceess");
    navigate("/studio");
  }

  const validate = (values: typeof initialValues) => {
    const errors: any = {};
    const regex =
      /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;
    if (!values.mailAddress) {
      errors.mailAddress = "????????????????????????????????????????????????";
    }
    if (!values.username) {
      errors.username = "??????????????????????????????????????????";
    } else if (!regex.test(values.mailAddress)) {
      errors.mailAddress = "?????????????????????????????????????????????????????????";
    }
    if (!values.password) {
      errors.password = "??????????????????????????????????????????";
    } else if (values.password.length < 4) {
      errors.password = "4????????????15?????????????????????????????????";
    } else if (values.password.length > 15) {
      errors.password = "4????????????15?????????????????????????????????";
    }

    return errors;
  };

  return (
    <FormContainerdiv>
      <form onSubmit={(e) => handleSubmit(e)}>
        <h1>??????????????????????????????</h1>
        <hr />
        <div className="uiForm">
          <div className="formField">
            <label>???????????????</label>
            <input
              type="text"
              placeholder="???????????????"
              name="username"
              onChange={(e) => handleChanged(e)}
            />
          </div>
          <p className="errorMsg">{formErros.username}</p>
          <div className="formField">
            <label>?????????????????????</label>
            <input
              type="text"
              placeholder="?????????????????????"
              name="mailAddress"
              onChange={(e) => handleChanged(e)}
            />
          </div>
          <p className="errorMsg">{formErros.mailAddress}</p>
          <div className="formField">
            <label>???????????????</label>
            <input
              type="text"
              placeholder="???????????????"
              name="password"
              onChange={(e) => handleChanged(e)}
            />
          </div>
          <p className="errorMsg">{formErros.password}</p>
          <div className="formField">
            <label>?????????????????????</label>
            <input
              type="text"
              placeholder="?????????????????????"
              name="password_confirm"
              onChange={(e) => handleChanged(e)}
            />
          </div>
          <p className="errorMsg">{formErros.password}</p>
          <button className="submitButton">??????????????????</button>
          {Object.keys(formErros).length === 0 && isSubmit && (
            <div className="magOk">?????????????????????????????????</div>
          )}
        </div>
      </form>
    </FormContainerdiv>
  );
};

export default Signup;
