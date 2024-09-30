// src/AddressBook.js

class Contact {
    constructor(firstName, lastName, address, city, state, zip, phone, email) {
        this.setFirstName(firstName);
        this.setLastName(lastName);
        this.setAddress(address);
        this.setCity(city);
        this.setState(state);
        this.setZip(zip);
        this.setPhone(phone);
        this.setEmail(email);
    }

    // Setters with validation...
    // (Use the previously defined validation logic here)
}

class AddressBook {
    constructor(name) {
        this.name = name;
        this.contacts = [];
    }

    addContact(contact) {
        this.contacts.push(contact);
    }

    removeContact(email) {
        this.contacts = this.contacts.filter(contact => contact.email !== email);
    }

    listContacts() {
        return this.contacts;
    }

    findContact(email) {
        return this.contacts.find(contact => contact.email === email);
    }
}

class AddressBookManager {
    constructor() {
        this.addressBooks = [];
    }

    createAddressBook(name) {
        const newAddressBook = new AddressBook(name);
        this.addressBooks.push(newAddressBook);
        return newAddressBook;
    }

    listAddressBooks() {
        return this.addressBooks.map(ab => ab.name);
    }

    getAddressBook(name) {
        return this.addressBooks.find(ab => ab.name === name);
    }
}

module.exports = { Contact, AddressBook, AddressBookManager };
