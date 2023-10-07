// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
//function whent the empty heart is clicked
document.addEventListener('DOMContentLoaded', () => {
 //selecting hearts
function liking(){
  
  const emptyHearts = document.querySelectorAll('span.like-glyph')
   console.log(emptyHearts)
  emptyHearts.forEach(emptyHeart => {
    emptyHeart.addEventListener('click', (e) => {
      console.log(e.target.innerText)
      const icon = e.target.innerText
      mimicServerCall()
        .then(() => {
          //on successfull click on the empty heart
          console.log(emptyHeart.innerText)
          if(emptyHeart.innerText === EMPTY_HEART){
            console.log('empty')
            emptyHeart.className = "activated-heart";
            emptyHeart.innerText = FULL_HEART;
          }else {
            emptyHeart.className = "";
            emptyHeart.innerText = EMPTY_HEART;
          console.log('full')
          }
          // if(icon === EMPTY_HEART){
          //   console.log('empty')
          //   icon.className = "activated-heart";
          // icon.innerText=FULL_HEART;
          // }else {
          //  icon.className = "";
          // icon.textContent= EMPTY_HEART;
          // console.log('full')
          // }

          
          
          
          
          
        })
        //on error response display error modal for 3 seconds
        .catch(()=>{
          const errorModal = document.getElementById('modal')
          errorModal.classList.remove("hidden");
          const errorMessage = document.querySelector('#modal-message');
          errorMessage.textContent='Error: request to like failed';
          setTimeout(()=>{
            errorModal.classList.add('hidden')
          },3000)

        })
    })
  });
}
liking()

  //clicking the full heart(unliking)
  // function unliking(){
  //   // document.querySelector('.like-glyph activated-heart').addEventListener('click',()=>{
  //     const likes = document.getElementsByClassName('activated-heart');
  //     console.log(likes)

  //     likes.forEach(like => {
  //       like.addEventListener('click', () => {
  //         like.classList.remove('activated-heart');
  //         like.innerText=EMPTY_HEART
  //       })
  //     });
  //   // })
    
  //   // fullHearts.forEach(fullHeart => {
  //   //   console.log(fullHeart.textContent)
  //   //   fullHeart.addEventListener('click',()=>{
  //   //     mimicServerCall()
  //   //       .then(()=>{
  //   //         fullHeart.classList.remove('activated-heart');
  //   //         fullHeart.textContent = EMPTY_HEART;
  //   //       })
  //   //       .catch(()=>{
  //   //         const errorModal = document.getElementById('modal')
  //   //         errorModal.classList.remove("hidden");
  //   //         const errorMessage = document.querySelector('#modal-message');
  //   //         errorMessage.textContent='Error: request to unlike failed';
  //   //         setTimeout(()=>{
  //   //           errorModal.classList.add('hidden')
  //   //         },3000)
  //   //       })
  //   //   })
  //   // });
  // }  
  // unliking()
})




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
