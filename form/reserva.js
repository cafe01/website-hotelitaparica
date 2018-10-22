

exports.fields = [
    { name: 'name', required: 1 },
    { name: 'email', required: 1 },
    { name: 'phone', required: 1 },
    { name: 'arrival', required: 1 },
    { name: 'departure', required: 1 },
    { name: 'adults', required: 1 },
    { name: 'kids', required: 1 },
    { type: "recaptcha", key: "6LcwYXMUAAAAAO4xIXLfoLoI7bBxqzDqPiYkCzlb", secret: "6LcwYXMUAAAAAC_wlpWj9-ShHUtBP6tpfjEuyZS3" },
]

exports.action = function(fields) {
    var Email = require("k1/email").Email;

    new Email({
        from: '"Website Hotel Itaparica - Contato" <naoresponder@kreato.com.br>',
        to: "hotelitaparica@bol.com.br",
        subject: "Website Hotel Itaparica / Mensagem de: {name}",
        template: "email/reserva.tt",
        data: fields
    }).send()
}
