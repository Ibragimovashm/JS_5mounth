import React from "react";
import { useDispatch, useSelector } from "react-redux";

const MainPage = () => {
  const { name, age, gender } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  //   console.log(name, age, gender);
  const changeInputName = (e, typeInfo) => {
    if (typeInfo === "name") {
      dispatch({
        type: "CHANGE_NAME",
        payload: e.target.value,
      });
    } else if (typeInfo === "age") {
      dispatch({
        type: "CHANGE_AGE",
        payload: e.target.value,
      });
    } else if (typeInfo === "gender") {
      dispatch({
        type: "CHANGE_GENDER",
        payload: e.target.value,
      });
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="name"
        onChange={(e) => changeInputName(e, "name")}
      />
      <input
        type="number"
        placeholder="age"
        onChange={(e) => changeInputName(e, "age")}
      />
      <h1>name : {name}</h1>
      <h2>age : {age}</h2>
      <h3>gender : {gender}</h3>
      <select onChange={(e) => changeInputName(e, "gender")}>
        <option>мужской</option>
        <option>женский</option>
      </select>
    </div>
  );
};

export default MainPage;
