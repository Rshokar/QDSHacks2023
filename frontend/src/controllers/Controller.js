import { getDocs } from "firebase/firestore";
class Controller {

    async makeQuery(query) {

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