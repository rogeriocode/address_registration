<!-- eslint-disable class-methods-use-this -->
<template>
  <div>
    <dialog-address
      :visible.sync="data.visibleDialogAddAddress"
      :searchAddress.sync="searchAddress"
      @add-address="addAddress"
    />
    <section class="text-center">
      <h2 class="my-8">{{ $t("SEARCH_ADDRESS") }}</h2>
      <v-row class="justify-center">
        <v-col cols="6" md="4">
          <v-text-field
            v-model="data.CEP"
            prepend-inner-icon="mdi-map"
            outlined
            v-mask="'##.###.###'"
            rounded
            dense
            :label="$t('TYPE_YOUR_CEP')"
          ></v-text-field>
        </v-col>
        <v-col cols="auto">
          <v-btn
            rounded
            :disabled="data.CEP.length !== 10"
            color="primary"
            depressed
            @click="fetchAddress(data.CEP), (data.visibleDialogAddAddress = true)"
          >
            {{ $t("REGISTER") }}
          </v-btn>
        </v-col>
      </v-row>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { i18n } from '@/plugins/i18n';
import { namespace } from 'vuex-class';
import DialogAddress from './DialogAddress.vue';
import { IAddress } from '../models';

const someModule = namespace('addressStore');

@Component({
  components: { DialogAddress },
})
export default class EnterAddress extends Vue {
  @someModule.State('searchAddress') searchAddress!: IAddress;
  @someModule.State('address') address!: IAddress[];
  @someModule.Action('fetchAddress') fetchAddress!: any;
  @someModule.Mutation('ADD_ADDRESS') ADD_ADDRESS!: any;
  @someModule.Mutation('SET_SEARCH_ADDRESS') SET_SEARCH_ADDRESS!: any;

  data = {
    CEP: '',
    visibleDialogAddAddress: false,
  };

  addAddress(address: IAddress) {
    let accountAddres = this.address.length;
    // eslint-disable-next-line no-param-reassign
    address.title = `${i18n.t('ADDRESS')} ${accountAddres += 1}`;
    this.ADD_ADDRESS(address);
    this.SET_SEARCH_ADDRESS({});
    this.data.CEP = '';
  }
}
</script>
