<template>
  <div>
    <dialog-address
      :visible.sync="visibleDialogAddAddress"
      :search-address.sync="searchAddress"
      :edit="isEditAddress"
      @add-address="addAddress"
      @edit-address="editAddress"
    />
    <v-container>
      <enter-address @register-address="showAddressByZipCode" />
      <address-list
        :adresses="address"
        @edit-address="showEditAddress"
        @delete-address="deleteAddress"
      />
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";
import EnterAddress from "./widgtes/EnterAddress.vue";
import AddressList from "./widgtes/AddressList.vue";
import DialogAddress from "./widgtes/DialogAddress.vue";
import { IAddress } from "./models";

const someModule = namespace("addressStore");

@Component({
  components: {
    EnterAddress,
    AddressList,
    DialogAddress,
  },
})
export default class Home extends Vue {
  @someModule.State("searchAddress") searchAddress!: IAddress;
  @someModule.State("address") address!: IAddress[];
  @someModule.Action("fetchAddress") fetchAddress!: (CEP: string) => void;
  @someModule.Mutation("ADD_ADDRESS") ADD_ADDRESS!: (address: IAddress) => void;
  @someModule.Mutation("UPDATE_ADDRESS") UPDATE_ADDRESS!: (address: IAddress) => void;
  @someModule.Mutation("DELETE_ADDRESS") DELETE_ADDRESS!: (address: IAddress) => void;
  @someModule.Mutation("SET_SEARCH_ADDRESS") SET_SEARCH_ADDRESS!: (
    address: IAddress | null
  ) => void;

  visibleDialogAddAddress = false;
  isEditAddress = false;
  addressIndex = 0;

  addAddress(address: IAddress) {
    this.ADD_ADDRESS(address);
    this.SET_SEARCH_ADDRESS(null);
  }

  editAddress(address: IAddress) {
    const newAddress = address;
    newAddress.id = this.addressIndex;

    this.UPDATE_ADDRESS(newAddress);
  }

  deleteAddress(address: IAddress) {
    this.DELETE_ADDRESS(address);
  }

  showEditAddress(addressAndIndex: { id: number; address: IAddress }) {
    const { address, id } = addressAndIndex;
    this.isEditAddress = true;
    this.addressIndex = id;

    this.SET_SEARCH_ADDRESS(address);
    this.visibleDialogAddAddress = true;
  }

  showAddressByZipCode(zipCode: string) {
    this.isEditAddress = false;
    this.fetchAddress(zipCode);
    this.visibleDialogAddAddress = true;
  }
}
</script>
