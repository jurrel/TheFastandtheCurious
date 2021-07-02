// document.addEventListener("DOMContentLoaded", () => {
//     const filteredCharacters = hpCharacters.filter(character => { return true; });
//     const searchBarInput = document.querySelector(".search-bar");
//     //might need another something to grab the post
//     //const post = document.querySelector('___')

//     searchBarInput.addEventListener("keyup", async (e) => {
//         console.log(e.target.value)
//         const res = await fetch("/search");
//         // const result = await res.json();
//         // const filtered = result.userSearch.filter(obj => {
//         //    return obj.tag.toLowerCase().includes(e.target.value.toLowerCase())
//         // })
//         // if (enter.key === "Enter") {
//         //     if (searchBarInput.length) {
//         //         const byTags = searchBarInput.map()
//         //     }
//         // }

//         const searchString = e.target.value;
//         const filteredCharacters = hpCharacters.filter(character => {
//             return (
//              character.name.includes(searchString) ||
//              character.house.includes(searchString)
//         );
//     });
//     displayCharacters(filteredCharacters);
// })



// })
