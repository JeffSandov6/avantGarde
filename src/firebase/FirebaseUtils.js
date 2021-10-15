import { firebaseDB } from './FirebaseConfig';
import { child, ref, push, update, get } from 'firebase/database';
import moment from 'moment';

//TODO: add error handling
//TODO: validation on comment, name, and rating
export async function submitUserComment(userName, rating, comment) {
    const newCommentKey = push(child(ref(firebaseDB), "comments")).key;

    const curDate = moment().format('MMMM Do YYYY');
    const dbCommentEntry = {};
    dbCommentEntry['/comments/' + newCommentKey] = 
    {
        name: userName,
        rating: rating,
        comment: comment,
        date: curDate
    }
    
    return update(ref(firebaseDB), dbCommentEntry)
    .then(() => {
        //if update completes succesfully
        console.log("Success");
        return 'Success';

    }).catch((error) => {
        console.log("Error submitting user comments");
        console.log(error);
        return 'Error';
    });
}



export async function getUserComments() {
    const dbRef = ref(firebaseDB);

    return get(child(dbRef, "comments")).then((snapshot) => {
        if(snapshot.exists()) {
            let snapshotValuesAr = Object.values(snapshot.val());
            snapshotValuesAr.reverse();
            return snapshotValuesAr;
        } else {
            console.log("snapshot doesn't exist");
        }
    }).catch((error) => {
        console.log(error);
    })

}