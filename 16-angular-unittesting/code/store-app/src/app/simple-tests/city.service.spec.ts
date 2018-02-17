import { CityService } from './city.service';

xdescribe('CityService', () => {
  let cityService: CityService;

  // runs before every test
  beforeEach(() => {
    // set up
    cityService = new CityService();
  });

  // runs after every test
  afterEach(() => {
    // tear down
    // perform clean up activity
  });

  it('should check if specified cities are present in the array', () => {
    const cities = cityService.getCities();

    expect(cities).toContain('bengaluru');
    expect(cities).toContain('mumbai');
  });

  it('should check if new city is added to the array', () => {
    // Arrange
    const newCity = 'pune';

    // Act
    cityService.addCity(newCity);

    // Assert
    expect(cityService.cities).toContain(newCity);
  });
});
