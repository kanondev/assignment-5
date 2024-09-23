document.getElementById('donate-n')
.addEventListener('click', function (event) {
    event.preventDefault();
    console.log('clicked');


    const mainBlance = parseFloat(document.getElementById('main-blance').innerText);
    const donateBlance = parseFloat(document.getElementById('donate').innerText);
    console.log(donateBlance)
    const mohakhali = parseFloat(document.getElementById("donete-input").value);

    // 2nd work calculated

    const donete = mainBlance- mohakhali;
    console.log(donete);
    const mainBlanceElement = document.getElementById('main-blance')
    mainBlanceElement.innerText = donete;

    const doneteAmount = mohakhali + donateBlance
    console.log(doneteAmount)
    const donateBlanceElement = document.getElementById('donate')
    donateBlanceElement.innerText = doneteAmount;

})