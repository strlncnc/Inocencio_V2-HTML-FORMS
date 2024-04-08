const typePayment = document.querySelector(".type-payment"),
      selectPayment = typePayment.querySelector(".select-payment"),
      mops = typePayment.querySelectorAll(".mop"),
      sPayment_text = typePayment.querySelector(".sPayment-text");

const dropDown = document.querySelector(".dropdown"),
      dropdownTonggle = dropDown.querySelector(".dropdown-tonggle"),
      menus = dropDown.querySelectorAll(".menu"),
      dTonggle_text = dropDown.querySelector(".dTonggle-text"),
      submenus = dropDown.querySelectorAll(".submenu"),
      submenuItems = dropDown.querySelectorAll(".submenu-item");
     

selectPayment.addEventListener("click", () => typePayment.classList.toggle("active"));

mops.forEach(mop => 
{
    mop.addEventListener("click", () =>
    {
        let selectedPayment = mop.querySelector(".mop-text").innerText;
        sPayment_text.innerText = selectedPayment;

        typePayment.classList.remove("active");
    })
})

dropdownTonggle.addEventListener("click", () => dropDown.classList.toggle("active"));

menus.forEach(menu => 
{
    menu.addEventListener("click", () =>
    {
        let selectedPayment = menu.querySelector(".menu-text").innerText;
        dTonggle_text.innerText = selectedPayment;

        if(menu.querySelector(".submenu")) 
        {
            menu.querySelector(".submenu").style.display = "block";
        } 
        else 
        {
            dropDown.classList.remove("active");
        }
    })
})

submenuItems.forEach(submenuItem => 
    {
        submenuItem.addEventListener("click", () =>
        {
            e.stopPropagation();
            let selectedCard = submenuItem.querySelector("a").innerText;
            dTonggle_text.innerText += ` (${selectedCard})`;
            dropDown.classList.remove("active");
        })
    })
    
    