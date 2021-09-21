<template>
  <div
    class="boxNumber__container"
    :style="{
      background: `linear-gradient(${container.angle}deg, ${container.first_color} 0, ${container.second_color})`,
      border: `${container.border_style} ${container.border_width}px ${container.border_color}`,
    }"
  >
    <div class="boxNumber__number"
      v-for="(item, index) in number_slot"
      :key="index.key"
      :style="{
        background: `linear-gradient(${number.angle}deg, ${number.first_color} 0, ${number.second_color})`,
        border: `${number.border_style} ${number.border_width}px ${number.border_color}`,
      }"
    >
      <div class="boxNumber__rotationNumber">
        <div class="boxNumber__listNumber">
          <span>
            <span
              :style="{ background: `linear-gradient(${number.angle}deg, ${number.first_color} 0, ${number.second_color})` }"
            ><span class="designIcon icon icon-coin"></span></span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Number',

  computed: {
    ...mapState('number', [
      'container',
      'number',
      'end_number',
      'max_number'
    ]),

    number_slot: ({ end_number, max_number }) => end_number <= max_number ? end_number.toString().length : max_number.toString().length,
  },
}
</script>

<style lang="scss" scoped>
.designIcon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>