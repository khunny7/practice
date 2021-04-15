export function getContacts() {
    return fetch('http://192.168.86.28:4000/contact')
        .then(contacts => contacts.json())
}