var certificationViewApp = new Vue({
  el: '#certificationViewApp',
  data: {
    certifications: [],
    certMember:[],
    recordCertification: {},
    cert : new URL(window.location.href).searchParams.get("certificationGuid")
  },
  methods: {
      handleReset() {
      this.recordCertification = {
        certificationName:'',
        expirationPeriod:'',
        agency:''
      }
    },
    getCertification(cert) {
      fetch('api/certifications/view.php?certificationGuid='+cert)
    .then( response => response.json() )
    .then( json => {certificationViewApp.recordCertification = json[0]})
    // .catch(err => {
    //   console.error('certification FETCH ERROR: ')
    //   console.error(err);
    // })
    this.handleReset();
    console.log(this.recordCertifications);
    },

    getCertificationMem(cert) {
      fetch('api/certifications/viewMem.php?certificationGuid='+cert)
    .then( response => response.json() )
    .then( json => {certificationViewApp.certMember = json})
    // .catch(err => {
    //   console.error('MEMBER FETCH ERROR: ')
    //   console.error(err);
    // })
    //this.handleReset();
    console.log(this.certMember);
  },
    handleRowClick(certification){
      certificationViewApp.certification = certification;
  }
  },
  created() {
    this.handleReset();
    console.log(this.cert);
    this.getCertification(this.cert);
    this.getCertificationMem(this.cert);
  }
}
)
