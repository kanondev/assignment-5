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




// 2nd section

document.getElementById('f')
.addEventListener('click', function (event) {
    event.preventDefault();


    const mainBlance = parseFloat(document.getElementById('main-blance').innerText);
    const donateBlanceFeni = parseFloat(document.getElementById('donate-2').innerText);
    console.log(donateBlanceFeni)
    const feni = parseFloat(document.getElementById("donete-input-2").value);
    console.log(feni)

//     // 2nd work calculated


    if (!isNaN(feni) && feni >= 0) {

    const doneteFeni = mainBlance- feni;
    const mainBlanceElement = document.getElementById('main-blance')
    mainBlanceElement.innerText = doneteFeni;

    const doneteAmountFeni = feni + donateBlanceFeni;
    const donateBlanceElement = document.getElementById('donate-2')
    donateBlanceElement.innerText = doneteAmountFeni;
    const modal = document.getElementById('my_modal_1');
        if (modal) {
            modal.showModal();

    }
}
else{
    alert('Enter valid Amount');
}

})


// 3rd section
document.getElementById('aid')
.addEventListener('click', function (event) {
    event.preventDefault();


    const mainBlance = parseFloat(document.getElementById('main-blance').innerText);
    const donateBlanceAid = parseFloat(document.getElementById('donate-3').innerText);
    const aid = parseFloat(document.getElementById("donete-input-3").value);

    // 2nd work calculated


    if (!isNaN(aid) && aid >= 0) {

    const doneteaid = mainBlance- aid;
    const mainBlanceElement = document.getElementById('main-blance')
    mainBlanceElement.innerText = doneteaid;

    const doneteAmountAid = aid + donateBlanceAid;
    const donateBlanceElement = document.getElementById('donate-3')
    donateBlanceElement.innerText = doneteAmountAid;
    const modal = document.getElementById('my_modal_1');
        if (modal) {
            modal.showModal();

    }
}
else{
    alert('Enter valid Amount');
}

})


// Blog section


const button = document.getElementById('blog-button');
button.addEventListener('click', function(){
    window.location.href = 'blog.html';
})