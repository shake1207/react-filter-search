import React from 'react';

const Table = (data: any = []) => {
  if (data) {
    console.log(data);
    return;
  }
  return (
    <table>
      <tbody>
        <tr>
          <th></th>
        </tr>
        {data.map((item: any) => (
          <tr key={item.id}>
            <td>{item.first_name}</td>
            <td>{item.last_name}</td>
            <td>{item.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default Table;
