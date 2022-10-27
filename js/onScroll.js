((window,document) => {
   window.addEventListener('load',  () => {
      const missionBlock = document.getElementById('mission_block');
      const missionText = document.getElementById('mission_text');
      const missionImg = document.getElementById('mission_img');

      console.log('missionBlock', missionBlock)

      let observer = new IntersectionObserver(
         (entries) => {
            const entry = entries[0];

            if (entry.isIntersecting) {
               missionImg.style.transform = "translateX(-65%) rotateZ(-90deg)"
               missionImg.style.transition = "transform 1s ease-in-out"

               missionText.style.opacity = "0.5"
               missionText.style.transform = "translateX(235%)"
               missionText.style.transition = "opacity 1s ease-in-out"
               missionText.style.transition = "transform 1s ease-in-out"
            }
         },
         {threshold: 1}
      );

      observer.observe(missionBlock);
   })
})(window, document, undefined)

