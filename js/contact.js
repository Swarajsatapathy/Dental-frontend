form = document.querySelector('.form')


form.addEventListener('submit', function(event) {
    event.preventDefault(); 
  
    
    const formData = {
      firstName: document.querySelectorAll('.input')[0].value.trim(),
      lastName: document.querySelectorAll('.input')[1].value.trim(),
      email: document.querySelectorAll('.input')[2].value.trim(),
      message: document.querySelectorAll('.input')[3].value.trim(),
    };
  
    
    console.log(formData);
    form.reset()
  });
  