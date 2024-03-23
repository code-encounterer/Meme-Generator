const generateMemeBtn = document.querySelector(".generate-meme-btn");
const memeTitle = document.querySelector(".meme-title");
const memeImg = document.querySelector("img");
const memeAuthor = document.querySelector(".meme-author");

function updateDetails(title, img_url, author) {
    memeTitle.innerHTML = title;
    memeImg.setAttribute("src", img_url);
    memeAuthor.innerHTML = `Meme by ${author}`;
}

async function generateMeme() {
    try {
        const response = await fetch("https://meme-api.com/gimme/wholesomememes");
        const data = await response.json();
        updateDetails(data.title, data.url, data.author);
    } catch (error) {
        console.log(error);
    }
}

generateMemeBtn.addEventListener('click', generateMeme);

generateMeme();