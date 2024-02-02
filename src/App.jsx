import Router from "shared/Router";
import GlobalStyle from "shared/GlobalStyle";
import LetterProvider from "shared/context";

function App() {
  return (
    <LetterProvider>
      <Router />
      <GlobalStyle />
    </LetterProvider>
  );
}

export default App;
