export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  if (trueOrFalse) {
    let task = true; // Replace var with let
    let task2 = false; // Replace var with let
  }

  return [task, task2];
}
