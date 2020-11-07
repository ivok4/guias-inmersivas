import fire from '../../../lib/fire';
//import 'firebase/<PACKAGE>';
const firebaseDB = fire.database();

export default async (req, res) => {
    try {
        firebaseDB.ref('places').once('value', (snapshot) => {
            const questionsArr = [];
            snapshot.forEach((childSnapshot) => {
                questionsArr.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                })
            })
            questionsArr.reverse()
            res.status(200).json(questionsArr);
        })

    } catch (error) {
        console.error(error);
        res.status(error.status || 500).json({
            code: error.code,
            error: error.message
        });
    }

};