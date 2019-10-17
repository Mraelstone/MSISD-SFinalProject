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
    handleSubmit() {
      //solved- TODO: Add the correct date via Javascript before posting

       // TODO:
       fetch('api/members/post.php', {
         method:'POST',
         body: JSON.stringify(this.member),
         // body is a string
         // JSON stringify is saying take this object memory and put it into a JSON string data type, serialize it?
         headers: {
           "Content-Type": "application/json; charset=utf-8"
         }
       })
       .then( response => response.json() )
       .then( json => {memberRecordsApp.members = json})
       .catch(err => {
         console.error('MEMBER RECORD ERROR: ')
         console.error(err);
       })
       // refresh entire waiting queue everytime someone new added

       // waitingApp.patients.push(this.patient);
       this.handleReset();
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
      handleRowClick(member){
        memberRecordsApp.member = member;
    },
    created() {
      this.handleReset();
      this.fetchMembers();
    }
  }
})
