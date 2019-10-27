var certificationViewApp = new Vue({
  el: '#certificationViewApp',
  data: {
    certifications: [],
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
    }
  },
  created() {
    this.handleReset();
    console.log(this.cert);
    this.getCertification(this.cert);
  }
}
)
