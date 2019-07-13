<template>
  <div class="timer">
    <span class="digital-font">{{ min }}</span>
    <span class="digital-font">:</span>
    <span class="digital-font">{{ sec }}</span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { toMinSecArray } from "../utilities";

@Component
export default class TimeView extends Vue {
  @Prop() public seconds!: number;

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
</style>
