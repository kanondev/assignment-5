document.getElementById('donate-n')
.addEventListener('click', function (event) {
    event.preventDefault();


    const mainBlance = parseFloat(document.getElementById('main-blance').innerText);
    const donateBlance = parseFloat(document.getElementById('donate').innerText);
    const nohakhali = parseFloat(document.getElementById("donete-input").value);

    // 2nd work calculated


    if (!isNaN(nohakhali) && nohakhali >= 0) {

    const donete = mainBlance- nohakhali;
    const mainBlanceElement = document.getElementById('main-blance')
    mainBlanceElement.innerText = donete;

    const doneteAmount = nohakhali + donateBlance;
    const donateBlanceElement = document.getElementById('donate')
    donateBlanceElement.innerText = doneteAmount;
    const modal = document.getElementById('my_modal_1');
        if (modal) {
            modal.showModal();

    }
}
else{
    alert('Enter valid Amount');
}

})
