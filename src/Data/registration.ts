export interface Registrant {
    serialNumber: number;
    fullName: string;
    borough: string;
    registrationDate: string;
    gender: string;
    placementStatus: string;
};

export interface FormField {
    id: number;
    label: string;
    answer?: string | string[];
}

export const registrants: Registrant[] = [
    {
        serialNumber: 1,
        fullName: "Katie Sims",
        borough: "Manchester",
        registrationDate: "Feb 26, 2025",
        gender: "Male",
        placementStatus: "Controlled Group"
    },
    {
        serialNumber: 2,
        fullName: "Frances Swann",
        borough: "Manchester",
        registrationDate: "Feb 26, 2025",
        gender: "Male",
        placementStatus: "Pending"
    },
    {
        serialNumber: 3,
        fullName: "Dennis Callis",
        borough: "Manchester",
        registrationDate: "Feb 26, 2025",
        gender: "Male",
        placementStatus: "Controlled Group"
    },
    {
        serialNumber: 4,
        fullName: "Kenneth Allen",
        borough: "Manchester",
        registrationDate: "Feb 26, 2025",
        gender: "Male",
        placementStatus: "Pending"
    },
    {
        serialNumber: 5,
        fullName: "Daniel Hamilton",
        borough: "Manchester",
        registrationDate: "Feb 26, 2025",
        gender: "Male",
        placementStatus: "Controlled Group"
    },
    {
        serialNumber: 6,
        fullName: "Jerry Helfer",
        borough: "Manchester",
        registrationDate: "Feb 26, 2025",
        gender: "Male",
        placementStatus: "Pending"
    },
    {
        serialNumber: 7,
        fullName: "Bradley Lawlor",
        borough: "Manchester",
        registrationDate: "Feb 26, 2025",
        gender: "Male",
        placementStatus: "Controlled Group"
    },
    {
        serialNumber: 8,
        fullName: "Kurt Bates",
        borough: "Manchester",
        registrationDate: "Feb 26, 2025",
        gender: "Male",
        placementStatus: "Pending"
    },
    {
        serialNumber: 9,
        fullName: "Autumn Phillips",
        borough: "Manchester",
        registrationDate: "Feb 26, 2025",
        gender: "Male",
        placementStatus: "Controlled Group"
    },
    {
        serialNumber: 10,
        fullName: "James Hall",
        borough: "Manchester",
        registrationDate: "Feb 26, 2025",
        gender: "Male",
        placementStatus: "Pending"
    },
    {
        serialNumber: 11,
        fullName: "John Dukes",
        borough: "Manchester",
        registrationDate: "Feb 26, 2025",
        gender: "Male",
        placementStatus: "Pending"
    },
    {
        serialNumber: 12,
        fullName: "Sophie Turner",
        borough: "Liverpool",
        registrationDate: "Feb 27, 2025",
        gender: "Female",
        placementStatus: "Controlled Group"
    },
    {
        serialNumber: 13,
        fullName: "Michael Smith",
        borough: "Liverpool",
        registrationDate: "Feb 27, 2025",
        gender: "Male",
        placementStatus: "Pending"
    },
    {
        serialNumber: 14,
        fullName: "Emily Johnson",
        borough: "Birmingham",
        registrationDate: "Feb 28, 2025",
        gender: "Female",
        placementStatus: "Controlled Group"
    },
    {
        serialNumber: 15,
        fullName: "Oliver Brown",
        borough: "Birmingham",
        registrationDate: "Feb 28, 2025",
        gender: "Male",
        placementStatus: "Pending"
    },
    {
        serialNumber: 16,
        fullName: "Amelia Wilson",
        borough: "Leeds",
        registrationDate: "Mar 1, 2025",
        gender: "Female",
        placementStatus: "Controlled Group"
    },
    {
        serialNumber: 17,
        fullName: "Jack Taylor",
        borough: "Leeds",
        registrationDate: "Mar 1, 2025",
        gender: "Male",
        placementStatus: "Pending"
    },
    {
        serialNumber: 18,
        fullName: "Jessica Lee",
        borough: "Sheffield",
        registrationDate: "Mar 2, 2025",
        gender: "Female",
        placementStatus: "Controlled Group"
    },
    {
        serialNumber: 19,
        fullName: "George Harris",
        borough: "Sheffield",
        registrationDate: "Mar 2, 2025",
        gender: "Male",
        placementStatus: "Pending"
    },
    {
        serialNumber: 20,
        fullName: "Grace Martin",
        borough: "London",
        registrationDate: "Mar 3, 2025",
        gender: "Female",
        placementStatus: "Controlled Group"
    },
    {
        serialNumber: 21,
        fullName: "Harry Clark",
        borough: "London",
        registrationDate: "Mar 3, 2025",
        gender: "Male",
        placementStatus: "Pending"
    }
];

    export const FormField = [
        {
            id: 1,
            label: "This registration form will sign a young person up to take part in The Summer Jobs Programme study. This means that they will complete surveys over the next few months. They may be given a work placement for the summer or they may not. The form consists of two parts; a baseline survey and a form. Both must be completed for a young person to be registered to the programme. The survey must be completed first to receive a unique code needed for the form. We expect the survey to take around 20 minutes and the form to take around 10 minutes, 30 minutes in total. Only information relating to the young person's employment preferences and expectations will be used to help match them with an employer. Only information related to young people's reasonable adjustments will be shared with the employer to help support the young person during the programme. All information is collected as part of The Summer Jobs Programme research."
        },
        {
            id: 2,
            label: "Do you agree?",
            answer: "I agree"
        },
        {
            id: 3,
            label: "Young To be able to complete registration, you must first complete the baseline survey by following this link."
        },
        {
            id: 4,
            label : " You will be given a unique code when you complete it which you will need to enter to complete the rest of this registration form.Young people will recieve a £10 voucher for successfully completing this form.Please now follow the link to find out more information and to complete the survey."
        },
        {
            id: 5,
            label: "http://www.iffresearch.com/SummerJobs_age?"
        },
        {
            id: 6,
            label: "Date of Registration (Today's Date) (day/month/year)",
            answer: "No"
        },
        {
            id: 7,
            label: "Full Legal Name (as it appears on passport)",
            answer: "No"
        },
        {
            id: 8,
            label: "Preferred Name",
            answer: "No"
        },
        {
            id: 9,
            label: "Date of Birth (day/month/year)",
            answer: "No"
        },
        {
            id: 10,
            label: "What term does the young person use to describe their gender? You can leave this blank if you prefer.",
            answer: "No"
        },
        {
            id: 11,
            label: "Unique code from completing baseline survey",
            answer: "No"
        },
        {
            id: 12,
            label: "National insurance Number (NINO)",
            answer: "No"
        },
        {
            id: 13,
            label: "Current address",
            answer: "No"
        },
        {
            id: 14,
            label: "Postcode",
            answer: "No"
        },
        {
            id: 15,
            label: "What is the young person’s biological sex?",
            answer: "No"
        },
        {
            id: 16,
            label: "Is the young person’s gender the same as the sex they were registered at birth?",
            answer: "No"
        },
        {
            id: 17,
            label: "Is the young person currently or were they previously eligible for free school meals?",
            answer: "No"
        },
        {
            id: 18,
            label: "Does the young person have special educational needs and disabilities?",
            answer: "No"
        },
        {
            id: 19,
            label: "Mobile Number",
            answer: "No"
        },
        {
            id: 20,
            label: "Email",
            answer: "No"
        },
        {
            id: 21,
            label: "Secondary Email Address (e.g. parent or guardian - if relevant)",
            answer: "No"
        },
        {
            id: 22,
            label: "Preferred communication channel",
            answer: "No"
        },
        {
            id: 23,
            label: "Emergency Contact Name",
            answer: "No"
        },
        {
            id: 24,
            label: "Phone Number",
            answer: "No"
        },
        {
            id: 25,
            label: "Email",
            answer: "No"
        },
        {
            id: 26,
            label: "Which right to work document can the young person provide to provide their right to work?",
            answer: "No"
        },
        {
            id: 27,
            label: "What is the Young Person’s level of proficiency in spoken English?",
            answer: "No"
        },
        {
            id: 28,
            label: "Is the Young Person currently being charged with an offence?",
            answer: "No"
        },
        {
            id: 29,
            label: "Please specify the offence the young person is being charged with",
            answer: "No"
        },
        {
            id: 30,
            label: "Does participating in this programme present a risk to the young person’s well-being?",
            answer: "No"
        },
        {
            id: 31,
            label: "Bank Account Name",
            answer: "No"
        },
        {
            id: 32,
            label: "Bank Account Number",
            answer: "No"
        },
        {
            id: 33,
            label: "Bank Account Sort-code",
            answer: "No"
        },
        {
            id: 34,
            label: "Starter Declaration, please select the option which applies. This allows us to set the young person up on Payroll correctly.",
            answer: "No"
        },
        {
            id: 35,
            label: "Nationality",
            answer: "No"
        },
        {
            id: 36,
            label: "Which of the following original documents can you provide if needed for a DBS check (copies and photographs are not valid). Tick all that apply.",
            answer: "No"
        },
        {
            id: 37,
            label: "Unfortunately this young person is not eligible for the programme. More information regarding eligibility can be found on the UK Youth website."
        },
        {
            id: 38,
            label: "https://www.ukyouth.org/what-we-do/our-programmes/summer-jobs-programme/"
        },
        {
            id: 39,
            label: "Thank you for your interest in the Summer Jobs Programme 2025."
        }
    ];
