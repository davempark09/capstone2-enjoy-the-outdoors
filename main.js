const darkModeButton = document.querySelector('#darkMode')
const entirePage = document.querySelector('#entirePage')
darkModeButton.onclick = darkModeToggle

function darkModeToggle() {
    if(entirePage.hasAttribute('data-bs-theme')) {
        entirePage.removeAttribute('data-bs-theme')
        darkModeButton.setAttribute('class','btn btn-dark')
    } else {
        entirePage.setAttribute('data-bs-theme','dark')
        darkModeButton.setAttribute('class','btn btn-light')
    }
}
