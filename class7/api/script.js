// Use this Art Institue of Chicago API to get all the artworks

const containerEl = document.querySelector('.container');

async function getArtworks(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        displayArtwork(data.data, data.pagination)
    } catch (error) {
        console.error(error);
    }
}


function displayArtwork(works, pagination) {
    works.map(work => {
         const titleEl = document.createElement('p');
         titleEl.innerHTML = work.title;
        containerEl.appendChild(titleEl);
    })
    const loadMoreButtonEl = document.createElement('button');
    loadMoreButtonEl.innerText = "Load more";
    loadMoreButtonEl.addEventListener('click', function() {
        getArtworks(pagination.next_url);
    });
    containerEl.appendChild(loadMoreButtonEl);
}

getArtworks('https://api.artic.edu/api/v1/artworks');