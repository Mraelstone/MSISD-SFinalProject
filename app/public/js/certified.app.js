var certifiedRecordsApp = new Vue({
  el: '#certifiedRecordsApp',
  data: {
    certifieds: [],
    recordCertified: {}
  },
  methods: {
    fetchCertifieds() {
      fetch('api/certifieds/')
      .then(response => response.json())
      .then(json => { certifiedRecordsApp.certifieds = json })
    },
    handleSubmit() {
      //solved- TODO: Add the correct date via Javascript before posting

       // TODO:
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
       .then( json => {certifiedRecordsApp.certifieds = json})
       .catch(err => {
         console.error('CERTIFIED RECORDS ERROR: ')
         console.error(err);
       })
       // refresh entire waiting queue everytime someone new added

       // waitingApp.patients.push(this.patient);
       this.handleReset();
    },
    handleReset() {
      this.recordCertified = {
        certification:'',
        member:'',
        expirationDate:''
      }
    },
      handleRowClick(certified){
        certifiedRecordsApp.certified = certified;
    }
  },
    created() {
      this.handleReset();
      this.fetchCertifieds();
    }
})
