import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';

export const removeLastContact = async () => {
  const contacts = await readContacts();

  contacts.pop();

  writeContacts(contacts);
};

removeLastContact();
