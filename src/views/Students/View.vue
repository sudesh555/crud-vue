<script></script>
<template>
  <div class="container mt-5">
    <div class="card">
      <div
        class="card-header d-flex justify-content-between align-items-center"
      >
        <h4>Students</h4>
        <router-link to="/students/create" class="btn btn-primary btn-sm"
          >Add Students</router-link
        >
      </div>
      <div class="card-body">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th></th>
              <th>Full Name</th>
              <th>Course</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody v-if="this.students.length">
            <tr v-for="(student, index) in this.students" :key="index">
              <td class="text-center"><img :src="student.image" alt="" width="100" /></td>
              <td>{{ student.name }}</td>
              <td>{{ student.course }}</td>
              <td>{{ student.email }}</td>
              <td>{{ student.phone }}</td>
              <td>
                <router-link
                  :to="{ path: '/students/' + student.id + '/edit' }"
                  class="btn btn-success btn-sm me-2"
                  >Edit</router-link
                >
                <button
                  type="button"
                  @click="deleteStudent(student.id)"
                  class="btn btn-sm btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
          <tbody v-else>
            <tr>
              <td class="text-center text-muted" colspan="7">No Data Found!</td>
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
  name: "Students",
  data() {
    return {
      students: [],
    };
  },
  mounted() {
    this.getStudents();
  },
  methods: {
    getStudents() {
      axios.get("http://localhost:8000/api/students").then((res) => {
        this.students = res.data.students.map((student) => {
          return {
            ...student,
            image: `http://localhost:8000/upload/${student.image}`,
          };
        });
      });
    },
    deleteStudent(studentId) {
      if (confirm("Are you sure, you want to delete this data ?")) {
        console.log(studentId);
        axios
          .delete(`http://localhost:8000/api/students/${studentId}/edit`)
          .then((res) => {
            alert(res.data.message);
            this.getStudents();
          })
          .catch(function (error) {
            if (error.response) {
              if (error.response.status == 404) {
                alert(error.response.data.message);
              }
            }
          });
      }
    },
  },
};
</script>
