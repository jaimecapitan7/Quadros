function sendMail(){
    let params = {
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };


const serviceID = "service_iouxf7u";
const templateID = "template_sv26l7j";

emailjs.send(serviceID,templateID,params)
.then(
    res =>{
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert(`Your message sent succesfully`);
    }
)
.catch((err) => console.log(error));
}