import * as React from 'react';
import classNames from 'classnames';
import Sortable from 'sortablejs';

export interface DraggableListProps {
  /** 数据数组 */
  dataSource: Array<Object>;
  /** 数据项 */
  row: (record: Object, index: number) => React.ReactElement<any>;
  /** 是否显示拖拽指示点 */
  handles?: boolean;
  /** 列表项重排时移动的动画时间 */
  animation?: number;
  /** 列表排序改变的回调 */
  onUpdate?: (event: Object) => void;

  /** className */
  className?: string;
  /** row className */
  rowClassName?: string;
  /** drop placeholder className */
  ghostClass?: string;
  /** chosen item className */
  chosenClass?: string;
  /** dragClass className */
  dragClass?: string;
  /** 行内样式 */
  style?: React.CSSProperties;
  prefixCls?: string;
}

export default class DraggableList extends React.Component<DraggableListProps, any> {
  static defaultProps = {
    handles: true,
    animation: 150,
    prefixCls: 'rc-draggable-list',
  };

  _sortableGroupDecorator = (componentBackingInstance) => {
    // check if backing instance not null
    if (componentBackingInstance) {
      const { animation, onUpdate, prefixCls, ghostClass, chosenClass, dragClass } = this.props;
      // const ghostClass = ;
      const options = {
        animation: animation,
        draggable: `.${prefixCls}-draggableRow`, // Specifies which items inside the element should be sortable
        // group: "shared",
        ghostClass: ghostClass || `${prefixCls}-ghost`, // Class name for the drop placeholder
        chosenClass: chosenClass || `${prefixCls}-chosen`,  // Class name for the chosen item
        dragClass: dragClass || `${prefixCls}-drag`,  // Class name for the dragging item
        onUpdate: function (evt) {
          onUpdate && onUpdate(evt);
        },
      };
      Sortable.create(componentBackingInstance, options);
    }
  };


  render() {
    const { style, className, rowClassName, prefixCls, dataSource, row, handles } = this.props;
    
    return (
      <div className={classNames(prefixCls, className)} style={style}>
        <div ref={this._sortableGroupDecorator}>
          {dataSource.map((record, index) => (
            <div key={index} className={classNames(`${prefixCls}-draggableRow`, rowClassName)}>
              {handles && (<span class={`${prefixCls}-handles`}>&#9776;</span>)}
              {row(record, index)}
            </div>
          ))}
        </div>
      </div>
    );
  }
}