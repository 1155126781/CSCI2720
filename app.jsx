import React from 'react';
import ReactDOM from 'react-dom';
const data = [
  {
    "_id": "625be145c982f46af252c1e2",
    "locationID": 1,
    "info": {
      "name": "London",
      "latitude": "51.52",
      "longitude": "-0.11",
      "_id": "625be145c982f46af252c1e3"
    },
    "comments": [
      {
        "username": "user1",
        "content": "This is my first comment",
        "_id": "625bfba4c1e340a51cb463c0",
        "created_at": "2022-04-17T11:36:04.770Z",
        "updatedAt": "2022-04-17T11:36:04.770Z"
      },
      {
        "username": "user1",
        "content": "This is my first comment",
        "_id": "626eb3b114d9752feb780cb0",
        "created_at": "2022-05-01T16:22:09.391Z",
        "updatedAt": "2022-05-01T16:22:09.391Z"
      },
      {
        "username": "user1",
        "content": "This is my first comment",
        "_id": "62724ada63680e2717c6f9b4",
        "created_at": "2022-05-04T09:43:54.322Z",
        "updatedAt": "2022-05-04T09:43:54.322Z"
      }
    ],
    "__v": 3,
    "updated_at": "2022-05-04T10:44:20.184Z",
    "weather": {
      "temp_c": 14,
      "wind_kph": 11.2,
      "precip_mm": 0.1,
      "humidity": 72,
      "vis_km": 10,
      "_id": "6272590463680e2717c6fa03"
    }
  },
  {
    "_id": "625befac53f1d240fe2704af",
    "locationID": 2,
    "info": {
      "name": "Sydney",
      "latitude": "-33.88",
      "longitude": "151.22",
      "_id": "625befac53f1d240fe2704b0"
    },
    "comments": [],
    "createdAt": "2022-04-17T10:45:00.115Z",
    "updated_at": "2022-05-04T10:44:20.182Z",
    "__v": 0,
    "weather": {
      "temp_c": 22,
      "wind_kph": 15.1,
      "precip_mm": 0,
      "humidity": 65,
      "vis_km": 10,
      "_id": "6272590463680e2717c6fa01"
    }
  },
  {
    "_id": "625befb353f1d240fe2704b9",
    "locationID": 3,
    "info": {
      "name": "Helsinki",
      "latitude": "60.18",
      "longitude": "24.93",
      "_id": "626ec56da257713f9839a66a"
    },
    "comments": [],
    "createdAt": "2022-04-17T10:45:07.498Z",
    "updated_at": "2022-05-04T10:44:20.187Z",
    "__v": 0,
    "weather": {
      "temp_c": 7,
      "wind_kph": 16.9,
      "precip_mm": 0,
      "humidity": 31,
      "vis_km": 10,
      "_id": "6272590463680e2717c6fa05"
    }
  },
  {
    "_id": "625befba53f1d240fe2704c4",
    "locationID": 4,
    "info": {
      "name": "Tokyo",
      "latitude": "35.69",
      "longitude": "139.69",
      "_id": "625befba53f1d240fe2704c5"
    },
    "comments": [],
    "createdAt": "2022-04-17T10:45:14.846Z",
    "updated_at": "2022-05-04T10:44:20.180Z",
    "__v": 0,
    "weather": {
      "temp_c": 20,
      "wind_kph": 28.1,
      "precip_mm": 0,
      "humidity": 56,
      "vis_km": 10,
      "_id": "6272590463680e2717c6f9ff"
    }
  }
];

class App extends React.Component {
    constructor() {
        super();
        this.state = { jwt: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNWJjYWM1NGZhZWZlMTc1MGM4NzYxMSIsImlhdCI6MTY1MDE5MTI1NH0.JGcuH6LOx0hPhQyjU2Rm9ZzD0BsLQWx5JOTkXIo6mcM', 
        data: data, 
        field: "", 
        inputText: "" }
    }

    fetchData = async()=> {
      const jwt = this.state.jwt;

      const res = await fetch('http://localhost:3000/users/location/get/1', {
          headers:{
              'Authorization': `Bearer ${jwt}`
          }
      })

      if(res.ok){
        res.json().then(res=>{
          console.log(res)
          this.setState(data, res.info)
          }
          )
      }
      else{
        this.setState()
      }
    }

    TempCsort() {
      const sortedData = [...data];
        for(let i = 0; i < sortedData.length; i++) {
            let min = i;
            for(let j = i+1; j < sortedData.length; j++){
                if(sortedData[j].weather.temp_c < sortedData[min].weather.temp_c) {
                    min=j; 
                }
             }
             if (min !== i) {
                 let tmp = sortedData[i]; 
                 (sortedData[i]) = sortedData[min];
                 (sortedData[min]) = tmp;
            }
        }
        this.setState({data: sortedData, field: "temp_c"});
    }

    WindKphsort() {
      const sortedData = [...data];
        for(let i = 0; i < sortedData.length; i++) {
            let min = i;
            for(let j = i+1; j < sortedData.length; j++){
                if(sortedData[j].weather.wind_kph < sortedData[min].weather.wind_kph) {
                    min=j; 
                }
             }
             if (min !== i) {
                 let tmp = sortedData[i]; 
                 (sortedData[i]) = sortedData[min];
                 (sortedData[min]) = tmp;
            }
        }
        this.setState({data: sortedData, field: "wind_kph"});
    }

    Humiditysort() {
      const sortedData = [...data];
        for(let i = 0; i < sortedData.length; i++) {
            let min = i;
            for(let j = i+1; j < sortedData.length; j++){
                if(sortedData[j].weather.humidity < sortedData[min].weather.humidity) {
                    min=j; 
                }
             }
             if (min !== i) {
                 let tmp = sortedData[i]; 
                 (sortedData[i]) = sortedData[min];
                 (sortedData[min]) = tmp;
            }
        }
        this.setState({data: sortedData, field: "humidity"});
    }

    PrecipMmsort() {
      const sortedData = [...data];
        for(let i = 0; i < sortedData.length; i++) {
            let min = i;
            for(let j = i+1; j < sortedData.length; j++){
                if(sortedData[j].weather.precip_mm < sortedData[min].weather.precip_mm) {
                    min=j; 
                }
             }
             if (min !== i) {
                 let tmp = sortedData[i]; 
                 (sortedData[i]) = sortedData[min];
                 (sortedData[min]) = tmp;
            }
        }
        this.setState({data: sortedData, field: "precip_mm"});
    }

    VisKmsort() {
      const sortedData = [...data];
        for(let i = 0; i < sortedData.length; i++) {
            let min = i;
            for(let j = i+1; j < sortedData.length; j++){
                if(sortedData[j].weather.vis_km < sortedData[min].weather.vis_km) {
                    min=j; 
                }
             }
             if (min !== i) {
                 let tmp = sortedData[i]; 
                 (sortedData[i]) = sortedData[min];
                 (sortedData[min]) = tmp;
            }
        }
        this.setState({data: sortedData, field: "vis_km"});
    }

    inputHandler(e) {
      this.setState({inputText: e.target.value});
      //console.log(this.state.inputText);
    }

    searchField() {
      const data = this.state.data;
      const field = this.state.field;
      const inputText = this.state.inputText;
      let result = [];

      if (field === "temp_c") {
        result = checkTempCInput();
      }

      if (field === "wind_kph") {
        result = checkWindKphInput();
      }

      if (field === "humidity") {
        result = checkHumidityInput();
      }

      if (field === "precip_mm") {
        result = checkPrecipMmInput();
      }

      if (field === "vis_km") {
        result = checkVisKmInput();
      }
      
      function checkTempCInput() {
        let searchresult = [];
        for (let i = 0; i < data.length; i++) {
          if(inputText !== "") {
            let boolCheck = data[i].weather.temp_c.toString().includes(inputText);

            if (boolCheck === true) {
              searchresult.push(data[i].info.name);
            }
          }
        }
        return searchresult;
      }

      function checkWindKphInput() {
        let searchresult = [];
        for (let i = 0; i < data.length; i++) {
          if(inputText !== "") {
            let boolCheck = data[i].weather.wind_kph.toString().includes(inputText);

            if (boolCheck === true) {
              searchresult.push(data[i].info.name);
            }
          }
        }
        return searchresult;
      }
      
      function checkHumidityInput() {
        let searchresult = [];
        for (let i = 0; i < data.length; i++) {
          if(inputText !== "") {
            let boolCheck = data[i].weather.humidity.toString().includes(inputText);

            if (boolCheck === true) {
              searchresult.push(data[i].info.name);
            }
          }
        }
        return searchresult;
      }

      function checkPrecipMmInput() {
        let searchresult = [];
        for (let i = 0; i < data.length; i++) {
          if(inputText !== "") {
            let boolCheck = data[i].weather.precip_mm.toString().includes(inputText);

            if (boolCheck === true) {
              searchresult.push(data[i].info.name);
            }
          }
        }
        return searchresult;
      }

      function checkVisKmInput() {
        let searchresult = [];
        for (let i = 0; i < data.length; i++) {
          if(inputText !== "") {
            let boolCheck = data[i].weather.vis_km.toString().includes(inputText);

            if (boolCheck === true) {
              searchresult.push(data[i].info.name);
            }
          }
        }
        return searchresult;
      }

      if (result !== []) {
        return (
          <div>
          <table className="table table-sm">
            {result.map(size => (
                          <tr><td>{size}</td></tr>
                        ))}
          </table>
          </div>
        )
      }
      
    }

    render() {
        return (
            <>
            {this.fetchData()}
            <div>
                <table className="table table-striped" >
                    <thead>
                        <tr>
                          <th onClick={() => this.TempCsort()} scope="row"> temp_c&nbsp;&nbsp;&nbsp; </th>
                          <th onClick={() => this.WindKphsort()} scope="row"> wind_kph&nbsp;&nbsp;&nbsp; </th>
                          <th onClick={() => this.Humiditysort()} scope="row"> humidity&nbsp;&nbsp;&nbsp; </th>
                          <th onClick={() => this.PrecipMmsort()} scope="row"> precip_mm&nbsp;&nbsp;&nbsp; </th>
                          <th onClick={() => this.VisKmsort()} scope="row"> vis_km&nbsp;&nbsp;&nbsp; </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map(size => (
                          <tr><td>{size.info.name}</td></tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div>
              <label htmlFor="field">Enter keyword:</label>
              <input type="search" name="field" id="field" onChange={(e) => this.inputHandler(e)}/>
            </div>
            
              {this.searchField()}
            
            </>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector("#root"));