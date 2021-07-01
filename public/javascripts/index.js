
//const edit_button = document.querySelector('.edit-button');
document.addEventListener("DOMContentLoaded", async () => {
    console.log('hello')
    try {
        const res = await fetch('http://localhost:8080')
        const post = await res.json()

        console.log( post)


    } catch (e) {
        console.log('error happened here')
        console.error(e);
    }

})
