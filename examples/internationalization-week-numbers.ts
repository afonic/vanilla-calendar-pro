import VanillaCalendar from 'vanilla-calendar-pro';
import type { Options } from '@package/types';

import 'vanilla-calendar-pro/build/vanilla-calendar.min.css';

const options: Options = {
  enableWeekNumbers: true,
};

const calendar = new VanillaCalendar('#calendar', options);
calendar.init();
