import React, { Component } from 'react';

class ListCompleted extends Component {
  render() {
    let completed = '';
    completed = this.props.todo !== [] ?
      Object.keys(this.props.todo).map((val, idx) => {
        return(
          this.props.todo[val].active ?
            (<tr key={idx}><td className="list"><input type="checkbox" checked onChange={this.props.action.bind(this, idx)}/>{this.props.todo[val].chore}</td></tr>)
          : null
        )
      })
       : null
    return (
      <div className="App">
        <div>
          <table>
            <tbody>
              {completed}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default  ListCompleted;
