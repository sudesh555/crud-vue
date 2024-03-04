<template>
  <div class="container mt-5">
    <div class="card">
      <div class="card-header">
        <h4>Add Students</h4>
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
                type="email"
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
        <button type="button" @click="saveStudent" class="btn btn-primary px-5">
          Save
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "StudentCreate",
  data() {
    return {
      errorList: "",
      model: {
        student: {
          name: "",
          course: "",
          email: "",
          phone: "",
          image: "",
        },
      },
    };
  },
  methods: {
    onImageChange(event) {
      const file = event.target.files[0];
      this.model.student.image = file;
    },
    saveStudent() {
      // Check if an image has been uploaded
      if (!this.model.student.image) {
        alert("Please upload an image");
        return;
      }

      var mythis = this;

      // Create a new form data object
      let formData = new FormData();
      // Append the image file to the form data object
      formData.append('image', this.model.student.image);

      // Append other student data to the form data object
      formData.append('name', this.model.student.name);
      formData.append('course', this.model.student.course);
      formData.append('email', this.model.student.email);
      formData.append('phone', this.model.student.phone);

      // Send the form data object with the POST request
      axios
        .post("http://localhost:8000/api/students", formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        .then((res) => {
          console.log(res.data);
          alert(res.data.message);
          this.model.student = {
            name: "",
            course: "",
            email: "",
            phone: "",
            image: "",
          };
          this.errorList = "";
        })
        .catch(function (error) {
          if (error.response) {
            if (error.response.status == 422) {
              mythis.errorList = error.response.data.errors;
            }
          }
        });
    },
  },
};
</script>
