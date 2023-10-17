function getImage(id, event){
    switch(id){
        case 'fig1': {
            event.stopPropagation();
            clickedEvent(0,217201)
            break;
        }
        case 'fig2': {
            event.stopPropagation();
            clickedEvent(1,6565)
            break;
        }
        case 'fig3': {
            event.stopPropagation();
            clickedEvent(2,147003)
            break;
        }
        case 'fig4': {
            event.stopPropagation();
            clickedEvent(3,34181)
            break;
        }
        case 'fig5': {
            event.stopPropagation();
            clickedEvent(4,24645)
            break;
        }
        case 'fig6': {
            event.stopPropagation();
            clickedEvent(5,21023)
            break;
        }
    }
 }




 async function clickedEvent(img_index, item_index){
    let request = new Request(`https://api.artic.edu/api/v1/artworks/${item_index}`,{
         method: 'GET'
     });

    let result = await fetch(request);

    let response = await result.json();

    console.log(response)

    //popup
    // Get the elements by their ID
    var popupWindow = document.getElementById("popup-window");
    var closeButton = document.getElementById("close-button");
    var title = document.getElementById("popup-title");
    var content = document.getElementById("popup-content")

    //Remove any content already there
    title.innerHTML = '';
    content.innerHTML = '';

    //Show
    popupWindow.style.display = "block";
    title.append(response.data.title)
    content.append(document.createElement("br"))
    content.append(response.data.artist_title)
    content.append(document.createElement("br"))
    content.append(response.data.date_display)
    content.append(document.createElement("br"))
    content.append(response.data.medium_display)
    content.append(document.createElement("br"))

    //Hide
    closeButton.addEventListener("click", function() {
        popupWindow.style.display = "none";
        
    });
 } 