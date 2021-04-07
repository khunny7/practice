export function getContacts() {
    return fetch('http://localhost:4000/contact')
        .then(contacts => contacts.json())
}