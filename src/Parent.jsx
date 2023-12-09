import Child from './Child'
const { Component } = require("react");


class Parent extends Component {
  constructor() {
    super();
    this.data = [
      {
        grid: 1,
        name: 'kishan',
        email: 'kishan@gmail.com',
        password: 'kishan@123',
        course: ["html", "css", "bootstrap", "js"],
        color : "pink",
        city: "surat"
      },
      {
        grid: 2,
        name: 'jay',
        email: 'jay@gmail.com',
        password: 'kishan@123',
        course: ["photosho", "figma", "illustrator", "adobe xd"],
        color : "skyblue",
        city: "rajkot"
      },
      {
        grid: 3,
        name: 'ajay',
        email: 'ajay@gmail.com',
        password: 'ajay@123',
        course: ["html", "css", "bootstrap", "nodejs"],
        color : "pink",
        city: "amareli"
      },
      {
        grid: 4,
        name: 'nisha',
        email: 'nisha@gmail.com',
        password: 'nisha@123',
        course: ["html", "css", "bootstrap", "python"],
        color : "skyblue",
        city: "vadodara"
      }

    ]
  }
  render() {
    return (
      <Child 
        data={this.data} 
      />
    )

  }
}

export default Parent;