import dayjs from 'dayjs';
import calendarTime from 'dayjs/plugin/calendar';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);
dayjs.extend(calendarTime);

export const dayts = dayjs;
