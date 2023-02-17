import Dropbox from "../Dropbox/dropbox";
import Screen from "../Screen/screen";
import S from "./style";
import data from "../../assets/countriesData";
import { useState } from "react";

const FromBox = ({ setSelectedFromCountry, selectedFromCountry }) => {
  const [unit, setUnit] = useState("");

  const handleDropValue = (e) => {
    const { value } = e.target;
    setSelectedFromCountry(data.filter((el) => el.country === value)[0].code);
    setUnit(data.filter((el) => el.country === value)[0].unit);
  };

  return (
    <S.Container>
      <Screen currencyRate={1} unit={unit} />
      <Dropbox handleDropValue={handleDropValue} />
    </S.Container>
  );
};

export default FromBox;
