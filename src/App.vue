<template>
  <div class="vcenter">
    <div v-if="isCounting">
      <time-view :seconds="seconds" :flashing="flashing" />
      <b-button rounded @click="onReset">Reset</b-button>
    </div>
    <div v-else>
      <edit-time-view @start="onStart" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TimeView from "./components/TimeView.vue";
import EditTimeView from "./components/EditTimeView.vue";

@Component({
  components: {
    TimeView,
    EditTimeView
  }
})
export default class App extends Vue {
  private seconds: number = 0;
  private isCounting: boolean = false;
  private timer: any;
  private flashing: boolean = false;

  public onStart(sec: number): void {
    this.isCounting = true;
    this.seconds = sec;
    this.timer = setInterval(this.count, 1000);
  }

  private onReset(): void {
    this.seconds = 0;
    this.isCounting = false;
    this.flashing = false;
    this.complete();
  }

  private count(): void {
    if (this.seconds > 1) {
      this.seconds--;
    } else {
      this.seconds = 0;
      this.flashing = true;
      this.playSound();
      this.complete();
    }
  }

  private playSound(): void {
    const audio = new Audio();
    audio.src = "/mobile-phone-ringtone1.mp3";
    audio.play();
  }

  private complete() {
    clearInterval(this.timer);
  }
}
</script>

<style style="scss">
.vcenter {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
