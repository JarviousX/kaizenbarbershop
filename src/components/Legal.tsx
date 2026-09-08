import { fullAddress, site, telHref } from '../data/site'

type LegalPage = 'privacy' | 'terms'

const effectiveDate = 'September 7, 2026'

function Intro({ title, lead }: { title: string; lead: string }) {
  return (
    <>
      <p className="eyebrow">Legal</p>
      <h1 id="legal-title" className="mt-5 max-w-[16ch] text-[clamp(2.6rem,6vw,4.6rem)]">
        {title}
      </h1>
      <p className="legal-meta mt-4">Effective date: {effectiveDate}</p>
      <p className="mt-6">{lead}</p>
    </>
  )
}

function ContactBlock() {
  return (
    <p>
      Kaizen Barbershop
      <br />
      {fullAddress}
      <br />
      <a href={telHref}>{site.phone}</a>
      {site.email ? (
        <>
          <br />
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </>
      ) : null}
    </p>
  )
}

function Privacy() {
  return (
    <>
      <Intro
        title="Privacy Policy"
        lead={`This Privacy Policy describes how ${site.name} (“we,” “us,” or “the shop”) collects, uses, and shares information when you visit our website, book an appointment, visit the shop, or buy products.`}
      />

      <h2>Who we are</h2>
      <p>
        {site.name} is a barbershop located at {fullAddress}. This website is a public information
        and booking site. Appointments are booked through Squire. Retail products are sold through our
        Shopify store.
      </p>

      <h2>Information we collect</h2>
      <p>We may collect:</p>
      <ul>
        <li>Contact details you give us, such as name, phone number, and email address.</li>
        <li>Appointment details, including the service, barber, date, and time you request.</li>
        <li>Information you send by phone, Instagram, or in person at the shop.</li>
        <li>
          Limited technical data when you use this website, such as browser type, device type, and
          general location derived from IP address, if collected by our hosting provider.
        </li>
        <li>
          Order, payment, and shipping information when you buy products through our Shopify store.
        </li>
      </ul>
      <p>
        We do not require an account to use this website. We do not knowingly collect sensitive
        health information through this site.
      </p>

      <h2>How we use information</h2>
      <p>We use information to:</p>
      <ul>
        <li>Schedule, confirm, change, or cancel appointments.</li>
        <li>Provide services in the shop and communicate about your visit.</li>
        <li>Fulfill product orders and handle returns or customer questions.</li>
        <li>Respond to messages and reviews.</li>
        <li>Improve the website, shop operations, and customer experience.</li>
        <li>Comply with law, prevent fraud, and protect the shop, staff, and guests.</li>
      </ul>

      <h2>Booking through Squire</h2>
      <p>
        Online booking is provided by Squire. When you book at{' '}
        <a href={site.bookingUrl} target="_blank" rel="noopener noreferrer">
          getsquire.com
        </a>
        , Squire collects and processes the information needed to complete your appointment. That
        processing is also subject to Squire’s own privacy policy and terms. We receive booking
        details needed to serve you at the chair.
      </p>

      <h2>Product purchases through Shopify</h2>
      <p>
        Product sales are handled at{' '}
        <a href={site.shopUrl} target="_blank" rel="noopener noreferrer">
          our Shopify store
        </a>
        . Shopify and its payment partners collect checkout, payment, and (if applicable) shipping
        information. Those purchases are also subject to Shopify’s policies and any policies posted
        on the store. We may receive order details so we can fulfill or support the purchase.
      </p>

      <h2>How we share information</h2>
      <p>We may share information with:</p>
      <ul>
        <li>Service providers that help us operate, including Squire, Shopify, and website hosting.</li>
        <li>Payment processors, only as needed to complete a transaction.</li>
        <li>Professional advisors, such as accountants or lawyers, when reasonably necessary.</li>
        <li>Authorities if required by law, court order, or to protect rights and safety.</li>
      </ul>
      <p>We do not sell your personal information.</p>

      <h2>Cookies and analytics</h2>
      <p>
        This marketing website is designed to work without a login. Our hosting provider and any
        embedded tools (for example Google Maps on the location page, or Squire and Shopify when you
        leave this site) may set cookies or collect usage data according to their own policies. You
        can control cookies through your browser settings.
      </p>

      <h2>Your choices</h2>
      <p>
        You may ask us to update or delete contact information we hold about you, subject to records
        we must keep for legal, booking, or accounting reasons. You can also contact Squire or
        Shopify for information those companies hold from your booking or purchase.
      </p>
      <p>
        Residents of certain U.S. states may have additional privacy rights under applicable law,
        including the right to request access to or deletion of personal information, or to appeal a
        denied request. To make a request, contact us using the details below. We will not
        discriminate against you for exercising privacy rights.
      </p>

      <h2>Children</h2>
      <p>
        We welcome families in the shop, including kids’ haircuts. This website is not directed at
        children under 13, and we do not knowingly collect personal information from children under 13
        through the site. A parent or guardian should book and communicate on a child’s behalf.
      </p>

      <h2>Data security and retention</h2>
      <p>
        We take reasonable steps to protect information, but no website or transmission is
        completely secure. We keep information only as long as needed for the purposes above, including
        appointment history, legal compliance, and resolving disputes.
      </p>

      <h2>Changes</h2>
      <p>
        We may update this Privacy Policy from time to time. The effective date above will change
        when we do. Continued use of the website or shop services after an update means you accept
        the revised policy.
      </p>

      <h2>Contact</h2>
      <p>For privacy questions or requests, contact:</p>
      <ContactBlock />
    </>
  )
}

function Terms() {
  return (
    <>
      <Intro
        title="Terms of Service"
        lead={`These Terms of Service govern your use of the ${site.name} website and your purchases of services and products from us. By using this site, booking a visit, or buying products, you agree to these terms.`}
      />

      <h2>The shop</h2>
      <p>
        {site.name} is located at {fullAddress}. We provide barbering services in Fort Smith,
        Arkansas, and sell related products through our online store. This website is for information,
        booking, and product links. It is not a medical, dermatology, or licensed healthcare
        service.
      </p>

      <h2>Appointments</h2>
      <p>
        Appointments are booked through Squire at{' '}
        <a href={site.bookingUrl} target="_blank" rel="noopener noreferrer">
          {site.bookingUrl}
        </a>
        . Squire’s terms also apply to booking, payments, reminders, and cancellations processed on
        that platform. Please arrive on time. If you are late, we may need to shorten the service or
        rebook so later guests are not delayed.
      </p>
      <p>
        Walk-ins are welcome when a chair is open. A walk-in is not a guaranteed appointment. Service
        availability, barber assignment, and duration may vary.
      </p>

      <h2>Services and pricing</h2>
      <p>
        Menu prices and durations on this website are provided for convenience and may change.
        The price confirmed at booking or in the shop controls. We may refuse service if we cannot
        safely or professionally complete the requested work, including for late arrival, conduct
        that disrupts the shop, or a request outside our skill or sanitation standards.
      </p>
      <p>
        Results vary. Hair, skin, growth patterns, and aftercare all affect how a cut or beard
        service looks and how long it lasts. We do not guarantee a specific celebrity look or that a
        style will last a set number of days.
      </p>

      <h2>Cancellations and no-shows</h2>
      <p>
        Please cancel or reschedule as early as you can through Squire or by calling the shop.
        Repeated no-shows or late cancellations may result in limits on future bookings. Any deposit,
        card-on-file, or cancellation fee shown in Squire at the time you book is part of your
        booking contract.
      </p>

      <h2>Shop conduct and safety</h2>
      <p>
        Guests are expected to treat staff and other guests with respect. We may ask anyone to leave
        who is abusive, intoxicated, or unwilling to follow shop rules, including sanitation and
        parent-supervision expectations for children.
      </p>

      <h2>Products</h2>
      <p>
        Products sold at{' '}
        <a href={site.shopUrl} target="_blank" rel="noopener noreferrer">
          kaizen-barber-products.myshopify.com
        </a>{' '}
        are processed by Shopify. Product descriptions, shipping, returns, taxes, and payment terms
        posted on that store apply to those orders. Title and risk of loss for shipped goods pass
        according to the store’s shipping terms. If a product is also sold in the shop, in-store
        sales are final except where Arkansas law requires otherwise.
      </p>
      <p>
        Product pages, photos, and ingredient lists are for general information. Follow the label.
        Stop use and seek appropriate care if you have a reaction. We are not responsible for
        third-party product claims beyond what the law requires.
      </p>

      <h2>Website use</h2>
      <p>
        You may use this website for lawful personal purposes: learning about the shop, booking,
        contacting us, and visiting our shop or store. You may not scrape, copy the site for a
        competing business, introduce malware, or attempt to access non-public systems. All
        trademarks, photos, video, and copy on this site are owned by us or used with permission.
        “Designed by TooDep” identifies the site designer and does not transfer ownership of shop
        content.
      </p>
      <p>
        This site may link to Instagram, Google, Squire, Shopify, and other third-party sites. Those
        sites are not under our control, and their terms and privacy practices apply when you leave
        this site.
      </p>

      <h2>Disclaimer of warranties</h2>
      <p>
        The website is provided “as is.” To the fullest extent permitted by law, we disclaim implied
        warranties of merchantability, fitness for a particular purpose, and non-infringement. We
        do not warrant that the site will be uninterrupted, error-free, or free of harmful
        components.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, {site.name} and its owners, barbers, and staff are
        not liable for indirect, incidental, special, consequential, or punitive damages, or for
        lost profits, arising from your use of the website, a booking platform, product purchase, or
        shop visit. Our total liability for any claim relating to the website or an online product
        order will not exceed the amount you paid us for the service or product giving rise to the
        claim, except where Arkansas law does not allow that limit. This does not limit liability
        that cannot be waived, including for our own willful or grossly negligent acts where the law
        requires.
      </p>

      <h2>Indemnity</h2>
      <p>
        You agree to indemnify and hold {site.name} harmless from claims, damages, and reasonable
        legal fees arising from your misuse of the website, your violation of these terms, or your
        violation of any third-party right, except to the extent caused by our own misconduct.
      </p>

      <h2>Governing law</h2>
      <p>
        These terms are governed by the laws of the State of Arkansas, without regard to conflict of
        law rules. Except where prohibited, you agree that disputes will be resolved in the state or
        federal courts located in Sebastian County, Arkansas.
      </p>

      <h2>Changes</h2>
      <p>
        We may update these terms from time to time. The effective date above will change when we do.
        If you do not agree, please stop using the website and booking through our links.
      </p>

      <h2>Contact</h2>
      <p>Questions about these terms:</p>
      <ContactBlock />
    </>
  )
}

export function Legal({ page }: { page: LegalPage }) {
  return (
    <article id={page} className="legal section" aria-labelledby="legal-title">
      <div className="container legal-copy">
        {page === 'privacy' ? <Privacy /> : <Terms />}
      </div>
    </article>
  )
}

export function isLegalHash(hash: string): hash is `#${LegalPage}` {
  return hash === '#privacy' || hash === '#terms'
}
