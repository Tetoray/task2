document.addEventListener('DOMContentLoaded', function () {
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const navPills = document.querySelector('.hamburger-menu ul.nav-pills');
  
    hamburgerIcon.addEventListener('click', function () {
      navPills.classList.toggle('active');
    });
  });
  

  document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.nav-button');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            // Remove 'active' class from all buttons
            buttons.forEach(btn => btn.classList.remove('active'));

            // Add 'active' class to the clicked button
            button.classList.add('active');
        });
    });
});