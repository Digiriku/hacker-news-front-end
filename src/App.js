import React, { Component } from 'react';
import {loadData, loadArticles} from './utils/api';
import Grid from './components/Grid'
import { idata } from './idata.js'

class App extends Component {
  state = { loading: false, data: idata };
  // load = this.load.bind(this);

  // async load(...args) {
  //   try {
  //     this.setState({ loading: true, error: false });
  //     const articlesArray = await loadData(...args);
  //     const data = await loadArticles(articlesArray);

  //     // console.log(data);
  //     // console.log(typeof data);
  //     this.setState({ loading: false, data: data });
  //   } catch (ex) {
  //     this.setState({ loading: false, error: true });
  //   }
  // }

 
  componentDidMount() {
    // this.load();
  }


  render() {
    // console.log(this.state);
    // 
    if (this.state.loading === true) return ( <div>Loading</div> );
    return (
      <div className="App">
        <Grid articles={this.state.data} />
      </div>
    );
  }
}

export default App;


  