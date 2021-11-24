function toggleMenu(){
    const toggleMenu = document.querySelector('.toggle')
    const sidebar = document.querySelector('.sidebar')

    toggleMenu.classList.toggle('active')
    sidebar.classList.toggle('active')
}

const backToTopButton = document.querySelector('.back-to-top')

function backToTop(){
  if(window.scrollY >= 750) {
    backToTopButton.classList.add('show')
  } else{
    backToTopButton.classList.remove('show')
  }
}

window.addEventListener('scroll', function(){
    backToTop()
  })