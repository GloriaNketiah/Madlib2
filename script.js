const firebaseConfig = {
    apiKey: "AIzaSyBw1CySuUBoim81UZWLv5KKAVpKPCHBhRE",
    authDomain: "madlib2.firebaseapp.com",
    projectId: "madlib2",
    storageBucket: "madlib2.appspot.com",
    messagingSenderId: "463411147442",
    appId: "1:463411147442:web:fe12ceda49899cf3430fab"
  };

  const app = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  console.log("firebase setup complete!");

// function to print the madlib

function printMadlib() {
var noun = document.getElementById("noun").value;
var adjective = document.getElementById("adjective").value;
var verb = document.getElementById("verb").value;
var verb_2 = document.getElementById("verb_2").value;
var sentence = "<p>" + "The law of inertia; also known as <i>" + noun + "</i> third law of motion is most <i>" + adjective  + "</i> in everyday life. It states that action and reaction are equal and opposite. This means that if an object is <i>" + verb + "</i> against a wall, it will <i>" + verb_2 + "</i> back with an equal force in the opposite direction." + "</p>";
  document.getElementById("output").innerHTML= sentence;
  storyName = document.getElementById("storyName").value;
  console.log ("storyName: " + storyName);
}

function getstoryData() {
  var storyName = document.getElementById("storyName").value = "storyName";
  console.log ("storyName: " + storyName);
  var noun = document.getElementById("noun").value;
  var adjective = document.getElementById("adjective").value;
  var verb = document.getElementById("verb").value;
  var verb_2 = document.getElementById("verb_2").value;
  var sentence = "<p>" + "The law of inertia; also known as <i>" + noun + "</i> third law of motion is most <i>" + adjective  + "</i> in everyday life. It states that action and reaction are equal and opposite. This means that if an object is <i>" + verb + "</i> against a wall, it will <i>" + verb_2 + "</i> back with an equal force in the opposite direction." + "</p>";
  
  var storyData = {
    timestamp: Date.now(),
    sentence: sentence,
    noun: noun,
    adjective: adjective,
    verb: verb,
    verb_2: verb_2,
    storyName: storyName,
  }
  return storyData;
}

// function to save the madlib

function saveMadlib() {
  console.log("saveMadlib() called ");
  storyName = document.getElementById("storyName").value;
  console.log ("storyName: " + storyName);
  let storyData = getstoryData();
db.collection("madlibs").doc(storyName).set(storyData);
  alert(storyData.storyName + " saved to database");
}
// function to retrieve the madlib
function retrieveMadlib() {
  console.log("retrieveMadlib() called ");
  var storyName = prompt("Enter the name of the story you want to look up: ");
  console.log ("storyName: " + storyName);
  db.collection("madlibs")
    .doc(storyName)
    .get()
    .then((doc) => {
      if (doc.exists) {
        console.log("Document data:", getstoryData());
        let storyData = getstoryData();
        document.getElementById("output").innerHTML = storyData.sentence;

      } else {
        console.log("No such document!");
        document.getElementById("output").innerHTML = "Story not found!";

      }
    })
    .catch((error) => {
      console.log("Error getting document:", error);
      document.getElementById("output").innerHTML = "Story not found!";

    });
}
// function to edit the madlib
function editMadlib() {
  console.log("editMadlib() called ");
  var storyName = prompt("Enter the name of the story you want to edit: ");
  db.collection("madlibs")
    .doc(storyName)
    .get()
    .then((doc) =>{
      if (doc.exists) {
        console.log("Document data: ", getstoryData());
        let storyData = getstoryData();
        console.log("storyData.noun: ", storyData.noun)
        document.getElementById("noun").value = storyData.noun;
        document.getElementById("adjective").value = storyData.adjective;
        document.getElementById("verb").value = storyData.verb;
        document.getElementById("verb_2").value = storyData.verb_2;
        document.getElementById("storyName").value = storyData.storyName;
        document.getElementById("output").innerHTML = storyData.sentence;
      } else {
        console.log("No such document!");
        document.getElementById("output").innerHTML = "Story not found!";
      }
    })
    .catch((error) => {
      console.log("Error getting document:", error);
      document.getElementById("output").innerHTML = "Story not found!";
    });
}

// function to delete the madlib
function deleteMadlib() {
  console.log( "deleteMadlib() called ");

  var storyName = prompt("Enter the name of the story you want to delete: ");
  db.collection("madlibs")
    .doc(storyName)
    .get()
    .then((doc) => {
      if (doc.exists) {
        console.log("Document data:", getstoryData());
        let storyData = getstoryData();
        document.getElementById("output").innerHTML = storyData.storyName + "successfully deleted!";
        db.collection("madlibs").doc(storyName).delete();

      } else {
        console.log("No such document!");
        document.getElementById("output").innerHTML = "Story not found!";
      }
    })
    .catch((error) => {
      console.log("Error getting document:", error);
      document.getElementById("output").innerHTML = "Story not found!";
    });
}












