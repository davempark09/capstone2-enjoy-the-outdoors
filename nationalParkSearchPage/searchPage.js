const locationSearch = document.querySelector('#searchLocation')
const parkTypeSearch = document.querySelector('#searchParkType')
const parkParentCont = document.querySelector('#parkSearchCards')
const viewAllButton = document.querySelector('#viewAllButton')
const resetButton = document.querySelector('#resetSearch')

//Runnning the function when the page loads
window.onload = loadSearch

//Setting up onclick event for the reset button
resetButton.onclick = resetSearchResults

//Running the functions to populate both dropdowns
function loadSearch() {
    fillLocations()
    fillParkType()
}

//Reset button function
function resetSearchResults() {
    parkParentCont.replaceChildren()
}

//Function to populate the location dropdown
function fillLocations() {
    locationSearch.onchange = changeLocations
    for(const location of locationsArray) {
        const locationOption = document.createElement('option')
        locationOption.setAttribute('value', location)
        locationOption.innerText = location
        locationSearch.append(locationOption)
    }
}

//Function to populate the park type dropdown
function fillParkType() {
    parkTypeSearch.onchange = changeParkType
    for(const parkType of parkTypesArray) {
        const parkTypeOption = document.createElement('option')
        parkTypeOption.setAttribute('value', parkType)
        parkTypeOption.innerText = parkType
        parkTypeSearch.append(parkTypeOption)
    }
}

//Function to handle user change of location
function changeLocations(event) {
    const selectedLocationSearch = event.target.value
    const selectedLocation = nationalParksArray.filter(location => location.State.toLowerCase() === selectedLocationSearch.toLowerCase())
    parkParentCont.replaceChildren()
    //Conditional to check if other dropdown box has a value the user already chose
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
            if(location.Phone !== 0) {
                const locationCardPhone = document.createElement('p')
                locationCardPhone.setAttribute('class','card-text')
                locationCardPhone.innerText = `Phone: ${location.Phone}`
                locationCardBody.append(locationCardPhone)
            }
            if(location.Fax !== 0) {
                const locationCardFax = document.createElement('p')
                locationCardFax.setAttribute('class','card-text')
                locationCardFax.innerText = `Fax: ${location.Fax}`
                locationCardBody.append(locationCardFax)
            }
            const locationCardLongLat = document.createElement('p')
            locationCardLongLat.setAttribute('class','card-text')
            locationCardLongLat.innerText = `Longitude: ${location.Longitude} / Latitude: ${location.Latitude}`
            const locationMoreInfoButton = document.createElement('a')
            locationMoreInfoButton.setAttribute('href',`https://en.wikipedia.org/wiki/${locationWikiLink}`)
            locationMoreInfoButton.setAttribute('class','btn btn-info btn-sm')
            locationMoreInfoButton.setAttribute('role','button')
            locationMoreInfoButton.setAttribute('target','_blank')
            locationMoreInfoButton.innerText = 'More Information'
        
        
            if(location.hasOwnProperty('Visit')) {
                const locationWebsiteInfoButton = document.createElement('a')
                locationWebsiteInfoButton.setAttribute('href',`${location.Visit}`)
                locationWebsiteInfoButton.setAttribute('class','btn btn-info sideBtn btn-sm')
                locationWebsiteInfoButton.setAttribute('role','button')
                locationWebsiteInfoButton.setAttribute('target','_blank')
                locationWebsiteInfoButton.innerText = 'Official Website'
                locationCardBody.append(locationWebsiteInfoButton)
            }
        
            locationCardBody.prepend(locationCardTitle,locationCardAddress,locationCardLongLat,locationMoreInfoButton)
            locationCardBody.append(locationMoreInfoButton)
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
            if(location.Phone !== 0) {
                const locationCardPhone = document.createElement('p')
                locationCardPhone.setAttribute('class','card-text')
                locationCardPhone.innerText = `Phone: ${location.Phone}`
                locationCardBody.append(locationCardPhone)
            }
            if(location.Fax !== 0) {
                const locationCardFax = document.createElement('p')
                locationCardFax.setAttribute('class','card-text')
                locationCardFax.innerText = `Fax: ${location.Fax}`
                locationCardBody.append(locationCardFax)
            }
            const locationCardLongLat = document.createElement('p')
            locationCardLongLat.setAttribute('class','card-text')
            locationCardLongLat.innerText = `Longitude: ${location.Longitude} / Latitude: ${location.Latitude}`
            const locationMoreInfoButton = document.createElement('a')
            locationMoreInfoButton.setAttribute('href',`https://en.wikipedia.org/wiki/${locationWikiLink}`)
            locationMoreInfoButton.setAttribute('class','btn btn-info btn-sm')
            locationMoreInfoButton.setAttribute('role','button')
            locationMoreInfoButton.setAttribute('target','_blank')
            locationMoreInfoButton.innerText = 'More Information'
        
        
            if(location.hasOwnProperty('Visit')) {
                const locationWebsiteInfoButton = document.createElement('a')
                locationWebsiteInfoButton.setAttribute('href',`${location.Visit}`)
                locationWebsiteInfoButton.setAttribute('class','btn btn-info sideBtn btn-sm')
                locationWebsiteInfoButton.setAttribute('role','button')
                locationWebsiteInfoButton.setAttribute('target','_blank')
                locationWebsiteInfoButton.innerText = 'Official Website'
                locationCardBody.append(locationWebsiteInfoButton)
            }
        
            locationCardBody.prepend(locationCardTitle,locationCardAddress,locationCardLongLat,locationMoreInfoButton)
            locationCardBody.append(locationMoreInfoButton)
            locationCard.append(locationCardBody)
            parkParentCont.append(locationCard)
        }
    }
}

//Function to handle the user choice of park type
function changeParkType(event) {
    const selectedParkTypeSearch = event.target.value
    const selectedParkType = nationalParksArray.filter(parkType => parkType.LocationName.toLowerCase().includes(selectedParkTypeSearch.toLowerCase()))
    parkParentCont.replaceChildren()
    //Conditional to check if other dropdown box has a value the user already chose
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
        if(parkType.Phone !== 0) {
            const parkTypeCardPhone = document.createElement('p')
            parkTypeCardPhone.setAttribute('class','card-text')
            parkTypeCardPhone.innerText = `Phone: ${parkType.Phone}`
            parkTypeCardBody.append(parkTypeCardPhone)
        }
        if(parkType.Fax !== 0) {
            const parkTypeCardFax = document.createElement('p')
            parkTypeCardFax.setAttribute('class','card-text')
            parkTypeCardFax.innerText = `Fax: ${parkType.Fax}`
            parkTypeCardBody.append(parkTypeCardFax)
        }
        const parkTypeCardLongLat = document.createElement('p')
        parkTypeCardLongLat.setAttribute('class','card-text')
        parkTypeCardLongLat.innerText = `Longitude: ${parkType.Longitude} / Latitude: ${parkType.Latitude}`
        const parkTypeMoreInfoButton = document.createElement('a')
        parkTypeMoreInfoButton.setAttribute('href',`https://en.wikipedia.org/wiki/${parkTypeWikiLink}`)
        parkTypeMoreInfoButton.setAttribute('class','btn btn-info btn-sm')
        parkTypeMoreInfoButton.setAttribute('role','button')
        parkTypeMoreInfoButton.setAttribute('target','_blank')
        parkTypeMoreInfoButton.innerText = 'More Information'

        if(parkType.hasOwnProperty('Visit')) {
            const parkTypeWebsiteInfoButton = document.createElement('a')
            parkTypeWebsiteInfoButton.setAttribute('href',`${parkType.Visit}`)
            parkTypeWebsiteInfoButton.setAttribute('class','btn btn-info sideBtn btn-sm')
            parkTypeWebsiteInfoButton.setAttribute('role','button')
            parkTypeWebsiteInfoButton.setAttribute('target','_blank')
            parkTypeWebsiteInfoButton.innerText = 'Official Website'
            parkTypeCardBody.append(parkTypeWebsiteInfoButton)
        }
        

            parkTypeCardBody.prepend(parkTypeCardTitle,parkTypeCardAddress,parkTypeCardLongLat,parkTypeMoreInfoButton)
            parkTypeCardBody.append(parkTypeMoreInfoButton)
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
        if(parkType.Phone !== 0) {
            const parkTypeCardPhone = document.createElement('p')
            parkTypeCardPhone.setAttribute('class','card-text')
            parkTypeCardPhone.innerText = `Phone: ${parkType.Phone}`
            parkTypeCardBody.append(parkTypeCardPhone)
        }
        if(parkType.Fax !== 0) {
            const parkTypeCardFax = document.createElement('p')
            parkTypeCardFax.setAttribute('class','card-text')
            parkTypeCardFax.innerText = `Fax: ${parkType.Fax}`
            parkTypeCardBody.append(parkTypeCardFax)
        }
        const parkTypeCardLongLat = document.createElement('p')
        parkTypeCardLongLat.setAttribute('class','card-text')
        parkTypeCardLongLat.innerText = `Longitude: ${parkType.Longitude} / Latitude: ${parkType.Latitude}`
        const parkTypeMoreInfoButton = document.createElement('a')
        parkTypeMoreInfoButton.setAttribute('href',`https://en.wikipedia.org/wiki/${parkTypeWikiLink}`)
        parkTypeMoreInfoButton.setAttribute('class','btn btn-info btn-sm')
        parkTypeMoreInfoButton.setAttribute('role','button')
        parkTypeMoreInfoButton.setAttribute('target','_blank')
        parkTypeMoreInfoButton.innerText = 'More Information'

        if(parkType.hasOwnProperty('Visit')) {
            const parkTypeWebsiteInfoButton = document.createElement('a')
            parkTypeWebsiteInfoButton.setAttribute('href',`${parkType.Visit}`)
            parkTypeWebsiteInfoButton.setAttribute('class','btn btn-info sideBtn btn-sm')
            parkTypeWebsiteInfoButton.setAttribute('role','button')
            parkTypeWebsiteInfoButton.setAttribute('target','_blank')
            parkTypeWebsiteInfoButton.innerText = 'Official Website'
            parkTypeCardBody.append(parkTypeWebsiteInfoButton)
        }
        

            parkTypeCardBody.prepend(parkTypeCardTitle,parkTypeCardAddress,parkTypeCardLongLat,parkTypeMoreInfoButton)
            parkTypeCardBody.append(parkTypeMoreInfoButton)
            parkTypeCard.append(parkTypeCardBody)
            parkParentCont.append(parkTypeCard)
        }
    }
}

//Setting up onclick event on the button to view all places
viewAllButton.onclick = viewAllEvent

//Function for the view all button click
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
        if(allParks.Phone !== 0) {
            const allParksCardPhone = document.createElement('p')
            allParksCardPhone.setAttribute('class','card-text')
            allParksCardPhone.innerText = `Phone: ${allParks.Phone}`
            allParksCardBody.append(allParksCardPhone)
        }
        if(allParks.Fax !== 0) {
            const allParksCardFax = document.createElement('p')
            allParksCardFax.setAttribute('class','card-text')
            allParksCardFax.innerText = `Fax: ${allParks.Fax}`
            allParksCardBody.append(allParksCardFax)
        }
        const allParksCardLongLat = document.createElement('p')
        allParksCardLongLat.setAttribute('card','card-text')
        allParksCardLongLat.innerText = `Longitude: ${allParks.Longitude} / Latitude: ${allParks.Latitude}`
        const allParksMoreInfoButton = document.createElement('a')
        allParksMoreInfoButton.setAttribute('href',`https://en.wikipedia.org/wiki/${allParksWikiLink}`)
        allParksMoreInfoButton.setAttribute('class','btn btn-info btn-sm')
        allParksMoreInfoButton.setAttribute('role','button')
        allParksMoreInfoButton.setAttribute('target','_blank')
        allParksMoreInfoButton.innerText = 'More Information'

        if(allParks.hasOwnProperty('Visit')) {
            const allParksWebsiteInfoButton = document.createElement('a')
            allParksWebsiteInfoButton.setAttribute('href',`${allParks.Visit}`)
            allParksWebsiteInfoButton.setAttribute('class','btn btn-info sideBtn btn-sm')
            allParksWebsiteInfoButton.setAttribute('role','button')
            allParksWebsiteInfoButton.setAttribute('target','_blank')
            allParksWebsiteInfoButton.innerText = 'Official Website'
            allParksCardBody.append(allParksWebsiteInfoButton)
        }

        allParksCardBody.prepend(allParksCardTitle,allParksCardAddress,allParksCardLongLat)
        allParksCardBody.append(allParksMoreInfoButton)
        allParksCard.append(allParksCardBody)
        parkParentCont.append(allParksCard)
    }
}
