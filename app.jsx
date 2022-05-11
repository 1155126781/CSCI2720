import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor() {
        super();
        this.state = { jwt: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNWJjYWM1NGZhZWZlMTc1MGM4NzYxMSIsImlhdCI6MTY1MDE5MTI1NH0.JGcuH6LOx0hPhQyjU2Rm9ZzD0BsLQWx5JOTkXIo6mcM', 
        data: [], 
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
          this.setState({data: res.info})
          }
          )
      }
      else{
        this.setState()
      }
    }

    TempCsort() {
      let data = this.state.data;
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
      let data = this.state.data;
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
      let data = this.state.data;
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
      let data = this.state.data;
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
      let data = this.state.data;
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