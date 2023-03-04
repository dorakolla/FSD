var h1=document.querySelector('h1');
var p1=document.querySelector('.p1')
var p2=document.querySelector('.p2')
var p3=document.querySelector('.p3')
var p4=document.querySelector('.p4')
var a1=document.querySelector('.a1')
var ul=document.querySelector('ul');
var title=document.querySelector('title')
var img=document.querySelector('img')
var Name=document.forms['register']['name']
var user=document.forms['register']['user']
var email=document.forms['register']['email']
var submit=document.querySelector('#submit')
var clear=document.querySelector('#clear')
var reset=document.querySelector('#clear')
var Export=document.querySelector('#export')
var New=document.querySelector('#newBtn')




h1.addEventListener("mouseout",function mouseout(){
    h1.style.color="black";
})
p1.addEventListener("click",function clickP1(){
    p1.style.background="grey";
})
p2.addEventListener("click",function clickP2(){
    p2.innerText="(clicked)"+p2.innerText
})
p3.addEventListener("dblclick",function clickP3(){
    
    p3.innerText=p3.innerText+"(doubleclicked)"
})

p4.addEventListener("click",function clickP4(){
    p4.style.fontWeight="bold"
});
a1.addEventListener("click",function clickOna1(){
    a1.style.border="2px solid black"
});
ul.addEventListener("click",()=>{
    ul.style.fontStyle="Italic";
})

window.addEventListener("resize",()=>{
    title.innerText="Window Resized";
    const image=document.createElement("img");
    image.src="https://images.unsplash.com/photo-1675137017914-4b61d2e76b34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8eEh4WVRNSExnT2N8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
    document.querySelector('body').appendChild(image);
    
    p1.remove();
})
img.addEventListener("click",()=>{
    img.style.filter="grayscale(100%)";
})
submit.addEventListener("click",function validate(){
    if (user.value==" "|| Name.value==" "||email.value==""){
        alert("Fill all fields");
    }
})

reset.addEventListener("click",()=>{
Name.value=''
user.value=''
email.value=''
})

function addNewRow() {
    var newRow = document.createElement("div");
    newRow.innerHTML = `<label for="name">Name:</label>
                        <input type="text" id="name" name="name" required><br>
                        <label for="userId">User ID:</label>
                        <input type="text" id="userId" name="userId" required><br>
                        <label for="email">Email ID:</label>
                        <input type="email" id="email" name="email" required><br>`;
    document.getElementById("myForm").appendChild(newRow);
            }
function validatefield(){
    var format = /[0-9!#$%^&*(),?":{}|<>]/;
    if(Name.value.match(format)|| user.value.match(format)||email.match(format)){
        alert("Invalid Input!!")
    }
}

Export.addEventListener("click",function exportToFile() {
    
    var fileContent = Name.value + "-" + user.value + "-" + email.value;
    var fileName = "NewFile.txt";
    var a = document.createElement("a");
    var file = new Blob([fileContent], {type: 'text/plain'});
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
  })

clear.addEventListener("click",function clearOnFocus(){
    var Input = document.activeElement;
    if (Input.tagName === "INPUT" && Input.type === "text") {
        Input.value = "";
      }
}
)
