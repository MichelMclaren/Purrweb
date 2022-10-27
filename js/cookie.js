((window, document) => {
   window.addEventListener('load', () => {
      const cookie = document.querySelector('.cookie');
      const confirmButton = document.getElementById('confirm_cookie_button')

      cookie.classList.add('show_cookies')

      confirmButton.addEventListener('click', () => {
         cookie.classList.remove('show_cookies')
      })
   })
})(window, document, undefined)