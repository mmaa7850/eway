<template>
  <div class="wrap">
    <div class="header">
      <div class="mx-4">
        <div class="header-wrap d-flex flex-column align-items-center">
          <div class="header-title">
            <h1>
              <p class="text-center">There is no one</p>
              <p class="text-center">who loves pain</p>
            </h1>
          </div>
          <div class="header-button text-center">
            <button type="button" class="btn btn-smooth">FORM</button>
          </div>
          <div class="header-notice w-100">
            <img src="@/assets/images/sup.svg" alt="sup" class="sup">
            <img src="@/assets/images/paddle.svg" alt="paddle" class="paddle">
            <img src="@/assets/images/bubble-1.svg" alt="bubble" class="bubble-1">
            <img src="@/assets/images/bubble-2.svg" alt="bubble" class="bubble-2">
            <img src="@/assets/images/sup-orange.svg" alt="sup-orange" class="sup-orange">
            <img src="@/assets/images/firework.svg" alt="firework" class="firework">
            <div class="notice-title d-flex align-items-center justify-content-center">
              <img src="~@/assets/images/cactus.svg" alt="cactus">
              <h2>
                paragraph
              </h2>
              <img src="~@/assets/images/cactus.svg" alt="cactus">
            </div>
            <div class="notice-content-1">
              <ul>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              </ul>
            </div>
            <div class="notice-title d-flex align-items-center justify-content-center">
              <img src="~@/assets/images/cactus.svg" alt="cactus">
              <h2>
                paragraph
              </h2>
              <img src="~@/assets/images/cactus.svg" alt="cactus">
            </div>
            <div class="notice-content-2">
              <ul>
                <li>Quisque sodales leo <span>vitae vulputate auctor.</span></li>
                <li>Proin ac justo ut nisl tincidunt imperdiet.Maecenas viverra libero a pellentesque blandit.</li>
                <li>Cras tristique tellus id leo bibendum, eu dapibus nisl accumsan.</li>
                <li>Donec ultrices sapien <span>vitae leo venenatis ullamcorper.</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="wave" id="wave">
    </div>
    <section class="form" id="form">
      <div class="mx-4">
        <Form></Form>
      </div>
    </section>
    <section class="sand">
      <div class="sand-wrap d-flex flex-wrap">
        <Medal></Medal>
      </div>
    </section>
    <section class="tower">
      <div class="tower-wrap d-flex justify-content-center">
        <div class="tower-text-wrap d-flex flex-column">
          <div class="tower-text d-flex-flex-column text-center">
            <p>13.32</p>
            <p>who seeks after it and</p>
            <p>wants to have it</p>
          </div>
        </div>
      </div>
      <div class="tower-img text-center">
        <img src="@/assets/images/tower.svg" alt="tower">
      </div>
    </section>
    <footer class="shop">
      <div class="shop-wrap d-flex flex-column align-items-center">
        <div class="shop-title text-center">
          <h2>
            <p>Neque porro quisquam</p>
            <p>est qui dolorem!</p>
          </h2>
        </div>
        <img src="@/assets/images/market.svg" alt="market">
      </div>
    </footer>
  </div>
</template>

<script>
import Medal from '@/components/Medal.vue';
import Form from '@/components/Form.vue';

export default {
  components: {
    Medal,
    Form,
  },
  mounted() {
    const btn = document.querySelector('.btn-smooth');
    btn.addEventListener('click', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const form = document.getElementById('form');
      const formPosition = form.getBoundingClientRect().top;
      const offsetPosition = formPosition + window.pageYOffset + 40;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    },
  },
  unmounted() {
    window.removeEventListener('click', this.handleScroll());
  },
};
</script>
