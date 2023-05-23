const mountainInfo = document.querySelector('#mountainInfo');
const mountainParentCont = document.querySelector('#mountainInfoCards')

window.onload = loadMountains

function loadMountains() {
    mountainInfo.onchange = mountainInfoChange
    for(const mountains of mountainsArray) {
        const mountainOption = document.createElement('option')
        mountainOption.setAttribute('value',mountains.name)
        mountainOption.innerText = mountains.name
        mountainInfo.append(mountainOption)
    }
}

function mountainInfoChange(event) {
    
}