<template>
  <v-dialog v-model="syncedVisible" width="500" v-if="syncedSearchAddress">
    <v-card>
      <v-card-title class="text-h5 lighten-2">
        {{ $t("REGISTER_ADDRESS") }}
      </v-card-title>
      <v-card-text class="py-8">
        <template v-for="(value, key, index) in syncedSearchAddress">
          <v-text-field
            v-if="!(typeof value !== 'string')"
            :key="index"
            v-model="syncedSearchAddress[key]"
            :label="labels[key]"
            outlined
            rounded
            dense
            required
          ></v-text-field>
        </template>
      </v-card-text>
      <v-card-actions class="d-flex justify-end pt-6 pb-4 pr-6">
        <v-btn
          color="success"
          class="pa-4"
          rounded
          depressed
          @click="addAddress(), (syncedVisible = false)"
        >
          {{ $t("TO_SAVE") }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import {
  Component, Vue, PropSync, Emit,
} from 'vue-property-decorator';
import { i18n } from '@/plugins/i18n';
import { IAddress } from '../models';

@Component
export default class DialogAddress extends Vue {
  @PropSync('visible', { type: Boolean }) syncedVisible!: boolean;
  @PropSync('searchAddress', { type: Object }) syncedSearchAddress!: IAddress;
  @Emit()
  addAddress() {
    return this.syncedSearchAddress;
  }

  labels: Record<string, string> = {
    title: `${i18n.t('TITLE')}`,
    publicPlace: `${i18n.t('PUBLIC_PLACE')}`,
    complement: `${i18n.t('COMPLEMENT')}`,
    neighborhood: `${i18n.t('NEIGHBORHOOD')}`,
    locality: `${i18n.t('LOCALITY')}`,
    uf: `${i18n.t('UF')}`,
  };
}
</script>
