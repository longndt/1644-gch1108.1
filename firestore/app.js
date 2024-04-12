const express = require('express');
const db = require("./config.js");
const { collection, doc, getDoc, getDocs, setDoc, updateDoc, deleteDoc } = require('firebase/firestore');
const app = express();
app.use(express.json());

//IMPORTANCE: set collection name
var collectionName = "mobiles";

//READ COLLECTION
app.get('/', async (req, res) => {
   try {
      const collectionRef = collection(db, collectionName);
      const collectionSnap = await getDocs(collectionRef);
      const collectionList = collectionSnap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      res.status(200).send(collectionList);
   } catch (error) {
      console.error(error);
      res.status(500).send("Error loading collection: " + error.message);
   }
});