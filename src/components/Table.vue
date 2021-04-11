<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Fullname
          </th>
          <th class="text-center"></th>
        </tr>
      </thead>
      <tbody v-for="(item, index) in data" :key="index">
        <tr>
          <td>{{ item.fullname }}</td>
          <td>
            <v-row class="justify-end">
              <v-btn
                color="info"
                outlined
                @click="item.showdata = !item.showdata"
                >Data</v-btn
              >
              <div class="ma-2"></div>
              <v-btn color="error" outlined @click="del(item)">Delete</v-btn>
            </v-row>
          </td>
        </tr>
        <div v-if="!item.showdata">
          <v-container>
            <div
              class="d-flex"
              v-for="(item, index) in item.items"
              :key="index"
            >
              <p>{{ item.text }}</p>
              <div class="ml-5 mr-5">=</div>
              <p>{{ item.date }}</p>
              <div class="ml-5 mr-5">=</div>
              <p>{{ item.time }}</p>
            </div>
            <div class="text-center" v-if="!item.items">
              <h1 style="color: gray">No data</h1>
            </div>
          </v-container>
        </div>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
import { database } from "../service/firebase";

const listnameRef = database.ref("/listname");

export default {
  name: "Table",
  props: {
    data: {},
  },
  methods: {
    del(value) {
      listnameRef.child(value.key).remove();
    },
  },
};
</script>
