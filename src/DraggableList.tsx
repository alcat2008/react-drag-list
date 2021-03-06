import * as React from 'react';
import classNames from 'classnames';
import Sortable from 'sortablejs';

export interface IDraggableListProps {
  /** 数据数组 */
  dataSource: Object[];
  /** 数据数组 key 值 */
  rowKey: string;
  /** 数据项 */
  row: (record: Object, index: number) => React.ReactElement<any>;
  /** 是否禁用拖拽 */
  disabled?: boolean;
  /** 是否显示拖拽指示点 */
  handles?: boolean;
  /** 列表项重排时移动的动画时间 */
  animation?: number;
  /** 列表排序改变的回调 */
  onUpdate?: (event: Object, dataSource: Object[]) => void;

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

export default class DraggableList extends React.Component<IDraggableListProps, any> {
  static defaultProps = {
    disabled: false,
    handles: true,
    animation: 150,
    prefixCls: 'rc-draggable-list',
  };

  _current = [] as Object[];

  _sortableGroupDecorator = (componentBackingInstance) => {
    // check if backing instance not null
    if (componentBackingInstance) {
      const { animation, onUpdate, prefixCls, ghostClass, chosenClass, dragClass, disabled } = this.props;
      // const ghostClass = ;
      const options = {
        disabled,
        animation,
        draggable: `.${prefixCls}-draggableRow`, // Specifies which items inside the element should be sortable
        // group: "shared",
        ghostClass: ghostClass || `${prefixCls}-ghost`, // Class name for the drop placeholder
        chosenClass: chosenClass || `${prefixCls}-chosen`,  // Class name for the chosen item
        dragClass: dragClass || `${prefixCls}-drag`,  // Class name for the dragging item
        onUpdate: (evt) => {
          const { newIndex, oldIndex } = evt;
          let updated = this._current;
          let rowData = updated.splice(oldIndex, 1);
          updated.splice(newIndex, 0, rowData[0]);
          this._current = updated;
          onUpdate && onUpdate(evt, updated);  // tslint:disable-line
        },
      };
      Sortable.create(componentBackingInstance, options);
    }
  }

  render() {
    const { style, className, rowKey, rowClassName, prefixCls, dataSource, row, handles, disabled } = this.props;
    this._current = dataSource;
    return (
      <div className={classNames(prefixCls, className)} style={style}>
        <div ref={this._sortableGroupDecorator}>
          {dataSource.map((record, index) => (
            <div
              key={rowKey ? record[rowKey] : index}
              className={classNames(`${prefixCls}-draggableRow`, rowClassName)}
              style={{
                cursor: disabled ? 'default' : 'move',
              }}
            >
              {(!disabled) && handles && (<span className={`${prefixCls}-handles`}>&#9776;</span>)}
              {row(record, index)}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
