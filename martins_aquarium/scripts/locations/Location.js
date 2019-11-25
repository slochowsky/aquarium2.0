const LocationComponent = (location) => {
    return `
            <div class="location">
                <p>${location.place}</p>
                <p>${location.lat_long}</p>
                <p>${location.climate}</p>
            </div>
            `
}

export default LocationComponent
