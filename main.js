function toggleMenu(){
    const toggleMenu = document.querySelector('.toggle')
    const sidebar = document.querySelector('.sidebar')

    toggleMenu.classList.toggle('active')
    sidebar.classList.toggle('active')
}