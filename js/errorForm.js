((window, document) => {
   window.addEventListener('load', () => {
      let form = document.getElementById('form');
      const formItems = document.querySelectorAll('input, textarea')

      form.addEventListener('submit', (event) => {
         event.preventDefault();
         for (let i = 0; i < formItems.length; i++) {
            if (formItems[i].value === "") {
               formItems[i].classList.add('formError')
            } else {
               formItems[i].classList.remove('formError');
            }
         }
      })
   })
})(window, document, undefined)