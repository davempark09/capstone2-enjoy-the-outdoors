const mountainInfo = document.querySelector('#mountainInfo');
const mountainParentCont = document.querySelector('#mountainInfoCards')
const resetButton = document.querySelector('#resetSearch')

//Runs the populating function when page loads
window.onload = loadMountains

//Reset button onclick event
resetButton.onclick = resetSearchResults

//Function to populate mountain options
function loadMountains() {
    mountainInfo.onchange = mountainInfoChange
    for(const mountains of mountainsArray) {
        const mountainOption = document.createElement('option')
        mountainOption.setAttribute('value',mountains.name)
        mountainOption.innerText = mountains.name
        mountainInfo.append(mountainOption)
    }
}

//Function for the reset button
function resetSearchResults() {
    mountainParentCont.replaceChildren()
}

//Function to handle user choice
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
        mountainCard.setAttribute('class','card mountainCards')
        const mountainCardImg = document.createElement('img')
        mountainCardImg.setAttribute('class','card-img-top mountainImages')
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
        mountainMoreInfoButton.setAttribute('class','btn btn-info mb-2 btn-sm')
        mountainMoreInfoButton.setAttribute('href',`https://en.wikipedia.org/wiki/${mountainWikiLink}`)
        mountainMoreInfoButton.setAttribute('role','button')
        mountainMoreInfoButton.setAttribute('target','_blank')
        mountainMoreInfoButton.innerText = 'More Information'
        //Calling sunrise/sunset function
        getSunsetForMountain(matchedMountain.coords.lat, matchedMountain.coords.lng).then(data => {
        const mountainSunrise = document.createElement('p')
        mountainSunrise.setAttribute('class','card-text')
        mountainSunrise.innerHTML = `Sunrise (UTC): ${data.results.sunrise}`
        const mountainSunset = document.createElement('p')
        mountainSunset.setAttribute('class','card-text')
        mountainSunset.innerHTML = `Sunset (UTC): ${data.results.sunset}`
        mountainCardBody.append(mountainSunrise,mountainSunset)
});
        mountainCardBody.prepend(mountrainCardTitle,mountainCardDesc,mountainCardElev,mountainMoreInfoButton)
        mountainCard.append(mountainCardImg,mountainCardBody)
        mountainParentCont.append(mountainCard)
}
//Mountain sunrise/sunset function
async function getSunsetForMountain(lat, lng){
    let response = await fetch(
    `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=today`);
    let data = await response.json();
    return data;
}



