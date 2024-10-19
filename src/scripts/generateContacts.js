import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  const products = await readContacts();

  for (let index = 0; index < number; index++) {
    products.push(createFakeContact());
  }

  writeContacts(products);
};

generateContacts(5);
