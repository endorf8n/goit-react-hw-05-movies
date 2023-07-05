import { format } from 'date-fns';

export const formatDateToYear = date => {
  if (date) {
    return format(new Date(date), 'yyyy');
  }
};
