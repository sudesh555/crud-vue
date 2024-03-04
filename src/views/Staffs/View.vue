<script></script>
<template>
  <div class="container mt-5">
    <div class="card">
      <div class="card-header d-flex justify-content-between align-items-center">
        <h4>Staffs</h4>
        <router-link to="/staffs/create" class="btn btn-primary btn-sm"
          >Add Staffs</router-link
        >
      </div>
      <div class="card-body">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Full Name</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody v-if="this.staffs.length">
            <tr v-for="(staff, index) in this.staffs" :key="index">
              <td>{{ staff.id }}</td>
              <td>{{ staff.name }}</td>
              <td>{{ staff.address }}</td>
              <td>{{ staff.phone }}</td>
              <td>{{ staff.email }}</td>
              <td>
                <router-link
                  :to="{path: '/staffs/'+staff.id+'/edit'}"
                  class="btn btn-success btn-sm me-2"
                  >Edit</router-link
                >
                <button type="button" @click="deletestaff(staff.id)" class="btn btn-sm btn-danger">Delete</button>
              </td>
            </tr>
          </tbody>
          <tbody v-else>
            <tr>
                <td class="text-center text-muted" colspan="7"> Loading...</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Staffs",
  data() {
    return {
      staffs: [],
    };
  },
  mounted() {
    this.getstaffs();
    // console.log("I'm here");
  },
  methods: {
    getstaffs() {
      axios.get("http://localhost:8000/api/staffs").then((res) => {
        this.staffs = res.data.staffs;
        console.log(this.staffs);
      });
    },
    deletestaff(staffId) {
      if(confirm('Are you sure, you want to delete this data ?')) {
        console.log(staffId);
        axios.delete(`http://localhost:8000/api/staffs/${staffId}/edit`)
        .then(res => {
          alert(res.data.message);
          this.getstaffs();
        })
        .catch(function (error) {
          if (error.response) {
            if (error.response.status == 404) {
              alert(error.response.data.message);
            }
          }
        });
      }
    }
  },
};
</script>
