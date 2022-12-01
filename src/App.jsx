import styled from "styled-components";
import Wrapper from "./components/Wrapper";
import CalcSide from "./components/CalcSide";

function App() {
  return (
    <Wrapper>
      <FlexContainer>
        <CalcSide />
      </FlexContainer>
    </Wrapper>
  )
}

export default App;

const FlexContainer = styled.div`
  display: flex;
  padding: 2rem;
  gap: 2rem;
  height: 100%;
  width: 100%;

  @media (max-width: 28.125em) {
    flex-direction: column;
  }
`




