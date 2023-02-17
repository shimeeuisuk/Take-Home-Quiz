import S from "./style";

const Screen = ({ currencyRate, unit }) => {
  return (
    <S.Container>
      <S.Currency>{currencyRate}</S.Currency>
      <S.Unit>{unit}</S.Unit>
    </S.Container>
  );
};

export default Screen;
