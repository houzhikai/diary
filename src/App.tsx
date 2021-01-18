import React from 'react';
import styled  from "styled-components";

const Button = styled.button`
  color: red;
  border: none;
  &:hover {
    background: aqua;
  }
`

function App() {
  return (
    <div>
      <Button>点击</Button>
    </div>
  );
}

export default App;
