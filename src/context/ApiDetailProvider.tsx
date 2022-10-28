import React, { createContext, useState } from "react";

export const ApiDetailContext = createContext<object>({
    apiDetail: [],
    setApiDetail: () => null
});

const ApiDetailProvider: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const [apiDetail, setApiDetail] = useState<Array<any>>([]);

  return (
    <ApiDetailContext.Provider value={{ apiDetail, setApiDetail}}>
      {children}
    </ApiDetailContext.Provider>
  );
};

export default ApiDetailProvider;
