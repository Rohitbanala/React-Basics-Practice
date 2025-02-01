import Header from "./components/Header.jsx";
import CoreConceptsComponent from "./components/CoreConcepts.jsx";
import Examples from "./components/Examples.jsx";
function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConceptsComponent />
        <Examples />
      </main>
    </>
  );
}

export default App;
