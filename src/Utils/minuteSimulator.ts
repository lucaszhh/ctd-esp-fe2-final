/**
 * This function is responsible for recibe a date and similate a new date
 * @param date
 * @returns number;
 */

export const minuteSimulator:(date: Date) => number = (date) =>{
    const ahora = new Date();
    return  Math.floor(
      (ahora.getTime() - date.getTime()) / 60000
    );
}