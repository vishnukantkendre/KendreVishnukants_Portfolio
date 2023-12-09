
function sendMail(){

    var parameters = {
        email_id : document.getElementById('email_id').value,
        phone_no : document.getElementById('phone_no').value,
        company : document.getElementById('company').value
        
    }

   
    emailjs.send('service_8u4afnv', 'template_5kles9o', parameters)
    .then(function(response) {
        if(email_id!=null && phone_no!=null && company!=null){
            alert('Email has been sent SUCCESSFULLY!', response.status, response.text);
        }
    }, function(error) {
       alert('Email is FAILED to be sent ...', error);
    });
}