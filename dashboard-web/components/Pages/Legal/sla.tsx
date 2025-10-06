// @ts-nocheck
import React from "react";
import Head from "next/head";
import clsx from "clsx";

export default function Page(props) {
  return (
    <>
      <Head>
        <title>Service Level Agreement | Atrium</title>
      </Head>
      <div className="min-h-screen">
        <main className="mt-8 mb-20">
          <div className="">
            <div className="sm:py-18 space-y-6 container relative mx-auto px-6 py-16 md:py-24 lg:px-16 lg:py-24 xl:px-20">
              <h1
                className={clsx("text-4xl font-bold pt-6")}
                id="service-level-agreement"
              >
                Service Level Agreement
              </h1>
              <p>
                The following Service Level Agreement, which is incorporated
                into and forms part of the Subscription Agreement between
                Atrium, Inc. ("Atrium") and Customer (the "Agreement"), will
                apply to the Services for Enterprise Customers specified in an
                Order Form during the applicable Subscription Term:
              </p>
              <h2 className={clsx("text-lg font-bold pt-6")} id="platform">
                Platform
              </h2>
              <h3
                className={clsx("font-semibold pt-2")}
                id="1-uptime-commitment"
              >
                1. Uptime Commitment
              </h3>
              <p>
                Atrium will provide Actual Availability for at least ninety-nine
                and nine tenths percent (99.9%) of the total time in each
                calendar month during the Subscription Term, as measured by
                Atrium (the <strong>"Uptime Commitment"</strong>).
              </p>
              <h3 className={clsx("font-semibold pt-2")} id="2-service-credits">
                2. Service Credits
              </h3>
              <p>
                If the Uptime Commitment is not met during any particular
                calendar month during the Subscription Term, then Customer will
                be eligible for a service credit ("Service Credit"), provided
                that Customer reports to Atrium such failure to meet the Uptime
                Commitment and requests such Service Credit in accordance with
                this Exhibit. The amount of any Service Credit due hereunder
                shall be calculated as follows: X * Y, where X = the total fees
                due from Customer to Atrium for the affected Services for the
                relevant calendar month (regardless of when billed or payable),
                and Y = the Credit Percentage corresponding with the Actual
                Availability provided (as a percentage of total time) for the
                relevant calendar month, as set forth in the table below.
              </p>
              <table className={"w-full"}>
                <thead className={"text-left"}>
                  <tr>
                    <th scope="col" class="px-6 py-3">
                      Actual Availability
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Credit Percentage
                    </th>
                  </tr>
                </thead>
                <tbody className={"space-y-2"}>
                  <tr>
                    <td class="px-6 py-4">
                      Less than 99.9% but greater than or equal to 99.0%
                    </td>
                    <td class="px-6 py-4">10%</td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4">
                      Less than 99.0% but greater than or equal to 98.0%
                    </td>
                    <td class="px-6 py-4">15%</td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4">
                      Less than 98.0% but greater than or equal to 96.0%
                    </td>
                    <td class="px-6 py-4">20%</td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4">Less than 96.0%</td>
                    <td class="px-6 py-4">30%</td>
                  </tr>
                </tbody>
              </table>
              <h3
                className={clsx("font-semibold pt-2")}
                id="3-credit-requests-and-payment"
              >
                3. Credit Requests and Payment
              </h3>
              <p>
                To request a Service Credit, Customer must send an email to
                Atrium at{" "}
                <a href="mailto:support@atrium.st">support@atrium.st</a> within
                thirty (30) days of the end of the month in which the Uptime
                Commitment was not met. Customer must include either its account
                ID or registered email address, and the previously reported
                dates and times that there was no Service Availability. If
                Atrium confirms that Customer is eligible for a Service Credit,
                Atrium will issue a credit to Customer’s account within thirty
                (30) days. Service Credits are not refunds, cannot be exchanged
                into a cash amount, and may only be used against future billing
                charges. Except as set forth in Section 4 below, the Service
                Credits shall be Customer’s sole and exclusive remedy, and
                Atrium’s sole and exclusive liability, for any failure by Atrium
                to meet the Uptime Commitment.
              </p>
              <h3 className={clsx("font-semibold pt-2")} id="4-definitions">
                4. Definitions
              </h3>
              <p>
                All capitalized words used but not defined in this Service Level
                Agreement have the meaning set forth in the Agreement.
              </p>
              <h4
                className={clsx("text-sm font-semibold pt-2")}
                id="41-scheduled-availability"
              >
                4.1 Scheduled Availability
              </h4>
              <p>
                "Scheduled Availability" means the time, in minutes, that the
                applicable Services are generally accessible and available to
                Customer’s Permitted Users.
              </p>
              <h4
                className={clsx("text-sm font-semibold pt-2")}
                id="42-unscheduled-downtime"
              >
                4.2 Unscheduled Downtime
              </h4>
              <p>
                "Unscheduled Downtime" means the time, in minutes, that the
                applicable Services are not generally accessible and available
                to Customer’s Permitted Users, excluding inaccessibility or
                unavailability due to Customer’s or Permitted Users’ acts or
                omissions, force majeure events, scheduled maintenance disclosed
                with at least 24 hours’ notice by email, hacking or virus
                attacks, or reasonable emergency maintenance.
              </p>
              <h4
                className={clsx("text-sm font-semibold pt-2")}
                id="43-actual-availability"
              >
                4.3 Actual Availability
              </h4>
              <p>
                "Actual Availability" means Scheduled Availability less
                Unscheduled Downtime.
              </p>
              <h2 className={clsx("text-lg font-bold pt-6")} id="support">
                Support
              </h2>
              <p>Atrium Support Service Level Agreements.</p>
              <h3 className={clsx("font-semibold pt-2")} id="1-urgent">
                1. Urgent
              </h3>
              <p>
                <strong>Critical Issue</strong>
              </p>
              <p>
                Defect resulting in full or partial system outage or a condition
                that makes Atrium unusable or unavailable in production for all
                of Customer’s Users.
              </p>
              <h3 className={clsx("font-semibold pt-2")} id="2-high">
                2. High
              </h3>
              <p>
                <strong>Significant Business Disruption</strong>
              </p>
              <p>
                Issue resulting in a situation meaning major functionality is
                impacted and significant performance degradation is experienced.
                Issue impacts significant proportion of user base and / or major
                Atrium functionality.
              </p>
              <h3 className={clsx("font-semibold pt-2")} id="3-normal">
                3. Normal
              </h3>
              <p>
                <strong>
                  Minor Feature or Functional Issue / General Question
                </strong>
              </p>
              <p>
                Issue results in a component of Atrium not performing as
                expected or documented. An inquiry by a Customer representative
                regarding a general technical issue or general question.
              </p>
              <h3 className={clsx("font-semibold pt-2")} id="4-low">
                4. Low
              </h3>
              <p>
                <strong>Minor Issue / Feature Request</strong>
              </p>
              <p>An Information request about Atrium or feature request.</p>
              <h2
                className={clsx("text-lg font-bold pt-6")}
                id="target-response-times"
              >
                Target response times
              </h2>
              <table className={"w-full table-auto"}>
                <thead className={"text-left"}>
                  <tr>
                    <th scope="col" class="px-6 py-3">
                      Severity Level
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Standard
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Priority
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Priority Plus
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="px-6 py-4">1. Urgent</td>
                    <td class="px-6 py-4">
                      1 hour
                      <br />
                      24/7 × 365
                    </td>
                    <td class="px-6 py-4">
                      1 hour
                      <br />
                      24/7 × 365
                    </td>
                    <td class="px-6 py-4">
                      1 hour
                      <br />
                      24/7 × 365
                    </td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4">2. High</td>
                    <td class="px-6 py-4">
                      4 business hours
                      <br />
                      Monday - Friday
                    </td>
                    <td class="px-6 py-4">
                      2 business hours
                      <br />
                      Monday - Friday
                    </td>
                    <td class="px-6 py-4">
                      2 hours
                      <br />
                      24/7 × 365
                    </td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4">3. Normal</td>
                    <td class="px-6 py-4">
                      1 business day
                      <br />
                      Monday - Friday
                    </td>
                    <td class="px-6 py-4">
                      1 business day
                      <br />
                      Monday - Friday
                    </td>
                    <td class="px-6 py-4">
                      12 business hours
                      <br />
                      Monday - Friday
                    </td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4">4. Low</td>
                    <td class="px-6 py-4">
                      2 business days
                      <br />
                      Monday - Friday
                    </td>
                    <td class="px-6 py-4">
                      2 business days
                      <br />
                      Monday - Friday
                    </td>
                    <td class="px-6 py-4">
                      1 business day
                      <br />
                      Monday - Friday
                    </td>
                  </tr>
                </tbody>
              </table>
              <p>
                Business hours are from 6am to 6pm (local time), except where
                otherwise stated.
              </p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
