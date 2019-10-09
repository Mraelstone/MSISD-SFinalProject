var patientTriageApp = new Vue({
  el: '#patientTriageApp',
  data: {
    patient: {}
  },
  methods: {
    handleSubmit() {
      //solved- TODO: Add the correct date via Javascript before posting

       // TODO:
       fetch('api/waiting/post.php', {
         method:'POST',
         body: JSON.stringify(this.patient),
         // body is a string
         // JSON stringify is saying take this object memory and put it into a JSON string data type, serialize it?
         headers: {
           "Content-Type": "application/json; charset=utf-8"
         }
       })
       .then( response => response.json() )
       .then( json => {waitingApp.patients = json})
       .catch(err => {
         console.error('WORK TRIAGE ERROR: ')
         console.error(err);
       })
       // refresh entire waiting queue everytime someone new added

       // waitingApp.patients.push(this.patient);
       this.handleReset();
    },
    handleReset() {
      this.patient = {
        patientGuid: '',
        firstName: '',
        lastName: '',
        dob: '',
        sexAtBirth: '',
        visitDescription: '',
        // visitDateUtc
        priority: 'low'
      }
    }
  },
  created() {
    this.handleReset();
  }
});
