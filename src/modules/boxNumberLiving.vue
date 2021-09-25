<template>
  <div
    class="boxNumber"
    tabindex="0"
    :style="{
      fontFamily: number.font_style,
      fontSize: `${number.font_size}px`,
      lineHeight: `${number.line_height}px`,
      fontWeight: number.font_weight,
      color: number.color,
    }"
  >
    <div class="boxNumber__prefixArea" v-if="prefix_number">
      <PrefixNumber/>
    </div>
    <div class="boxNumber__numberArea">
      <Number />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Number from './numberLiving.vue'
import PrefixNumber from './prefixNumberLiving.vue'

export default {
  name: "BoxNumber",

  components: {
    Number,
    PrefixNumber
  },

  computed: {
    ...mapState('number', [
      'number',
      'prefix_number',
    ]),

    ...mapState('screen', [
      'is_edit_program',
    ]),
  },

  methods: {
    ...mapActions('number', [
      'setupNumber',
    ]),
  },

  created () {
    this.setupNumber();
  },
}
</script>