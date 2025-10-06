// @ts-nocheck
import React from "react";
import Head from "next/head";
import clsx from "clsx";
import Link from "next/link";

export default function Page(props) {
  return (
    <>
      <Head>
        <title>Support Policy | Atrium</title>
      </Head>
      <div className="min-h-screen">
        <main className="mt-8 mb-20">
          <div className="">
            <div className="sm:py-18 space-y-6 container relative mx-auto px-6 py-16 md:py-24 lg:px-16 lg:py-24 xl:px-20">
              <h1
                className={clsx("text-4xl font-bold pt-6")}
                id="support-policy"
              >
                Support Policy
              </h1>
              <p>
                Atrium is dedicated to providing an exceptional customer
                experience. As a crucial aspect of this commitment, we offer
                limited technical support for all paid projects running on our
                hosted Atrium platform. Technical support is confined to the
                scope, hours, contacts, and channels below.
              </p>
              <h2 className={clsx("text-lg font-bold pt-6")} id="scope">
                Scope
              </h2>
              <p>
                Atrium's support offering is available only for the technologies
                supported by the Atrium Platform and is restricted to the
                following:
              </p>
              <p>
                <strong>Configuration Issues</strong>
              </p>
              <ul class="list-disc pl-6 space-y-2">
                <li>Installation of agents</li>
                <li>Best practices for AI Agent and tools configuration</li>
                <li>General questions about the Atrium stack</li>
              </ul>
              <p>
                <strong>Troubleshooting</strong>
              </p>
              <ul class="list-disc pl-6 space-y-2">
                <li>Providing workarounds or resolutions for known problems</li>
                <li>
                  Answering general how-to questions and providing pointers to
                  documentation
                </li>
                <li>
                  Troubleshooting Atrium-provided AI Agents and Tools (Browser,
                  Google Search, LinkedIn Search, e.t.c.) exhibiting erratic or
                  faulty behavior on Atrium, independent of the user's
                  application code
                </li>
              </ul>
              <p>
                <strong>Not Covered</strong>
              </p>
              <p>
                Atrium technical support services do not extend to the following
                areas:
              </p>
              <ul class="list-disc pl-6 space-y-2">
                <li>General debugging of community-provided agents</li>
                <li>
                  Rewriting application code for compatibility with Atrium
                </li>
                <li>
                  Modifying and/or patching third-party or Open Source software
                  packages for compatibility with Atrium
                </li>
              </ul>
              <h2
                className={clsx("text-lg font-bold pt-6")}
                id="who-can-contact-support"
              >
                Who can contact support?
              </h2>
              <p>
                Billing and account management support is available to all
                customers.
              </p>
              <p>
                Limited technical support is accessible for Atrium customers
                utilizing paid Atrium resources and/or paid Atrium Add-Ons.
                Support requests will only be processed if:
              </p>
              <ul class="list-disc pl-6 space-y-2">
                <li>
                  The request is made through one of our official support
                  channels (see below)
                </li>
                <li>
                  The request originates from a registered Atrium account email
                  address
                </li>
                <li>
                  The requester has Developer or higher access to any specific
                  Atrium projects pertaining to the request.
                </li>
              </ul>
              <h2
                className={clsx("text-lg font-bold pt-6")}
                id="official-support-channels"
              >
                Official Support Channels
              </h2>
              <ul class="list-disc pl-6 space-y-2">
                <li>
                  Web and Studio: Support is available exclusively through the
                  Atrium help feature in the studio or this website -
                  <a href="https://atrium.st/studio/support/new">
                    https://atrium.st/studio/support/new
                  </a>
                </li>
                <li>
                  Email: If for some reason you are unable to access the studio
                  or ticket from you can contact support by emailing{" "}
                  <a href="mailto:support@atrium.st">support@atrium.st</a> from
                  a registered Atrium account email address
                </li>
              </ul>
              <h2
                className={clsx("text-lg font-bold pt-6")}
                id="community-support"
              >
                Community Support
              </h2>
              <p>
                Atrium support staff will only address support requests received
                through the official channels mentioned earlier. However,
                community channels may exist for peer-to-peer support and
                discussions. This is support provided by volunteers that
                contribute to the Atrium community.
              </p>
              <p>
                For questions related to debugging code, we recommend reaching
                out on{" "}
                <strong>
                  <a href="https://github.com/Atriumai/Atrium/discussions">
                    GitHub Discussions
                  </a>
                </strong>{" "}
                or on{" "}
                <strong>
                  <a href="https://discord.atrium.st/">Discord</a>
                </strong>
                . The community is made up of experienced developers who may be
                able to provide guidance and support with code-related issues.
              </p>
              <p>
                To get the most helpful response from the community, providing
                precise and detailed information about your problem and any
                error messages you may be encountering is important. Be sure to{" "}
                <strong>
                  include any relevant code snippets explaining how to reproduce
                </strong>{" "}
                the issue in your message.
              </p>
              <p>
                Please note that Atrium team members may participate in
                community channels at their discretion, but there is no
                guarantee of response for support issues unless they are
                submitted through one of the official channels above.
              </p>
              <h2
                className={clsx("text-lg font-bold pt-6")}
                id="service-level-agreement"
              >
                Service Level Agreement
              </h2>
              <p>
                Service Level Agreements are only available to Enterprise
                customers. You can details of our SLA including support response
                times on the dedicated page for this topic -
                <Link href="/sla"> https://atrium.st/sla</Link>
              </p>
              <h2
                className={clsx("text-lg font-bold pt-6")}
                id="proactive-monitoring"
              >
                Proactive Monitoring
              </h2>
              <p>
                In the event of a platform issue, a notice will be posted on our
                platform status site at{" "}
                <a href="https://status.atrium.st/">status.atrium.st</a> to
                promptly communicate the impact and status of any such issue.
                You do not need to submit a support ticket if there's an ongoing
                platform issue. Instead, monitor the status page which will
                always be kept up-to-date with the latest progress and
                information.
              </p>
              <h2
                className={clsx("text-lg font-bold pt-6")}
                id="premium-support"
              >
                Premium Support
              </h2>
              <p>
                Please contact us to find out about our Premium Support options
                available for Teams Plan and Enterprise customers using the form
                below:
              </p>
              <p>
                <a href="https://forms.atrium.st/enterprise">
                  https://forms.atrium.st/enterprise
                </a>
              </p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
