<template>
  <v-card v-if="adresses.length">
    <v-list subheader two-line>
      <template v-for="(address, index) in adresses">
        <v-divider :key="address.title" v-if="index != 0"></v-divider>
        <v-list-item :key="address.id">
          <v-list-item-content>
            <v-list-item-title> {{ address.title }} </v-list-item-title>
            <v-list-item-subtitle class="pt-2">
              {{ address.publicPlace }}
              {{ address.neighborhood }},
              {{ address.locality }}
              - {{ address.uf }},
              {{ address.complement }}
            </v-list-item-subtitle>
            <v-list-item-subtitle class="pt-2">
             <span>
              {{ $t('CREATED') }} {{ address.createDate.toLocaleString('pt-BR') }}
             </span>
             <span v-show="address.updateDate">
              {{ $t('UPDATED') }} {{ address.updateDate?.toLocaleString('pt-BR') }}
             </span>
            </v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <div class="d-flex items-center flex">
              <v-btn icon @click="editAddress({id: address.id, address})">
                <v-icon color="primary lighten-1">mdi-pencil</v-icon>
              </v-btn>
              <v-btn icon @click="deleteAddress(address)">
                <v-icon color="red lighten-1">mdi-delete</v-icon>
              </v-btn>
            </div>
          </v-list-item-action>
        </v-list-item>
      </template>
    </v-list>
  </v-card>
</template>

<script lang="ts">
import {
  Component, Vue, Prop, Emit,
} from 'vue-property-decorator';
import { IAddress } from '../models';

@Component
export default class AddressList extends Vue {
  @Prop(Array) readonly adresses!: IAddress[];
  @Emit()
  editAddress(address: {id: number, address: IAddress}) {
    return address;
  }
  @Emit()
  deleteAddress(address: IAddress) {
    return address;
  }
}
</script>
