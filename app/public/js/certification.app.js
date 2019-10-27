var certificationRecordsApp = new Vue({
  el: '#certificationRecordsApp',
  data: {
    certifications: [],
    recordCertification: {}
  },
  methods: {
    fetchCertifications() {
      fetch('api/certifications/index.php')
      .then(response => response.json())
      .then(json => {
        certificationRecordsApp.certifications = json;
        //console.log(this.certifications);
       })

    },

    showCertification(certification){
      this.recordCertification=certification;
    },

    editCertification() {
      fetch('api/certifications/update.php', {
      method:'POST',
      body: JSON.stringify(this.recordCertification),
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }
    })
    .then( response => response.json() )
    .then( json => {
      certificationRecordsApp.certifications = json;
      this.handleReset();
      //console.log(this.certifications);
  })
    .catch(err => {
      console.error('CERTIFICATION UPDATE ERROR: ')
      console.error(err);
    })
    //this.handleReset();
    },

    deleteCertification(cert) {
      fetch('api/certifications/delete.php', {
      method:'POST',
      body: JSON.stringify(
        {certificationGuid:cert}),
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }
    })
    .then( response => response.json() )
    .then( json => {certificationRecordsApp.certifications = json})
    .catch(err => {
      console.error('CERTIFICATION DELETION ERROR: ')
      console.error(err);
    })
    this.handleReset();
    },

    handleSubmit() {
       fetch('api/certifications/post.php', {
         method:'POST',
         body: JSON.stringify(this.recordCertification),
         headers: {
           "Content-Type": "application/json; charset=utf-8"
         }
       })
       .then( response => response.json() )
       .then( json => {certificationRecordsApp.certifications = json})
       .catch(err => {
         console.error('CERTIFICATION RECORDS ERROR: ')
         console.error(err);
       })
       this.handleReset();
    },
    handleReset() {
      this.recordCertification = {
        certificationName:'',
        expirationPeriod:'',
        agency:''
      }
    },
      handleRowClick(certification){
        certificationRecordsApp.certification = certification;
    }
  },
    created() {
      this.handleReset();
      this.fetchCertifications();
    }
})
