
const edit_button = document.querySelector('.edit-button');
document.addEventListener("DOMContentLoaded", async () => {
    const res = await fetch('http://localhost:8080');
    const { posts } = await res.json()
    console.log(posts);

})
