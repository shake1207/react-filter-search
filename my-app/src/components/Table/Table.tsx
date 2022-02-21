import * as S from '../../style';
const Table = (props: any = []) => {
  const { userData } = props;

  const thKeys = ['Name', 'SurName', 'Country', 'Email'];

  return (
    <S.TableStyled>
      <table>
        <tbody>
          <tr>
            {thKeys.map((thItem, index) => (
              <th key={index}>{thItem}</th>
            ))}
          </tr>
          {userData.map((item: any) => (
            <tr key={item.id}>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.country}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </S.TableStyled>
  );
};
export default Table;
