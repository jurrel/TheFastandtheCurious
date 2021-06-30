document.addEventListener("DOMContentLoaded", () => {

    const searchBarInput = document.querySelector(".search-bar"); 
    const input = search.querySelector("input") 
    //might need another something to grab the post
    //const post = document.querySelector('___')

    searchBarInput.addEventListener("keypress", async (e) => {
        const res = await fetch("/search");
        const result = await res.json();
        const filtered = result.userSearch.filter(obj => {
           return obj.tag.toLowerCase().includes(e.target.value.toLowerCase())
        })
        // if (enter.key === "Enter") {
        //     if (searchBarInput.length) {
        //         const byTags = searchBarInput.map()
        //     }
        // }

        // const post = post.getElementsByTagName('li') //something like this 
    })


})
