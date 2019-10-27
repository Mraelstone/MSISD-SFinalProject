var stationradio = new Vue({
  el: '#stationradio',
  data: {
    radios: [],
    stations: [],
    radiostation:{},
    members:[]
  },
  methods: {
    fetchStationRadio() {
      fetch('api/members/stationradio.php')
      .then(response => response.json())
      .then(json => { stationradio.members = json })
    },
    sendSelected() {
      fetch('api/members/stationradio.php', {
      method:'POST',
      body: JSON.stringify(this.radiostation),
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }
    })
    .then( response => response.json() )
    .then( json => {
      stationradio.radiostation = json;
      this.handleReset();
      //console.log(this.certifications);
  })
    .catch(err => {
      console.error('Station and Radio ERROR: ')
      console.error(err);
    })
    //this.handleReset();
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
    this.fetchStationRadio();
  }
}
)
