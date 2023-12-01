import VanillaCalendar from 'vanilla-calendar-pro';
import 'vanilla-calendar-pro/build/vanilla-calendar.min.css';

const options = {
  actions: {
    clickArrow(event, year, month) {
      console.log(year, month);
    },
  },
};

const calendar = new VanillaCalendar('#calendar', options);
calendar.init();
