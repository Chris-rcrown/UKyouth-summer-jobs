export type ReferralStatus = 'Pending' | 'Registered' ;

export interface Referral {
    id: number;
    fullName: string;
    location: string;
    referralDate: string;
    gender: string;
    status: ReferralStatus;
}

export const referrals: Referral[] = [
    { id: 1, fullName: 'David Eison', location: 'Manchester', referralDate: 'Feb 26, 2025', gender: 'Male', status: 'Registered' },
    { id: 2, fullName: 'Stephanie Nicol', location: 'Manchester', referralDate: 'Feb 26, 2025', gender: 'Male', status: 'Pending' },
    { id: 3, fullName: 'Alex Tester', location: 'Manchester', referralDate: 'Feb 26, 2025', gender: 'Male', status: 'Pending' },
];


export interface FormQuestion {
    id: number;
    text: string;
    answer: string | string[];
}

export const formQuestions = [
    {
        id: 1,
        text: 'I understand that a referral does not mean that a young person is guaranteed a place on the programme.',
        answer: 'No',
    },
    {
        id: 2,
        text: 'I understand that I must speak to the young person about the programme before referring them.',
        answer: 'No',
    },
    {
        id: 3,
        text: 'I have checked the young person meets the eligibility criteria.',
        answer: 'No',
    },
    {
        id: 4,
        text: 'I understand that the programme is running as a Randomised Control Trial (RCT), and once registered, young people have a 50% chance of receiving a paid work placement, as long as there are placements available.',
        answer: 'No',
    },
    {
        id: 5,
        text: 'Who is completing this form?',
        answer: ['No', 'Yes', 'Other'],
    },
    {
        id: 6,
        text: 'Full name of referrer',
        answer: 'No'
    },
    {
        id: 7,
        text: 'Job Title of referrer',
        answer: 'No'
    },
    {
        id: 8,
        text: 'Professional contact number of referrer',
        answer: 'No'
    },
    {
        id: 9,
        text: 'Professional email address of referrer',
        answer: 'No'
    },
    {
        id: 10,
        text: 'Organisation type',
        answer: 'No'
    },
    {
        id: 11,
        text: 'Was the young person known to the referrer or referring organisation prior to this referral?',
        answer: 'No'
    },
    {
        id: 12,
        text: 'Relationship of referrer to the young person',
        answer: 'No'
    },
    {
        id: 13,
        text: 'How much does the young person know about The Summer Jobs Programme?',
        answer: 'No'
    },
    
    {
        id: 14,
        text: "Date of Referral (day/month/year)",
        answer: "No"
    },
    {
        id: 15,
        text: "Full Legal Name (as it appears on passport)",
        answer: "No"
    },
    {
        id: 16,
        text: "Phone Number",
        answer: "No"
    },
    {
        id: 17,
        text: "Email Address",
        answer: "No"
    },
    {
        id: 18,
        text: "Pronouns",
        answer: "No"
    },
    {
        id: 19,
        text: "Preferred Name",
        answer: "No"
    },
    {
        id: 20,
        text: "Date of Birth (day/month/year)",
        answer: "No"
    },
    {
        id: 21,
        text: "Gender",
        answer: "No"
    },
    {
        id: 22,
        text: "Ethnicity",
        answer: "No"
    },
    {
        id: 23,
        text: "Is the young person still in school?",
        answer: "No"
    },
    {
        id: 24,
        text: "Young Person’s Current address including postcode",
        answer: "No"
    },
    {
        id: 25,
        text: "Young person’s age?",
        answer: "No"
    },
    {
        id: 26,
        text: "Does the young person have the right to work in the UK?",
        answer: "No"
    },
    {
        id: 27,
        text: "Is the young person able to take part in 25 hours of employment each week over the Summer (with reasonable adjustments?)",
        answer: "No"
    },
    {
        id: 28,
        text: "Is the young person available to participate in at least 5 out of the 6 weeks of the programme over the Summer, including attending the prep week?",
        answer: "No"
    },
    {
        id: 29,
        text: "Is the young person currently employed for more than 15 hours per week?",
        answer: "No"
    },
    {
        id: 30,
        text: "Is the young person currently studying towards a degree?",
        answer: "No"
    },
    {
        id: 31,
        text: "Will the young person be living in a secure estate at the start of the programme (July 2025)?",
        answer: "No"
    },
    {
        id: 32,
        text: "Which area does the young person currently live in?",
        answer: "No"
    },
    {
        id: 33,
        text: "Which area of South Wales does the young person currently live in (or is able to commute to in around under 30 mins)?",
        answer: "No"
    },
    {
        id: 34,
        text: "Which area of Greater Manchester does the young person currently live in (or is able to commute to in around under 30 mins)?",
        answer: "No"
    },
    {
        id: 35,
        text: "Which area of the North East does the young person currently live in (or is able to commute to in around under 30 mins)?",
        answer: "No"
    },
    {
        id: 36,
        text: "Which area of the West Midlands does the young person currently live in (or is able to commute to in around under 30 mins)?",
        answer: "No"
    },
    {
        id: 37,
        text: "Which area of London does the young person currently live in (or is able to commute to in around under 30 mins)?",
        answer: "No"
    },
    {
        id: 38,
        text: "Which area of Yorkshire and the Humber does the young person currently live in (or is able to commute to in around under 30 mins)?",
        answer: "No"
    },
    {
        id: 39,
        text: "If you (the young person) already work with, or are known to a local delivery partner then please select them here. This will link you with them over the location you choose. Please only select this if you have a previous connection.",
        answer: "No"
    },
    {
        id: 40,
        text: "Please check which categories the young person falls into. Select all that apply.",
        answer: "No"
    },
    {
        id: 41,
        text: "Unfortunately this young person is not eligible for the programme. More information regarding eligibility can be found at the beginning of this form."
    }
      
];
