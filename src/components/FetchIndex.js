

import React from "react";
// import DetailsPage from './components/DetailsPage';

export default class FetchIndex extends React.Component {
  state = {
    loading: true,
    employees: []
  };

  async componentDidMount() {
    const url = "https://demo7371228.mockable.io/react-assignment/employees";
    const response = await fetch(url);
    const data1 = await response.json();
    this.setState({ employees: data1.data, loading: false });
  }

  render() {
    if (this.state.loading) {
      return <div>Please wait...</div>;
    }

    if (!this.state.employees.length) {
      return <div> No employee loaded</div>;
    }

    return (
      <div>
        {this.state.employees.map(employee => (
          <div key={employee.id}>
            <div><a href={`/employee/${employee.id}`}>{employee.first_name} {employee.last_name}</a></div>
            {/* <div>{employee.email}</div>
            <img src={employee.avatar} /> */}
           
          </div>
        ))}
      </div>
    );
  }
}

