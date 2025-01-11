import React from "react";

function ShippingPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-5xl mb-4">Shipping Policy</h1>

      <section>
        <h2 className="text-2xl font-semibold mt-4">DELIVERY TERMS</h2>
        <p>
          We ship your orders on the same day so they reach our beloved
          customers on time. You will receive order tracking details shortly
          once the order is placed, both on your email and through WhatsApp.
        </p>
        <h3 className="text-xl font-semibold mt-4">
          Delivery Time For Domestic Orders:
        </h3>
        <p>
          In general, domestic shipments are delivered within 3-7 days. Delivery
          might take more or less time in rare cases depending on the
          accessibility of the location, time of the year, and any external
          uncontrollable factors impacting the region.
        </p>

        <h3 className="text-xl font-semibold mt-4">
          Delivery Time For International Orders:
        </h3>
        <p>
          Orders shipped overseas generally take 7-12 days depending on the
          accessibility of the country and your location within the country.
        </p>

        <h3 className="text-xl font-semibold mt-4">
          Change of Delivery Address / Contact Details:
        </h3>
        <p>
          If you need to change the delivery address or contact details of the
          recipient, please share the relevant details via WhatsApp at{" "}
          <a href="tel:+918890319137" className="text-blue-600">
            8890319137
          </a>
          . We will coordinate with our logistics partners to update the
          details.
        </p>

        <h3 className="text-xl font-semibold mt-4">
          Expedited / Urgent Delivery Request:
        </h3>
        <p>
          If you need expedited or urgent delivery, please reach out to{" "}
          <a href="tel:+918890319137" className="text-blue-600">
            8890319137
          </a>
          . We will do our best to ensure the delivery is made within your
          preferred time frame. This service is applicable for any urgent
          requests, special occasions, or life events.
        </p>

        <h3 className="text-xl font-semibold mt-4">Delivery Time Exceeded:</h3>
        <p>
          We are committed to delivering your orders on time and will try our
          best to ship the orders as promised. However, we use third-party
          delivery partners, and we are not responsible for delays post handover
          of the product. In the event of service interruptions caused by
          factors beyond our control, we cannot guarantee on-time shipment.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mt-4">SHIPPING COSTS</h2>
        <h3 className="text-xl font-semibold mt-4">Domestic Orders:</h3>
        <p>We offer FREE SHIPPING for all orders within India.</p>

        <h3 className="text-xl font-semibold mt-4">International Orders:</h3>
        <p>
          Shipping costs for international orders are based on the location and
          are calculated at the time of checkout. Payment for shipping costs
          will be collected at the checkout while making the purchase.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mt-4">CANCELLATIONS</h2>
        <p>
          If you change your mind after placing an order, we will not be able to
          cancel the order. However, please reach out to us via email, and we
          will try our best to accommodate your request.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mt-4">STOCK AVAILABILITY</h2>
        <p>
          We try to maintain accurate stock counts on our website, but
          occasionally there may be a stock discrepancy, and we will not be able
          to fulfill all your items at the time of purchase. In such instances,
          we will contact you to ask for your preference and will be happy to
          support you with whatever decision you make regarding your order.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mt-4">DUTIES & TAXES</h2>
        <h3 className="text-xl font-semibold mt-4">
          Goods and Service Tax (GST):
        </h3>
        <p>
          GST is collected on all domestic orders and is already included in the
          prices displayed for all products.
        </p>

        <h3 className="text-xl font-semibold mt-4">Import Duties & Taxes:</h3>
        <p>
          Occasionally, import duties and taxes for international shipments may
          be due upon arrival in the destination country. These charges vary by
          country, and we encourage you to be aware of any potential costs
          before placing an order with us. If you refuse to pay duties and taxes
          upon arrival in your destination country, we will not be responsible
          for non-delivery of the order and will not be able to offer support.
        </p>
      </section>
    </div>
  );
}

export default ShippingPolicy;
