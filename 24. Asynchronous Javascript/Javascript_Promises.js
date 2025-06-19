const userleft = true;
const userWatchingCatMeme = false;
//Using callbacks
        // function userWatchCallback(successCallBack, failureCallBack) {
        //     if (userleft) {
        //         failureCallBack({
        //             name: 'the sure has left',
        //             message: 'sorry'
        //         })
        //     }
        //     else if (userWatchingCatMeme) {
        //         failureCallBack({
        //             name: 'userisv=busy',
        //             message: 'i am busy mate'
        //         })
        //     }
        //     else {
        //         successCallBack({
        //             name: 'fullywatched',
        //             message: 'thanks for the video'
        //         })
        //     }
        // }
        // userWatchCallback((successarg) => {
        //     console.log(successarg.name);
        //     console.log(successarg.message);
        // }, (failurearg) => {
        //     console.log(failurearg.name);
        //      console.log(failurearg.message);
        // })







// Using promises

const promise = new Promise((resolve, reject) => {
    if (userleft) {
        reject({
            name: 'the user has left',
            message: 'sorry'
        })
    }
    else if (userWatchingCatMeme) {
        reject({
            name: 'userisbusy',
            message: 'i am busy mate'
        });
    }
    else {
        resolve({
            name: 'fullywatched',
            message: 'thanks for the video'
        })
    }
})

function userWatchPromise() {
    return promise;
}

userWatchPromise().then((success) => {
    console.log(success.name+ success.message);
}).catch((failure) => {
    console.log(failure.name + failure.message)
});