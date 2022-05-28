function check() {
    postData()
    getData()
}
let btn = document.getElementById("btn")
btn.addEventListener("click",check)

function check2() {
    postData()
    getData()
}
let btn2 = document.getElementById("btn2")
btn.addEventListener("click",check2)

function check3() {
    deleteData(2)
   
}
let btndel = document.getElementById("btndel")
btndel.addEventListener("click",check3)
let url=`http://localhost:3000/consult`

async function getData(){
    try {
        let res = await fetch(url)
        let data = await res.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

async function postData(){
    let payload={
        "message":document.getElementById("inp").value,
        "status" :document.getElementById("inp2").value
    }
    payload=JSON.stringify(payload)
    try {
        let res = await fetch(url, {
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:payload
        })
        let data = await res.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

async function getData(){
    try {
        let res = await fetch(url)
        let data = await res.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

async function postData(){
    let payload={
        "message":document.getElementById("inp").value,
        "status" :document.getElementById("inp2").value
    }
    payload=JSON.stringify(payload)
    try {
        let res = await fetch(url, {
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:payload
        })
        let data = await res.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}


async function deleteData(id){
    let url=`http://localhost:3000/consult/${id}`

    try {
        let res = await fetch(url, {
            method:"DELETE",
            
        })
        let data = await res.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}