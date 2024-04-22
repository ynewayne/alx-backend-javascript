export default function taskBlock(trueOrFalse) {
  let task = false; // Use let instead of var for block scope
  let task2 = true; // Use let instead of var for block scope

  if (trueOrFalse) {
    task = true; // Assign new value without re-declaring variable
    task2 = false; // Assign new value without re-declaring variable
  }

  return [task, task2];
}
