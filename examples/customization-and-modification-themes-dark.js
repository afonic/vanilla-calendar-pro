import VanillaCalendar from 'vanilla-calendar-pro';
import 'vanilla-calendar-pro/build/vanilla-calendar.min.css';

const options = {
  settings: {
    visibility: {
      theme: 'dark',
    },
  },
};

const calendar = new VanillaCalendar('#calendar', options);
calendar.init();
