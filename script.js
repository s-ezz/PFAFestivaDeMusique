
    const home = document.querySelector("#home")
    const artiste = document.querySelector("#artiste")
    const lieu = document.querySelector("#lieu")
    const ticket = document.querySelector("#ticket")
    const contact = document.querySelector("#contact")
    const burger = document.querySelector("#burger")
    const menuBurger = document.querySelector("#menu-burger")
    const links = document.querySelectorAll("#menu-burger nav ul li a")
    let scrolling = 0

    const titleMenu = document.querySelector("#title-menu")

    console.log(lieu)



    burger.addEventListener("click", function(){
    burger.classList.toggle("open")
    menuBurger.classList.toggle("open")
})

    links.forEach(link => {
    link.addEventListener("click", function(){
        burger.classList.remove("open")
        menuBurger.classList.remove("open")
    })
})

    window.addEventListener("scroll", function(){
    scrolling = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
    console.log(scrolling)
    console.log("lieu: ",lieu.offsetTop)
    console.log("ticket: ",ticket.offsetTop)
    console.log("contact: ", contact.offsetTop)

    if(scrolling < lieu.offsetTop){
    titleMenu.innerHTML = "Présentation des artistes";
}else if((scrolling >= lieu.offsetTop) && (scrolling < ticket.offsetTop)){
    titleMenu.innerHTML = "Le parc d'Enghien";
}else if((scrolling >= ticket.offsetTop) && (scrolling < (contact.offsetTop - 10))){
    titleMenu.innerHTML = "Commandez votre pass";
}else{
    titleMenu.innerHTML = "Contacts";
}



});

    //Calcul des tarifs :

    const prixAdultes = [180,60,80,80];
    const prixEnfants = [50,20,25,25];

    function calculerTotal(){
    const typeTarif = parseInt(document.getElementById("tarif").value);
    const nbAdultes = parseInt(document.getElementById("adulte").value) || 0;
    const nbEnfants = parseInt(document.getElementById("enfant").value) || 0;

    const total = (prixAdultes[typeTarif]*nbAdultes)+(prixEnfants[typeTarif]*nbEnfants);

    document.getElementById('total').textContent = (total*0.9) +' €';

}

    //Soumission formulaire de contact

    document.getElementById("form-contact").addEventListener("submit", function(e){
    e.preventDefault();
    alert('☑️ Messge envoyé avec succés !');
    this.reset();
});

    document.getElementById("form-newsletter").addEventListener("submit", function(e){
    e.preventDefault();
    alert('Merci pour votre inscription à la newsletter!');
    this.reset();
});
