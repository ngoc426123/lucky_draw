<template>
  <div class="boxNumber"
    :style="{
      fontSize: '50px',
      lineHeight: '60px',
      color: number.color,
    }"
    v-on:click="onClickEditNumber"
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
import Number from './numberEditing.vue'
import PrefixNumber from './prefixNumberEditing.vue'

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
    ...mapActions('overlay', [
      'openOverlay'
    ]),

    ...mapActions('number', [
      'updateIsEditNumber',
    ]),

    onClickEditNumber () {
      if ( !this.is_edit_program ) {
        return;
      }

      this.openOverlay(true);
      this.updateIsEditNumber(true);
    }
  },
}
</script>

<style lang="scss">
.boxNumber {
  display: flex;
  align-items: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-40%);
  transition: all .3s linear;
  z-index: 10;
  
  .EditLive & {
    cursor: pointer;
  }

  &__prefixArea {
    display: none;
    margin-right: 25px;
  }

  &__prefixArea,
  &__numberArea {
    display: flex;
  }

  &__container {
    display: flex;
    align-items: center;
    padding: 20px;
    border-radius: 15px;
    border: 3px solid #ffffff;
    background: linear-gradient(90deg, #b8c139 0, #7f8c08);
  }

  &__number {
    width: 170px;
    height: 250px;
    margin-right: 20px;
    border: 3px solid #ffffff;
    border-radius: 8px;
    text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.55);
    transition: filter 1.6s linear;
    position: relative;
    overflow: hidden;

    &:last-child {
      border-right: 3px solid #ffffff;
      margin-right: 0;
    }

    &.rolling {
      filter: blur(5px);
    }
  }

  &__rotationNumber {
    width: 0;
    height: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform-style: preserve-3d;
  }

  &__listNumber {
    text-align: center;
    text-transform: uppercase;
    transform: translate(-50%,-50%) rotateY(-90deg);
    transition: all .2s linear;
    transform-style: preserve-3d;
    animation-duration: 2s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;

    & > span {
      width: 0;
      height: 0;
      position: absolute;
      transform-style: preserve-3d;

      &:nth-child(1) {
        transform: rotate(0deg) translate(390px)
      }
      &:nth-child(2) {
        transform: rotate(36deg) translate(390px)
      }
      &:nth-child(3) {
        transform: rotate(72deg) translate(390px)
      }
      &:nth-child(4) {
        transform: rotate(108deg) translate(390px)
      }
      &:nth-child(5) {
        transform: rotate(144deg) translate(390px)
      }
      &:nth-child(6) {
        transform: rotate(180deg) translate(390px)
      }
      &:nth-child(7) {
        transform: rotate(216deg) translate(390px)
      }
      &:nth-child(8) {
        transform: rotate(252deg) translate(390px)
      }
      &:nth-child(9) {
        transform: rotate(288deg) translate(390px)
      }
      &:nth-child(10) {
        transform: rotate(324deg) translate(390px)
      }

      & > span {
        display: block;
        width: 164px;
        height: 244px;
        background: linear-gradient(180deg,#b8c139 0,#7f8c08);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%) rotateY(90deg);
      }
    }
  }
}

@keyframes ani-rolling {
  0% {
    transform: rotateX(0deg)
  }

  to {
    transform: rotateX(1turn)
  }
}
</style>