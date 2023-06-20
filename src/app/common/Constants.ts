export class Constants{
  static LOGIN_ROUTE = 'login';
  static REGISTRATION_ROUTE = 'registration';
  static OTP_ROUTE = 'otp';
  static DASHBOARD_ROUTE = 'dashboard';
  static DASHBOARD_OVERVIEW_ROUTE = 'dashboard/overview';



  static CHART_PRIMARY_COLOR_LINE = '#3675fe';
  static CHART_SECONDARY_COLOR_LINE = '#e5edff';
  static CHART_TERTIARY_COLOR_LINE = '#b2b2ff';
  static CHART_X_AXIS_COLOR_LINE = '#e3e6ed';
  static CHART_LABEL_COLOR_TITLE = '#000000';
  static CHART_LABEL_COLOR_SUBTITLE = '#525b75';

  static BUILDING_LISTING = [
    {
      name: 'Building 1',
      address: '123 Main Street',
      number_of_units: 20,
      number_of_tenants: 18,
      average_monthly_rental_rate: 5000,
      image: '../../../assets/images/building-1.jpg',
    },
    {
      name: 'Building 2',
      address: '456 Elm Avenue',
      number_of_units: 15,
      number_of_tenants: 12,
      average_monthly_rental_rate: 4500,
      image: '../../../assets/images/building-2.jpg',
    },
    {
      name: 'Building 3',
      address: '789 Oak Road',
      number_of_units: 10,
      number_of_tenants: 8,
      average_monthly_rental_rate: 6000,
      image: '../../../assets/images/building-3.jpg',
    },
    {
      name: 'Building 4',
      address: '321 Pine Lane',
      number_of_units: 12,
      number_of_tenants: 10,
      average_monthly_rental_rate: 5500,
      image: '../../../assets/images/building-4.jpg',
    },
    {
      name: 'Building 5',
      address: '654 Cedar Court',
      number_of_units: 18,
      number_of_tenants: 16,
      average_monthly_rental_rate: 4800,
      image: '../../../assets/images/building-5.jpg',
    },
    {
      name: 'Building 6',
      address: '987 Maple Street',
      number_of_units: 8,
      number_of_tenants: 6,
      average_monthly_rental_rate: 5200,
      image: '../../../assets/images/building-6.jpg',
    },
    {
      name: 'Building 7',
      address: '135 Birch Avenue',
      number_of_units: 16,
      number_of_tenants: 14,
      average_monthly_rental_rate: 4700,
      image: '../../../assets/images/building-7.jpg',
    },
    {
      name: 'Building 8',
      address: '246 Walnut Road',
      number_of_units: 14,
      number_of_tenants: 12,
      average_monthly_rental_rate: 5100,
      image: '../../../assets/images/building-8.jpg',
    },
    {
      name: 'Building 9',
      address: '579 Sycamore Lane',
      number_of_units: 11,
      number_of_tenants: 9,
      average_monthly_rental_rate: 5900,
      image: '../../../assets/images/building-9.jpg',
    },
    {
      name: 'Building 10',
      address: '768 Pine Court',
      number_of_units: 9,
      number_of_tenants: 7,
      average_monthly_rental_rate: 5300,
      image: '../../../assets/images/building-10.jpg',
    }
  ];
  static MAINTENANCE_REQUEST_LISTING = [
    {
      img: '../../../assets/images/avatar-1.png',
      buildingName: 'Building 1',
      unitNumber: 'Unit 101',
      fullName: 'John Doe',
      daysAgo: 5,
      type: 'Plumbing',
      description: 'There is a leaky faucet in the kitchen that needs repair. The constant dripping is causing water wastage and making it difficult to use the sink.'
    },
    {
      img: '../../../assets/images/avatar-2.png',
      buildingName: 'Building 2',
      unitNumber: 'Unit 202',
      fullName: 'Jane Smith',
      daysAgo: 3,
      type: 'Electrical',
      description: 'One of the light switches in the living room is not working. As a result, the room is dimly lit, and it\'s inconvenient to switch the lights on or off.'
    },
    {
      img: '../../../assets/images/avatar-3.png',
      buildingName: 'Building 3',
      unitNumber: 'Unit 305',
      fullName: 'Michael Johnson',
      daysAgo: 7,
      type: 'HVAC',
      description: 'The air conditioner in my bedroom is not cooling properly. Despite adjusting the temperature settings, the room remains uncomfortably warm and humid.'
    },
    {
      img: '../../../assets/images/avatar-4.png',
      buildingName: 'Building 2',
      unitNumber: 'Unit 201',
      fullName: 'Emily Williams',
      daysAgo: 2,
      type: 'Appliance',
      description: 'The dishwasher in the kitchen is not functioning correctly. It fails to clean the dishes thoroughly, and there is a constant odor coming from the appliance.'
    },
    {
      img: '../../../assets/images/avatar-5.png',
      buildingName: 'Building 1',
      unitNumber: 'Unit 102',
      fullName: 'Robert Brown',
      daysAgo: 6,
      type: 'Pest Control',
      description: 'There are ants in the bathroom that need to be exterminated. They have been causing inconvenience and unhygienic conditions in the space.'
    },
    {
      img: '../../../assets/images/avatar-6.png',
      buildingName: 'Building 3',
      unitNumber: 'Unit 303',
      fullName: 'Jessica Wilson',
      daysAgo: 4,
      type: 'Structural',
      description: 'There is a crack in the bedroom wall that needs repair. It appears to be growing in size and may lead to further damage if left unattended.'
    },
    {
      img: '../../../assets/images/avatar-7.png',
      buildingName: 'Building 1',
      unitNumber: 'Unit 103',
      fullName: 'David Taylor',
      daysAgo: 1,
      type: 'Safety and Security',
      description: 'The front door lock is broken and needs to be replaced. This compromises the security of the property and raises concerns about unauthorized access.'
    },
    {
      img: '../../../assets/images/avatar-8.png',
      buildingName: 'Building 2',
      unitNumber: 'Unit 203',
      fullName: 'Olivia Anderson',
      daysAgo: 8,
      type: 'General Maintenance',
      description: 'The hallway needs repainting as the paint is peeling off. The worn-out appearance is impacting the overall aesthetic appeal of the building.'
    },
    {
      img: '../../../assets/images/avatar-9.png',
      buildingName: 'Building 3',
      unitNumber: 'Unit 301',
      fullName: 'Daniel Martinez',
      daysAgo: 9,
      type: 'Exterior Maintenance',
      description: 'The backyard fence is damaged and needs fixing. It poses a safety hazard and fails to provide adequate privacy and security.'
    },
    {
      img: '../../../assets/images/avatar-10.png',

      buildingName: 'Building 2',
      unitNumber: 'Unit 204',
      fullName: 'Sophia Lopez',
      daysAgo: 5,
      type: 'Other',
      description: 'The carpet in the living room needs deep cleaning. It has accumulated stains and dirt over time, making it unpleasant to walk on or sit around.'
    }
  ];

}
