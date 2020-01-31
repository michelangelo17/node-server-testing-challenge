exports.seed = knex =>
  knex('cars')
    .del()
    .then(() =>
      knex('cars').insert([
        {
          make: 'Geo',
          model: 'Metro',
          year: 1992,
        },
        {
          make: 'Lincoln',
          model: 'MKX',
          year: 2012,
        },
        {
          make: 'Mercedes-Benz',
          model: 'CLK-Class',
          year: 2005,
        },
        {
          make: 'Chevrolet',
          model: 'Corsica',
          year: 1992,
        },
        {
          make: 'Audi',
          model: 'A4',
          year: 2012,
        },
        {
          make: 'BMW',
          model: 'M',
          year: 2001,
        },
        {
          make: 'Nissan',
          model: 'Titan',
          year: 2012,
        },
        {
          make: 'Nissan',
          model: '240SX',
          year: 1997,
        },
        {
          make: 'Jeep',
          model: 'Patriot',
          year: 2008,
        },
        {
          make: 'BMW',
          model: '760',
          year: 2004,
        },
        {
          make: 'Geo',
          model: 'Prizm',
          year: 1996,
        },
        {
          make: 'Ford',
          model: 'Escape',
          year: 2009,
        },
        {
          make: 'Chevrolet',
          model: 'Silverado',
          year: 2010,
        },
        {
          make: 'Ford',
          model: 'E-Series',
          year: 2009,
        },
        {
          make: 'Volvo',
          model: 'C30',
          year: 2010,
        },
        {
          make: 'Dodge',
          model: 'Ram 2500',
          year: 1995,
        },
        {
          make: 'Lexus',
          model: 'GS',
          year: 1997,
        },
        {
          make: 'Cadillac',
          model: 'CTS-V',
          year: 2010,
        },
        {
          make: 'Mitsubishi',
          model: 'Montero Sport',
          year: 1999,
        },
        {
          make: 'Suzuki',
          model: 'SX4',
          year: 2009,
        },
        {
          make: 'Chevrolet',
          model: 'Monte Carlo',
          year: 1997,
        },
        {
          make: 'Volkswagen',
          model: 'rio',
          year: 1995,
        },
        {
          make: 'GMC',
          model: 'Savana 3500',
          year: 2011,
        },
        {
          make: 'Ford',
          model: 'F-250 Super Duty',
          year: 2006,
        },
        {
          make: 'Honda',
          model: 'CR-V',
          year: 2003,
        },
        {
          make: 'Chevrolet',
          model: '3500',
          year: 1997,
        },
        {
          make: 'Pontiac',
          model: 'Grand Prix',
          year: 1980,
        },
        {
          make: 'Oldsmobile',
          model: 'Aurora',
          year: 1995,
        },
        {
          make: 'Volvo',
          model: 'V70',
          year: 2007,
        },
        {
          make: 'Mercury',
          model: 'Cougar',
          year: 1991,
        },
        {
          make: 'Dodge',
          model: 'Ram 2500',
          year: 2001,
        },
        {
          make: 'Mercedes-Benz',
          model: 'E-Class',
          year: 1999,
        },
        {
          make: 'Buick',
          model: 'Skyhawk',
          year: 1987,
        },
        {
          make: 'Isuzu',
          model: 'i-280',
          year: 2006,
        },
        {
          make: 'Hyundai',
          model: 'Santa Fe',
          year: 2007,
        },
        {
          make: 'Infiniti',
          model: 'QX56',
          year: 2012,
        },
        {
          make: 'Cadillac',
          model: 'STS',
          year: 2009,
        },
        {
          make: 'Volvo',
          model: 'V40',
          year: 2003,
        },
        {
          make: 'Ford',
          model: 'Contour',
          year: 1997,
        },
        {
          make: 'Chevrolet',
          model: 'Silverado 1500',
          year: 2008,
        },
        {
          make: 'GMC',
          model: 'Sierra 1500',
          year: 2007,
        },
        {
          make: 'Volkswagen',
          model: 'Cabriolet',
          year: 1992,
        },
        {
          make: 'GMC',
          model: 'Savana 2500',
          year: 2011,
        },
        {
          make: 'Bentley',
          model: 'Continental GTC',
          year: 2007,
        },
        {
          make: 'GMC',
          model: '1500',
          year: 1998,
        },
        {
          make: 'Mercury',
          model: 'Villager',
          year: 1996,
        },
        {
          make: 'Mazda',
          model: 'Mazda3',
          year: 2011,
        },
        {
          make: 'Nissan',
          model: '350Z Roadster',
          year: 2006,
        },
        {
          make: 'Chevrolet',
          model: 'Impala',
          year: 2001,
        },
        {
          make: 'Audi',
          model: 'TT',
          year: 2002,
        },
        {
          make: 'Mercury',
          model: 'Mystique',
          year: 1996,
        },
        {
          make: 'Audi',
          model: 'Allroad',
          year: 2003,
        },
        {
          make: 'Mitsubishi',
          model: 'Pajero',
          year: 1991,
        },
        {
          make: 'Buick',
          model: 'Regal',
          year: 2001,
        },
        {
          make: 'Mitsubishi',
          model: 'Pajero',
          year: 1991,
        },
        {
          make: 'Toyota',
          model: '4Runner',
          year: 1999,
        },
        {
          make: 'Nissan',
          model: 'Pathfinder',
          year: 1992,
        },
        {
          make: 'Mitsubishi',
          model: 'Eclipse',
          year: 2005,
        },
        {
          make: 'Pontiac',
          model: 'Grand Prix',
          year: 2005,
        },
        {
          make: 'Ford',
          model: 'Escort',
          year: 1997,
        },
        {
          make: 'BMW',
          model: 'X6 M',
          year: 2013,
        },
        {
          make: 'Toyota',
          model: 'Highlander',
          year: 2009,
        },
        {
          make: 'Ram',
          model: '3500',
          year: 2011,
        },
        {
          make: 'Acura',
          model: 'RDX',
          year: 2009,
        },
        {
          make: 'Citroën',
          model: '2CV',
          year: 1948,
        },
        {
          make: 'Dodge',
          model: 'Charger',
          year: 2006,
        },
        {
          make: 'GMC',
          model: 'Yukon XL 1500',
          year: 2005,
        },
        {
          make: 'Oldsmobile',
          model: 'Alero',
          year: 2003,
        },
        {
          make: 'Jaguar',
          model: 'XK Series',
          year: 2003,
        },
        {
          make: 'Saab',
          model: '9-7X',
          year: 2009,
        },
        {
          make: 'Mitsubishi',
          model: 'Eclipse',
          year: 1989,
        },
        {
          make: 'Mercedes-Benz',
          model: 'M-Class',
          year: 2001,
        },
        {
          make: 'Mercedes-Benz',
          model: 'R-Class',
          year: 2009,
        },
        {
          make: 'Ford',
          model: 'E-Series',
          year: 2010,
        },
        {
          make: 'GMC',
          model: 'Acadia',
          year: 2011,
        },
        {
          make: 'Lincoln',
          model: 'Navigator',
          year: 1998,
        },
        {
          make: 'BMW',
          model: '1 Series',
          year: 2009,
        },
        {
          make: 'GMC',
          model: 'Canyon',
          year: 2010,
        },
        {
          make: 'Subaru',
          model: 'Legacy',
          year: 2009,
        },
        {
          make: 'BMW',
          model: '6 Series',
          year: 2005,
        },
        {
          make: 'Lincoln',
          model: 'MKZ',
          year: 2009,
        },
        {
          make: 'Ford',
          model: 'E150',
          year: 2006,
        },
        {
          make: 'GMC',
          model: 'Envoy XUV',
          year: 2005,
        },
        {
          make: 'Ford',
          model: 'Freestar',
          year: 2003,
        },
        {
          make: 'Nissan',
          model: 'NV1500',
          year: 2012,
        },
        {
          make: 'GMC',
          model: 'Sierra',
          year: 2010,
        },
        {
          make: 'Bentley',
          model: 'Continental GT',
          year: 2008,
        },
        {
          make: 'Subaru',
          model: 'Impreza',
          year: 2007,
        },
        {
          make: 'GMC',
          model: 'Safari',
          year: 2001,
        },
        {
          make: 'Mitsubishi',
          model: 'Lancer Evolution',
          year: 2002,
        },
        {
          make: 'Daewoo',
          model: 'Leganza',
          year: 2002,
        },
        {
          make: 'Mazda',
          model: 'MX-6',
          year: 1996,
        },
        {
          make: 'BMW',
          model: '3 Series',
          year: 2002,
        },
        {
          make: 'Dodge',
          model: 'Colt',
          year: 1993,
        },
        {
          make: 'Suzuki',
          model: 'Kizashi',
          year: 2010,
        },
        {
          make: 'Oldsmobile',
          model: 'Regency',
          year: 1998,
        },
        {
          make: 'Mitsubishi',
          model: 'Eclipse',
          year: 1991,
        },
        {
          make: 'Cadillac',
          model: 'CTS',
          year: 2003,
        },
        {
          make: 'Bentley',
          model: 'Continental Flying Spur',
          year: 2006,
        },
        {
          make: 'GMC',
          model: 'Savana',
          year: 2009,
        },
      ])
    )
