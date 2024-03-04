<template>
    <div class="container mt-5">
      <div class="card">
        <div class="card-header">
          <h4>Edit Staffs</h4>
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
                  v-model="model.staff.name"
                  class="form-control"
                />
              </div>
            </div>
            <div class="col-sm-4">
              <div class="mb-3">
                <label for="">Address</label>
                <input
                  type="text"
                  v-model="model.staff.address"
                  class="form-control"
                />
              </div>
            </div>
            <div class="col-sm-4">
              <div class="mb-3">
                <label for="">Phone</label>
                <input
                  type="text"
                  v-model="model.staff.phone"
                  class="form-control"
                />
              </div>
            </div>
            <div class="col-sm-4">
              <div class="mb-3">
                <label for="">Email</label>
                <input
                  type="text"
                  v-model="model.staff.email"
                  class="form-control"
                />
              </div>
            </div>
            <div class="col-sm-4">
              <div class="mb-3">
                <label for="">Job Type</label>
                <input
                  type="text"
                  v-model="model.staff.job_type"
                  class="form-control"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="card-footer d-flex justify-content-end">
          <button type="button" @click="updatestaff" class="btn btn-primary px-5">
            Update
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  export default {
    name: "StaffEdit",
    data() {
      return {
          staffId: '',
          errorList: '',
          model: {
              staff: {
              name: "",
              address: "",
              phone: "",
              email: "",
              job_type:""
              },
          },
      };
    },
  
    mounted() {
      this.staffId = this.$route.params.id;
      this.getstaffData(this.$route.params.id);
    },
  
    methods: {
  
      // Get staffs
      getstaffData(staffId) {
        axios
          .get(`http://localhost:8000/api/staffs/${staffId}/edit`)
          .then((res) => {
            console.log(res.data.staff);
            this.model.staff = res.data.staff;
          })
          .catch(function (error) {
            if (error.response) {
              if (error.response.status == 404) {
                alert(error.response.data.message)
              }
            }
          });
      },
  
      // Save staff
      updatestaff() {
        var mythis = this;
        axios
          .put(`http://localhost:8000/api/staffs/${this.staffId}/edit`, this.model.staff)
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
  