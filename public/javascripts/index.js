
const edit_button = document.querySelector('.edit-button');
document.addEventListener("DOMContentLoaded", async () => {
    console.log('hello')
    try {
        const res = await fetch('http://localhost:8080');
        const { posts } = await res.json();
        console.log({ posts });
    } catch (e) {
        console.error(e);
    }
})
