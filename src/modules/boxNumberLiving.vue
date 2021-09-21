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
    ...mapState([
      'is_transition',
    ]),

    ...mapState('number', [
      'number',
      'prefix_number',
      'rolling',
    ]),

    ...mapState('screen', [
      'is_edit_program',
    ]),
  },

  methods: {
    ...mapActions('overlay', [
      'openOverlay'
    ]),

    ...mapActions('number', [
      'updateIsEditNumber',
      'setupNumber',
      'rollNumber',
      'getNumber',
    ]),
  },

  created () {
    this.setupNumber();
  },

  mounted () {
    document.addEventListener('keyup', (key) => {
      if ( this.is_edit_program && this.is_transition ) {
        return;
      }

      switch (key.key) {
        case 'Enter':
          if ( this.rolling ) {
            this.rollNumber(false);
            this.getNumber();
          } else {
            this.rollNumber(true);
          }
          break;

        default:
          break;
      }
    });
  }
}
</script>