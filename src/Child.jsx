const { Component } = require("react");

class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {
        AllRecord : this.props.data
    }
  }
  render() {
    return (
     <>
        <center>
        <table border={1}>
        <thead>
          <tr>
            <th>grid</th>
            <th>name</th>
            <th>email</th>
            <th>password</th>
            <th>course</th>
            <th>city</th>
          </tr>
        </thead>
        <tbody>
          {
            this.state.AllRecord.map((val) => {
              return (
                <tr>
                  <td style={{backgroundColor:val.color}}>{val.grid}</td>
                  <td style={{backgroundColor:val.color}}>{val.name}</td>
                  <td style={{backgroundColor:val.color}}>{val.email}</td>
                  <td style={{backgroundColor:val.color}}>{val.password}</td>
                  <td style={{backgroundColor:val.color}}>{val.course}</td>
                  <td style={{backgroundColor:val.color}}>{val.city}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
        </center>
     </>
    )
  }
}

export default Child