<template>
  <div class="d-flex justify-center align-center background">
    <div class="box mr-5 ml-5">
      <div class="pa-10">
        <h1>Check in</h1>
        <br />
        <v-text-field
          label="Fullname"
          :error-messages="er_fullname"
          :success-messages="ss_fullname"
          v-model="checkname"
        ></v-text-field>
        <br />
        <v-btn color="success" @click="confirm">Submit</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import { database } from "../service/firebase";

const listnameRef = database.ref("/listname");

export default {
  name: "Home",
  data() {
    return {
      data: [],
      checkname: "",
      text: "",
      er_fullname: "",
      ss_fullname: "",
    };
  },
  created() {
    listnameRef.on("child_added", (snapshot) => {
      this.data.push({ ...snapshot.val(), key: snapshot.key });
    });
    listnameRef.on("child_changed", (snapshot) => {
      const update = this.data.find((i) => i.key == snapshot.key);
      update.status = snapshot.val().status;
    });
  },
  watch: {
    alert() {
      setTimeout(() => {
        this.alert = false;
      }, 2000);
    },
  },
  methods: {
    confirm() {
      for (let i = 0; i < this.data.length; i++) {
        const ele = this.data[i];
        if (this.checkname == ele.fullname) {
          this.list();
          this.ss_fullname = "Success :)";
          this.er_fullname = "";
          this.checkname = "";
          break;
        } else {
          this.ss_fullname = "";
          this.er_fullname = "No data";
        }
      }
    },
    list() {
      let index = this.data.find((i) => i.fullname == this.checkname);
      // Date
      var today = new Date();
      var date =
        today.getDate() +
        "/" +
        (today.getMonth() + 1) +
        "/" +
        today.getFullYear();
      var time =
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        // ----
      if (index.status == false) {
        this.text = "เข้างาน";
        let datas = { text: this.text, date: date, time: time };
        let fb = database.ref("listname/" + index.key + "/items");
        fb.push(datas);
        listnameRef.child(index.key).update({
          status: true,
        });
      } else {
        this.text = "ออกงาน";
        let datas = { text: this.text, date: date, time: time };
        let fb = database.ref("listname/" + index.key + "/items");
        fb.push(datas);
        listnameRef.child(index.key).update({
          status: false,
        });
      }
    },
  },
};
</script>

<style scoped>
.box {
  background-color: #fff;
  max-width: 1000px;
  width: 600px;
  text-align: center;
}
</style>
