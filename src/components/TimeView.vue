<template>
  <transition appear>
    <div class="timer" :class="{ flashing: flashing }">
      <span class="digital-font">{{ min }}</span>
      <span class="digital-font">:</span>
      <span class="digital-font">{{ sec }}</span>
    </div>
  </transition>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { toMinSecArray } from "../utilities";

@Component
export default class TimeView extends Vue {
  @Prop() public seconds!: number;
  @Prop() public flashing: boolean = false;

  public get min(): string {
    return toMinSecArray(this.seconds)[0];
  }

  public get sec(): string {
    return toMinSecArray(this.seconds)[1];
  }
}
</script>

<style style="scss" scoped>
.timer {
  font-size: 30vw;
  text-align: center;
}
.flashing {
  color: #ff3860;
  animation: flashing 0.2s ease-out;
  animation-iteration-count: 20;
}
@keyframes flashing {
  0% {
    opacity: 0.2;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.2;
  }
}
.v-enter-active {
  transition: opacity 1s, transform 1s;
}
.v-enter {
  opacity: 0;
  transform: translateY(40px);
}
</style>
