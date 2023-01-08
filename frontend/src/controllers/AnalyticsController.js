import Controller from "./Controller";
import { db } from "../firebase";
import { collection, query, where, getDocs, getDoc } from "@firebase/firestore";

class AnalyticsController extends Controller {



    /**
     * @param { Number } truckId 
     * @param { String } date 
     * @returns 
     */
    async getData(truckId, date) {
        var q = query(collection(db, 'route_1-6_0409'));
        if (truckId) {
            q = this._getTruckIdQuery(truckId);
        }

        if (truckId && date) {
            q = this._getTruckIdAndDateQuery(truckId, date);
        }
        console.log(truckId, date);
        console.log("Hello");

        const docs = await super.makeQuery(q);
        return docs;
    }

    _getTruckIdQuery(truckId) {
        return query(collection(db, 'route_1-6_0409'), where("TRUCK_ID", "==", truckId))
    }

    _getTruckIdAndDateQuery(truckId, date) {
        return query(collection(db, 'route_1-6_0409'), where("TRUCK_ID", "==", truckId), where("LOAD_DATE", "==", date))
    }


}

export default AnalyticsController;