<template>
  <Form class="d-flex flex-column justify-content-center align-items-center w-100" v-slot="{ errors }" @submit="onSubmit">
    <div class="form-header d-flex align-items-center">
      <div class="form-title">
        <h2 class="text-center">FORM</h2>
      </div>
      <img src="@/assets/images/turtle.svg" alt="turtle">
    </div>
    <div class="form-content w-100">
      <div class="store">
        <label for="selectStore">store<span>*</span></label>
        <Field name="store" id="store" type="text" v-model="inputValue" class="inputStore" :rules="isStoreRequired" placeholder="placeholder text" :class="{ 'is-invalid': errors['store']}" :value="inputValue"></Field>
        <ErrorMessage name="store"></ErrorMessage>
          <ul class="ulShow">
            <a href="#" v-for="item in filter" :key="item" @click.prevent="inputValue = item.store">
              <li>{{item.store}}</li>
            </a>
            <!-- <a href="#" :v-if="isShow"><li>no result</li></a> -->
          </ul>
      </div>
      <div class="name">
        <label for="inputName">name<span>*</span></label>
        <Field
          id="name"
          name="姓名"
          type="text"
          onkeyup="this.value=this.value.replace(/[^\a-\z\A-\Z\u4E00-\u9FA5\s]/g,'');"
          :class="{ 'is-invalid': errors['姓名'] }"
          placeholder="placeholder text"
          :rules="isNameRequired"
        ></Field>
        <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
        <!-- <input type="text" value="please text name"> -->
      </div>
      <div class="phone">
        <label for="inputPhone">phone<span>*</span></label>
        <Field
          id="tel"
          name="電話"
          type="tel"
          maxlength="10"
          onkeyup="value=value.replace(/[^\d]/g,'')"
          :class="{ 'is-invalid': errors['電話'] }"
          placeholder="placeholder text"
          :rules="isPhone"
        ></Field>
        <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
      </div>
      <div class="amount">
        <label for="Amount">Amount of consumption<span>*</span></label>
        <Field
          id="amount"
          name="數量"
          type="number"
          :class="{ 'is-invalid': errors['數量'] }"
          placeholder="placeholder text"
          onkeyup="value=value.replace(/[^\d]/g,'')"
          min="0"
          :rules="isAmountRequired"
        ></Field>
        <ErrorMessage name="數量" class="invalid-feedback"></ErrorMessage>
      </div>
      <div class="payment">
        <label for="selectPayment">Payment<span>*</span></label>
        <Field name="payment" id="payment" as="select" :class="{ 'is-invalid': errors['payment']}" :rules="isPaymentRequired">
          <option value="" disabled>please choose</option>
          <option value="Digital payment">Digital payment</option>
          <option value="ATM">ATM</option>
        </Field>
        <ErrorMessage name="payment" class="invalid-feedback"></ErrorMessage>
      </div>
    </div>
    <div class="form-button text-center" v-if="state === 'not submit'">
      <button class="btn" type="submit">Submit</button>
    </div>
    <div class="form-button text-center" v-if="state === 'success'">
      <span class="btn success"><img src="@/assets/images/success.svg" alt="success">success</span>
    </div>
    <div class="form-button text-center" v-if="state === 'failure'">
      <span class="btn failure"><img src="@/assets/images/failure.svg" alt="failure">failure</span>
    </div>
    <p v-if="state === 'failure'">This person does not exist</p>
    </Form>
</template>

<script>
export default {
  data() {
    return {
      dataList: [
        { store: 'store1' },
        { store: 'store2' },
        { store: 'store3' },
      ],
      user: {
        name: 'BOOK',
        phone: '',
        amount: '',
        payment: '',
      },
      inputValue: '',
      state: 'not submit',
      list: '',
    };
  },
  mounted() {
    window.addEventListener('click', (e) => {
      const input = document.querySelector('.inputStore');
      const ul = document.querySelector('.ulShow');
      if (e.target.id === 'store') {
        input.classList.add('inputShow');
        ul.style.display = 'block';
      } else {
        input.classList.remove('inputShow');
        ul.style.display = 'none';
      }
    });
  },
  methods: {
    isPhone(value) {
      const number = /^[0-9]{10}$/g;
      return number.test(value) ? true : 'required';
    },
    isStoreRequired(value) {
      if (!value) {
        return 'required';
      }
      return true;
    },
    isNameRequired(value) {
      if (!value) {
        return 'required';
      }
      return true;
    },
    isAmountRequired(value) {
      if (!value) {
        return 'required';
      }
      return true;
    },
    isPaymentRequired(value) {
      if (!value) {
        return 'required';
      }
      return true;
    },
    onSubmit() {
      const name = document.getElementById('name').value;
      if (name !== this.user.name) {
        this.state = 'failure';
      } else {
        this.state = 'success';
      }
    },
  },
  computed: {
    filter() {
      return this.dataList.filter((item) => item.store.match(this.inputValue));
    },
  },
  unmounted() {
    window.removeEventListener('click');
  },
};
</script>
