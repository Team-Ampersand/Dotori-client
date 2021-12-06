import React, { useState } from "react";
import * as S from "./Style";

interface TextInputProps {
  init: string;
  type: string;
}

const ChangeInput: React.FC<TextInputProps> = ({ init, type }) => {
  const [text, setText] = useState(init);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <S.Input type={type} value={text} onChange={(e) => handleChange(e)} />
    </>
  );
};

export default ChangeInput;
