import React, { useState } from 'react';
import MainComponent from '../components/MainComponent';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ButtonPage from '../components/ButtonPage';

const ContainerRegister = styled.div`
  padding: 15px 0;
  display: flex;
  justify-content: center;
`;

const RegisterStyle = styled(motion.div)`
  width: 405px;
  box-shadow: rgb(0 0 0 / 58%) 0px 2px 18px 0px;
  background-color: rgb(237 76 120);
  padding: 35px 30px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  border-radius: 5px;
  .ContainerImage {
    display: grid;
    place-items: center center;
    padding: 10px;
  }
  h2 {
    font-size: 3rem;
    font-family: 'HelloMozza';
    color: white;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    color: white;
    label {
      display: flex;
      flex-direction: column;
      gap: 5px;
    }
    input {
      cursor: text;
      padding: 10px;
      border-bottom: 1px solid white;
    }
    input::placeholder {
      color: #ffffffa6;
    }
    span {
      display: block;
      font-weight: 600;
    }
    button {
      margin-top: 10px;
      align-self: center;
      width: max-content;
    }
  }
`;

const DataDefault = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const register = () => {
  const [dataForm, setDataForm] = useState(DataDefault);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataForm({ ...dataForm, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(dataForm);
  };

  return (
    <MainComponent>
      <ContainerRegister>
        <RegisterStyle animate={{ y: [100, 0] }} transition={{ duration: 0.5 }}>
          <div className="ContainerImage">
            <img
              src="/img/LogoRegister.svg"
              alt="registro"
              height="90px"
              width="90px"
            />
          </div>
          <h2>Register</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="firstName">
              <span>First Name</span>
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="Pepe"
                onChange={handleChange}
              />
            </label>
            <label htmlFor="lastName">
              <span>Last Name</span>
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Murillo"
                onChange={handleChange}
              />
            </label>
            <label htmlFor="email">
              <span>Email</span>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Example@gmail.com"
                onChange={handleChange}
              />
            </label>
            <label htmlFor="password">
              <span>Password</span>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Minimo 8 caracteres"
                onChange={handleChange}
              />
            </label>
            <label htmlFor="confirmPassword">
              <span>Confirm Password</span>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Minimo 8 caracteres"
                onChange={handleChange}
              />
            </label>
            <ButtonPage type="submit" colorButton="white">
              CREATE ACCOUNT
            </ButtonPage>
          </form>
        </RegisterStyle>
      </ContainerRegister>
    </MainComponent>
  );
};

export default register;
