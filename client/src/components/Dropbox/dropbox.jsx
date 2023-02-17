import data from "../../assets/countriesData";
import S from "./style";

const Dropbox = ({ handleDropValue }) => {
  return (
    <S.Container onChange={handleDropValue}>
      <option>국가를 선택하세요.</option>
      {data.map((el) => {
        return <option key={el.id}>{el.country}</option>;
      })}
    </S.Container>
  );
};

export default Dropbox;
