<template>
  <div class="container mt-5">
    <div class="card">
      <div class="card-header">
        <h4>Edit Students</h4>
      </div>
      <div class="card-body mb-2">
        <ul
          class="alert alert-warning"
          v-if="Object.keys(this.errorList).length > 0"
        >
          <li
            class="mb-0 ms-3"
            v-for="(error, index) in this.errorList"
            :key="index"
          >
            {{ error[0] }}
          </li>
        </ul>
        <div class="row">
          <div class="col-sm-4">
            <div class="mb-3">
              <label for="">Name</label>
              <input
                type="text"
                v-model="model.student.name"
                class="form-control"
              />
            </div>
          </div>
          <div class="col-sm-4">
            <div class="mb-3">
              <label for="">Course</label>
              <input
                type="text"
                v-model="model.student.course"
                class="form-control"
              />
            </div>
          </div>
          <div class="col-sm-4">
            <div class="mb-3">
              <label for="">Email</label>
              <input
                type="text"
                v-model="model.student.email"
                class="form-control"
              />
            </div>
          </div>
          <div class="col-sm-4">
            <div class="mb-3">
              <label for="">Phone</label>
              <input
                type="text"
                v-model="model.student.phone"
                class="form-control"
              />
            </div>
          </div>
          <div class="col-sm-4">
            <div class="mb-3">
              <label for="">Image</label>
              <input type="file" @change="onImageChange" class="form-control" />
            </div>
          </div>
        </div>
      </div>
      <div class="card-footer d-flex justify-content-end">
        <button type="button" @click="updateStudent" class="btn btn-primary px-5">
          Update
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "StudentEdit",
  data() {
    return {
        studentId: '',
        errorList: '',
        model: {
            student: {
            name: "",
            course: "",
            email: "",
            phone: "",
            },
        },
    };
  },

  mounted() {
    this.studentId = this.$route.params.id;
    this.getStudentData(this.$route.params.id);
  },

  methods: {

    // Get Students
    getStudentData(studentId) {
      axios
        .get(`http://localhost:8000/api/students/${studentId}/edit`)
        .then((res) => {
          console.log(res.data.student);
          this.model.student = res.data.student;
        })
        .catch(function (error) {
          if (error.response) {
            if (error.response.status == 404) {
              alert(error.response.data.message)
            }
          }
        });
    },

    // Save Student
    updateStudent() {
      var mythis = this;
      axios
        .put(`http://localhost:8000/api/students/${this.studentId}/edit`, this.model.student)
        .then((res) => {
          console.log(res.data);
          alert(res.data.message);
          this.errorList = "";
        })
        .catch(function (error) {
          if (error.response) {
            if (error.response.status == 422) {
              mythis.errorList = error.response.data.errors;
            }
            if (error.response.status == 404) {
              alert(error.response.data.message);
            }
          }
        });
    },
  },
};
</script>
