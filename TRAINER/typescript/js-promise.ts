const teilnehmerGegangen = false;
const teilnehmerImHandy = false;

class Message {
    reason_name: string;
    message: string;
    constructor(reason_name: string, message: string) {
        this.reason_name = reason_name;
        this.message = message;
    }
}

function lernePromise(): Promise<Message>  {
    return new Promise((resolve, reject) => {
        if (teilnehmerGegangen) {
            reject({
                reason_name: 'hatte kein Bock',
                message: 'promise will halt nicht jeder'
            });
        } else if (teilnehmerImHandy) {
            reject({
                reason_name: 'Tik Tok rettet die Welt',
                message: 'Promise kann warten'
            });
        } else {
            resolve({
                reason_name: 'teilnehmer ist sehr motiviert',
                message: 'Lernprozess läuft'
            });
        }
    })
}

const lpOutput = document.querySelector('#learnPromiseOutput'); // Element | null

lernePromise()
    .then((msg) => {
        lpOutput!.textContent = `Grund: ${msg.reason_name}, Kommentar: ${msg.message}`;
    }
)
    .catch((fail) => {
        lpOutput!.textContent = `Grund: ${fail.reason_name}, Kommentar: ${fail.message}`
    })



// Anderer Aufruf der Methode, die ein Promise zurückgibt. Ohne then() und catch():
async function AsyncPromise() {
    try {
        let message: Message = await lernePromise() as Message; // Ohne Messa
        console.log("Success!");
        console.log(message);
        lpOutput!.innerHTML = message.reason_name + " " + message.message;
    } catch (error) {
        console.log("Exception!")
        console.log(error);
    }
}

AsyncPromise();
