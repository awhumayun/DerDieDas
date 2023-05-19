import { useState } from "react";
import Header from "./components/header/header";
import Flag from "./components/flag/flag";
import InputModal from "./components/inputModal/inputModal";
import { Genders } from "./constants/genders";

const App = () => {
  const [wordGender, setWordGender] = useState(Genders.None);

  return (
    <>
      <Header />
      <Flag wordGender={wordGender} />
      <InputModal wordGender={wordGender} setWordGender={setWordGender} />
    </>
  );
};

export default App;
