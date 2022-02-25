<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button></button>
    <v-btn @click="addData()" elevation="2">เพิ่มข้อมูล</v-btn>
    <v-btn @click="readData()">อ่านข้อมูล</v-btn>
    <button @click="readData()">อ่านข้อมูล</button>
    {{ csDoc }}
    Name <input v-model="name" />
  </div>
</template>

<script>
import { addDoc, collection, getDocs } from "firebase/firestore";
import db from "../plugins/firedaselnit";

export default {
  data() {
    return {
      csDoc: [],
      name: "",
    };
  },
  methods: {
    async addData() {
      try {
        const docRef = await addDoc(collection(db, "csmju"), {
          first: this.name,
          middle: "แซ่เอี้ยว",
          born: 1912,
        });

        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    },
    async readData() {
      this.csDoc = [];
      const querySnapshot = await getDocs(collection(db, "csmju"));
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        this.csDoc.push({ id: doc.id, data: doc.data() });
      });
    },
  },
};
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
