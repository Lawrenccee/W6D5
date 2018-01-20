import React from 'react';
import Header from './header';

class Tabs extends React.Component {

  constructor(props) {
    super(props);

    this.titles = [];
    this.contents = [];

    for (let i = 0; i < this.props.tabs.length; i++) {
      let object = this.props.tabs[i];
      this.titles.push(object['title']);
      this.contents.push(object['content']);
    }

    this.state = {
      index: 0
    };
    this.headerHandler = this.headerHandler.bind(this);
  }


  headerHandler(index){
    return () =>{
      this.setState({index});
      console.log(this.state.index);

    };
  }



  render() {
    return (
      <div>
        <ul>
          {
            this.titles.map((title, index) => (
              <li onClick={this.headerHandler(index)} key={index}>
                <Header title={title}/>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }

}

export default Tabs;
