/**
 *
 *
 * @export
 * @class BaseComponent
 * - Base Component for all GUI Components.
 */
/*
TODO 

*/

export abstract class BaseComponent<T extends HTMLElement> extends HTMLElement {
  public element: T;
  public elementSelector: string;
  public data: string;

  constructor(
    componentTemplate: string,
    loadingTemplate: string,
    errorTemplate: string,
    data: string,
  ) {
    super();
    //BASIC INITIALIZATIONS
    this.element = element;
    this.id = elementId;
    this.data = data;
  }

  //@autobind
  renderOn(parentElementId: string): void {
    let container = document.getElementById(parentElementId)! as HTMLDivElement;
    //this.appendChild(this.element);
    container.appendChild(this);
  }

  render(): void {}
}
