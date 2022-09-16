const stars = document.querySelectorAll('.fa-star')
const emojisEl = document.querySelectorAll('.fa-regular')

 stars.forEach((star, index) => {
    star.addEventListener("click", () => {
        updateRating(index)
    })
 })

 function updateRating(index){
    stars.forEach((star, idx) =>{
        if(idx < index + 1){
            star.classList.add("active")
        }
        else{
            star.classList.remove("active")
        }
    })

    emojisEl.forEach((emoji) =>{
        emoji.style.transform = `translateX(-${index * 50}px)`;
    })
 }