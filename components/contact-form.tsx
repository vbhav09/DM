"use client";

import type { FormEvent } from 'react';

export function ContactForm() {
  function sendEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = [
      'Hello Durga Motors, I would like to make an enquiry.',
      '',
      `Name: ${data.get('name')}`,
      `Phone: ${data.get('phone')}`,
      `Interested in: ${data.get('interest')}`,
      `Preferred branch: ${data.get('branch')}`,
      `Message: ${data.get('message') || 'No additional message'}`,
    ].join('\n');

    window.open(`https://wa.me/919669659070?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  }

  return (
    <section className="enquiry-section" aria-labelledby="enquiry-title">
      <div className="enquiry-intro">
        <p className="eyebrow">SEND AN ENQUIRY</p>
        <h2 id="enquiry-title">How can we help?</h2>
        <p>Share your requirement and send it directly to the Durga Motors team on WhatsApp.</p>
        <span>We usually respond during showroom working hours.</span>
      </div>
      <form className="enquiry-form" onSubmit={sendEnquiry}>
        <label><span>Your name *</span><input name="name" type="text" autoComplete="name" placeholder="Enter your full name" required /></label>
        <label><span>Phone number *</span><input name="phone" type="tel" autoComplete="tel" inputMode="tel" pattern="[0-9 +()-]{10,}" placeholder="Enter your mobile number" required /></label>
        <label><span>Vehicle or service *</span><select name="interest" defaultValue="" required><option value="" disabled>Select an option</option><option>Electric Auto</option><option>Electric Loader</option><option>Diesel Auto</option><option>Diesel Loader</option><option>Vehicle Service</option><option>Genuine Spares</option><option>Finance Enquiry</option></select></label>
        <label><span>Preferred branch *</span><select name="branch" defaultValue="Mandla Showroom" required><option>Mandla Showroom</option><option>Nainpur Branch</option></select></label>
        <label className="form-message"><span>Your message</span><textarea name="message" rows={4} placeholder="Tell us what you are looking for" /></label>
        <button type="submit">Send enquiry on WhatsApp <span>→</span></button>
        <small>By submitting, WhatsApp will open with your enquiry ready to send.</small>
      </form>
    </section>
  );
}
