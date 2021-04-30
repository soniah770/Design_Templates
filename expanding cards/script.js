  
const panels = document.querySelectorAll('.panel') /*select all content of panel class*/
panels.forEach(panel => {             /*for each class listen remove all the other active and add active the clicked one)*/
       panel.addEventListener('click', () => {
        removeactiveclasses()
        panel.classList.add('active')
    })
})
function removeactiveclasses(){             /* define a function for active class */
panels.forEach(panel =>{
    panel.classList.remove('active')
})
}

