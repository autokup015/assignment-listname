<template>
  <div class="background">
    <v-row no-gutters>
      <v-col class="mb-10" cols="12" xl="4" lg="4" md="4" sm="12">
        <div class="d-flex justify-center align-center">
          <div class="box mr-5 ml-5">
            <div class="pa-10">
              <h1>New person</h1>
              <br />
              <v-text-field label="Fullname" v-model="fullname"></v-text-field>
              <br />
              <v-btn color="success" @click="Addname">Submit</v-btn>
            </div>
          </div>
        </div>
        <br />
        <div class="d-flex justify-center align-center">
          <div class="box mr-5 ml-5">
            <div class="pa-10">
              <h1>เติมอักษร</h1>
              <br />

              <v-text-field label="Text" v-model="fn_text"></v-text-field>
              <v-text-field
                label="Number"
                type="number"
                v-model="fn_number"
              ></v-text-field>
              <v-text-field
                label="New text"
                v-model="fn_newText"
              ></v-text-field>

              <br />
              <v-btn color="success" @click="fn1">FN1</v-btn>
            </div>
            <p>Result : {{ fn_result }}</p>
          </div>
        </div>
        <br />
        <div class="d-flex justify-center align-center">
          <div class="box mr-5 ml-5">
            <div class="pa-10">
              <h1>Substring</h1>
              <br />

              <v-text-field label="Text" v-model="fn2_text"></v-text-field>
              <v-text-field
                label="Number substring"
                type="number"
                v-model="fn2_num1"
              ></v-text-field>
              <v-text-field label="Show text" v-model="fn2_num2"></v-text-field>

              <br />
              <v-btn color="success" @click="fn2">FN2</v-btn>
            </div>
            <p>Result : {{ fn2_result }}</p>
          </div>
        </div>
      </v-col>
      <v-col class="pl-5 pr-5" cols="12" xl="8" lg="8" md="8" sm="12">
        <Table :data="data" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { database } from "../service/firebase";
import Table from "../components/Table";

const listnameRef = database.ref("/listname");

export default {
  name: "Report",
  data() {
    return {
      data: [],
      fullname: "",
      checkname: "auto",
      text: "",
      // ----- fn1
      fn_text: "",
      fn_number: "",
      fn_newText: "",
      fn_result: "",
      // ----- fn2
      fn2_text: "",
      fn2_num1: 0,
      fn2_num2: 0,
      fn2_result: "",
    };
  },
  components: {
    Table,
  },
  created() {
    listnameRef.on("child_added", (snapshot) => {
      this.data.push({ ...snapshot.val(), key: snapshot.key });
    });
    listnameRef.on("child_changed", (snapshot) => {
      const update = this.data.find((i) => i.key == snapshot.key);
      update.status = snapshot.val().status;
    });
    listnameRef.on("child_removed", (snapshot) => {
      const del = this.data.find((data) => data.key == snapshot.key);
      const remove = this.data.indexOf(del);
      this.data.splice(remove, 1);
    });
  },
  methods: {
    Addname() {
      let data = { fullname: this.fullname, status: false, showdata: true };

      if (this.fullname != "") {
        listnameRef.push(data);
        this.fullname = "";
      } else {
        alert("False");
      }
    },
    fn1() {
      let text = this.fn_text;
      let number = this.fn_number;
      let newtext = this.fn_newText;

      let arrayValue = [];

      for (let i = 0; i < number; i++) {
        arrayValue.push(newtext);
      }

      let newString = arrayValue.join("");
      let showText = `${text}${newString}`;

      let result = showText.slice(0, number);

      this.fn_result = result;
    },
    fn2() {
      let all = this.fn2_text.substring(this.fn2_num1, this.fn2_num2);

      this.fn2_result = all;
    },
  },
};
</script>

<style scoped>
.box {
  background-color: #fff;
  max-width: 700px;
  width: 600px;
  text-align: center;
}
</style>
