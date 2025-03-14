import { timerRef } from '../constant';

export const debounce = <T extends (...args: any[]) => void>(func: T, delay: number): (...args: Parameters<T>) => void => {

  return (...args: Parameters<T>) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    // clearTimeout(timer); // Clears the previous timeout
    timerRef.current = setTimeout(() => {
      func(...args); // Calls the function with correct 'this'
    }, delay);
  };
};
