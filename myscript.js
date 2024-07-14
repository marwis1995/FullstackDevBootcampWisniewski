
function downloadSomeData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data downloaded succesfully")
            // reject("Error while data downloading")
        }, 5000)
    })
}


downloadSomeData()
    .then(result => {
        console.log("Success")
        console.log("Success")
        console.log("Success")
        console.log("Success")
        console.log("Success")
        console.log("Success")
    })
    .catch(error => {
        console.log(error)
    })