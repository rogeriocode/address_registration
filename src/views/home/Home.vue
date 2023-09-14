<template>
  <v-container>
    <enter-address></enter-address>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import EnterAddress from './widgtes/EnterAddress.vue';

@Component({
  components: {
    EnterAddress,
  },
})
export default class Home extends Vue {

}
</script>
