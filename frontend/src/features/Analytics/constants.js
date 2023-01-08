export const filterOpts = ['truck', 'truck type'];

export const truckIDs = [1, 3, 4, 5, 9, 12, 13, 14, 15, 17, 18, 21, 22, 23, 25, 26, 27, 28];

export const kpi = {
    "efficiency": {
        unit: "t / L",
    },
    "time per round": {
        unit: "hr",
        unitLong: "hours",
    },
    "load per round": {
        unit: "t",
        unitLong: "tonnes",
    },
    "fuel rate": {
        unit: "L / hr"}
};

export const testData = {
    worstRoute: {
        shovel: 1,
        dump: 2,
        avg: 6.7
    },
    bestRoute: {
        shovel: 2,
        dump: 8,
        avg: 3.2
    },
    kpi: [
        {
            label: "efficiency",
            value: 2,
        },
        {
            label: "time per round",
            value: 1.5,
        },
        {
            label: "load per round",
            value: 3,
        },
        {
            label: "fuel rate",
            value: 100,
        }
    ]
}