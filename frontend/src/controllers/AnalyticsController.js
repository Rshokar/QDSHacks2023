import Controller from "./Controller";
import { db } from "../firebase";
import { collection, query, where, } from "@firebase/firestore";

class AnalyticsController extends Controller {

    ROUTES_TABLE;

    constructor() {
        super();
        this.ROUTES_TABLE = "route_1-6_0409";
    }

    /**
     * @param { Number | undefined } truckId 
     * @param { String | undefined } date 
     * @returns 
     */
    async getRoutes(truckId, date) {
        var q = query(collection(db, this.ROUTES_TABLE));
        if (truckId) {
            q = this._getTruckIdQuery(truckId);
        }

        if (truckId && date) {
            q = this._getTruckIdAndDateQuery(truckId, date);
        }

        const docs = await super.makeQuery(q);
        return docs;
    }

    _getTruckIdQuery(truckId) {
        return query(collection(db, this.ROUTES_TABLE), where("TRUCK_ID", "==", truckId))
    }

    _getTruckIdAndDateQuery(truckId, date) {
        return query(collection(db, this.ROUTES_TABLE), where("TRUCK_ID", "==", truckId), where("LOAD_DATE", "==", date))
    }





}

export default AnalyticsController;