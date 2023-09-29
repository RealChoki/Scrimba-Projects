import dogs from "./data.js";

class dog {
    constructor(data){
    Object.assign(this, data)
    }

    getDogHtml(){
        const {name, avatar, age, bio} = this
        return `
            <img class="big" src=${avatar}>
            <img id="like-pop" class="popup" src="images/badge-like.png">
            <img id="dislike-pop" class="popup" src="images/badge-nope.png">
            <div class="text">
                <h1>${name}, ${age}</h1>
                <h2>${bio}</h2>
            </div>
        `

    }
}

export default dog