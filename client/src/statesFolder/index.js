
const unitedStates = [
  {
    name: 'ALABAMA',
    _id: 'xlzqptycg1',
    populationApprox: '5,100,000',
    governor: 'Kay Ivey',
    flagPicturePath: 'alabama.jpg',
    senators: ['Tommy Tuberville', 'Katie Britt'],
    totalReps: 7
  },
  {
    name: 'ALASKA',
    _id: 'xlzqptycg2',
    populationApprox: '740,000',
    governor: 'Mike Dunleavy',
    flagPicturePath: 'alaska.jpg',
    senators: ['Lisa Murkowski', 'Dan Sullivan'],
    totalReps: 1
  },
  {
    name: 'ARIZONA',
    _id: 'xlzqptycg3',
    populationApprox: '7,200,000',
    governor: 'Katie Hobbs',
    flagPicturePath: 'arizona.jpg',
    senators: ['Kyrsten Sinema', 'Mark Kelly'],
    totalReps: 9
  },
  {
    name: 'ARKANSAS',
    _id: 'xlzqptycg4',
    populationApprox: '3,020,000',
    governor: 'Sarah Huckabee Sanders',
    flagPicturePath: 'arkansas.jpg',
    senators: ['Tom Cotton', 'John Boozman'],
    totalReps: 4
  },
  {
    name: 'CALIFORNIA',
    _id: 'xlzqptycg5',
    populationApprox: '39,200,000',
    governor: 'Gavin Newsom',
    flagPicturePath: 'california.jpg',
    senators: ['Dianne Feinstein', 'Alex Padilla'],
    totalReps: 52
  },
  {
    name: 'COLORADO',
    _id: 'xlzqptycg6',
    populationApprox: '5,840,000',
    governor: 'Jared Polis',
    flagPicturePath: 'colorado.jpg',
    senators: ['Michael Bennet', 'John Hickenlooper'],
    totalReps: 0
  },
  {
    name: 'CONNECTICUT',
    _id: 'xlzqptycg7',
    populationApprox: '3,610,000',
    governor: 'Ned Lamont',
    flagPicturePath: 'connecticut.jpg',
    senators: ['Richard Blumenthal', 'Chris Murphy'],
    totalReps: 5
  },
  {
    name: 'DELAWARE',
    _id: 'xlzqptycg8',
    populationApprox: '1,020,000',
    governor: 'John Carney',
    flagPicturePath: 'delaware.jpg',
    senators: ['Tom Carper', 'Chris Coons'],
    totalReps: 1
  },
  {
    name: 'FLORIDA',
    _id: 'xlzqptycg9',
    populationApprox: '22,400,00',
    governor: 'Ron DeSantis',
    flagPicturePath: 'florida.jpg',
    senators: ['Marco Rubio', 'Rick Scott'],
    totalReps: 28
  },
  {
    name: 'GEORGIA',
    _id: 'xlzqptycg10',
    populationApprox: '10,800,000',
    governor: 'Brian Kemp',
    flagPicturePath: 'georgia.jpg',
    senators: ['Jon Ossoff', 'Raphael Warnock'],
    totalReps: 0
  },
  {
    name: 'HAWAII',
    _id: 'xlzqptycg11',
    populationApprox: '1,500,000',
    governor: 'Josh Green',
    flagPicturePath: 'hawaii.jpg',
    senators: ['Brian Schatz', 'Mazie Hirono'],
    totalReps: 2
  },
  {
    name: 'IDAHO',
    _id: 'xlzqptycg12',
    populationApprox: '2,000,000',
    governor: 'Brad Little',
    flagPicturePath: 'idaho.jpg',
    senators: ['Mike Crapo', 'Jim Risch'],
    totalReps: 2
  },
  {
    name: 'ILLINOIS',
    _id: 'xlzqptycg13',
    populationApprox: '12,820,000',
    governor: 'J.B. Pritzker',
    flagPicturePath: 'illinois.jpg',
    senators: ['Dick Durbin', 'Tammy Duckworth'],
    totalReps: 17
  },
  {
    name: 'INDIANA',
    _id: 'xlzqptycg14',
    populationApprox: '6,800,000',
    governor: 'Eric Holcomb',
    flagPicturePath: 'indiana.jpg',
    senators: ['Todd Young', 'Mike Braun'],
    totalReps: 9
  },
  {
    name: 'IOWA',
    _id: 'xlzqptycg15',
    populationApprox: '3,200,000',
    governor: 'Kim Reynolds',
    flagPicturePath: 'iowa.jpg',
    senators: ['Chuck Grassley', 'Joni Ernst'],
    totalReps: 4
  },
  {
    name: 'KANSAS',
    _id: 'xlzqptycg16',
    populationApprox: '3,000,000',
    governor: 'Laura Kelly',
    flagPicturePath: 'kansas.jpg',
    senators: ['Jerry Moran', 'Roger Marshall'],
    totalReps: 4
  },
  {
    name: 'KENTUCKY',
    _id: 'xlzqptycg17',
    populationApprox: '4,510,000',
    governor: 'Andy Beshear',
    flagPicturePath: 'kentucky.jpg',
    senators: ['Mitch McConnell', 'Rand Paul'],
    totalReps: 6
  },
  {
    name: 'LOUISIANA',
    _id: 'xlzqptycg18',
    populationApprox: '4,660,000',
    governor: 'John Bel Edwards',
    flagPicturePath: 'louisiana.jpg',
    senators: ['Bill Cassidy', 'John Kennedy'],
    totalReps: 6
  },
  {
    name: 'MAINE',
    _id: 'xlzqptycg19',
    populationApprox: '1,370,000',
    governor: 'Janet Mills',
    flagPicturePath: 'maine.jpg',
    senators: ['Susan Collins', 'Angus King'],
    totalReps: 2
  },
  {
    name: 'MARYLAND',
    _id: 'xlzqptycg20',
    populationApprox: '6,200,000',
    governor: 'Wes Moore',
    flagPicturePath: 'maryland.jpg',
    senators: ['Ben Cardin', 'Chris Van Hollen'],
    totalReps: 8
  },
  {
    name: 'MASSACHUSETTS',
    _id: 'xlzqptycg21',
    populationApprox: '6,980,000',
    governor: 'Maura Healey',
    flagPicturePath: 'massachusetts.jpg',
    senators: ['Elizabeth Warren', 'Ed Markey'],
    totalReps: 9
  },
  {
    name: 'MICHIGAN',
    _id: 'xlzqptycg22',
    populationApprox: '10,100,000',
    governor: 'Gretchen Whitmer',
    flagPicturePath: 'michigan,jpg',
    senators: ['Debbie Stabenow', 'Gary Peters'],
    totalReps: 13
  },
  {
    name: 'MINNESOTA',
    _id: 'xlzqptycg23',
    populationApprox: '5,720,000',
    governor: 'Tim Walz',
    flagPicturePath: 'minnesota.jpg',
    senators: ['Amy Klobuchar', 'Tina Smith'],
    totalReps: 8
  },
  {
    name: 'MISSISSIPPI',
    _id: 'xlzqptycg24',
    populationApprox: '3,000,000',
    governor: 'Tate Reeves',
    flagPicturePath: 'mississippi.jpg',
    senators: ['Roger Wicker', 'Cindy Hyde-Smith'],
    totalReps: 4
  },
  {
    name: 'MISSOURI',
    _id: 'xlzqptycg25',
    populationApprox: '6,160,000',
    governor: 'Mike Pearson',
    flagPicturePath: 'missouri.jpg',
    senators: ['Josh Hawley', 'Eric Schmitt'],
    totalReps: 8
  },
  {
    name: 'MONTANA',
    _id: 'xlzqptycg26',
    populationApprox: '120,000',
    governor: 'Greg Gianforte',
    flagPicturePath: 'montana.jpg',
    senators: ['Jon Tester', 'Steve Daines'],
    totalReps: 2
  },
  {
    name: 'NEBRASKA',
    _id: 'xlzqptycg27',
    populationApprox: '2,000,000',
    governor: 'Jim Pillen',
    flagPicturePath: 'nebraska.jpg',
    senators: ['Deb Fischer', 'Pete Ricketts'],
    totalReps: 3
  },
  {
    name: 'NEVADA',
    _id: 'xlzqptycg28',
    populationApprox: '3,100,000',
    governor: 'Joe Lombardo',
    flagPicturePath: 'nevada.jpg',
    senators: ['Catherine Cortez Masto', 'Jacky Rosen'],
    totalReps: 4
  },
  {
    name: 'NEW HAMPSHIRE',
    _id: 'xlzqptycg29',
    populationApprox: '1,400,000',
    governor: 'Chris Sununu',
    flagPicturePath: 'new-hampshire.jpg',
    senators: ['Jeanne Shaneen', 'Maggie Hassan'],
    totalReps: 2
  },
  {
    name: 'NEW JERSEY',
    _id: 'xlzqptycg30',
    populationApprox: '9,300,000',
    governor: 'Phil Murphy',
    flagPicturePath: 'new-jersey.jpg',
    senators: ['Bob Menendez', 'Cory Booker'],
    totalReps: 12
  },
  {
    name: 'NEW MEXICO',
    _id: 'xlzqptycg31',
    populationApprox: '2,120,000',
    governor: 'Michelle Lujan Grisham',
    flagPicturePath: 'new-mexico.jpg',
    senators: ['Martin Heinrich', 'Ben Ray Lujan'],
    totalReps: 3
  },
  {
    name: 'NEW YORK',
    _id: 'xlzqptycg32',
    populationApprox: '20,200,000',
    governor: 'Kathy Hochul',
    flagPicturePath: 'new-york.jpg',
    senators: ['Chuck Schumer', 'Kirsten Gillibrand'],
    totalReps: 26
  },
  {
    name: 'NORTH CAROLINA',
    _id: 'xlzqptycg33',
    populationApprox: '10,700,00-',
    governor: 'Roy Cooper',
    flagPicturePath: 'north-carolina',
    senators: ['Thom Tillis', 'Ted Budd'],
    totalReps: 14
  },
  {
    name: 'NORTH DAKOTA',
    _id: 'xlzqptycg34',
    populationApprox: '780,000',
    governor: 'Doug Burgum',
    flagPicturePath: 'north-dakota.jpg',
    senators: ['John Hoeven', 'Kevin Cramer'],
    totalReps: 1
  },
  {
    name: 'OHIO',
    _id: 'xlzqptycg35',
    populationApprox: '11,800,000',
    governor: 'Mike DeWine',
    flagPicturePath: 'ohio.jpg',
    senators: ['Sherrod Brown', 'J.D. Vance'],
    totalReps: 15
  },
  {
    name: 'OKLAHOMA',
    _id: 'xlzqptycg36',
    populationApprox: '4,020,000',
    governor: 'Kevin Stitt',
    flagPicturePath: 'oklahoma.jpg',
    senators: ['James Lankford', 'Markwayne Mullin'],
    totalReps: 5
  },
  {
    name: 'OREGON',
    _id: 'xlzqptycg37',
    populationApprox: '4,250,000',
    governor: 'Tina Kotek',
    flagPicturePath: 'oregon.jpg',
    senators: ['Ron Wyden', 'Jeff Merkley'],
    totalReps: 6
  },
  {
    name: 'PENNSYLVANIA',
    _id: 'xlzqptycg38',
    populationApprox: '13,000,000',
    governor: 'Josh Shapiro',
    flagPicturePath: 'pennsylvania.jpg',
    senators: ['Bob Casey Jr.', 'John Fetterman'],
    totalReps: 17
  },
  {
    name: 'RHODE ISLAND',
    _id: 'xlzqptycg39',
    populationApprox: '1,100,000',
    governor: 'Dan McKee',
    flagPicturePath: 'rhode-island.jpg',
    senators: ['Jack Reed', 'Sheldon Whitehouse'],
    totalReps: 2
  },
  {
    name: 'SOUTH CAROLINA',
    _id: 'xlzqptycg40',
    populationApprox: '5,284,000',
    governor: 'Henry McMaster',
    flagPicturePath: 'south-carolina.jpg',
    senators: ['Lindsey Graham', 'Tim Scott'],
    totalReps: 7
  },
  {
    name: 'SOUTH DAKOTA',
    _id: 'xlzqptycg41',
    populationApprox: '910,000',
    governor: 'Kristi Noem',
    flagPicturePath: 'south-dakota.jpg',
    senators: ['John Thune', 'Mike Rounds'],
    totalReps: 1
  },
  {
    name: 'TENNESSEE',
    _id: 'xlzqptycg42',
    populationApprox: '6,915,000',
    governor: 'Bill Lee',
    flagPicturePath: 'tennessee.jpg',
    senators: ['Marsha Blackburn', 'Bill Hagerty'],
    totalReps: 9
  },
  {
    name: 'TEXAS',
    _id: 'xlzqptycg43',
    populationApprox: '29,300,000',
    governor: 'Greg Abbott',
    flagPicturePath: 'texas.jpg',
    senators: ['John Cornyn', 'Ted Cruz'],
    totalReps: 38
  },
  {
    name: 'UTAH',
    _id: 'xlzqptycg44',
    populationApprox: '3,300,000',
    governor: 'Spencer Cox',
    flagPicturePath: 'utah.jpg',
    senators: ['Mike Lee', 'Mitt Romney'],
    totalReps: 4
  },
  {
    name: 'VERMONT',
    _id: 'xlzqptycg45',
    populationApprox: '650,000',
    governor: 'Phil Scott',
    flagPicturePath: 'vermont.jpg',
    senators: ['Bernie Sander', 'Peter Welch'],
    totalReps: 1
  },
  {
    name: 'VIRGINIA',
    _id: 'xlzqptycg46',
    populationApprox: '8,700,000',
    governor: 'Glenn Youngkin',
    flagPicturePath: 'virginia.jpg',
    senators: ['Mark Warner', 'Tim Kaine'],
    totalReps: 11
  },
  {
    name: 'WASHINGTON',
    _id: 'xlzqptycg47',
    populationApprox: '7,800,000',
    governor: 'Jay Inslee',
    flagPicturePath: 'washington.jpg',
    senators: ['Patty Murray', 'Maria Cantwell'],
    totalReps: 10
  },
  {
    name: 'WEST VIRGINIA',
    _id: 'xlzqptycg48',
    populationApprox: '1,794,000',
    governor: 'Jim Justice',
    flagPicturePath: 'west-virginia.jpg',
    senators: ['Joe Manchin', 'Shelley Moore Capito'],
    totalReps: 2
  },
  {
    name: 'WISCONSIN',
    _id: 'xlzqptycg49',
    populationApprox: '5,900,000',
    governor: 'Tony Evers',
    flagPicturePath: 'wisconsin.jpg',
    senators: ['Ron Johnson', 'Tammy Baldwin'],
    totalReps: 8
  },
  {
    name: 'WYOMING',
    _id: 'xlzqptycg50',
    populationApprox: '577,000',
    governor: 'Mark Gordon',
    flagPicturePath: 'wyoming.jpg',
    senators: ['John Barrasso', 'Cynthia Lummis'],
    totalReps: 1
  },
];

export default unitedStates;