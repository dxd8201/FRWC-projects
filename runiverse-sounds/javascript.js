console.log("hellow")

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return; //stops the function from running if there is no audio.
    audio.currentTime = 0; //Rewind the function to the start. Allows sound to be played rapidly.
    audio.play();
    key.classList.add('playing');
  }
  
  function removeTransition (e) {
    if(e.propertyName !== 'transform') return; //Skip it if not a transform.
    this.classList.remove('playing');
    console.log(e);
  }
  
  const keys = document.querySelectorAll('.key');
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  
  //listens for a keydown event in the window.
  //when that event triggers, it runs the playSound function
  window.addEventListener('keydown', playSound);