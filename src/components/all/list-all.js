import React, { Component } from 'react';

class ListAll extends Component {
  render() {
    const chores = Object.keys(this.props.todo).map((val, idx) => {
      return (
        <tr key={idx}>
            {this.props.todo[val].active ? 
              (<td className="list done"><input type="checkbox" checked={this.props.todo[val].active} onChange={this.props.action.bind(this, idx)}/>{this.props.todo[val].chore}</td>) 
              :
              (<td className="list"><input type="checkbox" checked={!!this.props.todo[val].active} onChange={this.props.action.bind(this, idx)}/>{this.props.todo[val].chore}</td>) 
            }
        </tr>
      )
    })
    return (
      <div className="App">
        <div>
          <table>
            <tbody>
              {chores}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default  ListAll;
