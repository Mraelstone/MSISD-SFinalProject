var certificationRecordsApp = new Vue({
  el: '#certificationRecordsApp',
  data: {
    certifications: [],
    recordCertification: {}
  },
  methods: {
    fetchCertifications() {
      fetch('api/certifications/')
      .then(response => response.json())
      .then(json => { certificationRecordsApp.certifications = json })
    },
    handleSubmit() {
      //solved- TODO: Add the correct date via Javascript before posting

       // TODO:
       fetch('api/certifications/post.php', {
         method:'POST',
         body: JSON.stringify(this.recordCertification),
         // body is a string
         // JSON stringify is saying take this object memory and put it into a JSON string data type, serialize it?
         headers: {
           "Content-Type": "application/json; charset=utf-8"
         }
       })
       .then( response => response.json() )
       .then( json => {certificationRecordsApp.certifications = json})
       .catch(err => {
         console.error('certification RECORDS ERROR: ')
         console.error(err);
       })
       // refresh entire waiting queue everytime someone new added

       // waitingApp.patients.push(this.patient);
       this.handleReset();
    },
    handleReset() {
      this.recordCertification = {
        certificationName:'',
        expirationDate:'',
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
