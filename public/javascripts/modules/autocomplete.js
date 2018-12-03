function autocomplete(input, latInput, lngInput) {
    if(!input) return;

    const dropdown = new google.maps.places.Autocomplete(input);
    dropdown.addListener('place_changed', () => {
        const place = dropdown.getPlace();
        if(place.geometry) {
            latInput.value = place.geometry.locacton.lat();
            lngInput.value = place.geometry.locacton.lng();
        }
    });

    input.on('keydown', (e) => {
        if(e.keyCode === 13) e.preventDefault();
    });
};

export default autocomplete;
