

function scrollToPosition(position){
    var scrollDiv = document.getElementById(position).offsetTop;
    window.scrollTo({ top: scrollDiv, behavior: 'smooth' });
}

function callCard(){
    const triggerBottom = window.innerHeight/5 * 4
    cards.forEach(card => {
        // The getBoundingClientRect() method returns the size of an element and its position relative to the viewport
        const cardTop = card.getBoundingClientRect().top
        if(cardTop < triggerBottom){
            card.classList.add('show')
        } else{
            card.classList.remove('show')
        }
    })
}
