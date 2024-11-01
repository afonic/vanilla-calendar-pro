import VanillaCalendar from 'vanilla-calendar-pro';
import type { Options } from '@package/types';

import 'vanilla-calendar-pro/build/vanilla-calendar.min.css';

const options: Options = {
  dateMin: '1920-01-01',
  dateMax: '2038-12-31',
};

const calendar = new VanillaCalendar('#calendar', options);
calendar.init();
