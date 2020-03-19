export default class Helper {
  public name: string = null;
  public partialPostcode: string = null;
  public contactPhone: string = null;
  public servicesProvided: string = null;

  constructor(data?: any) {
    Object.keys(data).forEach((key: string) => {
      if (this.hasOwnProperty(key)) {
        this[key] = data[key];
      }
    });
  }
}
