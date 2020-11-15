import fire from '../../../lib/fire';
const firebaseDB = fire.database();

export default async (req, res) => {
    try {

        //Datos filtrados por username. Se tiene que usar orderByChild para elegir el campo y equalTo para comparalo
        firebaseDB.ref('animals').orderByChild('animalName').equalTo(animalName).once('value', (snapshot) => {
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

