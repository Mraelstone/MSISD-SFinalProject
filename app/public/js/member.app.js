var memberRecordsApp = new Vue({
  el: '#memberRecordsApp',
  data: {
    members: [],
    recordMember: {}
  },
  methods: {
    fetchMembers() {
      fetch('api/members/')
      .then(response => response.json())
      .then(json => { memberRecordsApp.members = json })
    },
    handleReset() {
      this.recordMember = {
        firstName: '',
        lastName: '',
        sexAtBirth: '',
        addrStreet:'',
        addrCity:'',
        addrState:'',
        addrZipcode:'',
        workPhone:'',
        mobilePhone: '',
        radioNumber:'',
        stationNumber:'',
        isActive:'',
        memberPosition:''
      }
    },
    created() {
      this.handleReset();
      this.fetchMembers();
    }
  }
})
