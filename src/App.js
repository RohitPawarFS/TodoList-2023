import styled from "styled-components";
import { mobile } from "./responsive";
// import { Todo } from "./components/Todo";
import { LocalStorageTodo } from "./components/LocalStorageTodo";

const Main = styled.div`
  text-align: center;
  ${mobile({ textAlign: "center"})};
`;

function App() {
  return (
    <Main>
      {/* <Todo /> */}
      <LocalStorageTodo />
    </Main>
  );
}

export default App;
