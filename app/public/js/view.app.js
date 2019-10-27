var memberViewApp = new Vue({
  el: '#memberViewApp',
  data: {
    members: [],
    memberCert:[],
    recordMember: {},
    mem : new URL(window.location.href).searchParams.get("memberGuid")
  },
  methods: {
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
    getMember(mem) {
      fetch('api/members/view.php?memberGuid='+mem)
    .then( response => response.json() )
    .then( json => {memberViewApp.recordMember = json[0]})
    // .catch(err => {
    //   console.error('MEMBER FETCH ERROR: ')
    //   console.error(err);
    // })
    this.handleReset();
    console.log(this.recordMember);
    },

    getMemberCert(mem) {
      fetch('api/members/viewCert.php?memberGuid='+mem)
    .then( response => response.json() )
    .then( json => {memberViewApp.memberCert = json})
    // .catch(err => {
    //   console.error('MEMBER FETCH ERROR: ')
    //   console.error(err);
    // })
    //this.handleReset();
    console.log(this.memberCert);
  },
    handleRowClick(member){
      memberViewApp.member = member;
  }
  },
  created() {
    this.handleReset();
    console.log(this.mem);
    this.getMember(this.mem);
    this.getMemberCert(this.mem);
  }
}
)
