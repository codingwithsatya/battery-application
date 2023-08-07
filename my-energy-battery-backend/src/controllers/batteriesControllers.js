"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateBatteryConfiguration = exports.getBatteries = void 0;
const path = __importStar(require("path"));
const batteryUtils_1 = require("../utils/batteryUtils");
const batteries_1 = require("./batteries");
const batteriesFilePath = path.join(__dirname, "..", "batteries.json");
const getBatteries = (req, res) => {
    try {
        const batteries = batteries_1.batteriesData;
        res.json(batteries);
    }
    catch (error) {
        console.log("Error reading batteries data:", error);
        res.status(500).json({ message: "Error in fetching batteries data" });
    }
};
exports.getBatteries = getBatteries;
const calculateBatteryConfiguration = (req, res) => {
    try {
        const { megapack2XL, megapack2, megapack, powerpack } = req.body;
        const batteries = batteries_1.batteriesData;
        const selectedBatteries = [
            { battery: batteries[0], quantity: megapack2XL },
            { battery: batteries[1], quantity: megapack2 },
            { battery: batteries[2], quantity: megapack },
            { battery: batteries[3], quantity: powerpack },
        ];
        const totalIndustrialBatteries = megapack2XL + megapack2 + megapack + powerpack;
        const transformerNeeded = Math.floor(totalIndustrialBatteries / 4);
        selectedBatteries.push({
            battery: batteries[4],
            quantity: transformerNeeded,
        });
        const batteriesCost = (0, batteryUtils_1.calculateBudget)(selectedBatteries);
        const landSize = (0, batteryUtils_1.calculateLandSize)(selectedBatteries);
        const requiredEnergy = (0, batteryUtils_1.calculateRequiredEnergy)(selectedBatteries);
        //Calculate total transformers required
        const totalTransformer = transformerNeeded;
        const transformerCost = transformerNeeded * batteries[4].cost;
        const totalCost = batteriesCost + transformerCost;
        res.json({
            batteriesCost,
            landSize,
            requiredEnergy,
            transformerNeeded,
            transformerCost,
            totalTransformer,
            totalCost,
        });
    }
    catch (error) {
        console.log("Error calculating battery configuration:", error);
        res
            .status(500)
            .json({ message: "Error while calculating battery configuration" });
    }
};
exports.calculateBatteryConfiguration = calculateBatteryConfiguration;
