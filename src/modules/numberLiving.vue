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
import gsap from 'gsap'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Number',

  computed: {
    ...mapState('number', [
      'container',
      'number',
      'end_number',
      'max_number',
      'prefix_number',
      'current_number',
      'rolling',
      'array_offset_number'
    ]),

    number_slot: ({ end_number, max_number }) => end_number <= max_number ? end_number.toString().length : max_number.toString().length,

    number_list: () => Array.from(Array(10).keys()),

    running: ({ end_number }) => {
      const arr = [];

      for (let i = 0; i < end_number.toString().length; i++) {
        arr.push(gsap.timeline({ defaults: {duration: 0, ease: 'none'}}));
      }
      return arr;
    },
  },

  methods: {
    ...mapActions('dashbroad', [
      'addLuckyNumber',
    ]),

    rollToNumber () {
      const vm = this;
      const time = `${new Date().toLocaleTimeString()} ${new Date().toLocaleDateString()}`;
      const dashbroad = {
        number: vm.prefix_number ? vm.prefix_number+vm.current_number : vm.current_number,
        time,
      };

      vm.running.forEach(async (item, idx) => {
        const eleRotation = vm.$el.getElementsByClassName('boxNumber__rotationNumber');
        const index = vm.current_number[idx];
        const angle = vm.array_offset_number[index];
        const posEgde = angle - 180;
        const pos = angle;
        const delay = (vm.end_number.toString().length - 1 - idx) * 700;

        await new Promise((res, rej) => setTimeout(res, delay));
        item.pause();
        gsap.fromTo(eleRotation[idx], { rotateX: posEgde }, { rotateX: pos, duration: 2 });
      });

      this.addLuckyNumber(dashbroad);
    },
  },

  watch: {
    rolling (value) {
      if ( !value ) {
        return;
      }
      
      const eleRotation = this.$el.getElementsByClassName('boxNumber__rotationNumber');

      this.running.forEach((item, idx) => {
        item.play();
        item.fromTo(eleRotation[idx], { rotateX: 0 }, { rotateX: 360, repeat: -1, duration: 0.5 });
      });
    },

    current_number (value) {
      value !== 0 && this.rollToNumber();
    }
  }
}
</script>