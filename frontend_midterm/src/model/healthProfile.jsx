export class HealthProfile {
  constructor(name, mobile, address, district, road, bus) {
    this.name = name;
    this.mobile = mobile;
    this.personal = {
      address,
      district,
      additional: {
        road,
        bus,
      },
    };
  }
}
