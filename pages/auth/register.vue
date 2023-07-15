<template>
  <div class="d-flex flex-column min-vh-100 justify-content-center align-items-center ">
    <div class="card animate__animated animate__fadeInDown" style="max-width: 450px;">
      <div class="card card-body">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <nuxt-link :to="localePath(`/auth/login`)" class="nav-link p-2">
              {{ $t('enter') }}
            </nuxt-link>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">
              {{ $t('registration') }}
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <nuxt-link :to="localePath(`/demo`)" class="nav-link p-2">
              {{ $t('demoTests') }}
            </nuxt-link>
          </li>
        </ul>
        <div class="tab-content" id="myTabContent">
          <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
            <h1 class="text-center mb-4"></h1>
            <div class="alert alert-danger" v-if="has_error && !success">
              <strong v-if="error == 'registration_validation_error'"
                      class="block">{{ $t('checkError') }}</strong>
              <strong v-else class="block">
                {{ $t('registerError') }}
              </strong>
              <ol class="mt-2">
                <div v-for="(value) in errors">
                  <li><strong>{{ value[0] }}</strong></li>
                </div>
              </ol>
            </div>
          </div>
          <form autocomplete="off" @submit.prevent="register" v-if="!success" method="post">
            <div class="form-floating mb-2">
              <input type="text" class="form-control" maxlength="20" minlength="2" name="name"
                     id="name" v-model="name" ref="name"
                     placeholder="Name" required autofocus
                     v-bind:class="{ 'is-invalid': has_error && errors.name }">
              <label for="name">{{ this.$t('registerName') }}</label>
            </div>

            <div class="form-floating mb-2">
              <input type="number" placeholder="Tug'ulgan yilingiz" min="1960" max="2015" id="year" v-model="year" ref="name"
                     v-bind:class="{ 'is-invalid': has_error && errors.year }"
                     oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                     maxlength="4" required class="form-control">
              <label for="year">{{ this.$t('bornYear') }}</label>
            </div>

            <div class="form-floating mb-2">
              <input type="email" class="form-control" name="email" id="email" v-model="email"
                     autocomplete="email" required
                     placeholder="email" v-bind:class="{ 'is-invalid': has_error && errors.email }">
              <label for="email">{{ this.$t('registerGmail') }}</label>
            </div>
            <div class="form-floating mb-2">
              <input type="password" class="form-control" maxlength="20" minlength="2" name="password"
                     id="password" required v-model="password"
                     placeholder="password">
              <label for="password">{{ this.$t('registerPass') }}</label>
            </div>
            <div class="form-floating mb-2">
              <input type="password" class="form-control" maxlength="20" minlength="2"
                     name="password_confirmation" id="password_confirmation" required
                     v-model="password_confirmation" placeholder="password confirmation">
              <label for="password_confirmation">{{ this.$t('repeatPass') }}</label>
            </div>
            <div class="form-floating mb-2" v-if="ref_id">
              <input type="text" class="form-control" name="password_confirmation" id="ref_name"
                     v-model="ref_name" placeholder="ref name" disabled>
              <label for="ref_name">{{ this.$t('invitePerson') }}</label>
            </div>
            <button type="submit" class="btn btn-primary btn3d">
              {{ this.$t('addRegister') }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  middleware: 'isGuest',
  layout    : 'login',
  head() {
    return {
      title: this.$t('registerTitle')
    };
  },
  data() {
    return {
      error                : null,
      name                 : '',
      ref_id               : null,
      ref_name             : false,
      year                 : '',
      email                : '',
      password             : '',
      password_confirmation: '',
      has_error            : false,
      errors               : {},
      success              : false
    }
  },
  mounted() {
    const ref_id = localStorage.getItem('ref_id')
    if (ref_id) {
      this.ref_id = ref_id
      this.userNameFind(this.ref_id)
    }
    this.$loading.hide()
  },
  methods: {
    register(e) {
      e.preventDefault();
      let app = this;
      this.$axios.post('auth/register', {
        name                 : app.name,
        year                 : app.year,
        email                : app.email,
        password             : app.password,
        password_confirmation: app.password_confirmation,
        ref_id               : app.ref_id,
      }, {
        headers: {
          'Content-Type'   : 'application/json',
          'Accept-Language': this.$i18n.locale
        }
      }).then((response) => {
        this.$router.push(this.localePath(`/auth/login`))
      }).catch((error) => {
        app.has_error = true
        console.log(error.response.data)
        this.SwalMixin('Formada xatoliklar topildi', 'error')
        app.errors = error.response.data.errors || {}
        app.error  = error.response.data.error
      });
    },
    userNameFind($id) {
      this.$axios.get(`auth/user/username/${$id}`, {
        headers: {
          'Content-Type'   : 'application/json',
          'Accept-Language': this.$i18n.locale
        }
      }).then((response) => {
        this.ref_name = response.data.name
      });
    }
  }
}
</script>
