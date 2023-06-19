let myself = {
  // properties
  myName: "hein htet zan",
  myAge: 28,
  skill: ["html", "css", "js", "php", "sql"],
  job: ["developer", "teacher"],
  // methods
  teach: function () {
    return this.myName + "can teach web development";
  },
  learn() {
    return "hhz can learn web development";
  },
  run() {
    return this.myName;
  },
};

// console.log(myself);

// console.log(myself.myName);
// console.log(myself["myName"]);

// console.log(myself.teach());
// console.log(myself.learn());

console.log(myself.teach());
