export class CityService {
  cities = ['bengaluru', 'mumbai', 'chennai', 'new delhi'];

  getCities() {
    return this.cities;
  }

  addCity(city: string) {
    this.cities.push(city);
  }
}
