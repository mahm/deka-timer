<template>
  <div class="card">
    <div class="card-content">
      <div class="columns is-mobile">
        <div class="column">
          <b-field>
            <b-input placeholder="00" size="is-large" type="number" min="0" max="99" v-model="min"></b-input>
          </b-field>
        </div>
        <div class="column">
          <b-field>
            <b-input placeholder="00" size="is-large" type="number" min="0" max="59" v-model="sec"></b-input>
          </b-field>
        </div>
      </div>
    </div>
    <div class="card-footer">
      <a class="card-footer-item" @click="onStart">Start</a>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from "vue-property-decorator";
import { toSeconds } from "../utilities";

@Component
export default class EditTimeView extends Vue {
  @Prop() public seconds!: number;
  public min: string = "";
  public sec: string = "";

  public onStart() {
    const result: number = toSeconds(this.min, this.sec);
    this.start(result);
  }

  @Emit()
  public start(seconds: number) {}
}
</script>
