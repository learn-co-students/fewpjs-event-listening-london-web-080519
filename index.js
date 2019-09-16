function addingEventListener() {
    //the node that is doing the listening
    const input = document.getElementById('input');
    // make it listen ---- what it's listening for
    input.addEventListener('click', function(event) {
        //what to do when it happens
    alert('I was clicked!');
    });
}
