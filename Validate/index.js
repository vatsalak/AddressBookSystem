// src/index.js

const { Contact, AddressBook } = require('./AddressBook.js');

const myAddressBook = new AddressBook();

try {
    myAddressBook.addContact(new Contact('Sohn', 'Doe', '123 Elm St', 'Springfield', 'ILhkoi', '62701', '5551234567', 'john.doe@example.com'));
    myAddressBook.addContact(new Contact('Aane', 'Smith', '456 Oak St', 'Springfield', 'ILkhkuh', '62702', '5557654321', 'jane.smith@example.com'));
    console.log("Contacts List:", myAddressBook.listContacts());
} catch (error) {
    console.error(error.message);
}

// Test invalid contact
try {
    myAddressBook.addContact(new Contact('Konnkj', 'Gdoe', '123 Elm sr', 'NYKKJJ', 'NYJKLjhjg', '12348', '5551290009', 'invalidemail@gmail.com'));
} catch (error) {
    console.error('Failed to add contact:', error.message);
}
