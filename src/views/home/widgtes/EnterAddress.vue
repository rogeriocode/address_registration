<template>
  <div>
    <section class="text-center">
      <h2 class="my-8" v-show="!edit">{{ $t("SEARCH_ADDRESS") }}</h2>
      <v-row class="justify-center">
        <v-col cols="6" :md="edit ? 8 :4">
          <v-text-field
            v-model="zipCode"
            prepend-inner-icon="mdi-map"
            outlined
            v-mask="'##.###.###'"
            rounded
            dense
            :label="$t('TYPE_YOUR_ZIP_CODE')"
          ></v-text-field>
        </v-col>
        <v-col cols="auto">
          <v-btn
            rounded
            :disabled="zipCode.length !== 10"
            color="primary"
            depressed
            @click="validateShippingzipCode()"
          >
           {{ buttonLabel }}
          </v-btn>
        </v-col>
      </v-row>
    </section>
  </div>
</template>

<script lang="ts">
import {
  Component, Vue, Emit, Prop,
} from 'vue-property-decorator';
import { i18n } from '@/plugins/i18n';
import { namespace } from 'vuex-class';

const someModule = namespace('addressStore');

@Component
export default class EnterAddress extends Vue {
  @someModule.Action('fetchAddress') fetchAddress!: (zipCode: string) => void;
  @Prop(Boolean) edit?: boolean;
  @Emit()
  registerAddress(zipCode: string) {
    return zipCode;
  }

  zipCode = '';
  validateShippingzipCode() {
    const emitRegisterAddress = this.edit ? this.fetchAddress : this.registerAddress;
    emitRegisterAddress(this.zipCode);

    if (!this.edit) this.zipCode = '';
  }

  get buttonLabel() {
    return this.edit ? i18n.t('TO_UPDATE') : i18n.t('REGISTER');
  }
}
</script>
