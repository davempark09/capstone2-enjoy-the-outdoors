const locationSearch = document.querySelector('#searchLocation')
const parkTypeSearch = document.querySelector('#searchParkType')
const parkParentCont = document.querySelector('#parkSearchCards')
const viewAllButton = document.querySelector('#viewAllButton')
const resetButton = document.querySelector('#resetSearch')

window.onload = loadSearch
resetButton.onclick = resetSearchResults
function loadSearch() {
    fillLocations()
    fillParkType()
}

function resetSearchResults() {
    parkParentCont.replaceChildren()
}

function fillLocations() {
    locationSearch.onchange = changeLocations
    for(const location of locationsArray) {
        const locationOption = document.createElement('option')
        locationOption.setAttribute('value', location)
        locationOption.innerText = location
        locationSearch.append(locationOption)
    }
}

function fillParkType() {
    parkTypeSearch.onchange = changeParkType
    for(const parkType of parkTypesArray) {
        const parkTypeOption = document.createElement('option')
        parkTypeOption.setAttribute('value', parkType)
        parkTypeOption.innerText = parkType
        parkTypeSearch.append(parkTypeOption)
    }
}

function changeLocations(event) {
    const selectedLocationSearch = event.target.value
    const selectedLocation = nationalParksArray.filter(location => location.State.toLowerCase() === selectedLocationSearch.toLowerCase())
    parkParentCont.replaceChildren()
    if(parkTypeSearch.value === '') {
        for(const location of selectedLocation) {
            const locationWikiLink = location.LocationName.split(' ').join('_')
            const locationCard = document.createElement('div')
            locationCard.setAttribute('class', 'card')
            const locationCardBody = document.createElement('div')
            locationCardBody.setAttribute('class', 'card-body')
            const locationCardTitle = document.createElement('h5')
            locationCardTitle.setAttribute('class','card-title')
            locationCardTitle.innerText = location.LocationName
            const locationCardAddress = document.createElement('p')
            locationCardAddress.setAttribute('class','card-text')
            locationCardAddress.innerText = `Address: ${location.Address}, ${location.City}, ${location.State} ${location.ZipCode}`
            const locationCardPhoneFax = document.createElement('p')
            locationCardPhoneFax.setAttribute('class','card-text')
            locationCardPhoneFax.innerText = `Phone: ${location.Phone} / Fax: ${location.Fax}`
            const locationCardLongLat = document.createElement('p')
            locationCardLongLat.setAttribute('class','card-text')
            locationCardLongLat.innerText = `Longitude: ${location.Longitude} / Latitude: ${location.Latitude}`
            const locationMoreInfoButton = document.createElement('a')
            locationMoreInfoButton.setAttribute('href',`https://en.wikipedia.org/wiki/${locationWikiLink}`)
            locationMoreInfoButton.setAttribute('class','btn btn-info')
            locationMoreInfoButton.setAttribute('role','button')
            locationMoreInfoButton.setAttribute('target','_blank')
            locationMoreInfoButton.innerText = 'More Information'
        
        
            if(location.hasOwnProperty('Visit')) {
                const locationWebsiteInfoButton = document.createElement('a')
                locationWebsiteInfoButton.setAttribute('href',`${location.Visit}`)
                locationWebsiteInfoButton.setAttribute('class','btn btn-info')
                locationWebsiteInfoButton.setAttribute('role','button')
                locationWebsiteInfoButton.setAttribute('target','_blank')
                locationWebsiteInfoButton.innerText = 'Official Website'
                locationCardBody.append(locationWebsiteInfoButton)
            }
        
            locationCardBody.prepend(locationCardTitle,locationCardAddress,locationCardPhoneFax,locationCardLongLat,locationMoreInfoButton)
            locationCard.append(locationCardBody)
            parkParentCont.append(locationCard)
        }
    } else {
        const bothSearch = selectedLocation.filter(location => location.LocationName.toLowerCase().includes(parkTypeSearch.value.toLowerCase()))
        for(const location of bothSearch) {
            const locationWikiLink = location.LocationName.split(' ').join('_')
            const locationCard = document.createElement('div')
            locationCard.setAttribute('class', 'card')
            const locationCardBody = document.createElement('div')
            locationCardBody.setAttribute('class', 'card-body')
            const locationCardTitle = document.createElement('h5')
            locationCardTitle.setAttribute('class','card-title')
            locationCardTitle.innerText = location.LocationName
            const locationCardAddress = document.createElement('p')
            locationCardAddress.setAttribute('class','card-text')
            locationCardAddress.innerText = `Address: ${location.Address}, ${location.City}, ${location.State} ${location.ZipCode}`
            const locationCardPhoneFax = document.createElement('p')
            locationCardPhoneFax.setAttribute('class','card-text')
            locationCardPhoneFax.innerText = `Phone: ${location.Phone} / Fax: ${location.Fax}`
            const locationCardLongLat = document.createElement('p')
            locationCardLongLat.setAttribute('class','card-text')
            locationCardLongLat.innerText = `Longitude: ${location.Longitude} / Latitude: ${location.Latitude}`
            const locationMoreInfoButton = document.createElement('a')
            locationMoreInfoButton.setAttribute('href',`https://en.wikipedia.org/wiki/${locationWikiLink}`)
            locationMoreInfoButton.setAttribute('class','btn btn-info')
            locationMoreInfoButton.setAttribute('role','button')
            locationMoreInfoButton.setAttribute('target','_blank')
            locationMoreInfoButton.innerText = 'More Information'
        
        
            if(location.hasOwnProperty('Visit')) {
                const locationWebsiteInfoButton = document.createElement('a')
                locationWebsiteInfoButton.setAttribute('href',`${location.Visit}`)
                locationWebsiteInfoButton.setAttribute('class','btn btn-info')
                locationWebsiteInfoButton.setAttribute('role','button')
                locationWebsiteInfoButton.setAttribute('target','_blank')
                locationWebsiteInfoButton.innerText = 'Official Website'
                locationCardBody.append(locationWebsiteInfoButton)
            }
        
            locationCardBody.prepend(locationCardTitle,locationCardAddress,locationCardPhoneFax,locationCardLongLat,locationMoreInfoButton)
            locationCard.append(locationCardBody)
            parkParentCont.append(locationCard)
        }
    }
}

function changeParkType(event) {
    const selectedParkTypeSearch = event.target.value
    const selectedParkType = nationalParksArray.filter(parkType => parkType.LocationName.toLowerCase().includes(selectedParkTypeSearch.toLowerCase()))
    parkParentCont.replaceChildren()
    if(locationSearch.value === '') {
        for(const parkType of selectedParkType) {
        const parkTypeWikiLink = parkType.LocationName.split(' ').join('_')
        const parkTypeCard = document.createElement('div')
        parkTypeCard.setAttribute('class', 'card')
        const parkTypeCardBody = document.createElement('div')
        parkTypeCardBody.setAttribute('class', 'card-body')
        const parkTypeCardTitle = document.createElement('h5')
        parkTypeCardTitle.setAttribute('class','card-title')
        parkTypeCardTitle.innerText = parkType.LocationName
        const parkTypeCardAddress = document.createElement('p')
        parkTypeCardAddress.setAttribute('class','card-text')
        parkTypeCardAddress.innerText = `Address: ${parkType.Address}, ${parkType.City}, ${parkType.State} ${parkType.ZipCode}`
        const parkTypeCardPhoneFax = document.createElement('p')
        parkTypeCardPhoneFax.setAttribute('class','card-text')
        parkTypeCardPhoneFax.innerText = `Phone: ${parkType.Phone} / Fax: ${parkType.Fax}`
        const parkTypeCardLongLat = document.createElement('p')
        parkTypeCardLongLat.setAttribute('class','card-text')
        parkTypeCardLongLat.innerText = `Longitude: ${parkType.Longitude} / Latitude: ${parkType.Latitude}`
        const parkTypeMoreInfoButton = document.createElement('a')
        parkTypeMoreInfoButton.setAttribute('href',`https://en.wikipedia.org/wiki/${parkTypeWikiLink}`)
        parkTypeMoreInfoButton.setAttribute('class','btn btn-info')
        parkTypeMoreInfoButton.setAttribute('role','button')
        parkTypeMoreInfoButton.setAttribute('target','_blank')
        parkTypeMoreInfoButton.innerText = 'More Information'

        if(parkType.hasOwnProperty('Visit')) {
            const parkTypeWebsiteInfoButton = document.createElement('a')
            parkTypeWebsiteInfoButton.setAttribute('href',`${parkType.Visit}`)
            parkTypeWebsiteInfoButton.setAttribute('class','btn btn-info')
            parkTypeWebsiteInfoButton.setAttribute('role','button')
            parkTypeWebsiteInfoButton.setAttribute('target','_blank')
            parkTypeWebsiteInfoButton.innerText = 'Official Website'
            parkTypeCardBody.append(parkTypeWebsiteInfoButton)
        }
        

            parkTypeCardBody.prepend(parkTypeCardTitle,parkTypeCardAddress,parkTypeCardPhoneFax,parkTypeCardLongLat,parkTypeMoreInfoButton)
            parkTypeCard.append(parkTypeCardBody)
            parkParentCont.append(parkTypeCard)
        }
    } else {
        const bothSearch = selectedParkType.filter(parkType => parkType.State.toLowerCase() === locationSearch.value.toLowerCase())
        for(const parkType of bothSearch) {
        const parkTypeWikiLink = parkType.LocationName.split(' ').join('_')
        const parkTypeCard = document.createElement('div')
        parkTypeCard.setAttribute('class', 'card')
        const parkTypeCardBody = document.createElement('div')
        parkTypeCardBody.setAttribute('class', 'card-body')
        const parkTypeCardTitle = document.createElement('h5')
        parkTypeCardTitle.setAttribute('class','card-title')
        parkTypeCardTitle.innerText = parkType.LocationName
        const parkTypeCardAddress = document.createElement('p')
        parkTypeCardAddress.setAttribute('class','card-text')
        parkTypeCardAddress.innerText = `Address: ${parkType.Address}, ${parkType.City}, ${parkType.State} ${parkType.ZipCode}`
        const parkTypeCardPhoneFax = document.createElement('p')
        parkTypeCardPhoneFax.setAttribute('class','card-text')
        parkTypeCardPhoneFax.innerText = `Phone: ${parkType.Phone} / Fax: ${parkType.Fax}`
        const parkTypeCardLongLat = document.createElement('p')
        parkTypeCardLongLat.setAttribute('class','card-text')
        parkTypeCardLongLat.innerText = `Longitude: ${parkType.Longitude} / Latitude: ${parkType.Latitude}`
        const parkTypeMoreInfoButton = document.createElement('a')
        parkTypeMoreInfoButton.setAttribute('href',`https://en.wikipedia.org/wiki/${parkTypeWikiLink}`)
        parkTypeMoreInfoButton.setAttribute('class','btn btn-info')
        parkTypeMoreInfoButton.setAttribute('role','button')
        parkTypeMoreInfoButton.setAttribute('target','_blank')
        parkTypeMoreInfoButton.innerText = 'More Information'

        if(parkType.hasOwnProperty('Visit')) {
            const parkTypeWebsiteInfoButton = document.createElement('a')
            parkTypeWebsiteInfoButton.setAttribute('href',`${parkType.Visit}`)
            parkTypeWebsiteInfoButton.setAttribute('class','btn btn-info')
            parkTypeWebsiteInfoButton.setAttribute('role','button')
            parkTypeWebsiteInfoButton.setAttribute('target','_blank')
            parkTypeWebsiteInfoButton.innerText = 'Official Website'
            parkTypeCardBody.append(parkTypeWebsiteInfoButton)
        }
        

            parkTypeCardBody.prepend(parkTypeCardTitle,parkTypeCardAddress,parkTypeCardPhoneFax,parkTypeCardLongLat,parkTypeMoreInfoButton)
            parkTypeCard.append(parkTypeCardBody)
            parkParentCont.append(parkTypeCard)
        }
    }
}

viewAllButton.onclick = viewAllEvent

function viewAllEvent(event) {
    event.preventDefault()
    parkParentCont.replaceChildren()
        for(const allParks of nationalParksArray) {
        const allParksWikiLink = allParks.LocationName.split(' ').join('_')
        const allParksCard = document.createElement('div')
        allParksCard.setAttribute('class', 'card')
        const allParksCardBody = document.createElement('div')
        allParksCardBody.setAttribute('class', 'card-body')
        const allParksCardTitle = document.createElement('h5')
        allParksCardTitle.setAttribute('class','card-title')
        allParksCardTitle.innerText = allParks.LocationName
        const allParksCardAddress = document.createElement('p')
        allParksCardAddress.setAttribute('class','card-text')
        allParksCardAddress.innerText = `Address: ${allParks.Address}, ${allParks.City}, ${allParks.State} ${allParks.ZipCode}`
        const allParksCardPhoneFax = document.createElement('p')
        allParksCardPhoneFax.setAttribute('class','card-text')
        allParksCardPhoneFax.innerText = `Phone: ${allParks.Phone} / Fax: ${allParks.Fax}`
        const allParksCardLongLat = document.createElement('p')
        allParksCardLongLat.setAttribute('card','card-text')
        allParksCardLongLat.innerText = `Longitude: ${allParks.Longitude} / Latitude: ${allParks.Latitude}`
        const allParksMoreInfoButton = document.createElement('a')
        allParksMoreInfoButton.setAttribute('href',`https://en.wikipedia.org/wiki/${allParksWikiLink}`)
        allParksMoreInfoButton.setAttribute('class','btn btn-info')
        allParksMoreInfoButton.setAttribute('role','button')
        allParksMoreInfoButton.setAttribute('target','_blank')
        allParksMoreInfoButton.innerText = 'More Information'

        if(allParks.hasOwnProperty('Visit')) {
            const allParksWebsiteInfoButton = document.createElement('a')
            allParksWebsiteInfoButton.setAttribute('href',`${allParks.Visit}`)
            allParksWebsiteInfoButton.setAttribute('class','btn btn-info')
            allParksWebsiteInfoButton.setAttribute('role','button')
            allParksWebsiteInfoButton.setAttribute('target','_blank')
            allParksWebsiteInfoButton.innerText = 'Official Website'
            allParksCardBody.append(allParksWebsiteInfoButton)
        }

        allParksCardBody.prepend(allParksCardTitle,allParksCardAddress,allParksCardPhoneFax,allParksCardLongLat,allParksMoreInfoButton)
        allParksCard.append(allParksCardBody)
        parkParentCont.append(allParksCard)
    }
}