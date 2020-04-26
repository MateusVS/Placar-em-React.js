import React, { Component, Fragment } from 'react';

import Main from './pages/Main/index';

import GlobalStyle from './styles/global';

class App extends Component {

  render(){
    return (
        <Fragment>
            <GlobalStyle />
            <Main />
        </Fragment>
    );
  }
}

export default App;
