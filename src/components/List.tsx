import React from "react";

interface ListTypes {
  id: number;
  name: string;
}

interface ListProps {
  listData: Array<ListTypes>;
}

const List = ({ listData }: ListProps) => {
  return (
    <>
      {listData.map(({ id, name }: ListTypes) => (
        <li key={id}>{name}</li>
      ))}
    </>
  );
};

export default React.memo(List);
