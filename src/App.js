import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '', list: ['skipping', 'running', 'hiking'] };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    var joined = this.state.list.concat(this.state.value);
    this.setState({ list: joined, value: '' })
    event.preventDefault();
  }

  handleDelete() {
    var array = this.state.list; // make a separate copy of the array
    var index = array.indexOf(this.state.value)
    if (index !== -1) {
      array.splice(index, 1);
      this.setState({ list: array, value: '' });
    }
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.list.map((value, index) => {
            return <li key={index}>{value}</li>
          })}
        </ul>

        <form onSubmit={this.handleSubmit}>
          <label>Hobbie</label>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          <input type="submit" value="Submit" />
          <input type="button" value="Delete" onClick={this.handleDelete} />
        </form>

      </div>

    );
  }
}

export default App;
