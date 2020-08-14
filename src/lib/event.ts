const enterEvent = (condition: boolean | undefined, runningFunction: any) => (
  event: React.KeyboardEvent<HTMLElement>
) => {
  if (event.key === "Enter" && condition) runningFunction(event);
};

export default { enterEvent };
