import ReactDOM from 'react-dom';
import React from 'react';
import ImageLoader from './component/ImageLoader';
import './App.scss';
const App = () => {
  return (
    <>
      <ImageLoader />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
