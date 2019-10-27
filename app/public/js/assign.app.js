var assignMemCertApp = new Vue({
  el: '#assignMemCertApp',
  data: {
    members: [],
    recordMember: [],
    certifications: [],
    recordCertification: [],
    selectedMember: '',
    selectedCertification: '',
    certifieds: [],
    recordCertified: {}
  },
  methods: {
      handleResetMember() {
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
    handleResetCertification() {
      this.recordCertification = {
        certificationName:'',
        expirationDate:'',
        agency:''
      }
    },
    handleResetCertified() {
      this.recordCertified = {
        certification:'',
        member:'',
        assignedDate:''
      }
    },
    getMembers() {
      fetch('api/members/memberlist.php')
    .then( response => response.json() )
    .then( json => {assignMemCertApp.recordMember = json;
          console.log(this.recordMember);
        })
    // .catch(err => {
    //   console.error('MEMBER FETCH ERROR: ')
    //   console.error(err);
    // })
    //this.handleResetMember();

    },
    getCertifications() {
      fetch('api/certifications/certificationlist.php')
    .then( response => response.json() )
    .then( json => {assignMemCertApp.recordCertification = json;
      console.log(this.recordCertification);})
    // .catch(err => {
    //   console.error('MEMBER FETCH ERROR: ')
    //   console.error(err);
    // })
    //this.handleResetCertification();
  },
  fetchCertifieds() {
      fetch('api/certifieds/')
      .then(response => response.json())
      .then(json => { assignMemCertApp.certifieds = json })
    },
    handleSubmit() {
       fetch('api/certifieds/post.php', {
         method:'POST',
         body: JSON.stringify(this.recordCertified),
         // body is a string
         // JSON stringify is saying take this object memory and put it into a JSON string data type, serialize it?
         headers: {
           "Content-Type": "application/json; charset=utf-8"
         }
       })
       .then( response => response.json() )
       .then( json => {assignMemCertApp.certifieds = json})
       .catch(err => {
         console.error('CERTIFIED RECORDS ERROR: ')
         console.error(err);
       })
       this.handleResetCertified();
    },
  },
  created() {
    this.getMembers();
    this.getCertifications();
    this.handleResetMember();
    this.handleResetCertification();
    this.handleResetCertified();
  }
}
)
