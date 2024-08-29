async function youtube() {
    let data = await fetch("./data.json");
    let val = await data.json();
    console.log(val);

    let playbox = document.getElementById("playbox");

    let playlist = document.getElementById("playlist");

    for (let i of val) {

        let div = document.createElement("div");

        div.innerHTML = `
                        <img src="${i.thumbnail}">
                        <h1> ${i.title} </h1>
                        <br> <br>
                        `

        playlist.appendChild(div);

        div.addEventListener("click", () => {
            playbox.innerHTML = `
                                                <video src="${i.video}" controls
                                                autoplay></video>
                                                `
        })
    }
}
youtube();