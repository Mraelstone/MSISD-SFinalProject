var certificationRecordsApp = new Vue({
  el: '#certificationRecordsApp',
  data: {
    members: [],
    recordMember: {}
  },
  methods: {
    fetchCertifications() {
      fetch('api/certifications/')
      .then(response => response.json())
      .then(json => { certificationRecordsApp.members = json })
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
