import type { IReset } from '@package/types';
import createToInput from '@scripts/creators/createToInput';
import reset from '@scripts/methods/reset';
import errorMessages from '@scripts/utils/getErrorMessages';
import type VanillaCalendar from '@src/vanilla-calendar';

const update = (self: VanillaCalendar, { year, month, dates, time, locale }: IReset = {}) => {
  if (!self.private.isInit) throw new Error(errorMessages.notInit);
  if (self.input && !self.private.isInputInit) createToInput(self, false);
  reset(self, { year, month, dates, time, locale });
  if (self.actions.updateCalendar) self.actions.updateCalendar(self);
};

export default update;
