import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../../AppContent';
import * as S from '../../style';

const Search = () => {
  const { setQuery } = useContext(AppContext);
  return (
    <S.InputStyled>
      <input
        type="text"
        placeholder="...Search"
        className="search"
        onChange={e => setQuery(e.target.value)}
      />
    </S.InputStyled>
  );
};
export default Search;
