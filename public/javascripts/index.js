

window.addEventListener("DOMContentLoaded", (event)=>{

    document.getElementById('search-button').addEventListener('click', e => {
        let searchQuery = document.querySelector('.search-bar').value


    const dictionary = [
        "Default",
        "classics",
        "Supercar",
        'Motorcycles',
        'Sport Cars',
        'Off-road Adventure',
        'JDM',
        'Off-road Vehicles',
        'Rockets',
        'ELECTRIC',
        'NOS'
    ]




        let searchNumber = 1

        dictionary.forEach((tag, ind) => {
            if (tag.toLowerCase() === searchQuery.toLowerCase()) {
                searchNumber += ind
            }
        });



        console.log(window.location.href = `/tags/${searchNumber}`)



    })

})
