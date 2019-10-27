var expiredcert = new Vue({
  el: '#expiredcert',
  data: {
    certifications: [],
    certificationID: '',
    expiredCertifications:[]
  },
  methods: {
    fetchExpiredCertifications() {
      fetch('api/certifieds/listexpired.php')
      .then(response => response.json())
      .then(json => { expiredcert.expiredCertifications = json })
    },
    sendSelected() {
      fetch('api/certifieds/listexpired.php', {
      method:'POST',
      body: JSON.stringify(this.certificationID),
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }
    })
    .then( response => response.json() )
    .then( json => {
      expiredcert.certificationID = json;
      this.handleReset();
      //console.log(this.certifications);
  })
    .catch(err => {
      console.error('Certif expired ERROR: ')
      console.error(err);
    })
    //this.handleReset();
    },

    getAllCertifications() {
      fetch('api/certifications/certificationlist.php')
    .then( response => response.json() )
    .then( json => {expiredcert.certifications = json;
          console.log(this.certifications);
        })
    },

  handleReset() {
    this.certificationID='';
    }
  },
  created() {
    this.getAllCertifications();
    this.handleReset();
  }
}
)
