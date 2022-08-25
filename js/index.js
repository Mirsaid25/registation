let plc = document.querySelector(".reload")
let a = document.querySelector("a")
let button2 = document.querySelector(".w2")
let button1 = document.querySelector(".w1")

function enter(plc) {
    plc.innerHTML =""

    let form = document.createElement("form")
    let inp1 = document.createElement("div")
    let img1_inp1 = document.createElement("img")
    let img2_inp1 = document.createElement("img")
    let input_inp1 = document.createElement("input")
    let inp2 = document.createElement("div")
    let img1_inp2 = document.createElement("img")
    let input_inp2 = document.createElement("input")
    let img2_inp2 = document.createElement("img")

    inp1.classList.add("inp1")
    inp2.classList.add("inp2")
    img2_inp1.classList.add("inp1_img")
    img2_inp2.classList.add("inp2_img")

    img1_inp1.src = "../img/img1/blue-round1.svg" 
    img2_inp1.src = "../img/img1/blue-round-inter.svg"
    img1_inp2.src = "../img/img1/inp2.svg"
    img2_inp2.src = "../img/img1/close-ice_password.svg"

    img1_inp1.alt = "" 
    img2_inp1.alt = "" 
    img1_inp2.alt = "" 
    img2_inp2.alt = ""

    input_inp1.type ="email"
    input_inp2.type ="password"
    input_inp1.placeholder ="E-mail or Login"

    inp1.name = "email"
    inp2.name = "password"

    form.name = "sign"

    inp1.append(img1_inp1, img2_inp1 , input_inp1)
    inp2.append(img1_inp2, input_inp2 , img2_inp2)
    form.append(inp1,inp2 )
    plc.append(form)

    document.body.style.paddingBottom= "130px"
    a.style.display = "block"
    // function
    let ls = JSON.parse(localStorage.getItem("info"))

    button2.onclick=()=>{
        if(input_inp1.value === ls.email && input_inp2.value === ls.password){
            console.log("l");
        }

    }
 
    button1.onclick=()=>{
        registation(plc)
    }
    
}

// enter(plc)

function registation(plc) {
    plc.innerHTML =""

    let form = document.createElement("form")
    let inp1 = document.createElement("div")
    let input_inp1 = document.createElement("input")
    let inp2 = document.createElement("div")
    let input_inp2 = document.createElement("input")
    let inp3 = document.createElement("div")
    let input_inp3 = document.createElement("input")
    let inp4 = document.createElement("div")
    let img1 = document.createElement("img")
    let input_inp4 = document.createElement("input")
    let img2 = document.createElement("img")
    let button = document.createElement("button")

    form.name = "registation"

    inp1.classList.add("inp1")
    inp2.classList.add("inp1")
    inp3.classList.add("inp1")
    inp4.classList.add("inp2")
    img2.classList.add("inp2_img")
    button.classList.add("send")

    input_inp1.type = "text"
    input_inp2.type = "text"
    input_inp3.type = "email"
    input_inp4.type = "password"

    input_inp1.name = "name"
    input_inp2.name = "surname"
    input_inp3.name = "email"
    input_inp4.name = "password"

    input_inp1.required = true
    input_inp2.required = true
    input_inp3.required = true
    input_inp4.required = true

    input_inp1.placeholder = "Name"
    input_inp2.placeholder = "Surname"
    input_inp3.placeholder = "E-mail or Login" 

    img1.src = "../img/img1/inp2.svg"
    img2.src = "../img/img1/close-ice_password.svg"
    img1.alt = ""
    img2.alt = ""

    button.innerHTML = "Send"

    plc.append(form)
    form.append(inp1, inp2, inp3,inp4, button)
    inp1.append(input_inp1)
    inp2.append(input_inp2)
    inp3.append(input_inp3)
    inp4.append(img1, input_inp4,img2)

    a.style.display = "none"

    document.body.style.paddingBottom= "0"
    // function

    form.onsubmit=e=>{
        e.preventDefault()

        let info = {}
        let fm = new FormData(form)
        fm.forEach((value, key)=>{
            info[key] = value
        })
        
        localStorage.setItem("info" , JSON.stringify(info))

    }

    button2.onclick=()=>{
        enter(plc)
    }
}

registation(plc)

if (localStorage.getItem("info").length > 0) {
    enter(plc)
}else{
    registation(plc)
}