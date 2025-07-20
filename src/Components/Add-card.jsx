import { useRef } from "react";
import {  useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Cardpage from "./Card-page";

export default function Addcard() {
  const inputElement = useRef();
  const inputsecondElement = useRef();
  const dispatch = useDispatch();
  const editId = useSelector((state) => state.editId);
  // const addlist = useSelector((state) => state.addlist);

  // fetch data once when component mounts
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        dispatch({ type: "SET_DATA", payload: res.data });
      });
  }, []);

  const add = () => {
    const newItem = {
      title: inputElement.current.value,
      body: inputsecondElement.current.value,
    };

    axios
      .post("https://jsonplaceholder.typicode.com/posts", newItem)
      .then((res) => {
        dispatch({
          type: "ADDITEM",
          payload: res.data
        });
        inputElement.current.value = "";
        inputsecondElement.current.value = "";
      });
  };

  const update = () => {
    dispatch({
      type: "UPDATEITEM",
      payload: {
        title: inputElement.current.value,
        body: inputsecondElement.current.value,
      },
    });
    inputElement.current.value = "";
    inputsecondElement.current.value = "";
  };

  return (
    <div className="add">
      <section className="create-input">
        <div className=" inputs-demo-page">
          <div className="inputs-showcase">
            <div className="input-demo-card ">
              <h2 className="input-type-title">Redux CRUD Input</h2>
              <div className="create-input1 align-items-center">
                <div className="animated-border-container">
                  <input
                    ref={inputElement}
                    type="text"
                    className="animated-border-input"
                    placeholder="Add Title"
                  />
                </div>
                <div className="animated-border-container">
                  <input
                    ref={inputsecondElement}
                    type="text"
                    className="animated-border-input"
                    placeholder="Add Post"
                  />
                </div>
                <button
                  className="cus_add"
                  onClick={editId !== null ? update : add}
                >
                  {editId !== null ? "Update" : "Add"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Cardpage />
    </div>
  );
}
