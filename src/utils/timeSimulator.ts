/**
 * This function is responsible for simulate elapsed time in data formatter
 * 
 * @param decrementMiliseconds 
 * @returns Date
 */
export const simulateElapsedDate: (decrementMiliseconds: number) => Date = (decrementMiliseconds) => {
  const time = new Date();
  time.setMilliseconds(time.getMilliseconds() - decrementMiliseconds);
  return time;
};

/**
 * This function is responsible for recibe a date and similate a new date
 * @param date
 * @returns number;
 */
export const simulateElapsedMinutes:(date: Date) => number = (date) =>{
  const ahora = new Date();
  return  Math.floor(
    (ahora.getTime() - date.getTime()) / 60000
  );
};