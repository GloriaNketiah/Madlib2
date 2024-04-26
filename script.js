function printMadlib() {
var noun = document.getElementById("noun").value;
var adjective = document.getElementById("adjective").value;
var verb = document.getElementById("verb").value;
var verb_2 = document.getElementById("verb_2").value;
var sentence = "<p>" + "The law of inertia; also known as <i>" + noun + "</i> third law of motion is most <i>" + adjective  + "</i> in everyday life. It states that action and reaction are equal and opposite. This means that if an object is <i>" + verb + "</i> against a wall, it will <i>" + verb_2 + "</i> back with an equal force in the opposite direction." + "</p>";
  document.getElementById("output").innerHTML= sentence;
}
