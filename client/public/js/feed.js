function goToLocation(path){
    window.locationref = path;
}

function checkKeyPress(e) {
    if (e.keyCode == 32) {
        e.preventDefault ();
        goToLocation('http://my.marist.edu');
    }
}
    window.onload = function () {
        document.body.setAttribute("tabindex", "0");
        document.body.focus();
        document.body.addEventListener("keydown", checkKeyPress);
        const clickTarget = document.getElementById("portal_button");
        if(clickTarget) {
        clickTarget.style.cursor = "pointer";
        clickTarget.addEventListener("click", () => {
            goToLocation("https://facepunch.com");
        });
    }
    };
    function FeedItem(title, body, linkUrl,imageUrl) {
        this.title = title;
        this.body = body;
        this.linkUrl = linkUrl;
        this.imageUrl = imageUrl;
    }

    const currentStories = [
        new FeedItem("rust", "this is a survival open world game", "https://rust.facepunch.com","https://is1-ssl.mzstatic.com/image/thumb/PurpleSource124/v4/c6/1d/02/c61d02e2-e452-e8c5-cbf7-a15b6c1061d9/502b04f4-1725-467f-8b71-c43b18ee76ff_iPhone_6.5_-_View_1.jpg/230x0w.webp"),
        new FeedItem("Gmod", "a ragdoll game where anything u want or can imangine u can create","https://gmod.facepunch.com","https://upload.wikimedia.org/wikipedia/commons/8/8c/Garry%27s_Mod_logo.png"),
        new FeedItem("clatter","this is strageist game where u need quick thinking skills to preveil","https://store.steampowered.com","https://www.metacritic.com/a/img/catalog/provider/6/12/6-1-693137-52.jpg")
    ];

    function createFeedItemHTML(feedItem){
        return `
        <div class="feed-item">
        <h3><a href="${feedItem.linkUrl}" target="_blank">${feedItem.title}</a></h3>
        <img src=${feedItem.imageUrl} alt"${feedItem.title}">
        <p>${feedItem.body}</p>
        </div>
        `;         
        
    }

    function displayItem(feedItem){
        const newsFeedElement = document.getElementById("newsfeed");
        if (newsFeedElement){
          newsFeedElement.innerHTML += createFeedItemHTML(feedItem);
        }
    }
    

    currentStories.forEach(displayItem);


    



