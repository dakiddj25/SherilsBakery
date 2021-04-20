var admin = require('firebase-admin');


admin
    .firestore()
    .collection("mail")
    .add({
        to: 'kadijahwilson@pursuit.org',
        template: {
            name: "order-email",
            data: {
                username: "ada",
                name: "Ada Lovelace",
                imagePath: "https://path-to-file/image-name.jpg"
            },
        },
    })
    .then(() => console.log("Queued email for delivery!"));