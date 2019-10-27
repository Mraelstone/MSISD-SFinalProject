var memberRecordsApp = new Vue({
  el: '#memberRecordsApp',
  data: {
    members: [],
    recordMember: {}
  },
  methods: {
    fetchMembers() {
      fetch('api/members/index.php')
      .then(response => response.json())
      .then(json => { memberRecordsApp.members = json })
    },

    showMember(member){
      this.recordMember=member;
    },

    editMember() {
      fetch('api/members/update.php', {
      method:'POST',
      body: JSON.stringify(this.recordMember),
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }
    })
    .then( response => response.json() )
    .then( json => {memberRecordsApp.members = json;
    this.handleReset();
  })
    .catch(err => {
      console.error('MEMBER UPDATE ERROR: ')
      console.error(err);
    })
    //this.handleReset();
    },

    deleteMember(mem) {
      fetch('api/members/delete.php', {
      method:'POST',
      body: JSON.stringify(
        {memberGuid:mem}),
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }
    })
    .then( response => response.json() )
    .then( json => {memberRecordsApp.members = json})
    .catch(err => {
      console.error('MEMBER DELETION ERROR: ')
      console.error(err);
    })
    this.handleReset();
    },

    handleSubmit() {
       fetch('api/members/post.php', {
         method:'POST',
         body: JSON.stringify(this.recordMember),
         headers: {
           "Content-Type": "application/json; charset=utf-8"
         }
       })
       .then( response => response.json() )
       .then( json => {memberRecordsApp.members = json})
       .catch(err => {
         console.error('MEMBER RECORDS ERROR: ')
         console.error(err);
       })
       this.handleReset();
    },

    handleReset() {
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
        startDate:'',
        radioNumber:'',
        stationNumber:'',
        isActive:'',
        memberPosition:''
      }
    },
      handleRowClick(member){
        memberRecordsApp.member = member;
    }
  },
    created() {
      this.fetchMembers();
      this.handleReset();

    }
})
