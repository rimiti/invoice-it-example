const invoiceIt = require('@rimiti/invoice-it');

// Configuration
invoiceIt.configure({
    emitter: {
        name: 'Dim Solution',
        street_number: '15',
        street_name: 'Rue Jean Jaures',
        zip_code: '75012',
        city: 'Paris',
        country: 'France',
        phone: '01 00 00 00 00',
        mail: 'contact@dimsolution.com',
        website: 'www.dimsolution.com',
    },
    global: {
        logo: 'http://placehold.it/230x70&text=Dim+Solution',
    },
});

module.exports = invoiceIt;