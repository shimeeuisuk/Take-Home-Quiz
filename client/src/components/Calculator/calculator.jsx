import FromBox from "../FromBox/fromBox";
import ToBox from "../ToBox/toBox";
import { useState, useEffect } from "react";
import GetCurrency from "../../apis/getConvertCurrencyApi";
import S from "./style";

const Calculator = () => {
  const [selectedFromCountry, setSelectedFromCountry] =
    useState("국가를 선택하세요.");
  const [selectedToCountry, setSelectedToCountry] =
    useState("국가를 선택하세요.");
  const [convertedCurreny, setConvertedCurrency] = useState(0);

  useEffect(() => {
    if (
      selectedFromCountry !== "국가를 선택하세요." &&
      selectedToCountry !== "국가를 선택하세요."
    ) {
      GetCurrency({ from: selectedFromCountry, to: selectedToCountry }).then(
        (res) => setConvertedCurrency(res.info.rate)
      );
    }
  }, [selectedFromCountry, selectedToCountry]);

  return (
    <S.Container>
      <FromBox
        setSelectedFromCountry={setSelectedFromCountry}
        selectedFromCountry={selectedFromCountry}
      />
      <ToBox
        setSelectedToCountry={setSelectedToCountry}
        selectedToCountry={selectedToCountry}
        convertedCurreny={convertedCurreny}
      />
    </S.Container>
  );
};

export default Calculator;
