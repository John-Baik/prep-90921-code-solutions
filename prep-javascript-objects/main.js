const person = {
  firstName: "John",
  lastName: "Baik",
  hobby: "dance"
};
  console.log({person});

var fullName = person.firstName + " " + person.lastName;
  console.log("The person's name is:" + " " + fullName);
person.job = "Video Editor";
  console.log("The person's current job is:" + " " + person.job);
person.previousJob = "Front Desk Worker";
  console.log("The person's previous job is:" + " " + person.previousJob);

console.log("The complete person object:", {person}, person);
