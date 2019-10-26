var memberViewApp = new Vue({
  el: '#memberViewApp',
  data: {
    members: [],
    recordMember: {}
  },
  methods: {
    getMember() {
      fetch('api/members/view.php', {
      method:'GET',
      body: JSON.stringify(this.recordMember),
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }
    })
    .then( response => response.json() )
    .then( json => {memberViewApp.members = json})
    .catch(err => {
      console.error('MEMBER RECORDS ERROR: ')
      console.error(err);
    })
    this.handleReset();
    }
  }
}
)
