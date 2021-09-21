<template>
  <div
    class="boxNumber__container"
    :style="{
      background: `linear-gradient(${container.angle}deg, ${container.first_color} 0, ${container.second_color})`,
      border: `${container.border_style} ${container.border_width}px ${container.border_color}`,
    }"
  >
    <div
      class="boxNumber__number"
      v-for="(item, index) in number_slot"
      :key="index.key"
      :style="{
        background: `linear-gradient(${number.angle}deg, ${number.first_color} 0, ${number.second_color})`,
        border: `${number.border_style} ${number.border_width}px ${number.border_color}`,
      }"
    >
      <div class="boxNumber__rotationNumber">
        <div class="boxNumber__listNumber">
          <span
            v-for="item in number_list"
            :key="item.key"
          >
            <span
              v-text="item"
              :style="{ background: `linear-gradient(${number.angle}deg, ${number.first_color} 0, ${number.second_color})` }"
            ></span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Number',

  computed: {
    ...mapState('number', [
      'container',
      'number',
      'end_number',
      'max_number',
      'current_number',
      'rolling',
      'array_offset_number'
    ]),

    number_slot: ({ end_number, max_number }) => end_number <= max_number ? end_number.toString().length : max_number.toString().length,

    number_list: () => Array.from(Array(10).keys()),
  },

  methods: {
    ...mapActions('dashbroad', [
      'addLuckyNumber',
    ]),

    async rollToNumber () {
      const vm = this;
      const number = vm.$el.getElementsByClassName('boxNumber__number');
      const time = `${new Date().toLocaleTimeString()} ${new Date().toLocaleDateString()}`;
      const dashbroad = {
        number: vm.current_number,
        time,
      };

      await new Promise((reslove, reject) => {
        number.forEach(async (eleNumber, idx) => {
          const eleRotation = eleNumber.getElementsByClassName('boxNumber__rotationNumber');
          const index = vm.current_number[idx];
          const angle = vm.array_offset_number[index];
          const posEgde = angle - 400;
          const pos = angle;
          const delay = (vm.end_number.toString().length - idx) * 700;

          await new Promise((reslove, reject) => { setTimeout(reslove, 0) });
          eleNumber.classList.remove('rolling');
          eleRotation[0].style.transform = `rotateX(${posEgde}deg)`;
          await new Promise((reslove, reject) => { setTimeout(reslove, 30) });
          eleRotation[0].style.transition = 'all 1.8s ease-out';
          eleRotation[0].style.transform = `rotateX(${pos}deg)`;
        });
        reslove();
      });

      this.addLuckyNumber(dashbroad);
    },
  },

  watch: {
    rolling (value) {
      const number = this.$el.getElementsByClassName('boxNumber__number');

      value && number.forEach(item => item.classList.add('rolling'));
      !value && number.forEach(item => item.getElementsByClassName('boxNumber__rotationNumber')[0].removeAttribute('style'));
    },

    current_number (value) {
      value !== 0 && this.rollToNumber();
    }
  }
}
</script>