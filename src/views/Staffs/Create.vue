<template>
    <div class="container mt-5">
      <div class="card">
        <div class="card-header">
          <h4>Add Staffs</h4>
        </div>
        <div class="card-body mb-2">
          <ul class="alert alert-warning" v-if="Object.keys(this.errorList).length > 0">
            <li class="mb-0 ms-3" v-for="(error, index) in this.errorList" :key="index">
              {{ error[0] }}
            </li>
          </ul>
          <div class="row">
            <div class="col-sm-4">
              <div class="mb-3">
                <label for="">Name</label>
                <input type="text" v-model="model.staff.name" class="form-control" />
              </div>
            </div>
            <div class="col-sm-4">
              <div class="mb-3">
                <label for="">Address</label>
                <input type="text" v-model="model.staff.address" class="form-control" />
              </div>
            </div>
            <div class="col-sm-4">
              <div class="mb-3">
                <label for="">Phone</label>
                <input type="text" v-model="model.staff.phone" class="form-control" />
              </div>
            </div>
            <div class="col-sm-4">
              <div class="mb-3">
                <label for="">Email</label>
                <input type="text" v-model="model.staff.email" class="form-control" />
              </div>
            </div>
            <div class="col-sm-4">
              <div class="mb-3">
                <label for="">Job Type</label>
                <input type="text" v-model="model.staff.job_type" class="form-control" />
              </div>
            </div>
          </div>
        </div>
        <div class="card-footer d-flex justify-content-end">
          <button type="button" @click="savestaff" class="btn btn-primary px-5">Save</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
    name: 'StaffCreate',
    data(){
        return {
            errorList: '',
            model: {
                staff: {
                    name: '',
                    address: '',
                    phone: '',
                    email: '',
                    job_type: ''
                }
            }
        }
    },
    methods: {
      savestaff() {
        var mythis = this;
        axios.post('http://localhost:8000/api/staffs', this.model.staff)
          .then(res => {
            console.log(res.data);
            alert(res.data.message);
            this.model.staff = {
              name: '',
              address: '',
              phone: '',
              email: '',
              job_type: ''
            }
            this.errorList = ''
          })
          .catch(function (error) {
            if(error.response) {
              if(error.response.status == 422) {
                mythis.errorList = error.response.data.errors;
              }
            }
          })
      }
    }
  }
  </script>
  