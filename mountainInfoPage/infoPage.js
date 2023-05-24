const mountainInfo = document.querySelector('#mountainInfo');
const mountainParentCont = document.querySelector('#mountainInfoCards')
const resetButton = document.querySelector('#resetSearch')


window.onload = loadMountains
resetButton.onclick = resetSearchResults

function loadMountains() {
    mountainInfo.onchange = mountainInfoChange
    for(const mountains of mountainsArray) {
        const mountainOption = document.createElement('option')
        mountainOption.setAttribute('value',mountains.name)
        mountainOption.innerText = mountains.name
        mountainInfo.append(mountainOption)
    }
}

function resetSearchResults() {
    mountainParentCont.replaceChildren()
}

function mountainInfoChange(event) {
    const selectedMountain = event.target.value
    const matchedMountain = mountainsArray.find(mount => mount.name === selectedMountain)
    let mountainWikiLink;
    if(matchedMountain.name.includes('Mt.')) {
        mountainWikiLink = matchedMountain.name.replace('Mt.','Mount').split(' ').join('_')
    } else {
        mountainWikiLink = matchedMountain.name.split(' ').join('_')
    }
    mountainParentCont.replaceChildren()

        const mountainCard = document.createElement('div')
        mountainCard.setAttribute('class','card')
        const mountainCardImg = document.createElement('img')
        mountainCardImg.setAttribute('class','card-img-top')
        mountainCardImg.setAttribute('src',`/images/${matchedMountain.img}`)
        mountainCardImg.setAttribute('alt',matchedMountain.name)
        const mountainCardBody = document.createElement('div')
        mountainCardBody.setAttribute('class','card-body')
        const mountrainCardTitle = document.createElement('h5')
        mountrainCardTitle.setAttribute('class','card-title')
        mountrainCardTitle.innerText = matchedMountain.name
        const mountainCardDesc = document.createElement('p')
        mountainCardDesc.setAttribute('class','card-text')
        mountainCardDesc.innerText = matchedMountain.desc
        const mountainCardElev = document.createElement('p')
        mountainCardElev.setAttribute('class','card-text')
        mountainCardElev.innerText = `Elevation: ${matchedMountain.elevation} feet`
        const mountainMoreInfoButton = document.createElement('a')
        mountainMoreInfoButton.setAttribute('class','btn btn-info')
        mountainMoreInfoButton.setAttribute('href',`https://en.wikipedia.org/wiki/${mountainWikiLink}`)
        mountainMoreInfoButton.setAttribute('role','button')
        mountainMoreInfoButton.setAttribute('target','_blank')
        mountainMoreInfoButton.innerText = 'More Information'

        mountainCardBody.append(mountrainCardTitle,mountainCardDesc,mountainCardElev,mountainMoreInfoButton)
        mountainCard.append(mountainCardImg,mountainCardBody)
        mountainParentCont.append(mountainCard)
}