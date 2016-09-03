import React, { Component } from 'react';
import classNames from 'classnames';

// TODO: Use a library
export class TabPane extends Component {
  state = { children: [] };

  componentDidReceiveProps () {
    const { active } = this.props;
    this.setState({ active })
  }

  onTabClick (e, tab) {
    e.preventDefault();
    const active = tab.props.name;
    this.setState({ active });
  }

  render () {
    const { children, ...restProps } = this.props;
    const { active } = this.state;

    return (
      <div {...restProps}>
        <ul className="tabs">
          {
            children.map((tab, index) => {
              return (
                <li key={tab.props.name} className={classNames({'tabs-title': true, 'is-active': active ? active == tab.props.name: index == 0 })}>
                  <a href="javascript:" onClick={e => this.onTabClick(e, tab)}>
                    {tab.props.title}
                  </a>
                </li>
              );
            })
          }
        </ul>
        <div className="tabs-content">
          {
            children.map((tab, index) => {
              return (
                <div key={tab.props.name} className={classNames({'tabs-panel': true, 'is-active': active ? active == tab.props.name: index == 0})}>
                  {tab}
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}

export class Tab extends Component {
  render () {
    return this.props.children || null;
  }
}

export default TabPane;
