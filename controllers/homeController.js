exports.home = (req, res) => {
    const currentTime = new Date();
    const dayOfWeek = currentTime.getDay();
    const hourOfDay = currentTime.getHours();

    if (dayOfWeek >=1 && dayOfWeek<= 5 && hourOfDay>=9 && hourOfDay< 17) {
      res.render('home', { title: 'Home Page' });
   } else {
   res.send('The website is only available during working hours (Mon-Fri, 9 AM to 5 PM)')
   }
  };
  