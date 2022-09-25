<template>
  <div class="medal medal-green" v-for="item in green" :key="item.en">
    <span>{{item.en}}</span>
    <img src="@/assets/images/medal-green.svg" alt="medal-green">
    <div class="medal-number">
      <p>{{item.num}}</p>
    </div>
    <div class="medal-text">
      <p>{{item.text}}</p>
    </div>
  </div>
  <div class="medal medal-blue" v-for="item in blue" :key="item.en">
    <span>{{item.en}}</span>
    <img src="@/assets/images/medal-blue.svg" alt="medal-blue">
    <div class="medal-number">
      <p>{{item.num}}</p>
    </div>
    <div class="medal-text">
      <p>{{item.text}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      green: [
        { en: 'A', num: 'ONE', text: 'dehumidifier' },
        { en: 'B', num: 'ONE', text: 'range hood' },
        { en: 'C', num: 'ONE', text: 'vacuum cleaner' },
      ],
      blue: [
        { en: 'D', num: 'ONE', text: 'toaster' },
        { en: 'E', num: 'ONE', text: 'scale' },
        { en: 'F', num: 'ONE', text: 'straightening iron' },
        { en: 'G', num: 'FIVE', text: 'vacuum cleaner' },
        { en: 'H', num: 'TEN', text: 'rice cooker' },
      ],
    };
  },
};
</script>
