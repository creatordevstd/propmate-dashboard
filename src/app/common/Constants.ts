export class Constants{
  static LOGIN_ROUTE = 'login';
  static REGISTRATION_ROUTE = 'registration';
  static OTP_ROUTE = 'otp';
  static DASHBOARD_ROUTE = 'dashboard';
  static DASHBOARD_OVERVIEW_ROUTE = 'overview';
  static BUILDING_LIST_ROUTE = 'building-list';
  static BUILDING_DETAILS_ROUTE = 'building-details';
  static TENANT_PROFILE_ROUTE = 'tenant-details';
  static EDIT_TENANT_PROFILE = 'edit-tenant';



  static CHART_PRIMARY_COLOR_LINE = '#3675fe';
  static CHART_SECONDARY_COLOR_LINE = '#e5edff';
  static CHART_TERTIARY_COLOR_LINE = '#b2b2ff';
  static CHART_X_AXIS_COLOR_LINE = '#e3e6ed';
  static CHART_LABEL_COLOR_TITLE = '#000000';
  static CHART_LABEL_COLOR_SUBTITLE = '#525b75';

  static BUILDING_LISTING = [
    {
      id: 1,
      name: 'Building 1',
      address: '123 Main Street',
      number_of_units: 20,
      number_of_tenants: 18,
      average_monthly_rental_rate: 5000,
      image: '../../../assets/images/building-1.jpg',
    },
    {
      id: 2,
      name: 'Building 2',
      address: '456 Elm Avenue',
      number_of_units: 15,
      number_of_tenants: 12,
      average_monthly_rental_rate: 4500,
      image: '../../../assets/images/building-2.jpg',
    },
    {
      id: 3,
      name: 'Building 3',
      address: '789 Oak Road',
      number_of_units: 10,
      number_of_tenants: 8,
      average_monthly_rental_rate: 6000,
      image: '../../../assets/images/building-3.jpg',
    },
    {
      id: 4,
      name: 'Building 4',
      address: '321 Pine Lane',
      number_of_units: 12,
      number_of_tenants: 10,
      average_monthly_rental_rate: 5500,
      image: '../../../assets/images/building-4.jpg',
    },
    {
      id: 5,
      name: 'Building 5',
      address: '654 Cedar Court',
      number_of_units: 18,
      number_of_tenants: 16,
      average_monthly_rental_rate: 4800,
      image: '../../../assets/images/building-5.jpg',
    },
    {
      id: 6,
      name: 'Building 6',
      address: '987 Maple Street',
      number_of_units: 8,
      number_of_tenants: 6,
      average_monthly_rental_rate: 5200,
      image: '../../../assets/images/building-6.jpg',
    },
    {
      id: 7,
      name: 'Building 7',
      address: '135 Birch Avenue',
      number_of_units: 16,
      number_of_tenants: 14,
      average_monthly_rental_rate: 4700,
      image: '../../../assets/images/building-7.jpg',
    },
    {
      id: 8,
      name: 'Building 8',
      address: '246 Walnut Road',
      number_of_units: 14,
      number_of_tenants: 12,
      average_monthly_rental_rate: 5100,
      image: '../../../assets/images/building-8.jpg',
    },
    {
      id: 9,
      name: 'Building 9',
      address: '579 Sycamore Lane',
      number_of_units: 11,
      number_of_tenants: 9,
      average_monthly_rental_rate: 5900,
      image: '../../../assets/images/building-9.jpg',
    },
    {
      id: 10,
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
  static TENANTS_LIST = [
    {
      id: 1,
      name: 'John Doe',
      leaseStartDate: '2022-01-01',
      leaseEndDate: '2023-02-01',
      monthlyRentalFee: 1000,
      status: 'Overdue',
      img: '../../../assets/images/avatar-1.png',
      email: 'john.doe@mail.com',
      phoneNumber:'+27 72 109 8765',
      occupation: 'Software Engineer',
      joinedDate: '12 June, 2021',
      isVerified: 'true'
    },
    {
      id: 2,
      name: 'Jane Smith',
      leaseStartDate: '2021-05-15',
      leaseEndDate: '2021-12-15',
      monthlyRentalFee: 1200,
      status: 'Overdue',
      img: '../../../assets/images/avatar-2.png',
      email: 'jane.s@mail.com',
      phoneNumber:'+27 71 234 5678',
      occupation: 'Registered Nurse',
      joinedDate: '12 June, 2021',
      isVerified: 'true'
    },
    {
      id: 3,
      name: 'Mark Johnson',
      leaseStartDate: '2023-02-01',
      leaseEndDate: '2024-10-01',
      monthlyRentalFee: 900,
      status: 'Paid',
      img: '../../../assets/images/avatar-3.png',
      email: 'mark.johnson@mail.com',
      phoneNumber:'+27 82 765 4321',
      occupation: 'Teacher',
      joinedDate: '12 June, 2021',
      isVerified: 'true',
    },
    {
      id: 4,
      name: 'Emily Davis',
      leaseStartDate: '2022-07-01',
      leaseEndDate: '2025-02-01',
      monthlyRentalFee: 1100,
      status: 'Paid',
      img: '../../../assets/images/avatar-4.png',
      email: 'emilyDavis@mail.com',
      phoneNumber:'+27 79 210 5432',
      occupation: 'Electrician',
      joinedDate: '12 June, 2021',
      isVerified: 'false'
    },
    {
      id: 5,
      name: 'Alex Wilson',
      leaseStartDate: '2023-03-01',
      leaseEndDate: '2024-03-01',
      monthlyRentalFee: 950,
      status: 'Overdue',
      img: '../../../assets/images/avatar-5.png',
      email: 'awilson@mail.com',
      phoneNumber:'+27 83 876 5432',
      occupation: 'Accountant',
      joinedDate: '12 June, 2021',
      isVerified: 'false'
    },
    {
      id: 6,
      name: 'Sophia Lee',
      leaseStartDate: '2021-09-01',
      leaseEndDate: '2023-06-01',
      monthlyRentalFee: 1050,
      status: 'Paid',
      img: '../../../assets/images/avatar-6.png',
      email: 'sophialdoe@mail.com',
      phoneNumber:'+27 72 345 6789',
      occupation: 'Police officer',
      joinedDate: '12 June, 2021',
      isVerified: 'true'
    },
    {
      id: 7,
      name: 'Michael Brown',
      leaseStartDate: '2022-04-01',
      leaseEndDate: '2023-04-01',
      monthlyRentalFee: 980,
      status: 'Paid',
      img: '../../../assets/images/avatar-7.png',
      email: 'michael.brown@mail.com',
      phoneNumber:'+27 81 234 5678',
      occupation: 'Marketing Manager',
      joinedDate: '12 June, 2021',
      isVerified: 'false'
    },
    {
      id: 8,
      name: 'Olivia Taylor',
      leaseStartDate: '2022-11-01',
      leaseEndDate: '2023-11-01',
      monthlyRentalFee: 1150,
      status: 'Overdue',
      img: '../../../assets/images/avatar-8.png',
      email: 'o.taylor@mail.com',
      phoneNumber:'+27 74 567 8901',
      occupation: 'Graphic Designer',
      joinedDate: '12 June, 2021',
      isVerified: 'false'
    },
    {
      id: 9,
      name: 'Daniel Anderson',
      leaseStartDate: '2023-06-01',
      leaseEndDate: '2024-11-01',
      monthlyRentalFee: 890,
      status: 'Paid',
      img: '../../../assets/images/avatar-9.png',
      email: 'danielanderson@mail.com',
      phoneNumber:'+27 82 987 6543',
      occupation: 'Teacher',
      joinedDate: '12 June, 2021',
      isVerified: 'true'
    },
    {
      id: 10,
      name: 'Mia Hernandez',
      leaseStartDate: '2023-01-15',
      leaseEndDate: '2024-01-15',
      monthlyRentalFee: 1050,
      status: 'Overdue',
      img: '../../../assets/images/avatar-10.png',
      email: 'mhernandez@mail.com',
      phoneNumber:'+27 73 123 4567',
      occupation: 'Chef',
      joinedDate: '12 June, 2021',
      isVerified: 'false'
    },
  ];

}
