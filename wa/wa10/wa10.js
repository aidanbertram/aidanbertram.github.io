//1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

//2. RAW TEXT STRINGS




const storyText ='It was a 94 fahrenheit summer morning, so :insertx: went to his job. When they got to :inserty:, they were happy to see that :insertz:. Bob saw the whole thing, but was not mortified because he was deeply disturbed on the inside, as :insertx: had a really bad morning.'
const insertx = ['Jimmy the hungry','Phillipi','Bernie']
const inserty = ['Alabama','Boulder','your house']
const insertz =['lived happily ever after','trancended his physical form']
//3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener('click', result);

function result() {

  let newStory = storyText;
  const xItem = randomValueFromArray(insertx);
  const yItem = randomValueFromArray(inserty);
  const zItem = randomValueFromArray(insertz);

  newStory = newStory.replaceAll(':insertx:', xItem).replaceAll(':inserty:', yItem).replaceAll(':insertz:', zItem);


  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll('Bob', name);

  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300/14) + ' stone';
    const temperature =  Math.round((94-32)*(5/9)) + ' centigrade';

    newStory = newStory.replace('300 pounds',weight);
    newStory = newStory.replace('94 fahrenheit', temperature);

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}