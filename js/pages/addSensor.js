const $addSensorForm = document.querySelector('.add-sensor-form')

const $latInput = document.querySelector('.lat-input')
const $lngInput = document.querySelector('.lng-input')

const handleGeolocation = () => {
    if ("geolocatio" in navigator) {
        navigator.geolocation.getCurrentPosition(position => {
            $latInput.value = position.coords.latitude
            $lngInput.value = position.coords.longitude
        })
    }
}

const main = () => {
    handleGeolocation()

    $addSensorForm.addEventListener('submit', e => {
        e.preventDefault()
        
        console.log("===")
    })
}

main()
