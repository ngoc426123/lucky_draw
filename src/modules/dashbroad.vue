<template>
  <div
    class="dashbroad box"
    :class="{
      'open': is_show_dashbroad
    }"
  >
    <div class="box__content no-padding">
      <table>
        <thead>
          <tr>
            <th>Stt</th>
            <th>Lucky Number</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) in lucky_number_array"
            :key="index"
          >
            <td v-text="index + 1"></td>
            <td v-text="item.number"></td>
            <td v-text="item.time"></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="box__footer in-right">
      <Button type="icon" size="xs" v-on:click="onClickClearDashbroad"><span class="icon icon-clear"></span></Button>
    </div>
  </div>
</template>

<script>
import Button from '../components/button.vue'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Dashbroad',

  components: {
    Button
  },

  computed: {
    ...mapState('dashbroad', [
      'is_show_dashbroad',
      'lucky_number_array'
    ]),
  },

  methods: {
    ...mapActions('dashbroad', [
      'clearDashbroad'
    ]),

    onClickClearDashbroad () {
      this.clearDashbroad();
    }
  }
}
</script>

<style lang="scss" scoped>
.box__content {
  max-height: 450px;
  overflow: hidden;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background: #adadad;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #757575;
  }
}

.dashbroad {
  width: 100%;
  max-width: 670px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 21;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: all 0.2s ease;

  &.open {
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }
}

table {
  width: 100%;

  tr {
    th {
      padding:15px 20px 20px;
      font-weight: bold;
      font-size: 18px;
      text-align: left;
      color: #ffffff;
      background-color: #19bdb9;
      border-bottom: 1px solid rgb(71, 71, 71);
      position: sticky;
    }

    td {
      padding: 15px 20px;
      font-size: 18px;
      border-bottom: 1px solid #cacaca;
    }

    th:last-child,
    td:last-child {
      text-align: right;
    }

    &:nth-child(even) {
      td {
        background-color: #e6e6e6;
      }
    }

    &:last-child {
      td {
        border-bottom: none;
      }
    }
  }
}
</style>