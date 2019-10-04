/* eslint-disable no-unused-vars */
import React from 'react';

const LocalStorageMethods = WrappedComponent => (props) => {
  const setItem = (key, value) => {
    localStorage.setItem(key, value);
  };

  const getItem = key => localStorage.getItem(key);

  const deleteItem = (key) => {
    localStorage.removeItem(key);
  };
  const deleteLocalStorage = () => {
    localStorage.clear();
  };
  const innerProps = {
    setItem,
    getItem,
    deleteItem,
    deleteLocalStorage,
  };
  return <WrappedComponent {...innerProps} {...props} />;
};

export default LocalStorageMethods;
