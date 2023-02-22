function scrollToPosition(position){
    var scrollDiv = document.getElementById(position).offsetTop;
    window.scrollTo({ top: scrollDiv, behavior: 'smooth' });
}

// function changeTitle(message){
//     document.getElementById("card_title").innerHTML = message
// }