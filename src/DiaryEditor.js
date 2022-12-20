import React from "react";
import { useState } from "react";
import { useRef } from "react";

const DiaryEditor = () => {
  // 아래 두개의 useState는 똑같은 형식이기 떄문에 바꿔줄거임.
  // const [author, setAthor] = useState("");
  // const [content, setContent] = useState("");

  const authorInput = useRef();
  const contentInput = useRef();

  const [state, setState] = useState({
    author: "",
    content: "",
    emotion: 1,
  });

  const handleChangeState = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);

    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (state.author.length < 1) {
      //focus
      authorInput.current.focus();
      return;
    }

    if (state.content.length < 5) {
      //focus
      contentInput.current.focus();
      return;
    }

    console.log(state);
    alert("저장성공");
  };

  return (
    <React.Fragment>
      <div className="DiaryEditor">
        <h2>오늘의 일기</h2>
        <div>
          <input
            ref={authorInput}
            name="author"
            value={state.author}
            onChange={handleChangeState}
          />
        </div>
        <div>
          <textarea
            ref={contentInput}
            name="content"
            value={state.content}
            onChange={handleChangeState}
          />
        </div>
        <div>
          <select
            name="emotion"
            value={state.emotion}
            onChange={handleChangeState}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </div>
        <div>
          <button onClick={handleSubmit}>일기 저장하기</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DiaryEditor;
