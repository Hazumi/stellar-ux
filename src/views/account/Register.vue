<template>
  <div>

    <h1>Sign Up</h1>

    <div class="row">
      <div class="offset-lg-4 col-lg-4">

        <ValidationObserver v-slot="{ handleSubmit }">
          <form @submit.prevent="handleSubmit(onSubmit)" class="" action="index.html" method="post">

            <!-- <ValidationProvider name="First Name" rules="alpha" v-slot="{ errors }">
              <label for="">First Name (optional)</label>
              <input v-model="firstName" type="text" class="form-control">
              <span>{{ errors[0] }}</span>
            </ValidationProvider>

            <ValidationProvider name="Last Name" rules="alpha" v-slot="{ errors }">
              <label for="">Last Name (optional)</label>
              <input v-model="lastName" type="text" class="form-control">
              <span>{{ errors[0] }}</span>
            </ValidationProvider> -->

            <ValidationProvider name="E-mail" rules="required|email" v-slot="{ errors }">
              <div class="mb-2">
                <label class="form-label" for="">E-Mail</label>
                <input v-model="email" type="email" class="form-control">
                <span class="display-message--error">{{ errors[0] }}</span>
              </div>
            </ValidationProvider>

            <ValidationProvider name="Password" rules="required|max:18|min:6" v-slot="{ errors }">
              <div class="mb-2">
                <label class="form-label" for="">Password</label>
                <input v-model="password" type="password" class="form-control">
                <span class="display-message--error">{{ errors[0] }}</span>
              </div>
            </ValidationProvider>

            <button class="btn btn-primary" type="submit" name="button">Sign Up</button>

          </form>
        </ValidationObserver>

      </div>
    </div>

  </div>
</template>

<script>
import firebase from 'firebase/app';

import db from '@/firebase/config'
console.log(db);
import { ValidationProvider } from 'vee-validate';
import { ValidationObserver } from 'vee-validate';

import { extend } from 'vee-validate';
import { required, alpha, email, min, max } from 'vee-validate/dist/rules';

// import { ValidationProvider } from 'vee-validate/dist/vee-validate.full.esm';

extend('email', email);

extend('min', {
  ...min,
  message: 'Password must be at least 6 characters.'
});

extend('max', {
  ...max,
  message: 'Password must not exceed 18 characters.'
});

extend('alpha', {
  ...alpha,
  message: 'Only letter characters are allowed.'
});

extend('required', {
  ...required,
  message: 'This field is required.'
});


export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      msg: 'in progress',
      user: '',
    }
  },
  methods: {
    onSubmit() {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
      .then((userCredential) => {
        // Signed in
        this.user = userCredential.user;
        // ...
        console.log('user created');
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
        alert(errorCode, errorMessage)
      });
    }
  }
}
</script>

<style lang="scss" scoped>
  .display-message--error {
    color: red;
  }
</style>
