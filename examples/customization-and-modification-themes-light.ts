import VanillaCalendar from 'vanilla-calendar-pro';
import type { IOptions } from 'vanilla-calendar-pro/types';

import 'vanilla-calendar-pro/build/vanilla-calendar.min.css';

const options: IOptions = {
  settings: {
    visibility: {
      theme: 'light',
    },
  },
};

const calendar = new VanillaCalendar('#calendar', options);
calendar.init();
