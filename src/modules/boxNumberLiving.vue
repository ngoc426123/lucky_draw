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
      'is_rolling',
      'is_prevent_fast_spin',
    ]),

    ...mapState('screen', [
      'is_edit_program',
    ]),

    ...mapState('dashbroad', [
      'is_show_dashbroad',
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
      'updateIsPreventFastSpin',
    ]),

    ...mapActions('dashbroad', [
      'updateIsShowDashbroad'
    ]),
  },

  created () {
    this.setupNumber();
  },

  mounted () {
    document.addEventListener('keyup', async (key) => {
      if ( this.is_edit_program && this.is_transition ) {
        return;
      }

      if ( key.key === 'Enter' ) {
        if ( this.is_rolling  ) {
          if ( !this.is_prevent_fast_spin ) {
            this.updateIsPreventFastSpin(true);
            await new Promise((reslove, reject) => {setTimeout(reslove, 300)});
            this.getNumber();
            this.rollNumber(false);
            await new Promise((reslove, reject) => {setTimeout(reslove, 2500)});
            this.updateIsPreventFastSpin(false);
          }
        } else {
          this.rollNumber(true);
          this.updateIsPreventFastSpin(true);
          await new Promise((reslove, reject) => {setTimeout(reslove, 2000)});
          this.updateIsPreventFastSpin(false);
        }
      }

      if ( key.key === 'F10' && key.ctrlKey ) {
        if ( !this.is_show_dashbroad ) {
          this.openOverlay(true);
          this.updateIsShowDashbroad(true);
        } else {
          this.openOverlay(false);
          this.updateIsShowDashbroad(false);
        }
      }
    });
  }
}
</script>