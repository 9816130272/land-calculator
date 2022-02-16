const units = [
   "bigha","kattha","dhur","ropani","anna","haat","paisa","daam",
]
const conversionList = [
    {
        unit: "bigha",
        minUnit: 1,
        conversionRatios: [
            {
                unit: "kattha",
                value: 20
            },
            {
                unit: "dhur",
                value: 400
            },
            {
                unit: "ropani",
                value: 13.31
            },
            {
                unit: "anna",
                value: 212.96
            },
            {
                unit: "haat",
                value: 0.05
            },
            {
                unit: "paisa",
                value: (212.96*4)
            },
            {
                unit: "daam",
                value: (212.96*16)
            },
        ]
    },
    {
        unit: "kattha",
        minUnit: 1,
        conversionRatios: [
            {
                unit: "bigha",
                value: 0.05
            },
            {
                unit: "dhur",
                value: 20
            },
            {
                unit: "ropani",
                value: 0.6655
            },
            {
                unit: "anna",
                value: 10.648
            },
            {
                unit: "haat",
                value: 0.05
            },
            {
                unit: "paisa",
                value: (10.648*4)
            },
            {
                unit: "daam",
                value: (10.648*4)
            },
        ]
        },
    {
        unit: "dhur",
        minUnit: 1,
        conversionRatios: [
            {
                unit: "kattha",
                value: (1/20)
            },
            {
                unit: "biga",
                value: (1/400)
            },
            {
                unit: "ropani",
                value: 0.033275
            },
            {
                unit: "anna",
                value: 0.5324
            },
            {
                unit: "haat",
                value: 0.05
            },
            {
                unit: "paisa",
                value: (0.5324*4)
            },
            {
                unit: "daam",
                value: (0.5324*16)
            },
        ]
        
    },
    {
        unit: "ropani",
        minUnit: 1,
        conversionRatios: [
            {
                unit: "bigha",
                value: (1/20)
            },
            {
                unit: "kattha",
                value: (1/0.6655)
            },
            {
                unit: "dhur",
                value: (1/0.033275)
            },
            {
                unit: "anna",
                value: 16
            },
            {
                unit: "haat",
                value: 0.05
            },
            {
                unit: "paisa",
                value: (16*4)
            },
            {
                unit: "daam",
                value: (16*16)
            },
        ]
        
    },
    {
        unit: "anna",
        minUnit: 1,
        conversionRatios: [
            {
                unit: "bigha",
                value: (1/212.96)
            },
            {
                unit: "kattha",
                value: (1/10.648)
            },
            {
                unit: "dhur",
                value: (1/0.5324)
            },
            {
                unit: "ropani",
                value: (1/16)
            },
            {
                unit: "haat",
                value: 0.05
            },
            {
                unit: "paisa",
                value: 4
            },
            {
                unit: "daam",
                value: 16
            },
        ]
        
    },
    {
        unit: "paisa",
        minUnit: 1,
        conversionRatios: [
            {
                unit: "bigha",
                value: (1/(212.96*4))
            },
            {
                unit: "kattha",
                value: (1/(10.648*4))
            },
            {
                unit: "dhur",
                value: (1/(0.5324*4))
            },
            {
                unit: "ropani",
                value: (1/(16*4))
            },
            {
                unit: "anna",
                value: (1/(16*16))
            },
            {
                unit: "haat",
                value: 4
            },
            {
                unit: "daam",
                value: 4
            },
        ]
        
    },
    {
        unit: "daam",
        minUnit: 1,
        conversionRatios: [
            {
                unit: "bigha",
                value: (1/(212.96*16))
            },
            {
                unit: "kattha",
                value: (1/(10.648*16))
            },
            {
                unit: "dhur",
                value: (1/(0.5324*16))
            },
            {
                unit: "ropani",
                value: (1/(16*16))
            },
            {
                unit: "anna",
                value: (1/(16*16*4))
            },
            {
                unit: "haat",
                value: 4
            },
            {
                unit: "paisa",
                value: 1/4
            },
        ]
        
    },
]

export { conversionList, units }