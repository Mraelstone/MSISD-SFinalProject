var expiredcertApp = new Vue({
  el: '#expiredcertApp',
  data: {
    certifications: [],
    //certificationID: '',
    expiredCertifications:[],
    filter:{
      certificationID:''
    }
  },
  methods: {
    fetchExpiredCertifications() {
      fetch('api/certifieds/listexpired.php')
      .then(response => response.json())
      .then(json => {
        expiredcertApp.expiredCertifications = json })
    },

    getAllCertifications() {
      fetch('api/certifications/certificationlist.php')
    .then( response => response.json() )
    .then( json => {expiredcertApp.certifications = json;
          console.log(expiredcertApp.certifications);
        })
    },

  handleReset() {
    this.certificationID='';
    }
  },
  created() {
    this.getAllCertifications();
    this.fetchExpiredCertifications();
    //this.handleReset();
  }
}
)
