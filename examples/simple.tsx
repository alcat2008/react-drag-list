// use jsx to render html, do not modify simple.html

import React from 'react';
import ReactDOM from 'react-dom';

import ReactDraggableList from '../src/';
import 'react-draggable-list/assets/index.less';

import './style/simple.less';

const dataArray = [
  {
    color: '#FF5500',
    title: 'Senior Product Designer',
    text: 'Senior Product Designer',
  },
  {
    color: '#5FC296',
    title: 'Senior Animator',
    text: 'Senior Animator',
  },
  {
    color: '#2DB7F5',
    title: 'Visual Designer',
    text: 'Visual Designer',
  },
  {
    color: '#FFAA00',
    title: 'Computer Engineer',
    text: 'Computer Engineer',
  },
];

class Simple extends React.Component {
  render() {
    return (
      <div className="simple">
        <ReactDraggableList
          dataSource={dataArray}
          row={(record, index) => (
            <div key={index} style={{ color: record.color }}>
              <div className="simple-drag-row-title">{record.title}</div>
              <span>{record.text}</span>
            </div>
          )}
          handles={false}
          className="simple-drag"
          rowClassName="simple-drag-row"
        />
      </div>
    );
  }
}

ReactDOM.render(<Simple />, document.getElementById('__react-content'));
