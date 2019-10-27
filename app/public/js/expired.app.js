var expiredcert = new Vue({
  el: '#expiredcert',
  data: {
    certifications: [],
  },
  methods: {
    fetchStationRadio() {
      fetch('api/members/certificationlist.php')
      .then(response => response.json())
      .then(json => { expiredcert.certifications = json })
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
      fetch('api/certifications/certificationlist.php')
    .then( response => response.json() )
    .then( json => {expiredcert.certifications = json;
          console.log(this.certifications);
        })
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
