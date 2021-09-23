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
      'is_rolling',
      'array_offset_number',
      'current_rolling_stop_style'
    ]),

    ...mapState('screen', [
      'is_edit_program'
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

    numberLength: ({ end_number }) => end_number.toString().length,
  },

  methods: {
    ...mapActions('dashbroad', [
      'addLuckyNumber',
    ]),

    rollToNumber () {
      const vm = this;
      const time = `${new Date().toLocaleTimeString()} ${new Date().toLocaleDateString()}`;
      const eleNumber = this.$el.getElementsByClassName('boxNumber__number');
      const eleRotation = vm.$el.getElementsByClassName('boxNumber__rotationNumber');
      const dashbroad = {
        number: vm.prefix_number ? vm.prefix_number+vm.current_number : vm.current_number,
        time,
      };

      vm.running.forEach(async (item, idx) => {
        const index = vm.current_number[idx];
        const angle = vm.array_offset_number[index];
        const pos = angle;
        let delay = null;

        switch (vm.current_rolling_stop_style) {
          case 0:
            delay = 0;
            break;

          case 1:
            delay = idx * 700;
            break;

          case 2:
            delay = (vm.numberLength - 1 - idx) * 700;
            break;

          case 3:
            delay = parseInt(Math.random() * (1000 - 300) + 300);
            break;

          case 4:
            delay = Math.sin( Math.PI* ( idx / vm.numberLength )) * 700;
            break;

          case 5:
            delay = 700;
            break;
        
          default:
            break;
        }
        
        await new Promise((res, rej) => setTimeout(res, delay));
        item.pause();
        eleNumber[idx].classList.remove('rolling');
        gsap.to(eleRotation[idx], { rotateX: pos, duration: 2 });
      });

      this.addLuckyNumber(dashbroad);
    },
  },

  watch: {
    is_rolling (value) {
      if ( !value ) {
        return;
      }
      
      const eleNumber = this.$el.getElementsByClassName('boxNumber__number');
      const eleRotation = this.$el.getElementsByClassName('boxNumber__rotationNumber');

      eleNumber.forEach(item => item.classList.add('rolling'));
      this.running.forEach((item, idx) => {
        item.play();
        item.fromTo(eleRotation[idx], { rotateX: 0 }, { rotateX: 360, repeat: -1, duration: 0.5 });
      });
    },

    current_number (value) {
      value !== 0 && this.rollToNumber();
    },

    is_edit_program (value) {
      const eleNumber = this.$el.getElementsByClassName('boxNumber__number');
      const eleRotation = this.$el.getElementsByClassName('boxNumber__rotationNumber');

      eleNumber.forEach(item => item.classList.remove('rolling'));
      gsap.set(eleRotation, { rotateX: 0 });
      value && this.running.forEach((item, idx) => {
        item.pause();
      });
    }
  }
}
</script>