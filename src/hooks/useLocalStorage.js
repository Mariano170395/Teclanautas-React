import { useState } from "react";

//custom hook de local storage
let useLocalStorage = (dataName, initialValue) => {
  const localStorageData = window.localStorage.getItem(dataName);
  let parsedData;
  if (localStorageData) {
    parsedData = JSON.parse(localStorageData);
  } else {
    window.localStorage.setItem(dataName, JSON.stringify(initialValue));
    parsedData = initialValue;
  }

  const [data, setData] = useState(parsedData);
  const saveData = (newData) => {
    const stringData =
      typeof newData == "string" ? newData : JSON.stringify(newData);
    localStorage.setItem(dataName, stringData);
    setData(newData);
  };

  return [data, saveData];
};

export { useLocalStorage };
