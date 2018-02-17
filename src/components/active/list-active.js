import React, { Component } from 'react';

class ListActive extends Component {
  render() {
    let todo;
    todo = this.props.todo !== [] ?
      Object.keys(this.props.todo).map((val,idx) => {
        return(
          !this.props.todo[val].active ?
            (<tr key={idx}><td className="list"><input type="checkbox" onChange={this.props.action.bind(this, idx)}/>{this.props.todo[val].chore}</td></tr>)
          : null
        )
      })
       : null
    return (
      <div className="App">
        <div>
          <table>
            <tbody>
              {todo}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default  ListActive;
