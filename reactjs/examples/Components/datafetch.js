import React, { Component } from "react";

class DataFetcher extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      loading: true,
      error: null
    };
  }

  componentDidMount() {
    fetch("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQThPaICATr6ojmAF4pbRmh_lciZKiHPFOjnQ&usqp=CAU")
      .then(response => response.json())
      .then(data => {
        this.setState({
          data: data,
          loading: false
        });
      })
      .catch(error => {
        this.setState({
          loading: false,
          error: "An error occurred while fetching the data."
        });
      });
  }

  render() {
    const { data, loading, error } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>{error}</div>;
    }

    return (
      <div>
        <h2>Data:</h2>
        {data && (
          <ul>
            {data.map(item => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default DataFetcher;
