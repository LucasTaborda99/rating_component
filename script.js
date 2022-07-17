const submitChange = () => {
        const activeRating = document.querySelector('.btn.active').textContent;

        document.getElementById('rating').innerHTML = `<div id="thanks">
        <div id="thankyou_container">
          <img src="/images/illustration-thank-you.svg" alt="Cellphone Image" class="image">
          <p class="selected_text">You selected ${activeRating} out of 5 </p>
          <div class="text_thankyou">
            <h2>Thank you!</h2>
            <p>We appreciate you taking the time to give a rating. If you ever need more support,
              don't hesitate to get in touch!</p>
          </div>
        </div>
      </div>`
}

const options = document.querySelectorAll('.navbar a i')

function handleClickOption(){

    options.forEach(option => {
        option.classList.remove('active')
    })

    this.classList.add('active')

    const submitButton = document.querySelector('.submit_button')
    submitButton.removeAttribute('disabled')
}

options.forEach((option) => 
    option.addEventListener('click', handleClickOption))
    

