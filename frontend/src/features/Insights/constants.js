import { ReactComponent as Efficiency } from '../../assets/efficiency.svg';
import { ReactComponent as Time } from '../../assets/time.svg';
import { ReactComponent as Load } from '../../assets/load.svg';
import { ReactComponent as Fuel } from '../../assets/fuel.svg';

// Key -> Shovel, Value -> Dump
export const routes = {
    1: [1, 2, 7, 8, 11],
    2: [1],
    3: [3, 5],
    6: [1, 2, 9, 11, 15, 18, 19]
}

export const filterOpts = ['truck', 'truck type'];

export const truckIDs = [1, 3, 4, 5, 9, 12, 13, 14, 15, 17, 18, 21, 22, 23, 25, 26, 27, 28];

export const kpi = {
    "efficiency": {
        unit: "t / L",
        icon: Efficiency,
    },
    "time per round": {
        unit: "hr",
        unitLong: "hours",
        icon: Time,
    },
    "load per round": {
        unit: "t",
        unitLong: "tonnes",
        icon: Load,
    },
    "fuel rate": {
        unit: "L / hr",
        icon: Fuel,
    }
};

export const testData = {
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