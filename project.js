const ragistorBox=document.getElementById("ragistorBox");
    const loginBox=document.getElementById("loginBox");

    const regUser=document.getElementById("regUser");
    const regPass=document.getElementById("regPass");
    const registerBtn=document.getElementById("registerBtn");

    const loginUser=document.getElementById("loginUser");
    const loginPass=document.getElementById("loginPass");
    const loginBtn=document.getElementById("loginBtn");


    //ragistorBox.style.display="block";
    registerBtn.addEventListener("click",()=>
    {
        const username=regUser.value;
        const password=regPass.value;
        if(username==="" || password==="")
        {
            alert("please fill all fields");
            return ;
        }
        localStorage.setItem("username",username);
        localStorage.setItem("password",password);
        alert("Ragistration succusefull please login:");
        //switch to login page
        ragistorBox.style.display="none";
        loginBox.style.display="block";
    });
    //Actual page 
    const actualPage=document.getElementById("actualPage");
    //login logic

    loginBtn.addEventListener("click",()=>{
    const loginUsername=loginUser.value;//
    const loginpassword=loginPass.value;//

    const storeUser=localStorage.getItem("username");
    const storePass=localStorage.getItem("password");
    if(loginUsername==="" || loginpassword==="")
    {
        alert("fill the fields:");
        return ;
    }
    else if(loginUsername===storeUser && loginpassword===storePass)
    {
        alert("Login succusefully !");
         localStorage.setItem("isLoggedIn","true");
        loginBox.style.display="none";
        actualPage.style.display="block";
        const container=document.getElementById("container");
        container.style.display="none";
    }
    else{
        alert("wrong password or username");
    }
    });
    //if you have alrady account
    const alradyacc=document.getElementById("alradyLogin");
    alradyacc.addEventListener("click",()=>
    {
    ragistorBox.style.display ="none";
    loginBox.style.display= "block";
    });
    //for back button
    const backBtn=document.getElementById("backBtn");
    backBtn.addEventListener("click",()=>
    {
    loginBox.style.display="none";
    ragistorBox.style.display="block";
    });
    //Actual page of the webpage
    const service1b=document.getElementById("service1b");
    const service2b=document.getElementById("service2b");
    const service3b=document.getElementById("service3b");
    const service4b=document.getElementById("service4b");
    const service5b=document.getElementById("service5b");
    const service6b=document.getElementById("service6b");
    //for pop that can we use further
    const servicepopup=document.getElementById("servicepopup");
    const closepopup=document.getElementById("closepopup");
    //adding eventlistners of each services
    //  service1
    service1b.addEventListener("click",()=>
    {
    servicepopup.style.display="flex";
    });
    closepopup.addEventListener("click",()=>
    {
        servicepopup.style.display="none";
    });
    //second service
    service2b.addEventListener("click",()=>
    {
        servicepopup.style.display="flex";
    });
    closepopup.addEventListener("click",()=>
    {
        servicepopup.style.display="none";
    });
    //third service
    service3b.addEventListener("click",()=>
    {
    servicepopup.style.display="flex";
    });
    closepopup.addEventListener("click",()=>
    {
    servicepopup.style.display="none";
    });
    //fourth service
    service4b.addEventListener("click",()=>
    {
    servicepopup.style.display="flex";
    });
    closepopup.addEventListener("click",()=>
    {
        servicepopup.style.display="none";
    })
    //fifth service
    service5b.addEventListener("click",()=>
    {
    servicepopup.style.display="flex";
    });
    closepopup.addEventListener("click",()=>{
        servicepopup.style.display="none";
    });
    // sixth sirvice
    service6b.addEventListener("click",()=>
    {
        servicepopup.style.display="flex";
    });
    closepopup.addEventListener("click",()=>
    {
        servicepopup.style.display="none";
    })
   
//Navigation bar Logic
const homeBtn=document.getElementById("home");
const servicesBtn=document.getElementById("services");
const galleryBtn=document.getElementById("gallery");
const contactBtn=document.getElementById("contact");
const feddBtn=document.getElementById("feed");

//Adding Eventlisterners

//1.homepage
homeBtn.addEventListener("click",()=>
{
actualPage.scrollIntoView();
alert("you are in home page!")
});
//servicebtn
servicesBtn.addEventListener("click",()=>
{
    document.getElementById("mainPage1").scrollIntoView({ behavior: "smooth" });
});

//gallery 
const Gal=document.getElementById("Gal");
galleryBtn.addEventListener("click",()=>
{
actualPage.style.display="none";
Gal.style.display="block";
});

//handling galarys back btn
const galBackBtn=document.getElementById("galBackBtn");
galBackBtn.addEventListener("click",()=>
{

actualPage.style.display="block";
Gal.style.display="none";
});

//contact us btn handling
const contactUs=document.getElementById("contactUs");
contactBtn.addEventListener("click",()=>
{
    servicepopup.style.display="flex";
});

//handling feddback of user
feddBtn.addEventListener("click",()=>
{
    actualPage.style.display="none";
    feedbackForm.style.display="block";

})
 
//Creating function and try to submit and back button in feedback
    const feedbackForm = document.getElementById("feedbackForm");
    const feedbackBtn = document.getElementById("feedbackBtn");
function handleSubmit()
{
    alert("Feedback submited succusefully!");
    feedbackForm.style.display="none";
    ragistorBox.style.display="none";
    loginBox.style.display="none";
    actualPage.style.display="block";
};
function handleBack()
{
     feedbackForm.style.display="none";
    actualPage.style.display="block";
}
//for admin page
const adminBtn=document.getElementById("adminBtn");
const adminBox=document.getElementById("adminBox");
const container=document.getElementById("container");
const adminLoginBtn=document.getElementById("adminLoginBtn");
const Galary=document.getElementById("Gal");
let isAdmin=false;

adminBtn.addEventListener("click",()=>
{
   adminBox.style.display="block";
   container.style.display="none";
});
function adminLoginBtnHanddle() {
    const adminEmail = "megharajsodde@gmail.com";
    const adminpass = "admin@123";
    const loginEmail = document.getElementById("loginEmail").value;
    const loginPassword = document.getElementById("loginPassword").value;

    if (loginEmail === "" || loginPassword === "") {
        alert("Please fill all fields");
        return;
    }

    if (loginEmail === adminEmail && loginPassword === adminpass) {
        alert("Admin login successful!");
        isAdmin = true; // set admin flag
        adminBox.style.display = "none";
        Gal.style.display = "block";
        showAdminButtons(); // show admin buttons
    } else {
        alert("Wrong email or password");
    }
}
function cheackAdmin()
{
    const addBtn=document.getElementById("addImageBtn");
    if(isAdmin)
    {
        addBtn.style.display="block";
    }
    else
    {
        addBtn.style.display="none";
    }
};
const addImageBtn = document.getElementById("addImageBtn");
const imageInput = document.getElementById("imageInput");
const galImages = document.getElementById("galImages");

if(addImageBtn && imageInput)
{
    addImageBtn.addEventListener("click", () => {
        imageInput.click();
    });
}
imageInput.addEventListener("change", () => {

    const file = imageInput.files[0];

    if(file)
    {
        const reader = new FileReader();

        reader.onload = function(e)
        {
            const imgData = e.target.result;

            // create image element
            const img = document.createElement("img");
            img.src = imgData;
            img.width = 300;
            img.height = 200;

            galImages.appendChild(img);

            // save in localStorage
            let images = JSON.parse(localStorage.getItem("galleryImages")) || [];
            images.push(imgData);
            localStorage.setItem("galleryImages", JSON.stringify(images));
        };

        reader.readAsDataURL(file);
    }
});
const deleteImageBtn=document.getElementById("deleteImageBtn");
deleteImageBtn.addEventListener("click", () => {

    const images = galImages.getElementsByTagName("img");

    if(images.length > 0)
    {
        galImages.removeChild(images[images.length - 1]);

        let storedImages = JSON.parse(localStorage.getItem("galleryImages")) || [];
        storedImages.pop();

        localStorage.setItem("galleryImages", JSON.stringify(storedImages));
    }

});
function showAdminButtons() {
    const addBtn = document.getElementById("addImageBtn");
    const deleteBtn = document.getElementById("deleteImageBtn");

    if (isAdmin) {
        addBtn.style.display = "block";
        deleteBtn.style.display = "block";
    } else {
        addBtn.style.display = "none";
        deleteBtn.style.display = "none";
    }
}

isAdmin = false; // normal user is not admin
showAdminButtons();


//logut logic
const LogoutBtn=document.getElementById("logoutBtn");
LogoutBtn.addEventListener("click",()=>{
    
    actualPage.style.display="none";
    container.style.display="block";
    loginBox.style.display="block";
    ragistorBox.style.display="none";
    
});
window.onload = function () {

    let images = JSON.parse(localStorage.getItem("galleryImages")) || [];

    images.forEach((imgData) => {

        const img = document.createElement("img");
        img.src = imgData;
        img.width = 300;
        img.height = 200;

        galImages.appendChild(img);
    });
};  
//for admin login back button handling
const adminBackBtn=document.getElementById("adminBackBtn");
adminBackBtn.addEventListener("click",()=>
{
adminBox.style.display="none";
container.style.display="block";
loginBox.style.display="block";
ragistorBox.style.display="none";


}); 
//Ended project
