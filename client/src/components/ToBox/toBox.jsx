import Dropbox from "../Dropbox/dropbox";
import Screen from "../Screen/screen";
import S from "./style";
import data from "../../assets/countriesData";
import { useState } from "react";

const ToBox = ({
  convertedCurreny,
  setSelectedToCountry,
  selectedToCountry,
}) => {
  const [unit, setUnit] = useState("");

  const handleDropValue = (e) => {
    const { value } = e.target;
    setSelectedToCountry(data.filter((el) => el.country === value)[0].code);
    setUnit(data.filter((el) => el.country === value)[0].unit);
  };
  return (
    <S.Container>
      <Screen currencyRate={convertedCurreny} unit={unit} />
      <Dropbox handleDropValue={handleDropValue} />
    </S.Container>
  );
};

export default ToBox;
