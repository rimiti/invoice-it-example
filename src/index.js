// Import customized instance
const invoiceIt = require('./lib/invoiceIt');

const recipient = {
    first_name: 'Will',
    last_name: 'Jameson',
    street_number: '20',
    street_name: 'Rue Victor Hugo',
    zip_code: '77340',
    city: 'Pontault-Combault',
    country: 'France',
    phone: '06 00 00 00 00',
    mail: 'will.jameson@customer.com'
};

// Prepare document
const document = invoiceIt.create(recipient);

// Adding articles from array
document.article = [{
    description: 'Macbook Pro 13"',
    tax: 19.60,
    price: 952.09,
    qt: 2,
}, {
    description: 'Github licence',
    tax: 10,
    price: 79,
    qt: 5,
}];

// Adding articles from object
document.article = {
    description: 'Apple care 1 year',
    tax: 20,
    price: 100,
    qt: 3,
};

// If you want to add note to your order
// document.order_note = 'Your order note...';

// If you want to add note to your invoice
// document.invoice_note = 'Your invoice note...';

// To delete all articles
// document.deleteArticles();

// Export order to HTML file.
document.getOrder()
    .toHTML()
    .toFile('./exports/order.html')
    .then(() => console.log('Order HTML file created.'));

// Export invoice to HTML file.
document.getInvoice()
    .toHTML()
    .toFile('./exports/invoice.html')
    .then(() => console.log('Invoice HTML file created.'));

// Export order to PDF file.
document.getOrder()
    .toPDF()
    .toFile('./exports/order.pdf')
    .then(() => console.log('Order PDF file created.'));

// Export invoice in PDF
document.getInvoice()
    .toPDF()
    .toFile('./exports/invoice.pdf')
    .then(() => console.log('Invoice PDF file created.'));
