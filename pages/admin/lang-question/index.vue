<template>
  <div class="container">
    <div class="card">
      <div class="container mt-3">
        <div class="row">
          <div class="col-md-10 d-flex align-items-center justify-content-center">
            <nav>
              <ul class="pagination pagination-sm">
                <li v-for="(item) in links" :class="[ 'page-item',
                         (item.url === null ? 'disabled' : ''),
                         (item.active === true ? 'active' : ''),
                         ]">
                  <button class="page-link" v-html="item.label" @click="pagination(item.url)"></button>
                </li>
              </ul>
            </nav>
          </div>
          <div class="col-md-2">
            <select class="form-select form-select-sm" aria-label=".form-select-sm example" @change="getQuestions($event)" v-model="limit">
              <option selected>Sahifalar soni</option>
              <option v-for="item in pages" :value="item" v-text="item" :selected="limit === item"></option>
            </select>
          </div>
        </div>
      </div>
      <table class="table table-sm">
        <thead class="table-dark table-sm">
        <tr>
          <th scope="col" class="text-center"><i class="bi bi-sort-numeric-down-alt"></i></th>
          <th scope="col" class="text-center"><i class="bi bi-calendar3"></i></th>
          <th scope="col" class="float-left">Savol</th>
          <th scope="col" class="float-left">To'g'ri javob</th>
          <th scope="col" class="text-center"><i class="bi bi-image"></i></th>
          <th scope="col" style="width: 16%; text-align: center;"><i class="bi bi-diagram-3"></i></th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(question) in questions">
          <td width="3%" class="text-center align-middle" v-text="question.id"></td>
          <td width="8%" class="text-center  align-middle" v-text="question.create"></td>
          <td class="float-left  align-middle">{{ question.question }} <i class="bi bi-arrow-right"></i></td>
          <td class="float-left  align-middle" v-text="question.answer[0]"></td>
          <td width="1%" class="text-center align-middle">
            <b v-if="question.file !== ''">
              <a :href="question.file" target="_blank" v-if="question.type === 'image'"><img :src="question.file" alt="rasm" class="img-thumbnail"></a>
              <vue-plyr v-if="question.type === 'audio'">
                <audio>
                  <source :src="question.file" type="audio/mp3"/>
                </audio>
              </vue-plyr>
            </b>
            <b v-else class=""></b>
          </td>
          <td width="8%" class="text-center align-middle">
            <div class="form-check form-check-inline" v-for="(locale, langKey) in availableLocales" :key="question.id">
              <input class="form-check-input" type="radio" :name="'langRadio'+question.id" :id="'inlineRadio_'+locale.code+'_'+question.id" @click="changeLocale(langKey, question.id)"
                     :checked="question.lang === langKey">
              <label class="form-check-label" :for="'inlineRadio_'+locale.code+'_'+question.id">
                <img :src="'https://flagicons.lipis.dev/flags/4x3/' + locale.code + '.svg'" :alt="locale.name" style="width: 20px; height: 20px; margin-right: 5px;">
              </label>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
      <div class="container d-flex align-items-center justify-content-center">
        <nav>
          <ul class="pagination pagination-sm">
            <li v-for="(item) in links" :class="[ 'page-item',
                         (item.url === null ? 'disabled' : ''),
                         (item.active === true ? 'active' : ''),
                         ]">
              <button class="page-link" v-html="item.label" @click="pagination(item.url)"></button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>
<script>
import Swal from "sweetalert2";

export default {
  middleware: 'isAuthenticated',
  name      : 'trade',
  data() {
    return {
      questions : {},
      pages     : [5, 10, 20, 50, 100, 150, 200, 250],
      limit     : 50,
      nexturl   : null,
      requestUrl: 'admin/question/lang/all',
      links     : [],
      name      : '',
      answer    : '',
      type      : '',
    }
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales;//.map((l) => l.code)
    }
  },
  mounted() {
    this.getQuestions()
  },
  methods: {
    async getQuestions(e, limit) {
      this.$loading.show()
      if (e) {
        e.preventDefault()
      }
      await this.$axios.get(this.requestUrl + '?name=' + this.name + '&answer=' + this.answer + '&limit=' + this.limit).then((res) => {
        this.questions = res.data.data.data;
        this.links     = res.data.data.links
      }).catch((error) => {
        this.has_error = true
        console.log(error)
      }).finally(() => {
        this.$loading.hide()
      });
    },
    deleteQuestion(id, name) {
      Swal.fire({
        title             : "O'chirasizmi?",
        html              : `<b>${name}</b> ni o'chirmoqchimisiz?`,
        icon              : 'warning',
        showCancelButton  : true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor : '#d33',
        confirmButtonText : "Ha o'chiraman",
        cancelButtonText  : "Yo'q hozir emas"
      }).then((result) => {
        if (result.isConfirmed) {
          this.$loading.show()
          this.$axios.post('admin/question/delete', {
            id: id
          }).then((response) => {
            this.SwalMixin(response.data.data.message)
            this.getQuestions()
          }).catch((error) => {
            console.log(error)
          }).finally(() => {
            this.$loading.hide()
          });
        }
      })
    },
    pagination($url) {
      this.$loading.show()
      this.$axios.get($url).then((res) => {
        this.questions = res.data.data.data;
        this.links     = res.data.data.links
        window.scrollTo({top: 0, behavior: 'smooth'});
      }).catch((error) => {
        this.has_error = true
      }).finally(() => {
        this.$loading.hide();
      })
    },
    changeLocale(lang, id) {
      this.$i18n.locale = lang
      this.$axios.post('admin/question/lang/update', {
        id  : id,
        lang: lang
      }).then((response) => {
        this.SwalMixin(response.data.data.message)
      }).catch((error) => {
        console.log(error)
      }).finally(() => {
        this.$loading.hide()
      });
    },
  }
}
</script>
