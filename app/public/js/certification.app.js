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
    handleReset() {
      this.recordCertification = {

      }
    },
    created() {
      this.handleReset();
      this.fetchCertifications();
    }
  }
})
