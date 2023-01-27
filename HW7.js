let navs = document.getElementsByClassName("navClass") 

for(let i = 0; i < navs.length; i++) {
    navs[0].style.color = "rgb(227, 98, 59)"
    homeWrapper.style.display = "block"
    navs[i].onclick = function() {
        buyWrapper.style.display = "none"
        cardWrapper.style.display = "none"
        if (i === 0) {
            this.style.color = "rgb(227, 98, 59)"
            homeWrapper.style.display = "block"
            homeWrapper.style.animation = "a1 .4s ease"
        }else {
            navs[0].style.color = "white"
            homeWrapper.style.display = "none"
        }
        if (i === 1) {
            this.style.color = "rgb(227, 98, 59)"
            aboutWrapper.style.display = "block"
        }else {
            navs[1].style.color = "white"
            aboutWrapper.style.display = "none"
        }
        if (i === 2) {
            this.style.color = "rgb(227, 98, 59)"
            creaturesWrapper.style.display = "block"
        }else {
            navs[2].style.color = "white"
            creaturesWrapper.style.display = "none"
        }
        if (i === 3) {
            this.style.color = "rgb(227, 98, 59)"
            landscapeWrapper.style.display = "block"
        }else {
            navs[3].style.color = "white"
            landscapeWrapper.style.display = "none"
        }
        if (i === 4) {
            this.style.color = "rgb(227, 98, 59)"
            shopWrapper.style.display = "flex"
        }else {
            navs[4].style.color = "white"
            shopWrapper.style.display = "none"
        }
        if (i === 5) {
            this.style.color = "rgb(227, 98, 59)"
            contactWrapper.style.display = "block"
        }else {
            navs[5].style.color = "white"
            contactWrapper.style.display = "none"
        }
        if (i === 6) {
            this.style.color = "rgb(227, 98, 59)"
            shippingWrapper.style.display = "flex"
        }else {
            navs[6].style.color = "white"
            shippingWrapper.style.display = "none"
        }
        if (i === 7) {
            this.style.color = "rgb(227, 98, 59)"
            termsWrapper.style.display = "flex"
        }else {
            navs[7].style.color = "white"
            termsWrapper.style.display = "none"
        }
        if (i === 8) {
            this.style.color = "rgb(227, 98, 59)"
            faqWrapper.style.display = "block"
        }else {
            navs[8].style.color = "white"
            faqWrapper.style.display = "none"
        }
    }
    continueShop.onclick = function() {
        cardWrapper.style.display = "none"
        shopWrapper.style.display = "flex"
        navs[4].style.color = "rgb(227, 98, 59)"
    }
}

let navsBurger = document.getElementsByClassName("navClassBurger") 

for(let i = 0; i < navsBurger.length; i++) {
    navsBurger[0].style.color = "rgb(227, 98, 59)"
    homeWrapper.style.display = "block"
    navsBurger[i].onclick = function() {
        buyWrapper.style.display = "none"
        cardWrapper.style.display = "none"
        toggle.checked = !toggle.checked;
        if (i === 0) {
            this.style.color = "rgb(227, 98, 59)"
            homeWrapper.style.display = "block"
            homeWrapper.style.animation = "a1 .4s ease"
        }else {
            navsBurger[0].style.color = "black"
            homeWrapper.style.display = "none"
        }
        if (i === 1) {
            this.style.color = "rgb(227, 98, 59)"
            aboutWrapper.style.display = "block"
        }else {
            navsBurger[1].style.color = "black"
            aboutWrapper.style.display = "none"
        }
        if (i === 2) {
            this.style.color = "rgb(227, 98, 59)"
            creaturesWrapper.style.display = "block"
        }else {
            navsBurger[2].style.color = "black"
            creaturesWrapper.style.display = "none"
        }
        if (i === 3) {
            this.style.color = "rgb(227, 98, 59)"
            landscapeWrapper.style.display = "block"
        }else {
            navsBurger[3].style.color = "black"
            landscapeWrapper.style.display = "none"
        }
        if (i === 4) {
            this.style.color = "rgb(227, 98, 59)"
            shopWrapper.style.display = "flex"
        }else {
            navsBurger[4].style.color = "black"
            shopWrapper.style.display = "none"
        }
        if (i === 5) {
            this.style.color = "rgb(227, 98, 59)"
            contactWrapper.style.display = "block"
        }else {
            navsBurger[5].style.color = "black"
            contactWrapper.style.display = "none"
        }
        if (i === 6) {
            this.style.color = "rgb(227, 98, 59)"
            shippingWrapper.style.display = "flex"
            toggle.checked = !toggle.checked;
        }else {
            navsBurger[6].style.color = "white"
            shippingWrapper.style.display = "none"
        }
        if (i === 7) {
            this.style.color = "rgb(227, 98, 59)"
            termsWrapper.style.display = "flex"
            toggle.checked = !toggle.checked;
        }else {
            navsBurger[7].style.color = "white"
            termsWrapper.style.display = "none"
        }
        if (i === 8) {
            this.style.color = "rgb(227, 98, 59)"
            faqWrapper.style.display = "block"
            toggle.checked = !toggle.checked;
        }else {
            navsBurger[8].style.color = "white"
            faqWrapper.style.display = "none"
        }
    }
    continueShop.onclick = function() {
        cardWrapper.style.display = "none"
        shopWrapper.style.display = "flex"
        navsBurger[4].style.color = "rgb(227, 98, 59)"
    }
}

shopBtn.onclick = function() {
    homeWrapper.style.display = "none"
    shopWrapper.style.display = "flex"
}


const aboutContent = [
    {
        name: "I’m an image title",
        desc: "Describe your image here. Use catchy text to tell people the story behind the photo. Go to “Manage Media” to add your content.",
        src: "https://static.wixstatic.com/media/84770f_f0cb63981d214bcbb767adae1fc4025d~mv2_d_1891_2503_s_2.jpg/v1/fit/w_776,h_202,q_90/84770f_f0cb63981d214bcbb767adae1fc4025d~mv2_d_1891_2503_s_2.webp"
    },
    {
        name: "I’m an image title",
        desc: "Describe your image here. Use catchy text to tell people the story behind the photo. Go to “Manage Media” to add your content.",
        src: "https://static.wixstatic.com/media/84770f_8a8e5126d9e549d981baf9c11e0abe64~mv2.jpg/v1/fit/w_776,h_202,q_90/84770f_8a8e5126d9e549d981baf9c11e0abe64~mv2.webp"
    },
    {
        name: "I’m an image title",
        desc: "Describe your image here. Use catchy text to tell people the story behind the photo. Go to “Manage Media” to add your content.",
        src: "https://static.wixstatic.com/media/84770f_51d74ec00b6640ef94116eb8b342c6fd~mv2_d_1280_1694_s_2.jpg/v1/fit/w_776,h_202,q_90/84770f_51d74ec00b6640ef94116eb8b342c6fd~mv2_d_1280_1694_s_2.webp"
    }
]

const creaturesContent = [
    {
        name: "I’m an image title",
        price: 400,
        desc: "Describe your image here. Use catchy text to tell people the story behind the photo. Go to “Manage Media” to add your content.",
        src: "https://static.wixstatic.com/media/84770f_8a8e5126d9e549d981baf9c11e0abe64~mv2.jpg/v1/fit/w_776,h_202,q_90/84770f_8a8e5126d9e549d981baf9c11e0abe64~mv2.webp" 
    },
    {
        name: "I’m an image title",
        price: 400,
        desc: "Describe your image here. Use catchy text to tell people the story behind the photo. Go to “Manage Media” to add your content.",
        src: "https://static.wixstatic.com/media/84770f_1f3ebd44a6c842c6bb88fd9d37bd358e~mv2_d_1280_1452_s_2.jpg/v1/fit/w_776,h_202,q_90/84770f_1f3ebd44a6c842c6bb88fd9d37bd358e~mv2_d_1280_1452_s_2.webp"
    },
    {
        name: "I’m an image title",
        price: 400,
        desc: "Describe your image here. Use catchy text to tell people the story behind the photo. Go to “Manage Media” to add your content.",
        src: "https://static.wixstatic.com/media/84770f_4a219fcc6d504ec7949ba903d73620ff~mv2_d_1280_1452_s_2.jpg/v1/fit/w_776,h_202,q_90/84770f_4a219fcc6d504ec7949ba903d73620ff~mv2_d_1280_1452_s_2.webp"
    },
    {
        name: "I’m an image title",
        price: 400,
        desc: "Describe your image here. Use catchy text to tell people the story behind the photo. Go to “Manage Media” to add your content.",
        src: "https://static.wixstatic.com/media/84770f_82a63e4e3aff40e2b0ecfff4f1f36585~mv2_d_1280_1697_s_2.jpg/v1/fit/w_776,h_202,q_90/84770f_82a63e4e3aff40e2b0ecfff4f1f36585~mv2_d_1280_1697_s_2.webp" 
    }
]

const landscapeContent = [
    {
        name: "I’m an image title",
        price: 400,
        desc: "Describe your image here. Use catchy text to tell people the story behind the photo. Go to “Manage Media” to add your content.",
        src: "https://static.wixstatic.com/media/84770f_199e8c347b314c51bb27d37f2701cf3d~mv2_d_1280_1694_s_2.jpg/v1/fit/w_776,h_202,q_90/84770f_199e8c347b314c51bb27d37f2701cf3d~mv2_d_1280_1694_s_2.webp" 
    },
    {
        name: "I’m an image title",
        price: 400,
        desc: "Describe your image here. Use catchy text to tell people the story behind the photo. Go to “Manage Media” to add your content.",
        src: "https://static.wixstatic.com/media/84770f_51d74ec00b6640ef94116eb8b342c6fd~mv2_d_1280_1694_s_2.jpg/v1/fit/w_776,h_202,q_90/84770f_51d74ec00b6640ef94116eb8b342c6fd~mv2_d_1280_1694_s_2.webp"
    },
    {
        name: "I’m an image title",
        price: 400,
        desc: "Describe your image here. Use catchy text to tell people the story behind the photo. Go to “Manage Media” to add your content.",
        src: "https://static.wixstatic.com/media/84770f_7724f1e3efd046189693a238b5f8e09c~mv2_d_1280_1697_s_2.jpg/v1/fit/w_776,h_202,q_90/84770f_7724f1e3efd046189693a238b5f8e09c~mv2_d_1280_1697_s_2.webp"
    },
    {
        name: "I’m an image title",
        price: 400,
        desc: "Describe your image here. Use catchy text to tell people the story behind the photo. Go to “Manage Media” to add your content.",
        src: "https://static.wixstatic.com/media/84770f_82a63e4e3aff40e2b0ecfff4f1f36585~mv2_d_1280_1697_s_2.jpg/v1/fit/w_776,h_202,q_90/84770f_82a63e4e3aff40e2b0ecfff4f1f36585~mv2_d_1280_1697_s_2.webp"
    }
]

let shopContent = [
    {
        name: "I’m an image title",
        price: 400,
        code: "SKU 0001",
        desc: "Describe your image here. Use catchy text to tell people the story behind the photo. Go to “Manage Media” to add your content.",
        src: "https://static.wixstatic.com/media/84770f_f0cb63981d214bcbb767adae1fc4025d~mv2_d_1891_2503_s_2.jpg/v1/fit/w_776,h_202,q_90/84770f_f0cb63981d214bcbb767adae1fc4025d~mv2_d_1891_2503_s_2.webp"
    },
    {
        name: "I’m an image title",
        price: 500,
        code: "SKU 0002",
        desc: "Describe your image here. Use catchy text to tell people the story behind the photo. Go to “Manage Media” to add your content.",
        src: "https://static.wixstatic.com/media/84770f_4a219fcc6d504ec7949ba903d73620ff~mv2_d_1280_1452_s_2.jpg/v1/fit/w_776,h_202,q_90/84770f_4a219fcc6d504ec7949ba903d73620ff~mv2_d_1280_1452_s_2.webp"
    },
    {
        name: "I’m an image title",
        price: 600,
        code: "SKU 0003",
        desc: "Describe your image here. Use catchy text to tell people the story behind the photo. Go to “Manage Media” to add your content.",
        src: "https://static.wixstatic.com/media/84770f_8a8e5126d9e549d981baf9c11e0abe64~mv2.jpg/v1/fit/w_776,h_202,q_90/84770f_8a8e5126d9e549d981baf9c11e0abe64~mv2.webp" 
    },
    {
        name: "I’m an image title",
        price: 700,
        code: "SKU 0004",
        desc: "Describe your image here. Use catchy text to tell people the story behind the photo. Go to “Manage Media” to add your content.",
        src: "https://static.wixstatic.com/media/84770f_199e8c347b314c51bb27d37f2701cf3d~mv2_d_1280_1694_s_2.jpg/v1/fit/w_776,h_202,q_90/84770f_199e8c347b314c51bb27d37f2701cf3d~mv2_d_1280_1694_s_2.webp" 
    },
]

for(let a = 0; a < aboutContent.length; a++){
    let aIBox = document.createElement("div")
    aIBox.setAttribute("class", "aIBox")
    picBoxA.appendChild(aIBox)
    let aImg = document.createElement("img")
    aImg.src = aboutContent[a].src
    aImg.setAttribute("class", "aboutImg")
    aIBox.appendChild(aImg)
    aImg.onclick = function() {
        modal.style.display = "flex"
        modalPic.src = aboutContent[a].src
        modalTitle.innerHTML = aboutContent[a].name
        modalDesc.innerHTML = aboutContent[a].desc
        document.getElementById('aboutWrapper').setAttribute('index', a)
 
        next.onclick = function() {
            const currentIndex = Number(document.getElementById('aboutWrapper').getAttribute('index'));
            const newIndex = aboutContent[currentIndex + 1] ? currentIndex + 1 : 0;
            
            modalPic.src = aboutContent[newIndex].src
            modalTitle.innerHTML = aboutContent[newIndex].name
            modalDesc.innerHTML = aboutContent[newIndex].desc
            document.getElementById('aboutWrapper').setAttribute('index', newIndex)
        }
    }
}

for(let c = 0; c < creaturesContent.length; c++) {
    let cBox = document.createElement("div")
    cBox.setAttribute("class", "cBox")
    picBoxC.appendChild(cBox)
    let cImg = document.createElement("img")
    cImg.setAttribute("class", "creaturesImg")
    cImg.src = creaturesContent[c].src
    cBox.appendChild(cImg)
    let cTitle = document.createElement("div")
    cTitle.innerHTML = creaturesContent[c].name
    cTitle.setAttribute("class", "cTitle")
    picBoxC.appendChild(cTitle)
    let cDesc = document.createElement("p")
    cDesc.innerHTML = creaturesContent[c].desc
    cDesc.setAttribute("class", "cDesc")
    picBoxC.appendChild(cDesc)
    cImg.onclick = function() {
        modal.style.display = "flex"
        modalPic.src = creaturesContent[c].src
        modalTitle.innerHTML = creaturesContent[c].name
        modalDesc.innerHTML = creaturesContent[c].desc
        document.getElementById('creaturesWrapper').setAttribute('index', c)
 
        next.onclick = function() {
            const currentIndex = Number(document.getElementById('creaturesWrapper').getAttribute('index'));
            const newIndex = creaturesContent[currentIndex + 1] ? currentIndex + 1 : 0;
            
            modalPic.src = creaturesContent[newIndex].src
            modalTitle.innerHTML = creaturesContent[newIndex].name
            modalDesc.innerHTML = creaturesContent[newIndex].desc
            document.getElementById('creaturesWrapper').setAttribute('index', newIndex)
        }
    }
}

for(let l = 0; l < landscapeContent.length; l++) {
    let lBox = document.createElement("div")
    picBoxL.appendChild(lBox)
    let lImg = document.createElement("img")
    lImg.setAttribute("class", "landscapeImg")
    lImg.src = landscapeContent[l].src
    lBox.appendChild(lImg)
    let lTitle = document.createElement("div")
    lTitle.innerHTML = landscapeContent[l].name
    lTitle.setAttribute("class", "lTitle")
    picBoxL.appendChild(lTitle)
    let lDesc = document.createElement("p")
    lDesc.innerHTML = landscapeContent[l].desc
    lDesc.setAttribute("class", "lDesc")
    picBoxL.appendChild(lDesc)
    lImg.onclick = function() {
        modal.style.display = "flex"
        modalPic.src = landscapeContent[l].src
        modalTitle.innerHTML = landscapeContent[l].name
        modalDesc.innerHTML = landscapeContent[l].desc
        document.getElementById('landscapeWrapper').setAttribute('index', l)      
 
        next.onclick = function() {
            const currentIndex = Number(document.getElementById('landscapeWrapper').getAttribute('index'));
            const newIndex = landscapeContent[currentIndex + 1] ? currentIndex + 1 : 0;
            
            modalPic.src = landscapeContent[newIndex].src
            modalTitle.innerHTML = landscapeContent[newIndex].name
            modalDesc.innerHTML = landscapeContent[newIndex].desc
            document.getElementById('landscapeWrapper').setAttribute('index', newIndex)    
        }
    }
}

let basValue = 0
let total = 0
basketVal.innerHTML = basValue
basketValBurger.innerHTML = basValue
subtotal.innerHTML = total
cardSubtotal.innerHTML = total
cardTotal.innerHTML = total

let product_obj = {}


const itemAdd = (id, event) => {
    const count = Number(event.target.parentNode.getElementsByClassName('CIQV')[0].innerHTML)
    const price = Number(event.target.parentNode.parentNode.getElementsByClassName('cartItemPriceValue')[0].innerHTML)
    basValue += 1
    basketVal.innerHTML = basValue
    basketValBurger.innerHTML = basValue
    total += price
    subtotal.innerHTML = total
    cardSubtotal.innerHTML = total
    cardTotal.innerHTML = total
    event.target.parentNode.getElementsByClassName('CIQV')[0].innerHTML = count + 1

    product_obj[id].count += 1
}

const itemMinus = (id, event) => {
    const count = Number(event.target.parentNode.getElementsByClassName('CIQV')[0].innerHTML)
    if (count > 0) {
        const price = Number(event.target.parentNode.parentNode.getElementsByClassName('cartItemPriceValue')[0].innerHTML)
        basValue -= 1
        basketVal.innerHTML = basValue
        basketValBurger.innerHTML = basValue
        total -=  price
        subtotal.innerHTML = total
        cardSubtotal.innerHTML = total
        cardTotal.innerHTML = total
        event.target.parentNode.getElementsByClassName('CIQV')[0].innerHTML = count - 1

        product_obj[id].count -= 1
    }   
}

const itemDelete = (id, event) => {
    const count = Number(event.target.parentNode.getElementsByClassName('CIQV')[0].innerHTML)
    const price = Number(event.target.parentNode.getElementsByClassName('cartItemPriceValue')[0].innerHTML)
    basValue -= count
    basketVal.innerHTML = basValue
    basketValBurger.innerHTML = basValue
    total -= count * price
    subtotal.innerHTML = total
    cardSubtotal.innerHTML = total
    cardTotal.innerHTML = total

    product_obj = {
        ...product_obj, 
        [id]: undefined
    }
}


const renderCard = () => {
    const productsArray = Object.values(product_obj);
    if(!productsArray.length) return

    productHolder.innerHTML='';


    for (let index = 0; index < productsArray.length; index++) {
        let cartItem_holder = document.createElement("div")
        cartItem_holder.setAttribute("class", "cartItemHolder")
        productHolder.appendChild(cartItem_holder)
        cartItem_holder.id = productsArray[index].code;
            
        let cartItem_img = document.createElement("img")
        cartItem_img.setAttribute("class", "cartItemImg")
        cartItem_img.src = productsArray[index].src
        cartItem_holder.appendChild(cartItem_img)

        let cartIText_holder = document.createElement("div")
        cartIText_holder.setAttribute("class", "cartTextHolder")
        cartItem_holder.appendChild(cartIText_holder)

        let cartItem_name = document.createElement("div")
        cartItem_name.setAttribute("class", "cartItemName")
        cartItem_name.innerHTML = productsArray[index].name
        cartIText_holder.appendChild(cartItem_name)

        let cartItem_price = document.createElement("div")
        cartItem_price.setAttribute("class", "cartItemPrice")
        const priceWrapper = document.createElement('span');
        priceWrapper.className = 'cartItemPriceValue'
        priceWrapper.innerHTML = productsArray[index].price
        cartItem_price.innerHTML = "$"
        cartItem_price.appendChild(priceWrapper) 
        cartIText_holder.appendChild(cartItem_price)

        let cartItem_quantity = document.createElement("div")
        cartItem_quantity.setAttribute("id", "cartItemInput")
        cartIText_holder.appendChild(cartItem_quantity)

        let cartItem_quantity_minus = document.createElement("button")
        cartItem_quantity_minus.setAttribute("class", "CIQM")
        cartItem_quantity_minus.innerHTML = "-"
        cartItem_quantity.appendChild(cartItem_quantity_minus)

        let cartItem_quantity_value = document.createElement("span")
        cartItem_quantity_value.setAttribute("class", "CIQV")
        cartItem_quantity_value.innerHTML = productsArray[index].count
        cartItem_quantity.appendChild(cartItem_quantity_value)

        let cartItem_quantity_plus = document.createElement("button")
        cartItem_quantity_plus.setAttribute("class", "CIQP")
        cartItem_quantity_plus.innerHTML = "+"
        cartItem_quantity.appendChild(cartItem_quantity_plus)

        let cartItem_delete = document.createElement("button")
        cartItem_delete.setAttribute("class", "cartItemClose")
        cartItem_delete.innerHTML = "X"
        cartItem_holder.appendChild(cartItem_delete)

        subtotal.innerHTML = total
        basketVal.innerHTML = basValue
        basketValBurger.innerHTML = basValue
        
        cartItem_quantity_minus.onclick = (event) => {
            itemMinus(event.target.parentNode.parentNode.parentNode.id, event)
        }

        cartItem_quantity_plus.onclick = (event) => {
            itemAdd(event.target.parentNode.parentNode.parentNode.id, event)
        }

        cartItem_delete.onclick = function(event) {
            itemDelete(event.target.parentNod.id, event)
            cartItem_holder.remove()
        }
    }
}


for(let s = 0; s < shopContent.length; s++) {
    let sBox = document.createElement("div")
    shopWrapper.appendChild(sBox)
    let imgCont = document.createElement("div")
    imgCont.style.position = "relative"
    sBox.appendChild(imgCont)
    let sImg = document.createElement("img")
    sImg.setAttribute("class", "shopImg")
    sImg.src = shopContent[s].src
    imgCont.appendChild(sImg)
    let quickV = document.createElement("span")
    quickV.setAttribute("class", "quickV")
    quickV.innerHTML = "Quick Veiw"
    imgCont.appendChild(quickV)
    sImg.onmouseover = function() {quickV.style.display = "block"}
    sImg.onmouseout = function() {quickV.style.display = "none"} 
    let sTitle = document.createElement("div")
    sTitle.innerHTML = shopContent[s].name
    sTitle.setAttribute("class", "sTitle")
    sBox.appendChild(sTitle)
    let sPrice = document.createElement("p")
    sPrice.innerHTML = "$" + shopContent[s].price
    sPrice.setAttribute("class", "sPrice")
    sBox.appendChild(sPrice)
    imgCont.onclick = function() {
        shopWrapper.style.display = "none"
        buyWrapper.style.display = "block"
        buyDicision.innerHTML = shopContent[s].name
        buyPicL.src = shopContent[s].src
        buyPicS.src = shopContent[s].src
        buyPicS.onclick = function(){ 
            if (window.matchMedia("(max-width: 280px)").matches) {
                buyPicL.style.padding = "0"    
              }
        }
        buyPicXS.src = shopContent[s].src
        buyPicXS.onclick = function() {
            if (window.matchMedia("(max-width: 280px)").matches) {
                buyPicL.style.padding = "0 6vh"    
              }
        }
        buyTitle.innerHTML = shopContent[s].name
        skuCode.innerHTML = shopContent[s].code
        buyPrice.innerHTML = shopContent[s].price
        buyDesc.innerHTML = shopContent[s].desc
        document.getElementById('buyWrapper').setAttribute('index', s)
    }
    addCart.onclick = function() {
        basket.style.display = "block"
        
        const item = shopContent[document.getElementById('buyWrapper').getAttribute('index')];
        
        if (product_obj[item.code]) {
            product_obj[item.code].count += Number(buyInp.value)
        } else {
            product_obj[item.code] = {
                ...item,
                count: Number(buyInp.value)
            }
        }

        total += item.price * Number(buyInp.value)
        basValue = basValue + Number(buyInp.value)
        
        renderCard();
        
        document.getElementById("basketWrapper").classList.add("open")
    }
}

buyHome.onclick = function() {
    navs[0].style.color = "rgb(227, 98, 59)"
    navs[5].style.color = "white"
    homeWrapper.style.display = "block"
    homeWrapper.style.animation = "a1 .4s ease"
    buyWrapper.style.display = "none"
}

buyNext.onclick = function() {
    const currentIndex = Number(document.getElementById('buyWrapper').getAttribute('index'));
    const newIndex = shopContent[currentIndex + 1] ? currentIndex + 1 : 0;

    buyPicL.src = shopContent[newIndex].src
    buyPicS.src = shopContent[newIndex].src
    buyPicXS.src = shopContent[newIndex].src
    skuCode.innerHTML = shopContent[newIndex].code
    buyTitle.innerHTML = shopContent[newIndex].name
    buyPrice.innerHTML = shopContent[newIndex].price
    buyDesc.innerHTML = shopContent[newIndex].desc
    document.getElementById('buyWrapper').setAttribute('index', newIndex)
}

buyPrev.onclick = function() {
    const currentIndex = Number(document.getElementById('buyWrapper').getAttribute('index'));
    const newIndex = currentIndex == 0 ? currentIndex - 1 : shopContent.length - 1;
    
    buyPicL.src = shopContent[newIndex].src
    buyPicS.src = shopContent[newIndex].src
    buyPicXS.src = shopContent[newIndex].src
    skuCode.innerHTML = shopContent[newIndex].code
    buyTitle.innerHTML = shopContent[newIndex].name
    buyPrice.innerHTML = shopContent[newIndex].price
    buyDesc.innerHTML = shopContent[newIndex].desc
    document.getElementById('buyWrapper').setAttribute('index', newIndex)
}

cartBtn.onclick = function() {
    cardWrapper.style.display = "flex"
    
    homeWrapper.style.display = "none"
    aboutWrapper.style.display = "none"
    creaturesWrapper.style.display = "none"
    landscapeWrapper.style.display = "none"
    shopWrapper.style.display = "none"
    buyWrapper.style.display = "none"
    contactWrapper.style.display = "none"
    shippingWrapper.style.display = "none"
    termsWrapper.style.display = "none"
    faqWrapper.style.display = "none"

    document.getElementById("basketWrapper").classList.remove("open")
    basket.style.display = "none"

    document.getElementById('cardTotal').innerHTML = total

    if (cardTotal.innerHTML == 0) {
        productView.style.width = "100%"
        productAmount.style.display = "none"
        productVeiwHolder.style.display = "none"
        noteBox.style.display = "none"
        emptyBox.style.display = "flex"
    } else {
        productView.style.width = "65%"
        productAmount.style.display = "block"
        productVeiwHolder.style.display = "block"
        noteBox.style.display = "block"
        emptyBox.style.display = "none"
    }
            
    const productsArray = Object.values(product_obj);
    
    productVeiwHolder.innerHTML = ""

    if (!productsArray.length) return;

    for(let i = 0; i < productsArray.length; i++) {

        let cartItem_holder_Two = document.createElement("div")
        cartItem_holder_Two.setAttribute("class", "cartItemHolderTwo")
        productVeiwHolder.appendChild(cartItem_holder_Two)
            
        let cartItem_img_Two = document.createElement("img")
        cartItem_img_Two.setAttribute("class", "cartItemImgTwo")
        cartItem_img_Two.src = productsArray[i].src
        cartItem_holder_Two.appendChild(cartItem_img_Two)

        let cartIText_holder_Two = document.createElement("div")
        cartIText_holder_Two.setAttribute("class", "cartTextHolderTwo")
        cartItem_holder_Two.appendChild(cartIText_holder_Two)

        let cartItem_name_Two = document.createElement("div")
        cartItem_name_Two.setAttribute("class", "cartItemNameTwo")
        cartItem_name_Two.innerHTML = productsArray[i].name
        cartIText_holder_Two.appendChild(cartItem_name_Two)

        let cartItem_price_Two = document.createElement("div")
        cartItem_price_Two.setAttribute("class", "cartItemPriceTwo")
        const priceWrapper_Two = document.createElement('span');
        priceWrapper_Two.className = 'cartItemPriceValue'
        priceWrapper_Two.innerHTML = productsArray[i].price
        cartItem_price_Two.innerHTML = "$"
        cartItem_price_Two.appendChild(priceWrapper_Two) 
        cartIText_holder_Two.appendChild(cartItem_price_Two)

        let cartItem_quantity_Two = document.createElement("div")
        cartItem_quantity_Two.setAttribute("id", "cartItemInputTwo")
        cartIText_holder_Two.appendChild(cartItem_quantity_Two)

        let cartItem_quantity_minus_Two = document.createElement("button")
        cartItem_quantity_minus_Two.setAttribute("class", "CIQM")
        cartItem_quantity_minus_Two.innerHTML = "-"
        cartItem_quantity_Two.appendChild(cartItem_quantity_minus_Two)

        let cartItem_quantity_value_Two = document.createElement("span")
        cartItem_quantity_value_Two.setAttribute("class", "CIQV")
        cartItem_quantity_value_Two.innerHTML = productsArray[i].count
        cartItem_quantity_Two.appendChild(cartItem_quantity_value_Two)

        let cartItem_quantity_plus_Two = document.createElement("button")
        cartItem_quantity_plus_Two.setAttribute("class", "CIQP")
        cartItem_quantity_plus_Two.innerHTML = "+"
        cartItem_quantity_Two.appendChild(cartItem_quantity_plus_Two)

        let cartItem_delete_Two = document.createElement("button")
        cartItem_delete_Two.setAttribute("class", "cartItemClose")
        cartItem_delete_Two.innerHTML = "X"
        cartItem_holder_Two.appendChild(cartItem_delete_Two)

        cardSubtotal.innerHTML = total

        cartItem_quantity_minus_Two.onclick =(event) => {
            itemMinus(productsArray[i].code, event)
        }

        cartItem_quantity_plus_Two.onclick =(event) => {
            itemAdd(productsArray[i].code, event)
        }

        cartItem_delete_Two.onclick = function(event) {
            itemDelete(productsArray[i].code, event)
            cartItem_holder_Two.remove()
        }
    }
}


let faqButtons = ["Setting up FAQs", "General"]

for(let f = 0; f < faqButtons.length; f++) {
    let faqSpan = document.createElement("span")
    faqSpan.setAttribute("id", "faqSpan" + (f + 1))
    faqBtns.appendChild(faqSpan)
    faqSpan.innerHTML = faqButtons[f]
    faqSpan1.style.color = "red"
    faqSpan1.style.fontWeight = "bold"
    settingWrapper.style.display = "block"
    generalWrapper.style.display = "none"   
    faqSpan.onclick = function() {
        if (f === 0) {
            this.style.color = "red"
            this.style.fontWeight = "bold"
            settingWrapper.style.display = "block"

        }else {
            faqSpan1.style.color = "inherit"
            faqSpan1.style.fontWeight = "normal"
            settingWrapper.style.display = "none"
        }
        if (f === 1) {
            this.style.color = "red"
            this.style.fontWeight = "bold"
            generalWrapper.style.display = "block"
        }else {
            faqSpan2.style.color = "inherit"
            faqSpan2.style.fontWeight = "normal"
            generalWrapper.style.display = "none"
        }
    }
}

questionBtn1.onclick = function() {
    document.getElementById("questionContent1").classList.toggle("show")
}

questionBtn2.onclick = function() {
    document.getElementById("questionContent2").classList.toggle("show")
}

questionBtn3.onclick = function() {
    document.getElementById("questionContent3").classList.toggle("show")
}

questionBtn4.onclick = function() {
    document.getElementById("questionContent4").classList.toggle("show")
}

expand.onclick = function() {
    document.getElementById("tier3").classList.toggle("hide")
}

infoBtn.onclick = function() {
    document.getElementById("info1").classList.toggle("show")
}


returnBtn.onclick = function() {
    document.getElementById("info2").classList.toggle("show")
}

navBasketBtn.onclick = function() {
    document.getElementById("basketWrapper").classList.add("open")
    renderCard()
    basket.style.display = "block"
}

// navBasketBtnBurger.onclick = function() {
//     document.getElementById("basketWrapper").classList.add("open")
//     renderCard()
//     basket.style.display = "block"
// }


basketBtn.onclick = function() {
    document.getElementById("basketWrapper").classList.remove("open")
    basket.style.display = "none"
    
}

window.onclick = function(event) {
    if (event.target == basket) {
      basket.style.display = "none";
    }
}

promoCode.onclick = function() {
    document.getElementById("codeHolder").classList.toggle("show")
}

addNote.onclick = function() {
    document.getElementById("noteHolder").classList.toggle("show")
}