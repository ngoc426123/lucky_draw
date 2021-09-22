<template>
  <div
    class="boxNumber__container"
    :style="{
      background: `linear-gradient(${container.angle}deg, ${container.first_color} 0, ${container.second_color})`,
      border: `${container.border_style} ${container.border_width}px ${container.border_color}`,
    }"
  >
    <div class="boxNumber__number"
      v-for="(char, index) in prefix_number"
      :key="index"
      :style="{
        background: `linear-gradient(${number.angle}deg, ${number.first_color} 0, ${number.second_color})`,
        borderTop: `${number.border_style} ${number.border_width}px ${number.border_color}`,
        borderBottom: `${number.border_style} ${number.border_width}px ${number.border_color}`,
        borderLeft: `${number.border_style} ${number.border_width}px ${number.border_color}`,
        borderRight: index === prefix_number.length - 1 && `${number.border_style} ${number.border_width}px ${number.border_color}`,
      }"
    >
      <div class="boxNumber__rotationNumber">
        <div class="boxNumber__listNumber">
          <span><span
            v-text="char"
            :style="{ background: `linear-gradient(${number.angle}deg, ${number.first_color} 0, ${number.second_color})` }"
          ></span></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'PrefixNumber',

  computed: {
    ...mapState('number', [
      'container',
      'number',
      'prefix_number',
    ]),
  },
}
</script>