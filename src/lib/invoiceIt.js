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
        lang: 'en',
        footer: {
            fr: 'Société par Actions Simplifiée Unipersonnelle (SASU) - Capital de 1 000 000 € - SIRET: 87564738493127 <br> NAF-APE: 6202A - Num. TVA: FR28987856541',
            en: 'Dim Solution inc - Registration: 87564738493127 <br> NAF-APE: 6202A - Num. VAT: EN28987856541'
        },
    },
});

module.exports = invoiceIt;