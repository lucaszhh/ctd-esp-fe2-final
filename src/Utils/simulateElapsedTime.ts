export const simulateElapsedTime: (decrementMiliseconds: number) => Date = (decrementMiliseconds) => {
    const time = new Date();
    time.setMilliseconds(time.getMilliseconds() - decrementMiliseconds);
    return time;
};