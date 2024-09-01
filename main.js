


let contactWrapper = document.querySelector("#contactWrapper");

let showContact = document.querySelector("#showContact");

let addContactBtn = document.querySelector("#addContactBtn");

let nameInput =document.querySelector("#nameInput");

let nameNumber =document.querySelector("#nameNumber");




let rubrica = {

     lista_contatti : [


        { contact_name: "Marika", number: 3456712993 },

        { contact_name: "Luca", number: 3381552674 },

        { contact_name: "Andrea", number: 34812398740 },

    ],




    showContacts: function () {

        // contactWrapper.innerHTML = "";

        this.lista_contatti.forEach(contatto => {

            let div = document.createElement("div");
            div.classList.add("card-custom", "d-flex", "justify-content-around", "align-items-center", "my-4")

            div.innerHTML = `<p>${contatto.contact_name}</p>
                             <p>${contatto.number}</p>
                             <i class="fa-regular fa-trash-can"></i>`

            contactWrapper.appendChild(div);

        });

    },



    addContact : function( newName , newNumber ){

        this.lista_contatti.push( { contact_name: newName, number: newNumber })
        
    }
   

};// fine oggetto





addContactBtn.addEventListener("click", ()=>{
    rubrica.addContact(nameInput.value, nameNumber.value);
    
    nameInput.value="";
    nameNumber.value="";
    // if(check==false){
       
    //     check=true;
    //     showContact.innerHTML= "Nascondi Contatti";
    // }

    if(check==false){
        rubrica.showContacts();
        check=true;
        showContact.innerHTML= "Nascondi Contatti";
    }else{
        contactWrapper.innerHTML="";
        check=false;
        showContact.innerHTML= "Mostra Contatti";
    }




})




// rubrica.showContacts();

let check = false;

showContact.addEventListener("click", ()=>{

if(check==false){
    rubrica.showContacts();
    check=true;
    showContact.innerHTML= "Nascondi Contatti";
}else{
    contactWrapper.innerHTML="";
    check=false;
    showContact.innerHTML= "Mostra Contatti";
}


});