import { getDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { collection, query, where, doc } from "firebase/firestore";

class Controller {

    INSIGHTS;
    ANALYTICS_SUMMARY;
    ANALYTICS_TABLE;
    ANALYTICS_OVERALL;

    constructor() {
        this.INSIGHTS = "insights";
        this.ANALYTICS_SUMMARY = "analytics_summary";
        this.ANALYTICS_TABLE = "analytics";
        this.ANALYTICS_OVERALL = "analytics_overall";
    }


    /**
     * @param { Number | String } bucketId 
     * @param { Number | String } dumpId 
     * @returns undefined or a docuemnt
     */
    async getInsights(shovelId, dumpId) {
        if (!shovelId || !dumpId)
            throw Error("shovelId and dumpId is required");

        var docRef = doc(db, this.INSIGHTS, "route_" + shovelId + "_" + dumpId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            return docSnap.data();
        }
        return undefined;
    }

    /**
    * @param { Number | String | undefined } truckId 
    * @param { String | undefined } date 
    * @returns An array of found docuemnts
    */
    async getAnalytics(truckId, date) {
        var q = query(collection(db, this.ANALYTICS_TABLE));

        if (truckId) {
            q = this._getTruckIdQuery(truckId);
        }

        if (truckId && date) {
            q = this._getTruckIdAndDateQuery(truckId, date);
        }

        return await this._makeQuery(q);
    }

    /**
     * @param { String } date 
     * @returns docuemnt or undefined
     */
    async getAnalyticsSummary(date) {

        if (!date)
            throw Error("date is a required field");

        var docRef = doc(db, this.ANALYTICS_SUMMARY, date);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return docSnap.data();
        }
        return undefined;
    }

    /**
     * @param { Number | String } truckId 
     */
    async getAnalyticsOverall(truckId) {
        if (!truckId)
            throw Error("truckId is a required field")

        var q = query(collection(db, this.ANALYTICS_OVERALL), where("TRUCK_ID", "==", truckId));

        return await this._makeQuery(q)
    }

    _getTruckIdQuery(truckId) {
        return query(collection(db, this.ANALYTICS_TABLE), where("TRUCK_ID", "==", truckId))
    }

    _getTruckIdAndDateQuery(truckId, date) {
        return query(collection(db, this.ANALYTICS_TABLE), where("TRUCK_ID", "==", truckId), where("LOAD_DATE", "==", date))
    }

    async _makeQuery(query) {

        const querySnapshot = await getDocs(query);

        if (querySnapshot.empty) {
            return undefined;
        }

        const docs = querySnapshot.docs;
        const result = []

        for (let i = 0; i < docs.length; i++) {
            result[i] = docs[i].data();
        }

        return result;
    }
}

export default Controller; 