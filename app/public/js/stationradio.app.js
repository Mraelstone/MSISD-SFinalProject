var stationradio = new Vue({
  el: '#stationradio',
  data: {
    radios: [],
    stations: [],
    radiostation:{},
    resultForReport: [],
    members:[]
  },
  methods: {
    sendSelected() {
      fetch('api/members/stationradio.php?radioNumber='+this.radiostation.radioNumber+'&stationNumber='+this.radiostation.stationNumber)
        .then(response => response.json())
        .then(json => {
          stationradio.resultForReport = json;
          //this.handleReset();
          console.log(stationradio.resultForReport); })
    },
    getRadios() {
      fetch('api/members/radiolist.php')
    .then( response => response.json() )
    .then( json => {stationradio.radios = json;
          console.log(this.radios);
        })
    },
    getStations() {
      fetch('api/members/stationlist.php')
    .then( response => response.json() )
    .then( json => {stationradio.stations = json;
      console.log(this.stations);})
  },
  handleReset() {
    this.radiostation = {
      radioNumber:'',
      stationNumber:''
    }
  }
  },
  created() {
    this.getRadios();
    this.getStations();
    this.handleReset();
    //this.fetchStationRadio();
  }
})
