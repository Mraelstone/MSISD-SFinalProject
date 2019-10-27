var assignMemCertApp = new Vue({
  el: '#assignMemCertApp',
  data: {
    members: [],
    recordMember: {},
    certifications: [],
    recordCertification: {}
  },
  methods: {
      handleResetMember() {
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
    handleResetCertification() {
      this.recordCertification = {
        certificationName:'',
        expirationDate:'',
        agency:''
      }
    },
    getMembers() {
      fetch('api/members/memberlist.php')
    .then( response => response.json() )
    .then( json => {memberViewApp.recordMember = json[0]})
    // .catch(err => {
    //   console.error('MEMBER FETCH ERROR: ')
    //   console.error(err);
    // })
    this.handleResetMember();
    console.log(this.recordMember);
    },
    getCertifications() {
      fetch('api/certifications/certificationlist.php')
    .then( response => response.json() )
    .then( json => {memberViewApp.recordCertification = json[0]})
    // .catch(err => {
    //   console.error('MEMBER FETCH ERROR: ')
    //   console.error(err);
    // })
    this.handleResetCertification();
    console.log(this.recordCertification);
    }
  },
  created() {
    this.handleResetMember();
    this.handleResetCertification();
  }
}
)
