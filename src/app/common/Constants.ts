export class Constants{
  static LOGIN_ROUTE = 'login';
  static REGISTRATION_ROUTE = 'registration';
  static OTP_ROUTE = 'otp';
  static DASHBOARD_ROUTE = 'dashboard';
  static DASHBOARD_OVERVIEW_ROUTE = 'overview';
  static BUILDING_LIST_ROUTE = 'building-list';
  static BUILDING_DETAILS_ROUTE = 'building-details';
  static TENANT_PROFILE_ROUTE = 'tenant-details';
  static EDIT_TENANT_PROFILE = 'edit-profile';
  static ADD_TENANT = 'add-user';
  static FINANCIAL_HISTORY = 'financial-history';
  static MAITNENACE_ROUTE = 'maintenance';
  static OWNER_FINANCIAL_ROUTE = 'transaction-history';
  static INVOICE_ROUTE = 'invoice';
  static REPORT_ROUTE = 'report';
  
  static BUILDING_ACCOUNTING_ROUTE = 'accounting';
  static BUILDING_ROUTE = 'building';
  static BUILDING_OVERVIEW = 'details';
  static BUILDING_DOCUMENTS = 'document';
  static BUILDING_DIRECTORY = 'directory';
  static BUILDING_MAINTENANCE = 'maintenance';
  static BUILDING_EDIT = 'edit';
  static BUILDING_LEASE = 'lease'
  static BUILDING_TENANT = 'tenant';
  static BUILDING_STATEMENT = 'statement';

  static TENANT_LEASE = 'lease';
  static TENANT_ROUTE = 'tenant'
  static TENANT_LIST= 'overview'
  static TENANT_ADD = 'add';

  static SETTINGS_ROUTE = 'settings'
  static TENANTS_ALL_LIST = 'tenant-overview'


  static CHART_PRIMARY_COLOR_LINE = '#3675fe';
  static CHART_SECONDARY_COLOR_LINE = '#e5edff';
  static CHART_TERTIARY_COLOR_LINE = '#b2b2ff';
  static CHART_X_AXIS_COLOR_LINE = '#e3e6ed';
  static CHART_LABEL_COLOR_TITLE = '#000000';
  static CHART_LABEL_COLOR_SUBTITLE = '#525b75';

  static BUILDING_LISTING = [
    {
      id: 1,
      name: 'Crystal Tower',
      address: ' 42 Meadow Lane, Pretoria, Gauteng, 0181',
      number_of_units: 20,
      number_of_tenants: 18,
      average_monthly_rental_rate: '5,000',
      image: '../../../assets/images/building-1.jpg',
      type: ' Residential'
    },
    {
      id: 2,
      name: 'Emerald Heights',
      address: '7 Ocean View Drive, Cape Town, Western Cape, 8001',
      number_of_units: 15,
      number_of_tenants: 12,
      average_monthly_rental_rate: '14,500',
      image: '../../../assets/images/building-2.jpg',
      type: ' Residential'
    },
    {
      id: 3,
      name: 'Aurora Plaza',
      address: '15 Skyline Avenue, Durban, KwaZulu-Natal, 4001',
      number_of_units: 10,
      number_of_tenants: 8,
      average_monthly_rental_rate: '6,000',
      image: '../../../assets/images/building-3.jpg',
      type: ' Residential'
    },
    {
      id: 4,
      name: 'Phoenix Manor',
      address: '88 Sunshine Street, Johannesburg, Gauteng, 2000',
      number_of_units: 12,
      number_of_tenants: 10,
      average_monthly_rental_rate: '5,500',
      image: '../../../assets/images/building-4.jpg',
      type: ' Residential'
    },
    {
      id: 5,
      name: 'Celestial Skyscraper',
      address: '23 Tranquil Lane, Bloemfontein, Free State, 9301',
      number_of_units: 18,
      number_of_tenants: 16,
      average_monthly_rental_rate: '4,800',
      image: '../../../assets/images/building-5.jpg',
      type: ' Residential'
    },
    {
      id: 6,
      name: 'Serenity Towers',
      address: '12 Coral Reef Road, Port Elizabeth, Eastern Cape, 6001',
      number_of_units: 8,
      number_of_tenants: 6,
      average_monthly_rental_rate: '10,500',
      image: '../../../assets/images/building-6.jpg',
      type: ' Residential'
    },
    {
      id: 7,
      name: 'Thunderbolt Arcade',
      address: '30 Serenity Street, Kimberley, Northern Cape, 8301',
      number_of_units: 16,
      number_of_tenants: 14,
      average_monthly_rental_rate: '4,700',
      image: '../../../assets/images/building-7.jpg',
      type: ' Residential'
    },
    {
      id: 8,
      name: 'Moonlight Gardens',
      address: '17 Autumn Avenue, Polokwane, Limpopo, 0700',
      number_of_units: 14,
      number_of_tenants: 12,
      average_monthly_rental_rate: '9,500',
      image: '../../../assets/images/building-8.jpg',
      type: ' Residential'
    },
    {
      id: 9,
      name: 'Ivory Mansion',
      address: '5 Sunshine Boulevard, Nelspruit, Mpumalanga, 1200',
      number_of_units: 11,
      number_of_tenants: 9,
      average_monthly_rental_rate: '6,500',
      image: '../../../assets/images/building-9.jpg',
      type: ' Residential'
    },
    {
      id: 10,
      name: 'Starlight Residences',
      address: '10 Emerald Lane, East London, Eastern Cape, 5201',
      number_of_units: 9,
      number_of_tenants: 7,
      average_monthly_rental_rate: '5,800',
      image: '../../../assets/images/building-10.jpg',
      type: ' Residential'
    }
  ];

  static MAINTENANCE_REQUESTS =
  [
    {
      dateCreated: '2023-11-15',
      buildingName: 'Sunrise Towers',
      address: '123 Main Street, Johannesburg, 2000',
      fullName: 'John Doe',
      status: 'In-Progress',
      maintenanceType: 'Electrical',
      description: 'Fixing faulty wiring in the lobby.',
      unit: '10'
    },
    {
      dateCreated: '2023-11-14',
      buildingName: 'Harbor View Apartments',
      address: '456 Ocean Drive, Cape Town, 8001',
      fullName: 'Jane Smith',
      status: 'New',
      maintenanceType: 'Plumbing',
      description: 'Repairing leaky pipes in the kitchen.',
      unit: '23B'
    },
    {
      dateCreated: '2023-11-13',
      buildingName: 'Mountain Vista Residences',
      address: '789 Hillside Avenue, Durban, 4001',
      fullName: 'Mike Johnson',
      status: 'Completed',
      maintenanceType: 'HVAC',
      description: 'Installing a new air conditioning system in the office.',
      unit: '6'

    },
    {
      dateCreated: '2023-11-12',
      buildingName: 'Palm Grove Suites',
      address: '101 Palm Street, Pretoria, 0083',
      fullName: 'Lisa Williams',
      status: 'In-Progress',
      maintenanceType: 'Painting',
      description: 'Repainting the exterior walls of the building.',
      unit: '102'
    },
    {
      dateCreated: '2023-11-11',
      buildingName: 'Riverfront Condominiums',
      address: '222 Waterway Road, Port Elizabeth, 6001',
      fullName: 'Chris Taylor',
      status: 'New',
      maintenanceType: 'Roofing',
      description: 'Replacing damaged roof tiles on the top floor.',
      unit: '1A'
    },
    {
      dateCreated: '2023-11-10',
      buildingName: 'Golden Plaza Offices',
      address: '333 Gold Street, Bloemfontein, 9301',
      fullName: 'Emily Brown',
      status: 'Completed',
      maintenanceType: 'Elevator',
      description: 'Upgrading elevator system for better efficiency.',
      unit: '3'
    },
    {
      dateCreated: '2023-11-09',
      buildingName: 'Savannah Heights Homes',
      address: '444 Savanna Avenue, Kimberley, 8301',
      fullName: 'David Miller',
      status: 'In-Progress',
      maintenanceType: 'Security',
      description: 'Installing new security cameras in the neighborhood.',
      unit: '54'
    },
    {
      dateCreated: '2023-11-08',
      buildingName: 'Cityscape Lofts',
      address: '555 Urban Lane, East London, 5201',
      fullName: 'Amanda Jones',
      status: 'New',
      maintenanceType: 'Flooring',
      description: 'Replacing damaged flooring in the living room.',
      unit: '83'
    },
    {
      dateCreated: '2023-11-07',
      buildingName: 'Tranquil Gardens Villas',
      address: '666 Serene Street, Nelspruit, 1200',
      fullName: 'Mark Robinson',
      status: 'Completed',
      maintenanceType: 'Landscaping',
      description: 'Enhancing the garden with new plants and features.',
      unit: '13'
    },
    {
      dateCreated: '2023-11-06',
      buildingName: 'Central Hub Mall',
      address: '777 Hub Avenue, Rustenburg, 0299',
      fullName: 'Sarah White',
      status: 'In-Progress',
      maintenanceType: 'Structural',
      description: 'Reinforcing structural elements for increased safety.',
      unit: '42'
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
      monthlyRentalFee: '1000',
      status: 'Unpaid',
      img: '../../../assets/images/avatar-1.png',
      email: 'john.doe@mail.com',
      phoneNumber:'+27 72 109 8765',
      occupation: 'Software Engineer',
      joinedDate: '12 June, 2021',
      isVerified: 'true',
      unitNumber: '12',
      accountStatus: 'active'
    },
    {
      id: 2,
      name: 'Jane Smith',
      leaseStartDate: '2021-05-15',
      leaseEndDate: '2021-12-15',
      monthlyRentalFee: '1,200',
      status: 'Unpaid',
      img: '../../../assets/images/avatar-2.png',
      email: 'jane.s@mail.com',
      phoneNumber:'+27 71 234 5678',
      occupation: 'Registered Nurse',
      joinedDate: '12 June, 2021',
      isVerified: 'true',
      unitNumber: '5',
      accountStatus: 'active'
    },
    {
      id: 3,
      name: 'Mark Johnson',
      leaseStartDate: '2023-02-01',
      leaseEndDate: '2024-10-01',
      monthlyRentalFee: '900',
      status: 'Paid',
      img: '../../../assets/images/avatar-3.png',
      email: 'mark.johnson@mail.com',
      phoneNumber:'+27 82 765 4321',
      occupation: 'Teacher',
      joinedDate: '12 June, 2021',
      isVerified: 'true',
      unitNumber: '101',
      accountStatus: 'inactive'
    },
    {
      id: 4,
      name: 'Emily Davis',
      leaseStartDate: '2022-07-01',
      leaseEndDate: '2025-02-01',
      monthlyRentalFee: '1,100',
      status: 'Paid',
      img: '../../../assets/images/avatar-4.png',
      email: 'emilyDavis@mail.com',
      phoneNumber:'+27 79 210 5432',
      occupation: 'Electrician',
      joinedDate: '12 June, 2021',
      isVerified: 'false',
      unitNumber: '36',
      accountStatus: 'inactive'
    },
    {
      id: 5,
      name: 'Alex Wilson',
      leaseStartDate: '2023-03-01',
      leaseEndDate: '2024-03-01',
      monthlyRentalFee: '950',
      status: 'Unpaid',
      img: '../../../assets/images/avatar-5.png',
      email: 'awilson@mail.com',
      phoneNumber:'+27 83 876 5432',
      occupation: 'Accountant',
      joinedDate: '12 June, 2021',
      isVerified: 'false',
      unitNumber: '22',
      accountStatus: 'active'
    },
    {
      id: 6,
      name: 'Sophia Lee',
      leaseStartDate: '2021-09-01',
      leaseEndDate: '2023-06-01',
      monthlyRentalFee: '1,500',
      status: 'Paid',
      img: '../../../assets/images/avatar-6.png',
      email: 'sophialdoe@mail.com',
      phoneNumber:'+27 72 345 6789',
      occupation: 'Police officer',
      joinedDate: '12 June, 2021',
      isVerified: 'true',
      unitNumber: '9',
      accountStatus: 'active'
    },
    {
      id: 7,
      name: 'Michael Brown',
      leaseStartDate: '2022-04-01',
      leaseEndDate: '2023-04-01',
      monthlyRentalFee: '980',
      status: 'Paid',
      img: '../../../assets/images/avatar-7.png',
      email: 'michael.brown@mail.com',
      phoneNumber:'+27 81 234 5678',
      occupation: 'Marketing Manager',
      joinedDate: '12 June, 2021',
      isVerified: 'false',
      unitNumber: '203',
      accountStatus: 'inactive'
    },
    {
      id: 8,
      name: 'Olivia Taylor',
      leaseStartDate: '2022-11-01',
      leaseEndDate: '2023-11-01',
      monthlyRentalFee: '1,150',
      status: 'Unpaid',
      img: '../../../assets/images/avatar-8.png',
      email: 'o.taylor@mail.com',
      phoneNumber:'+27 74 567 8901',
      occupation: 'Graphic Designer',
      joinedDate: '12 June, 2021',
      isVerified: 'false',
      unitNumber: '34',
      accountStatus: 'inactive'
    },
    {
      id: 9,
      name: 'Daniel Anderson',
      leaseStartDate: '2023-06-01',
      leaseEndDate: '2024-11-01',
      monthlyRentalFee: '890',
      status: 'Paid',
      img: '../../../assets/images/avatar-9.png',
      email: 'danielanderson@mail.com',
      phoneNumber:'+27 82 987 6543',
      occupation: 'Teacher',
      joinedDate: '12 June, 2021',
      isVerified: 'true',
      unitNumber: '2',
      accountStatus: 'active'
    },
    {
      id: 10,
      name: 'Mia Hernandez',
      leaseStartDate: '2023-01-15',
      leaseEndDate: '2024-01-15',
      monthlyRentalFee: '1,050',
      status: 'Unpaid',
      img: '../../../assets/images/avatar-10.png',
      email: 'mhernandez@mail.com',
      phoneNumber:'+27 73 123 4567',
      occupation: 'Chef',
      joinedDate: '12 June, 2021',
      isVerified: 'false',
      unitNumber: '54',
      accountStatus: 'active'
    },
    // {
    //   id: 11,
    //   name: 'Emily White ',
    //   leaseStartDate: '2023-02-10',
    //   leaseEndDate: '2024-02-09',
    //   monthlyRentalFee: '1,050',
    //   status: 'Unpaid',
    //   img: '../../../assets/images/avatar-10.png',
    //   email: 'mhernandez@mail.com',
    //   phoneNumber:'+27 73 123 4567',
    //   occupation: 'Chef',
    //   joinedDate: '12 June, 2021',
    //   isVerified: 'false',
    //   unitNumber: '61',
    //   accountStatus: 'active'
    // },
  ];
static TRANSACTION_HISTORY_LIST = 
[
  {
    transactionId: 'RC',
    transactionDate: '2023-03-01',
    transactionType: 'Rent Charges',
    buildingName: 'Oakridge Apartments',
    buildingAddress: '123 Main St, Cityville, South Africa',
    tenantFullName: 'John Doe',
    amountPaid: 'R15,000',
    transactionStatus: 'Paid',
    unitNumber: '101'
  },
  {
    transactionId: 'MP',
    transactionDate: '2023-04-05',
    transactionType: 'Maintenance Payment',
    buildingName: 'Maple Heights',
    buildingAddress: '456 Elm St, Townsville, South Africa',
    tenantFullName: 'Jane Smith',
    amountPaid: 'R2,000',
    transactionStatus: 'Unpaid',
    unitNumber: '23'
  },
  {
    transactionId: 'SD',
    transactionDate: '2023-04-10',
    transactionType: 'Security Deposit',
    buildingName: 'Pineview Towers',
    buildingAddress: '789 Oak St, Villagetown, South Africa',
    tenantFullName: 'Robert Johnson',
    amountPaid: 'R10,000',
    transactionStatus: 'Paid',
    unitNumber: '12'
  },
  {
    transactionId: 'RC',
    transactionDate: '2023-04-15',
    transactionType: 'Rent Charges',
    buildingName: 'Cedar Grove',
    buildingAddress: '321 Pine St, Hamletville, South Africa',
    tenantFullName: 'Emily White',
    amountPaid: 'R16,000',
    transactionStatus: 'Paid',
    unitNumber: '64'
  },
  {
    transactionId: 'MP',
    transactionDate: '2023-04-16',
    transactionType: 'Maintenance Payment',
    buildingName: 'Oakridge Apartments',
    buildingAddress: '123 Main St, Cityville, South Africa',
    tenantFullName: 'John Doe',
    amountPaid: 'R3,000',
    transactionStatus: 'Paid',
    unitNumber: '74'
  },
  {
    transactionId: 'SD',
    transactionDate: '2023-04-25',
    transactionType: 'Security Deposit',
    buildingName: 'Maple Heights',
    buildingAddress: '456 Elm St, Townsville, South Africa',
    tenantFullName: 'Jane Smith',
    amountPaid: 'R1,200',
    transactionStatus: 'Paid',
    unitNumber: '121'
  },
  {
    transactionId: 'RC',
    transactionDate: '2023-05-03',
    transactionType: 'Rent Charges',
    buildingName: 'Pineview Towers',
    buildingAddress: '789 Oak St, Villagetown, South Africa',
    tenantFullName: 'Robert Johnson',
    amountPaid: 'R1,200',
    transactionStatus: 'Unpaid',
    unitNumber: '6'
  },
  {
    transactionId: 'MP',
    transactionDate: '2023-05-11',
    transactionType: 'Maintenance Payment',
    buildingName: 'Cedar Grove',
    buildingAddress: '321 Pine St, Hamletville, South Africa',
    tenantFullName: 'Emily White',
    amountPaid: '1,500',
    transactionStatus: 'Paid',
    unitNumber: '37'
  },
  {
    transactionId: 'SD',
    transactionDate: '2023-05-17',
    transactionType: 'Security Deposit',
    buildingName: 'Oakridge Apartments',
    buildingAddress: '123 Main St, Cityville, South Africa',
    tenantFullName: 'John Doe',
    amountPaid: '8,000',
    transactionStatus: 'Unpaid',
    unitNumber: '89'
  },
  {
    transactionId: 'RC',
    transactionDate: '2023-06-02',
    transactionType: 'Rent Charges',
    buildingName: 'Maple Heights',
    buildingAddress: '456 Elm St, Townsville, South Africa',
    tenantFullName: 'Jane Smith',
    amountPaid: '18,000',
    transactionStatus: 'Paid',
    unitNumber: '56'
  }
];

static INVOICE_HISTORY_LIST =
[
  {
    invoiceNumber: 'INV001',
    recipientName: 'John Doe',
    dueDate: '2023-11-30',
    invoiceAmount: 'R1,500',
    status: 'Pending',
    invoiceType: 'Rent charge'
  },
  {
    invoiceNumber: 'INV002',
    recipientName: 'Jane Smith',
    dueDate: '2023-12-05',
    invoiceAmount: 'R1,200',
    status: 'Paid',
    invoiceType: 'Rent charge'
  },
  {
    invoiceNumber: 'INV003',
    recipientName: 'Robert Johnson',
    dueDate: '2023-12-10',
    invoiceAmount: 'R2,000',
    status: 'Overdue',
    invoiceType: 'Rent charge'
  },
  {
    invoiceNumber: 'INV004',
    recipientName: 'Emily White',
    dueDate: '2023-12-15',
    invoiceAmount: 'R1,800',
    status: 'Pending',
    invoiceType: 'Rent charge'
  },
  {
    invoiceNumber: 'INV005',
    recipientName: 'David Brown',
    dueDate: '2023-12-20',
    invoiceAmount: 'R2,500',
    status: 'Overdue',
    invoiceType: 'Rent charge'
  },
  {
    invoiceNumber: 'INV006',
    recipientName: 'Sophia Miller',
    dueDate: '2023-12-25',
    invoiceAmount: 'R3,000',
    status: 'Pending',
    invoiceType: 'Rent charge'
  },
  {
    invoiceNumber: 'INV007',
    recipientName: 'Michael Davis',
    dueDate: '2023-12-30',
    invoiceAmount: 'R1,600',
    status: 'Paid',
    invoiceType: 'Rent charge'
  },
  {
    invoiceNumber: 'INV008',
    recipientName: 'Olivia Wilson',
    dueDate: '2024-01-05',
    invoiceAmount: 'R2,200',
    status: 'Overdue',
    invoiceType: 'Rent charge'
  },
  {
    invoiceNumber: 'INV009',
    recipientName: 'William Turner',
    dueDate: '2024-01-10',
    invoiceAmount: 'R1,900',
    status: 'Pending',
    invoiceType: 'Rent charge'
  },
  {
    invoiceNumber: 'INV010',
    recipientName: 'Ava Garcia',
    dueDate: '2024-01-15',
    invoiceAmount: 'R2,700',
    status: 'Paid',
    invoiceType: 'Rent charge'
  }
];

static DOCUMENTS_LIST = 
[
  {
    documentName:'occupancy_certificate_2023.pdf',
    category: 'Occupancy Certificate',
    dateModified: '2023-11-20',
    isDocumentUploaded: true,
    documentSize: '2.5mb',
    type: 'pdf'
  },
  {
    documentName:'zone_certificate_2023.doc',
    category: 'Zone Certificate',
    dateModified: '2023-11-18',
    isDocumentUploaded: true,
    documentSize: '103.8kb',
    type: 'doc'
  },
  {
    documentName:'propety_valuation_2023.pdf',
    category: 'Valuation',
    dateModified: '2023-11-15',
    isDocumentUploaded: true,
    documentSize: '207.9kb',
    type: 'pdf'
  },
  {
    documentName:'water_electricity_documents.pdf',
    category: 'Municipal Documents',
    dateModified: '2023-11-19',
    isDocumentUploaded: false,
    documentSize: '1.2mb',
    type: 'pdf'
  },
  {
    documentName:'title_deed_01.pdf',
    category: 'Title Deed',
    dateModified: '2024-02-10',
    isDocumentUploaded: false,
    documentSize: '1.1mb',
    type: 'pdf'
  },
  {
    documentName:'022_electrical_certificate.pdf',
    category: 'Electrical Certificate',
    dateModified: '2024-02-10',
    isDocumentUploaded: true,
    documentSize: '1.0mb',
    type: 'pdf'
  },
  {
    documentName:'fire_safety_324324.pdf',
    category: 'Fire Satefy Certificate',
    dateModified: '2024-02-10',
    isDocumentUploaded: false,
    documentSize: '900kb',
    type: 'pdf'
  }
];

// static DIRECTORY_LIST = [
//   {
//     serviceProviderName: '',
//     img: '',
//     category : '',
//     taskStatus: ''
//   }
// ]

static DIRECTORY_LIST = 
[
    {
      name: 'ABC Maintenance Services',
      category: 'General Maintenance',
      contact: {
        phone: '+123456789',
        email: 'info@abcmaintenance.com'
      },
      img: '../../../assets/images/company-logo-1.png',
      assignedTask: '7',
      dailyCompletedTask: '3+',
      completionStatus: '20'
    },
    {
      name: 'TechSmart Security Solutions',
      category: 'Security Services',
      contact: {
        phone: '+987654321',
        email: 'security@techsmart.com'
      },
      img: '../../../assets/images/company-logo-2.png',
      assignedTask: '9',
      dailyCompletedTask: '',
      completionStatus: '20'
    },
    {
      name: 'GreenScape Landscaping',
      category: 'Landscaping',
      contact: {
        phone: '+1122334455',
        email: 'info@greenscape.com'
      },
      img: '../../../assets/images/company-logo-3.png',
      assignedTask: '40',
      dailyCompletedTask: '13+',
      completionStatus: '100'
    },
    {
      name: 'Sparkle Clean Janitorial',
      category: 'Janitorial Services',
      contact: {
        phone: '+9988776655',
        email:' cleaning@sparkle.com'
      },
      img: '../../../assets/images/company-logo-4.png',
      assignedTask: '33',
      dailyCompletedTask: '6+',
      completionStatus: '20'
    },
    {
      name:' Eco HVAC Solutions',
      category: 'HVAC Services',
      contact: {
        phone: '+1122334455',
        email: 'info@ecohvac.com'
      },
      img: '../../../assets/images/company-logo-5.png',
      assignedTask: '2',
      dailyCompletedTask: '',
      completionStatus: '0'
    },
    {
      name: 'FastFix Plumbing',
      category: 'Plumbing',
      contact: {
        phone: '+9988776655',
        email: 'service@fastfixplumbing.com'
      },
      img: '../../../assets/images/company-logo-6.png',
      assignedTask: '25',
      dailyCompletedTask: '',
      completionStatus: '0'
    },
    {
      name: 'PowerTech Electrical',
      category: 'Electrical Services',
      contact: {
        phone: '+1122334455',
        email: 'info@powertech.com'
      },
      img: '../../../assets/images/company-logo-7.png',
      assignedTask: '12',
      dailyCompletedTask: '',
      completionStatus: '69'
    }
  ];
  static NOTIFICATION_LIST = 
  [
    {
      id: '1',
      type: 'Maintenance request',
      tenant: 'John Doe',
      message: 'New maintenance request submitted for leaking faucet in Unit 203.',
      description: 'A new maintenance request has been submitted for a plumbing issue in Unit 203.',
      timestamp: 'Now',
      img: '../../../assets/images/avatar-1.png',
      isApprovalRequired: true,
      isRead: false,
    },
    {
      id: '2',
      type: 'Rent',
      tenant: 'Alice Johnson',
      message: 'Reminder: Rent payment of $1200 is due on December 1, 2023.',
      description: 'Friendly reminder about the upcoming rent payment of R1,200 due on December 1, 2023.',
      timestamp: '4 mins ago',
      img: '../../../assets/images/avatar-2.png',
      isApprovalRequired: false,
      isRead: false,
    },
    {
      id: 4,
      type: 'Lease Renewal',
      tenant: 'Robert Smith',
      message: 'Current lease is expiring on January 15, 2024.',
      description: 'Notification: Your current lease is expiring on January 15, 2024. Explore renewal options.',
      timestamp: '10 mins ago',
      img: '../../../assets/images/avatar-3.png',
      isApprovalRequired: false,
      isRead: false,
    },
    {
      id: 7,
      type: 'Inspection',
      tenant: 'Mary Davis',
      message: 'Scheduled property inspection on December 5. Ensure readiness.',
      description: 'Reminder: Scheduled property inspection on December 5. Please ensure your unit is ready for inspection.',
      timestamp: '17 mins ago',
      img: '../../../assets/images/avatar-4.png',
      isApprovalRequired: false,
      isRead: true,
    },
    {
      id: 8,
      type: 'Tenant Communication',
      tenant: 'Property Manager',
      message: 'John Doe has reported a maintenance issue. Please address promptly.',
      description: 'Communication: John Doe has reported a maintenance issue. Please address promptly.',
      timestamp: '2 hours ago',
      img: '../../../assets/images/avatar-5.png',
      isApprovalRequired: true,
      isRead: true,
    },
    {
      id: 9,
      type: 'Financial',
      tenant: 'All Owners',
      message: 'Financial statements for November are now available for review.',
      description: 'Notification: Financial statements for the month of November are now available for review.',
      timestamp: '1 day ago',
      img: '../../../assets/images/avatar-6.png',
      isApprovalRequired: false,
      isRead: true,
    },
  ];
  
  static OWNER_STATEMENT = 
  [
    {
      property_name:' Cozy Apartment',
      location: '123 Main Street, Cityville',
      lease_start_date: '2023-01-01',
      lease_end_date: '2024-01-01',
      current_rent_cost_zar: 'R12,000',
      rent_rate: 'monthly',
      rent_charges_include: [
        'refuse',
        'rates and taxes',
        'sanitation and effluent',
        'water'
      ],
      charges_amount: {
        refuse: 'R200',
        rates_and_taxes: 'R500',
        sanitation_and_effluent: 'R300',
        water: 'R150'
      },
      tenant_deposit: 'R15,000',
      gross_income: 'R14,850',
      rent_esc_percent: '5'
    },
    {
      property_name:' Spacious House',
      location: '456 Oak Avenue, Suburbia',
      lease_start_date: '2023-02-01',
      lease_end_date: '2024-02-01',
      current_rent_cost_zar: 'R18,000',
      rent_rate: 'monthly',
      rent_charges_include: [
        'refuse',
        'rates and taxes',
        'sanitation and effluent',
        'water'
      ],
      charges_amount: {
        refuse: 'R250',
        rates_and_taxes: 'R600',
        sanitation_and_effluent: 'R350',
        water: 'R200'
      },
      tenant_deposit: 'R20,000',
      gross_income: 'R20,150',
      rent_esc_percent: '5'
    },
    {
      property_name:' Modern Condo',
      location: '789 Highrise Street, Urbanville',
      lease_start_date: '2023-03-01',
      lease_end_date: '2024-03-01',
      current_rent_cost_zar: 'R15,000',
      rent_rate: 'monthly',
      rent_charges_include: [
        'refuse',
        'rates and taxes',
      '  sanitation and effluent',
        'water'
      ],
      charges_amount: {
        refuse: 'R180',
        rates_and_taxes: 'R550',
        sanitation_and_effluent: 'R280',
        water: 'R120'
      },
      tenant_deposit: 'R17,000',
      gross_income: 'R17,030',
      rent_esc_percent: '4'
    },
    {
      property_name: 'Rural Cottage',
      location: '101 Countryside Lane, Villagetown',
      lease_start_date: '2023-04-01',
      lease_end_date: '2024-04-01',
      current_rent_cost_zar: '10000',
      rent_rate: 'monthly',
      rent_charges_include: [
        'refuse',
        'rates and taxes',
       ' sanitation and effluent',
        'water'
      ],
      charges_amount: {
        refuse: '150',
        rates_and_taxes: '400',
        sanitation_and_effluent: '200',
        water: '100'
      },
      tenant_deposit: '12000',
      gross_income: '12650',
      rent_esc_percent: '3.5'
    },
    {
      property_name: 'Beachfront Villa',
      location: '222 Seaside Drive, Coastal City',
      lease_start_date: '2023-05-01',
      lease_end_date: '2024-05-01',
      current_rent_cost_zar: 'R25,000',
      rent_rate: 'monthly',
      rent_charges_include: [
        'refuse',
       ' rates and taxes',
        'sanitation and effluent',
        'water'
      ],
      charges_amount: {
        refuse: 'R300',
        rates_and_taxes: 'R700',
        sanitation_and_effluent: 'R400',
        water: 'R180'
      },
      tenant_deposit: 'R30,000',
      gross_income: 'R29,980',
      rent_esc_percent: '6'
    },
    {
      property_name:' Downtown Loft',
      location: '333 Urban Street, Metropolis',
      lease_start_date: '2023-06-01',
      lease_end_date: '2024-06-01',
      current_rent_cost_zar: 'R20,000',
      rent_rate: 'monthly',
      rent_charges_include: [
        'refuse',
        'rates and taxes',
        'sanitation and effluent',
        'water'
      ],
      charges_amount: {
        refuse: 'R250',
        rates_and_taxes: 'R600',
        sanitation_and_effluent: 'R320',
        water: 'R150'
      },
      tenant_deposit: 'R25,000',
      gross_income: 'R25,020',
      rent_esc_percent: '5.5'
    },
    {
      property_name: 'Mountain Retreat',
      location: '444 Scenic Road, Mountain Village',
      lease_start_date: '2023-07-01',
      lease_end_date: '2024-07-01',
      current_rent_cost_zar: 'R18,000',
      rent_rate: 'monthly',
      rent_charges_include: [
        'refuse',
        'rates and taxes',
       ' sanitation and effluent',
        'water'
      ],
      charges_amount: {
        refuse: 'R200',
        rates_and_taxes: 'R550',
        sanitation_and_effluent: 'R300',
        water: 'R120'
      },
      tenant_deposit: 'R20,000',
      gross_income: 'R20,170',
      rent_esc_percent:'4.5'
    },
    {
      property_name: 'Suburban Townhouse',
      location: '555 Green Lane, Suburbville',
      lease_start_date: '2023-08-01',
      lease_end_date: '2024-08-01',
      current_rent_cost_zar: 'R16,000',
      rent_rate: 'monthly',
      rent_charges_include: [
        'refuse',
       ' rates and taxes',
       ' sanitation and effluent',
        'water'
      ],
      charges_amount: {
        refuse: 'R220',
        rates_and_taxes: 'R500',
        sanitation_and_effluent: 'R280',
        water: 'R130'
      },
      tenant_deposit: 'R18,000',
      gross_income: 'R18,130',
      rent_esc_percent: '4.2',
    }
  ];

  static JOB_OCCUPATION = {
    job_occupations: [
    "Software Developer",
    "Accountant",
    "Marketing Manager",
    "Nurse",
    "Teacher",
    "Electrician",
    "Chef",
    "Graphic Designer",
    "Project Manager",
    "Customer Service Representative",
    "Civil Engineer",
    "Pharmacist",
    "Sales Representative",
    "Data Scientist",
    "Human Resources Manager",
    "Financial Analyst",
    "Web Designer",
    "Physician",
    "Police Officer",
    "Mechanical Engineer",
    "Social Worker",
    "Architect",
    "Dental Hygienist",
    "Journalist",
    "Event Planner",
    "Psychologist",
    "Librarian",
    "IT Support Specialist",
    "Welder",
    "Physical Therapist"
  ]
}
}

