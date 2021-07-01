
const edit_button = document.querySelector('.edit-button');


edit_button.addEventListener('click', async (e) => {
    e.preventDefault();
    const body = document.body;
    try {
        const res = await fetch('http://localhost:8080/', {
            method: 'GET',

            headers: {
                "Content-Type": "application/json",
            },
        })

        edit_button.innerHTML = 'working now'


    } catch (err) {
        console.log('hello')
        console.log(err)
    }

    })
