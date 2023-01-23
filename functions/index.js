/* eslint-disable indent */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
/* eslint-disable max-len */
const functions = require("firebase-functions");
const admin = require("firebase-admin");
require("firebase-functions/logger/compat");
admin.initializeApp();
exports.senderEmailNotification = functions.firestore
  .document("messages/{docId}")
  .onCreate((snap, context) => {
    const data = snap.data();
    // Vérifiez si les données d'entrée sont valides avant de les utiliser pour configurer les options d'email
    if (!data.to || !data.message.subject || !data.message.html) {
      console.log("Données d'entrée non valides. L'email n'a pas été envoyé.");
      return;
    }
    const attachments = [];
    if (data.message.attachment) {
      attachments.push(data.message.attachment);
    }
  });
