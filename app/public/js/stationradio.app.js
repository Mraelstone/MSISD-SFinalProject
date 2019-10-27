var stationradio = new Vue({
  el: '#stationradio',
  data: {
    radios: [],
    stations: [],
    radiostation:{},
    resultForReport: [],
    members:[],
    member:{},
    filter:{
      radioNumber:'',
      stationNumber:''
    }
  },
  methods: {
    fetchMembers() {
      fetch('api/members/index.php')
      .then(response => response.json())
      .then(json => { stationradio.members = json })
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

  handleMemberReset() {
    this.recordMember = {
      firstName: '',
      lastName: '',
      sexAtBirth: '',
      email:'',
      dob:'',
      addrStreet:'',
      addrCity:'',
      addrState:'',
      addrZipcode:'',
      workPhone:'',
      mobilePhone: '',
      radioNumber:'',
      startDate:'',
      stationNumber:'',
      isActive:'',
      memberPosition:''
    }
  },
    handleRowClick(member){
      stationradio.member = member;
  }
  },
  created() {
    this.fetchMembers();
    this.getRadios();
    this.getStations();
    this.handleMemberReset();
    //this.fetchStationRadio();
  }
})
