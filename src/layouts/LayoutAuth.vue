<script>
    export default {
        name: "LayoutAuth"
    }
</script>

<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">Login</h3>
          </div>
          <div class="card-body">
            <form>
              <div class="mb-3">
                <label for="email" class="form-label">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="Enter email"
                />
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  placeholder="Password"
                />
              </div>
              <button type="submit" class="btn btn-primary">Login</button>
            </form>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">Register</h3>
          </div>
          <div class="card-body">
            <form>
              <div class="mb-3">
                <label for="name" class="form-label">Full Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  placeholder="Full Name"
                />
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="Email"
                />
              </div>
              <div class="mb-3">
                <label for="phone" class="form-label">Phone</label>
                <input
                  type="text"
                  class="form-control"
                  id="phone"
                  placeholder="Phone Number"
                />
              </div>
              <div class="mb-3">
                <label for="phone" class="form-label">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  placeholder="Password"
                />
              </div>
              <div class="mb-3">
                <label for="confirm-password" class="form-label">Confirm Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="confirm-password"
                  placeholder="Confirm Password"
                />
              </div>

              <div class="mb-3">
                <label for="remember-me" class="form-check-label">Remember me <input type="checkbox" id="remember-me"></label>
              </div>

              <button type="submit" class="btn btn-primary"> Register </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
