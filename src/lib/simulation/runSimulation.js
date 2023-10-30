export const runSimulation = () => {
  const timerId = setInterval(() => {
    console.log('tick')
  }, 3000)

  return timerId;
}
