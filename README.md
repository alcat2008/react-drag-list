# react-draggable-list
---

React DraggableList Component


[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![gemnasium deps][gemnasium-image]][gemnasium-url]
[![npm download][download-image]][download-url]

[npm-image]: http://img.shields.io/npm/v/react-draggable-list.svg?style=flat-square
[npm-url]: http://npmjs.org/package/react-draggable-list
[travis-image]: https://img.shields.io/travis/react-component/react-draggable-list.svg?style=flat-square
[travis-url]: https://travis-ci.org/react-component/react-draggable-list
[coveralls-image]: https://img.shields.io/coveralls/react-component/react-draggable-list.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/react-component/react-draggable-list?branch=master
[gemnasium-image]: http://img.shields.io/gemnasium/react-component/react-draggable-list.svg?style=flat-square
[gemnasium-url]: https://gemnasium.com/react-component/react-draggable-list
[node-image]: https://img.shields.io/badge/node.js-%3E=_0.10-green.svg?style=flat-square
[node-url]: http://nodejs.org/download/
[download-image]: https://img.shields.io/npm/dm/react-draggable-list.svg?style=flat-square
[download-url]: https://npmjs.org/package/react-draggable-list


## Screenshots

<img src="" width="288"/>


## Development

```
npm install typings -g
npm install
typings install
npm start
```

## Example

http://localhost:8000/examples/


online example: http://front-ender.me/react-draggable-list/


## install


[![react-draggable-list](https://nodei.co/npm/react-draggable-list.png)](https://npmjs.org/package/react-draggable-list)


## Usage

```js
var ReactDraggableList = require('react-draggable-list');
var React = require('react');
React.render(
  <ReactDraggableList
    dataSource={['row1', 'row2', 'row3']}
    row={(record, index) => <div>index + record</div>}
  />, container);
```

## API

### props

Name               | Type                | Default | Description
------------------ | ------------------- | ------- | ------------------------------------------------------------------------------
prefixCls          | string              | rc-draggable-list | The draggable list dom node's prefixCls
className          | string              |         | additional className for draggable list
style              | object              |         | Root style for draggable list element. Such as width, height
rowClassName       | string              |         | additional className for draggable list row item
dataSource         | any[]               |         | data record array to be rendered
row                | function(record, index): ReactNode    |         | row data to be rendered
handles            | boolean             | false   | show drag handles
animation          | string              | 150     | ms, animation speed moving items when sorting, `0` — without animation
onUpdate           | function(event: Object)  |         | called when sorting list changed
ghostClass         | string              |         | additional className for the drop placeholder
chosenClass        | string              |         | additional className for the chosen item
dragClass          | string              |         | additional className for the dragging item

## Test Case

```
npm test
npm run chrome-test
```

## Coverage

```
npm run coverage
```

open coverage/ dir

## License

react-draggable-list is released under the MIT license.
