const firebaseConfig = {
  apiKey: "AIzaSyBw1CySuUBoim81UZWLv5KKAVpKPCHBhRE",
  authDomain: "madlib2.firebaseapp.com",
  projectId: "madlib2",
  storageBucket: "madlib2.appspot.com",
  messagingSenderId: "463411147442",
  appId: "1:463411147442:web:fe12ceda49899cf3430fab"
};

  const app = firebase.initializeApp(firebaseConfig);
  var db = firebase.firestore();
  console.log("firebase setup complete!");

// function to print the madlib

function printMadlib() {
var noun = document.getElementById("noun").value;
var adjective = document.getElementById("adjective").value;
var verb = document.getElementById("verb").value;
var verb_2 = document.getElementById("verb_2").value;
var sentence = "<p>" + "The law of inertia; also known as <i>" + noun + "</i> third law of motion is most <i>" + adjective  + "</i> in everyday life. It states that action and reaction are equal and opposite. This means that if an object is <i>" + verb + "</i> against a wall, it will <i>" + verb_2 + "</i> back with an equal force in the opposite direction." + "</p>";
  document.getElementById("output").innerHTML= sentence;
}

var sentence = document.getElementById("sentence").innerHTML;
console.log("sentence: " + sentence);
// function to save the madlib

function saveMadlib() {
  console.log("saveMadlib() called ");
  var storyData = createMadlib();
db.collection("madlibs").doc(storyData.storyName).set(storyData);
  alert(storyData.storyName + " saved to database");
}









