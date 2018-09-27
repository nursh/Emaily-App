const sendgrid = require('sendgrid');
const { mail: helper } = sendgrid;

class Mailer extends helper.Mail {
  constructor({ subject, recipients }, content) {
    super();

    this.sgAPI = process.env.sendGridKey;
    this.from_email = new helper.Email('no-reply@emaily.com');
    this.subject = subject;
    this.body = new helper.Content('text/html', content);
    this.recipients = this.formatAddresses(recipients);

    this.addContent(this.body);
    this.addClickTracking();
    this.addRecipients();
  }

  formatAddresses(recipients) {
    return recipients.map(({ email}) => {
      return new helper.Email(email);
    });
  }

  addClickTracking() {
    const trackingSettings = new helper.TrackingSettings();
    const clickTracking = new helper.ClickTracking(true, true);

    trackingSettings.addClickTracking(clickTracking);
    this.addTrackingSettings(trackingSettings);
  }

  addRecipients() {
    const personalize = new helper.Personalization();
    this.recipients.forEach(recipient => personalize.addTo(recipient));
    this.addPersonalization(personalize);
  }

  async send() {
    const request = this.sgAPI.emptyRequest({
      method: 'POST',
      path: '/v3/mail/send',
      body: this.toJSON(),
    });
    const response = this.sgAPI.API(request);
    return response;
  }
}

module.exports = Mailer;