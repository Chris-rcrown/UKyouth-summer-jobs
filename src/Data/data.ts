type LDPOption = {
    label: string;
    value: string;
};

export const ldpOptions: LDPOption[] = [
    { label: 'Dragon Hall - Soap Box', value: 'DragonHall' },
    { label: 'Northside Youth and Community Connections', value: 'NorthsideYouth' },
    { label: 'Orange Bow CIC', value: 'OrangeBow' },
    { label: 'Project Zero WF CIC', value: 'ProjectZero' },
    { label: 'Spark!', value: 'Spark' },
    { label: 'Spiral Skills CIC', value: 'SpiralSkills' },
    { label: 'ThinkForward UK', value: 'ThinkForward' },
    { label: 'Youth League', value: 'YouthLeague' },
    { label: 'GMYN', value: 'GMYN' },
    { label: 'Nurturing Foundations', value: 'NurturingFoundations' },
    { label: 'Power 2', value: 'Power2' },
    { label: 'Wigan Youth Zone & Bolton Lads and Girls Club', value: 'WiganYouthZone' },
    { label: 'Flying Futures CIC', value: 'FlyingFuture' },
    { label: 'Doncaster City Council', value: 'DoncasterCityCouncil' },
    { label: 'Sheffield Futures', value: 'SheffieldFutures' },
    { label: 'Youth Cymru', value: 'YouthCymru' },
    { label: 'Catch 22', value: 'Catch22' },
    { label: 'Sport 4 Life UK', value: 'Sport4Life' },
    { label: 'Sporting Your Futures', value: 'SportingYourFutures' }
];

type Borough = {
    label: string;
    value: string;
};

type LDP = {
    name: string;
    value: string;
    boroughs: Borough[];
};

type Area = {
    label: string;
    value: string;
    ldps: LDP[];
};

export const areaData: Area[] = [
    {
        label: 'London',
        value: 'London',
        ldps: [
            {
                name: 'Dragon Hall - Soap Box',
                value: 'DragonHall',
                boroughs: [
                    { label: 'Camden', value: 'Camden' },
                    { label: 'Islington', value: 'Islington' },
                    { label: 'Westminister', value: 'Westminister' }
                ]
            },
            {
                name: 'Northside Youth and Community Connections',
                value: 'NorthsideYouth',
                boroughs: [
                    { label: 'Enfield', value: 'Enfield' },
                    { label: 'Newham', value: 'Newham' }
                ]
            },
            {
                name: 'Orange Bow CIC',
                value: 'OrangeBow',
                boroughs: [
                    { label: 'Croydon', value: 'Croydon' },
                    { label: 'Lewisham', value: 'Lewisham' },
                    { label: 'Southwark', value: 'Southwark' }
                ]
            },
            {
                name: 'Project Zero WF CIC',
                value: 'ProjectZero',
                boroughs: [
                    { label: 'Tower Hamlets', value: 'TowerHamlets' },
                    { label: 'Waltham Forest', value: 'WalthamForest' }
                ]
            }, 
            {
                name: 'Spark!',
                value: 'Spark',
                boroughs: [
                    { label: 'Hammersmith & Fulham', value: 'HammersmithFulham' },
                    { label: 'Kensington & Chelsea', value: 'KensingtonChelsea' },
                    { label: 'Hounslow', value: 'Hounslow' },
                    { label: 'Ealing', value: 'Ealing' }
                ]
            }, 
            {
                name: 'Spiral Skills CIC',
                value: 'SpiralSkills',
                boroughs: [
                    { label: 'Lambeth', value: 'Lambeth' },
                    { label: 'Wandsworth', value: 'Wandsworth' }
                ]
            }, 
            {
                name: 'ThinkForward UK',
                value: 'ThinkForward',
                boroughs: [
                    { label: 'Haringey', value: 'Haringey' },
                    { label: 'Hackney', value: 'Hackney' }
                ]
            },
            {
                name: 'Youth League',
                value: 'YouthLeague',
                boroughs: [
                    { label: 'Barking & Dagenham', value: 'BarkingDagenham' },
                    { label: 'Greenwich', value: 'Greenwich' }
                ]
            }
        ]
    },
    {
        label: 'Greater Manchester',
        value: 'Manchester',
        ldps: [
            {
                name: 'GMYN',
                value: 'GMYN',
                boroughs: [
                    { label: 'Manchester', value: 'Manchester' },
                    { label: 'Salford', value: 'Salford' },
                    { label: 'Trafford', value: 'Trafford' }
                ]
            },
            {
                name: 'Nurturing Foundations',
                value: 'NurturingFoundations',
                boroughs: [
                    { label: 'Oldham', value: 'Oldham' },
                    { label: 'Rochdale', value: 'Rochdale' },
                    { label: 'Tameside', value: 'Tameside' }
                ]
            },
            {
                name: 'Power 2',
                value: 'Power2',
                boroughs: [
                    { label: 'Bolton', value: 'Bolton' },
                    { label: 'Bury', value: 'Bury' },
                    { label: 'Stockport', value: 'Stockport' }
                ]
            },
            {
                name: 'Wigan Youth Zone & Bolton Lads and Girls Club',
                value: 'WiganYouthZone',
                boroughs: [
                    { label: 'Bolton', value: 'Bolton' },
                    { label: 'Wigan', value: 'Wigan' }
                ]
            }
        ]
    },
    {
        label: 'West Midlands',
        value: 'WestMidlands',
        ldps: [
            {
                name: 'Catch 22',
                value: 'Catch22',
                boroughs: [
                    { label: 'Birmingham', value: 'Birmingham' },
                    { label: 'Coventry', value: 'Coventry' },
                    { label: 'Wolverhampton', value: 'Wolverhampton' }
                ]
            },
            {
                name: 'Sport 4 Life UK',
                value: 'Sport4Life',
                boroughs: [
                    { label: 'Sandwell', value: 'Sandwell' },
                    { label: 'Solihull', value: 'Solihull' }
                ]
            },
            {
                name: 'Sporting Your Futures',
                value: 'SportingYourFutures',
                boroughs: [
                    { label: 'Dudley', value: 'Dudley' },
                    { label: 'Walsall', value: 'Walsall' }
                ]
            }
        ]
    },
    {
        label: 'Yorkshire & North East',
        value: 'YorkshireNE',
        ldps: [
            {
                name: 'Flying Futures CIC',
                value: 'FlyingFuture',
                boroughs: [
                    { label: 'Middlesbrough', value: 'Middlesbrough' },
                    { label: 'Newcastle', value: 'Newcastle' },
                    { label: 'Stockton', value: 'Stockton' }
                ]
            },
            {
                name: 'Doncaster City Council',
                value: 'DoncasterCityCouncil',
                boroughs: [
                    { label: 'Doncaster', value: 'Doncaster' }
                ]
            },
            {
                name: 'Sheffield Futures',
                value: 'SheffieldFutures',
                boroughs: [
                    { label: 'Sheffield', value: 'Sheffield' }
                ]
            }
        ]
    },
    {
        label: 'Wales',
        value: 'Wales',
        ldps: [
            {
                name: 'Youth Cymru',
                value: 'YouthCymru',
                boroughs: [
                    { label: 'Cardiff', value: 'Cardiff' },
                    { label: 'Newport', value: 'Newport' },
                    { label: 'Swansea', value: 'Swansea' }
                ]
            }
        ]
    }
];