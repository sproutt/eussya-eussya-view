class ResultModalEvent {
  constructor(private setOnOff: any) {}

  clickOutSide = (event: any) => {
    if (event.target.closest("#result-modal")) return;
    this.removeClickOutSideEvent(event);
    this.setOnOff(0);
  };

  addClickOutSideEvent = () => {
    document.addEventListener("click", this.clickOutSide);
  };

  removeClickOutSideEvent = (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    event.preventDefault();
    document.removeEventListener("click", this.clickOutSide);
  };
}

export default ResultModalEvent;
