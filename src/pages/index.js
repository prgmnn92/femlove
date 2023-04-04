/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";

import { configQuery, postqueryHome } from "@lib/groq";
import { sanityClient } from "@lib/sanity";
import { motion } from "framer-motion";
import Image from "next/image";

import AboutMe from "@/components/AboutMe";
import BlogPreview from "@/components/BlogPreview";
import Button from "@/components/Button";
import Container from "@/components/Container";
import CTA from "@/components/CTA";
import Input from "@/components/Input";
import Layout from "@/components/Layout";
import ThankYou from "@/components/ThankYou";

export default function Home({ posts, siteConfig }) {
  const [email, setEmail] = useState("");
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);
  const newsletterHandler = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = () => {
    handleCreateNewsletter(email);
    setEmail("");
  };

  const handleCreateNewsletter = async (email) => {
    try {
      const response = await fetch("/api/createNewsletterEntry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      });
      setNewsletterSubmitted(true);
      const newsletterEntry = await response.json();
      console.log(newsletterEntry);
    } catch (error) {
      console.log("Error creating appointment", error);
    }
  };
  return (
    <>
      <Layout {...siteConfig}>
        <Container className="grid px-4 py-8 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.15 }}
            delay={0.1}
            className="mr-auto place-self-center lg:col-span-7"
          >
            <h1 className="max-w-md mb-4 text-4xl leading-none tracking-tight md:text-5xl xl:text-6xl ">
              Ganzheitliche Gesundheit für Frauen.
            </h1>
            <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl ">
              Femlove ist ein Blog, bei dem sich alles rund um ganzheitliche
              Gesundheit und den weiblichen Zyklus dreht. 🫶
              <br />
              <br />
              Hol dir Femlove direkt in dein Postfach. 🚀
            </p>
            <div className="flex flex-col items-stretch w-full space-y-4 sm:items-end lg:w-2/3 sm:flex-row sm:space-x-4 sm:space-y-0 sm:px-0">
              {/* {newsletterSubmitted ? (
                <ThankYou isNewsletter={true} />
              ) : (
                <>
                  <div className="relative flex-grow w-full">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-7 text-gray-600"
                    >
                      Email
                    </label>
                    <Input
                      className={"lg:min-w-[240px]"}
                      type="email"
                      id="email"
                      name="email"
                      value={email}
                      onChange={newsletterHandler}
                    />
                  </div>
                  <Button
                    type="submit"
                    className="px-8 py-2 text-lg text-white border-0 rounded bg-f-main focus:outline-none"
                    onClick={handleSubmit}
                  >
                    Abonnieren
                  </Button>
                </>
              )} */}
              <div
                className="relative w-full"
                dangerouslySetInnerHTML={{
                  __html: `
                  <script src="https://f.convertkit.com/ckjs/ck.5.js"></script>
      <form action="https://app.convertkit.com/forms/5015114/subscriptions" class="seva-form formkit-form" method="post" data-sv-form="5015114" data-uid="935bcf6b0c" data-format="inline" data-version="5" data-options="{&quot;settings&quot;:{&quot;after_subscribe&quot;:{&quot;action&quot;:&quot;message&quot;,&quot;success_message&quot;:&quot;Daaanke! In Kürze findest du meine Welcome-Mail in deinem Postfach. Bitte bestätige darüber deine Anmeldung. &quot;,&quot;redirect_url&quot;:&quot;&quot;},&quot;analytics&quot;:{&quot;google&quot;:null,&quot;fathom&quot;:null,&quot;facebook&quot;:null,&quot;segment&quot;:null,&quot;pinterest&quot;:null,&quot;sparkloop&quot;:null,&quot;googletagmanager&quot;:null},&quot;modal&quot;:{&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15},&quot;powered_by&quot;:{&quot;show&quot;:false,&quot;url&quot;:&quot;https://convertkit.com/features/forms?utm_campaign=poweredby&amp;utm_content=form&amp;utm_medium=referral&amp;utm_source=dynamic&quot;},&quot;recaptcha&quot;:{&quot;enabled&quot;:false},&quot;return_visitor&quot;:{&quot;action&quot;:&quot;hide&quot;,&quot;custom_content&quot;:&quot;&quot;},&quot;slide_in&quot;:{&quot;display_in&quot;:&quot;bottom_right&quot;,&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15},&quot;sticky_bar&quot;:{&quot;display_in&quot;:&quot;top&quot;,&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15}},&quot;version&quot;:&quot;5&quot;}" min-width="400 500 600 700 800"><div data-style="clean"><ul class="formkit-alert formkit-alert-error" data-element="errors" data-group="alert"></ul><div data-element="fields" data-stacked="false" class="seva-fields formkit-fields"><div class="formkit-field"><input class="formkit-input" name="email_address" aria-label="Deine E-Mail Adresse" placeholder="Deine E-Mail Adresse" required="" type="email" style="color: rgb(0, 0, 0); border-color: rgb(227, 227, 227); border-radius: 4px; font-weight: 400;"></div><button data-element="submit" class="formkit-submit formkit-submit" style="color: rgb(255, 255, 255); background-color: rgb(232, 153, 141); border-radius: 4px; font-weight: 400;"><div class="formkit-spinner"><div></div><div></div><div></div></div><span class="">Abonnieren</span></button></div></div><style>.formkit-form[data-uid="935bcf6b0c"] *{box-sizing:border-box;}.formkit-form[data-uid="935bcf6b0c"]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}.formkit-form[data-uid="935bcf6b0c"] legend{border:none;font-size:inherit;margin-bottom:10px;padding:0;position:relative;display:table;}.formkit-form[data-uid="935bcf6b0c"] fieldset{border:0;padding:0.01em 0 0 0;margin:0;min-width:0;}.formkit-form[data-uid="935bcf6b0c"] body:not(:-moz-handler-blocked) fieldset{display:table-cell;}.formkit-form[data-uid="935bcf6b0c"] h1,.formkit-form[data-uid="935bcf6b0c"] h2,.formkit-form[data-uid="935bcf6b0c"] h3,.formkit-form[data-uid="935bcf6b0c"] h4,.formkit-form[data-uid="935bcf6b0c"] h5,.formkit-form[data-uid="935bcf6b0c"] h6{color:inherit;font-size:inherit;font-weight:inherit;}.formkit-form[data-uid="935bcf6b0c"] h2{font-size:1.5em;margin:1em 0;}.formkit-form[data-uid="935bcf6b0c"] h3{font-size:1.17em;margin:1em 0;}.formkit-form[data-uid="935bcf6b0c"] p{color:inherit;font-size:inherit;font-weight:inherit;}.formkit-form[data-uid="935bcf6b0c"] ol:not([template-default]),.formkit-form[data-uid="935bcf6b0c"] ul:not([template-default]),.formkit-form[data-uid="935bcf6b0c"] blockquote:not([template-default]){text-align:left;}.formkit-form[data-uid="935bcf6b0c"] p:not([template-default]),.formkit-form[data-uid="935bcf6b0c"] hr:not([template-default]),.formkit-form[data-uid="935bcf6b0c"] blockquote:not([template-default]),.formkit-form[data-uid="935bcf6b0c"] ol:not([template-default]),.formkit-form[data-uid="935bcf6b0c"] ul:not([template-default]){color:inherit;font-style:initial;}.formkit-form[data-uid="935bcf6b0c"] .ordered-list,.formkit-form[data-uid="935bcf6b0c"] .unordered-list{list-style-position:outside !important;padding-left:1em;}.formkit-form[data-uid="935bcf6b0c"] .list-item{padding-left:0;}.formkit-form[data-uid="935bcf6b0c"][data-format="modal"]{display:none;}.formkit-form[data-uid="935bcf6b0c"][data-format="slide in"]{display:none;}.formkit-form[data-uid="935bcf6b0c"][data-format="sticky bar"]{display:none;}.formkit-sticky-bar .formkit-form[data-uid="935bcf6b0c"][data-format="sticky bar"]{display:block;}.formkit-form[data-uid="935bcf6b0c"] .formkit-input,.formkit-form[data-uid="935bcf6b0c"] .formkit-select,.formkit-form[data-uid="935bcf6b0c"] .formkit-checkboxes{width:100%;}.formkit-form[data-uid="935bcf6b0c"] .formkit-button,.formkit-form[data-uid="935bcf6b0c"] .formkit-submit{border:0;border-radius:5px;color:#ffffff;cursor:pointer;display:inline-block;text-align:center;font-size:15px;font-weight:500;cursor:pointer;margin-bottom:15px;overflow:hidden;padding:0;position:relative;vertical-align:middle;}.formkit-form[data-uid="935bcf6b0c"] .formkit-button:hover,.formkit-form[data-uid="935bcf6b0c"] .formkit-submit:hover,.formkit-form[data-uid="935bcf6b0c"] .formkit-button:focus,.formkit-form[data-uid="935bcf6b0c"] .formkit-submit:focus{outline:none;}.formkit-form[data-uid="935bcf6b0c"] .formkit-button:hover > span,.formkit-form[data-uid="935bcf6b0c"] .formkit-submit:hover > span,.formkit-form[data-uid="935bcf6b0c"] .formkit-button:focus > span,.formkit-form[data-uid="935bcf6b0c"] .formkit-submit:focus > span{background-color:rgba(0,0,0,0.1);}.formkit-form[data-uid="935bcf6b0c"] .formkit-button > span,.formkit-form[data-uid="935bcf6b0c"] .formkit-submit > span{display:block;-webkit-transition:all 300ms ease-in-out;transition:all 300ms ease-in-out;padding:12px 24px;}.formkit-form[data-uid="935bcf6b0c"] .formkit-input{background:#ffffff;font-size:15px;padding:12px;border:1px solid #e3e3e3;-webkit-flex:1 0 auto;-ms-flex:1 0 auto;flex:1 0 auto;line-height:1.4;margin:0;-webkit-transition:border-color ease-out 300ms;transition:border-color ease-out 300ms;}.formkit-form[data-uid="935bcf6b0c"] .formkit-input:focus{outline:none;border-color:#1677be;-webkit-transition:border-color ease 300ms;transition:border-color ease 300ms;}.formkit-form[data-uid="935bcf6b0c"] .formkit-input::-webkit-input-placeholder{color:inherit;opacity:0.8;}.formkit-form[data-uid="935bcf6b0c"] .formkit-input::-moz-placeholder{color:inherit;opacity:0.8;}.formkit-form[data-uid="935bcf6b0c"] .formkit-input:-ms-input-placeholder{color:inherit;opacity:0.8;}.formkit-form[data-uid="935bcf6b0c"] .formkit-input::placeholder{color:inherit;opacity:0.8;}.formkit-form[data-uid="935bcf6b0c"] [data-group="dropdown"]{position:relative;display:inline-block;width:100%;}.formkit-form[data-uid="935bcf6b0c"] [data-group="dropdown"]::before{content:"";top:calc(50% - 2.5px);right:10px;position:absolute;pointer-events:none;border-color:#4f4f4f transparent transparent transparent;border-style:solid;border-width:6px 6px 0 6px;height:0;width:0;z-index:999;}.formkit-form[data-uid="935bcf6b0c"] [data-group="dropdown"] select{height:auto;width:100%;cursor:pointer;color:#333333;line-height:1.4;margin-bottom:0;padding:0 6px;-webkit-appearance:none;-moz-appearance:none;appearance:none;font-size:15px;padding:12px;padding-right:25px;border:1px solid #e3e3e3;background:#ffffff;}.formkit-form[data-uid="935bcf6b0c"] [data-group="dropdown"] select:focus{outline:none;}.formkit-form[data-uid="935bcf6b0c"] [data-group="checkboxes"]{text-align:left;margin:0;}.formkit-form[data-uid="935bcf6b0c"] [data-group="checkboxes"] [data-group="checkbox"]{margin-bottom:10px;}.formkit-form[data-uid="935bcf6b0c"] [data-group="checkboxes"] [data-group="checkbox"] *{cursor:pointer;}.formkit-form[data-uid="935bcf6b0c"] [data-group="checkboxes"] [data-group="checkbox"]:last-of-type{margin-bottom:0;}.formkit-form[data-uid="935bcf6b0c"] [data-group="checkboxes"] [data-group="checkbox"] input[type="checkbox"]{display:none;}.formkit-form[data-uid="935bcf6b0c"] [data-group="checkboxes"] [data-group="checkbox"] input[type="checkbox"] + label::after{content:none;}.formkit-form[data-uid="935bcf6b0c"] [data-group="checkboxes"] [data-group="checkbox"] input[type="checkbox"]:checked + label::after{border-color:#ffffff;content:"";}.formkit-form[data-uid="935bcf6b0c"] [data-group="checkboxes"] [data-group="checkbox"] input[type="checkbox"]:checked + label::before{background:#10bf7a;border-color:#10bf7a;}.formkit-form[data-uid="935bcf6b0c"] [data-group="checkboxes"] [data-group="checkbox"] label{position:relative;display:inline-block;padding-left:28px;}.formkit-form[data-uid="935bcf6b0c"] [data-group="checkboxes"] [data-group="checkbox"] label::before,.formkit-form[data-uid="935bcf6b0c"] [data-group="checkboxes"] [data-group="checkbox"] label::after{position:absolute;content:"";display:inline-block;}.formkit-form[data-uid="935bcf6b0c"] [data-group="checkboxes"] [data-group="checkbox"] label::before{height:16px;width:16px;border:1px solid #e3e3e3;background:#ffffff;left:0px;top:3px;}.formkit-form[data-uid="935bcf6b0c"] [data-group="checkboxes"] [data-group="checkbox"] label::after{height:4px;width:8px;border-left:2px solid #4d4d4d;border-bottom:2px solid #4d4d4d;-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);left:4px;top:8px;}.formkit-form[data-uid="935bcf6b0c"] .formkit-alert{background:#f9fafb;border:1px solid #e3e3e3;border-radius:5px;-webkit-flex:1 0 auto;-ms-flex:1 0 auto;flex:1 0 auto;list-style:none;margin:25px auto;padding:12px;text-align:center;width:100%;}.formkit-form[data-uid="935bcf6b0c"] .formkit-alert:empty{display:none;}.formkit-form[data-uid="935bcf6b0c"] .formkit-alert-success{background:#d3fbeb;border-color:#10bf7a;color:#0c905c;}.formkit-form[data-uid="935bcf6b0c"] .formkit-alert-error{background:#fde8e2;border-color:#f2643b;color:#ea4110;}.formkit-form[data-uid="935bcf6b0c"] .formkit-spinner{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:0px;width:0px;margin:0 auto;position:absolute;top:0;left:0;right:0;width:0px;overflow:hidden;text-align:center;-webkit-transition:all 300ms ease-in-out;transition:all 300ms ease-in-out;}.formkit-form[data-uid="935bcf6b0c"] .formkit-spinner > div{margin:auto;width:12px;height:12px;background-color:#fff;opacity:0.3;border-radius:100%;display:inline-block;-webkit-animation:formkit-bouncedelay-formkit-form-data-uid-935bcf6b0c- 1.4s infinite ease-in-out both;animation:formkit-bouncedelay-formkit-form-data-uid-935bcf6b0c- 1.4s infinite ease-in-out both;}.formkit-form[data-uid="935bcf6b0c"] .formkit-spinner > div:nth-child(1){-webkit-animation-delay:-0.32s;animation-delay:-0.32s;}.formkit-form[data-uid="935bcf6b0c"] .formkit-spinner > div:nth-child(2){-webkit-animation-delay:-0.16s;animation-delay:-0.16s;}.formkit-form[data-uid="935bcf6b0c"] .formkit-submit[data-active] .formkit-spinner{opacity:1;height:100%;width:50px;}.formkit-form[data-uid="935bcf6b0c"] .formkit-submit[data-active] .formkit-spinner ~ span{opacity:0;}.formkit-form[data-uid="935bcf6b0c"] .formkit-powered-by[data-active="false"]{opacity:0.35;}.formkit-form[data-uid="935bcf6b0c"] .formkit-powered-by-convertkit-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;z-index:5;margin:10px 0;position:relative;}.formkit-form[data-uid="935bcf6b0c"] .formkit-powered-by-convertkit-container[data-active="false"]{opacity:0.35;}.formkit-form[data-uid="935bcf6b0c"] .formkit-powered-by-convertkit{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#ffffff;border:1px solid #dde2e7;border-radius:4px;color:#373f45;cursor:pointer;display:block;height:36px;margin:0 auto;opacity:0.95;padding:0;-webkit-text-decoration:none;text-decoration:none;text-indent:100%;-webkit-transition:ease-in-out all 200ms;transition:ease-in-out all 200ms;white-space:nowrap;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:190px;background-repeat:no-repeat;background-position:center;background-image:url("data:image/svg+xml;charset=utf8,%3Csvg width='162' height='20' viewBox='0 0 162 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M83.0561 15.2457C86.675 15.2457 89.4722 12.5154 89.4722 9.14749C89.4722 5.99211 86.8443 4.06563 85.1038 4.06563C82.6801 4.06563 80.7373 5.76407 80.4605 8.28551C80.4092 8.75244 80.0387 9.14403 79.5686 9.14069C78.7871 9.13509 77.6507 9.12841 76.9314 9.13092C76.6217 9.13199 76.3658 8.88106 76.381 8.57196C76.4895 6.38513 77.2218 4.3404 78.618 2.76974C80.1695 1.02445 82.4289 0 85.1038 0C89.5979 0 93.8406 4.07791 93.8406 9.14749C93.8406 14.7608 89.1832 19.3113 83.1517 19.3113C78.8502 19.3113 74.5179 16.5041 73.0053 12.5795C72.9999 12.565 72.9986 12.5492 73.0015 12.534C73.0218 12.4179 73.0617 12.3118 73.1011 12.2074C73.1583 12.0555 73.2143 11.907 73.2062 11.7359L73.18 11.1892C73.174 11.0569 73.2075 10.9258 73.2764 10.8127C73.3452 10.6995 73.4463 10.6094 73.5666 10.554L73.7852 10.4523C73.9077 10.3957 74.0148 10.3105 74.0976 10.204C74.1803 10.0974 74.2363 9.97252 74.2608 9.83983C74.3341 9.43894 74.6865 9.14749 75.0979 9.14749C75.7404 9.14749 76.299 9.57412 76.5088 10.1806C77.5188 13.1 79.1245 15.2457 83.0561 15.2457Z' fill='%23373F45'/%3E%3Cpath d='M155.758 6.91365C155.028 6.91365 154.804 6.47916 154.804 5.98857C154.804 5.46997 154.986 5.06348 155.758 5.06348C156.53 5.06348 156.712 5.46997 156.712 5.98857C156.712 6.47905 156.516 6.91365 155.758 6.91365ZM142.441 12.9304V9.32833L141.415 9.32323V8.90392C141.415 8.44719 141.786 8.07758 142.244 8.07986L142.441 8.08095V6.55306L144.082 6.09057V8.08073H145.569V8.50416C145.569 8.61242 145.548 8.71961 145.506 8.81961C145.465 8.91961 145.404 9.01047 145.328 9.08699C145.251 9.16351 145.16 9.2242 145.06 9.26559C144.96 9.30698 144.853 9.32826 144.745 9.32822H144.082V12.7201C144.082 13.2423 144.378 13.4256 144.76 13.4887C145.209 13.5629 145.583 13.888 145.583 14.343V14.9626C144.029 14.9626 142.441 14.8942 142.441 12.9304Z' fill='%23373F45'/%3E%3Cpath d='M110.058 7.92554C108.417 7.88344 106.396 8.92062 106.396 11.5137C106.396 14.0646 108.417 15.0738 110.058 15.0318C111.742 15.0738 113.748 14.0646 113.748 11.5137C113.748 8.92062 111.742 7.88344 110.058 7.92554ZM110.07 13.7586C108.878 13.7586 108.032 12.8905 108.032 11.461C108.032 10.1013 108.878 9.20569 110.071 9.20569C111.263 9.20569 112.101 10.0995 112.101 11.459C112.101 12.8887 111.263 13.7586 110.07 13.7586Z' fill='%23373F45'/%3E%3Cpath d='M118.06 7.94098C119.491 7.94098 120.978 8.33337 120.978 11.1366V14.893H120.063C119.608 14.893 119.238 14.524 119.238 14.0689V10.9965C119.238 9.66506 118.747 9.16047 117.891 9.16047C117.414 9.16047 116.797 9.52486 116.502 9.81915V14.069C116.502 14.1773 116.481 14.2845 116.44 14.3845C116.398 14.4845 116.337 14.5753 116.261 14.6519C116.184 14.7284 116.093 14.7891 115.993 14.8305C115.893 14.8719 115.786 14.8931 115.678 14.8931H114.847V8.10918H115.773C115.932 8.10914 116.087 8.16315 116.212 8.26242C116.337 8.36168 116.424 8.50033 116.46 8.65577C116.881 8.19328 117.428 7.94098 118.06 7.94098ZM122.854 8.09713C123.024 8.09708 123.19 8.1496 123.329 8.2475C123.468 8.34541 123.574 8.48391 123.631 8.64405L125.133 12.8486L126.635 8.64415C126.692 8.48402 126.798 8.34551 126.937 8.2476C127.076 8.1497 127.242 8.09718 127.412 8.09724H128.598L126.152 14.3567C126.091 14.5112 125.986 14.6439 125.849 14.7374C125.711 14.831 125.549 14.881 125.383 14.8809H124.333L121.668 8.09713H122.854Z' fill='%23373F45'/%3E%3Cpath d='M135.085 14.5514C134.566 14.7616 133.513 15.0416 132.418 15.0416C130.496 15.0416 129.024 13.9345 129.024 11.4396C129.024 9.19701 130.451 7.99792 132.191 7.99792C134.338 7.99792 135.254 9.4378 135.158 11.3979C135.139 11.8029 134.786 12.0983 134.38 12.0983H130.679C130.763 13.1916 131.562 13.7662 132.615 13.7662C133.028 13.7662 133.462 13.7452 133.983 13.6481C134.535 13.545 135.085 13.9375 135.085 14.4985V14.5514ZM133.673 10.949C133.785 9.87621 133.061 9.28752 132.191 9.28752C131.321 9.28752 130.734 9.93979 130.679 10.9489L133.673 10.949Z' fill='%23373F45'/%3E%3Cpath d='M137.345 8.11122C137.497 8.11118 137.645 8.16229 137.765 8.25635C137.884 8.35041 137.969 8.48197 138.005 8.62993C138.566 8.20932 139.268 7.94303 139.759 7.94303C139.801 7.94303 140.068 7.94303 140.489 7.99913V8.7265C140.489 9.11748 140.15 9.4147 139.759 9.4147C139.31 9.4147 138.651 9.5829 138.131 9.8773V14.8951H136.462V8.11112L137.345 8.11122ZM156.6 14.0508V8.09104H155.769C155.314 8.09104 154.944 8.45999 154.944 8.9151V14.8748H155.775C156.23 14.8748 156.6 14.5058 156.6 14.0508ZM158.857 12.9447V9.34254H157.749V8.91912C157.749 8.46401 158.118 8.09506 158.574 8.09506H158.857V6.56739L160.499 6.10479V8.09506H161.986V8.51848C161.986 8.97359 161.617 9.34254 161.161 9.34254H160.499V12.7345C160.499 13.2566 160.795 13.44 161.177 13.503C161.626 13.5774 162 13.9024 162 14.3574V14.977C160.446 14.977 158.857 14.9086 158.857 12.9447ZM98.1929 10.1124C98.2033 6.94046 100.598 5.16809 102.895 5.16809C104.171 5.16809 105.342 5.44285 106.304 6.12953L105.914 6.6631C105.654 7.02011 105.16 7.16194 104.749 6.99949C104.169 6.7702 103.622 6.7218 103.215 6.7218C101.335 6.7218 99.9169 7.92849 99.9068 10.1123C99.9169 12.2959 101.335 13.5201 103.215 13.5201C103.622 13.5201 104.169 13.4717 104.749 13.2424C105.16 13.0799 105.654 13.2046 105.914 13.5615L106.304 14.0952C105.342 14.7819 104.171 15.0566 102.895 15.0566C100.598 15.0566 98.2033 13.2842 98.1929 10.1124ZM147.619 5.21768C148.074 5.21768 148.444 5.58663 148.444 6.04174V9.81968L151.82 5.58131C151.897 5.47733 151.997 5.39282 152.112 5.3346C152.227 5.27638 152.355 5.24607 152.484 5.24611H153.984L150.166 10.0615L153.984 14.8749H152.484C152.355 14.8749 152.227 14.8446 152.112 14.7864C151.997 14.7281 151.897 14.6436 151.82 14.5397L148.444 10.3025V14.0508C148.444 14.5059 148.074 14.8749 147.619 14.8749H146.746V5.21768H147.619Z' fill='%23373F45'/%3E%3Cpath d='M0.773438 6.5752H2.68066C3.56543 6.5752 4.2041 6.7041 4.59668 6.96191C4.99219 7.21973 5.18994 7.62695 5.18994 8.18359C5.18994 8.55859 5.09326 8.87061 4.8999 9.11963C4.70654 9.36865 4.42822 9.52539 4.06494 9.58984V9.63379C4.51611 9.71875 4.84717 9.88721 5.05811 10.1392C5.27197 10.3882 5.37891 10.7266 5.37891 11.1543C5.37891 11.7314 5.17676 12.1841 4.77246 12.5122C4.37109 12.8374 3.81152 13 3.09375 13H0.773438V6.5752ZM1.82373 9.22949H2.83447C3.27393 9.22949 3.59473 9.16064 3.79688 9.02295C3.99902 8.88232 4.1001 8.64502 4.1001 8.31104C4.1001 8.00928 3.99023 7.79102 3.77051 7.65625C3.55371 7.52148 3.20801 7.4541 2.7334 7.4541H1.82373V9.22949ZM1.82373 10.082V12.1167H2.93994C3.37939 12.1167 3.71045 12.0332 3.93311 11.8662C4.15869 11.6963 4.27148 11.4297 4.27148 11.0664C4.27148 10.7324 4.15723 10.4849 3.92871 10.3237C3.7002 10.1626 3.35303 10.082 2.88721 10.082H1.82373Z' fill='%23373F45'/%3E%3Cpath d='M13.011 6.5752V10.7324C13.011 11.207 12.9084 11.623 12.7034 11.9805C12.5012 12.335 12.2068 12.6089 11.8201 12.8022C11.4363 12.9927 10.9763 13.0879 10.4402 13.0879C9.6433 13.0879 9.02368 12.877 8.5813 12.4551C8.13892 12.0332 7.91772 11.4531 7.91772 10.7148V6.5752H8.9724V10.6401C8.9724 11.1704 9.09546 11.5615 9.34155 11.8135C9.58765 12.0654 9.96557 12.1914 10.4753 12.1914C11.4656 12.1914 11.9607 11.6714 11.9607 10.6313V6.5752H13.011Z' fill='%23373F45'/%3E%3Cpath d='M15.9146 13V6.5752H16.9649V13H15.9146Z' fill='%23373F45'/%3E%3Cpath d='M19.9255 13V6.5752H20.9758V12.0991H23.696V13H19.9255Z' fill='%23373F45'/%3E%3Cpath d='M28.2828 13H27.2325V7.47607H25.3428V6.5752H30.1724V7.47607H28.2828V13Z' fill='%23373F45'/%3E%3Cpath d='M41.9472 13H40.8046L39.7148 9.16796C39.6679 9.00097 39.6093 8.76074 39.539 8.44727C39.4687 8.13086 39.4262 7.91113 39.4116 7.78809C39.3823 7.97559 39.3339 8.21875 39.2665 8.51758C39.2021 8.81641 39.1479 9.03905 39.1039 9.18554L38.0405 13H36.8979L36.0673 9.7832L35.2236 6.5752H36.2958L37.2143 10.3193C37.3578 10.9199 37.4604 11.4502 37.5219 11.9102C37.5541 11.6611 37.6025 11.3828 37.6669 11.0752C37.7314 10.7676 37.79 10.5186 37.8427 10.3281L38.8886 6.5752H39.9301L41.0024 10.3457C41.1049 10.6943 41.2133 11.2158 41.3276 11.9102C41.3715 11.4912 41.477 10.958 41.644 10.3105L42.558 6.5752H43.6215L41.9472 13Z' fill='%23373F45'/%3E%3Cpath d='M45.7957 13V6.5752H46.846V13H45.7957Z' fill='%23373F45'/%3E%3Cpath d='M52.0258 13H50.9755V7.47607H49.0859V6.5752H53.9155V7.47607H52.0258V13Z' fill='%23373F45'/%3E%3Cpath d='M61.2312 13H60.1765V10.104H57.2146V13H56.1643V6.5752H57.2146V9.20312H60.1765V6.5752H61.2312V13Z' fill='%23373F45'/%3E%3C/svg%3E");}.formkit-form[data-uid="935bcf6b0c"] .formkit-powered-by-convertkit:hover,.formkit-form[data-uid="935bcf6b0c"] .formkit-powered-by-convertkit:focus{background-color:#ffffff;-webkit-transform:scale(1.025) perspective(1px);-ms-transform:scale(1.025) perspective(1px);transform:scale(1.025) perspective(1px);opacity:1;}.formkit-form[data-uid="935bcf6b0c"] .formkit-powered-by-convertkit[data-variant="dark"],.formkit-form[data-uid="935bcf6b0c"] .formkit-powered-by-convertkit[data-variant="light"]{background-color:transparent;border-color:transparent;width:166px;}.formkit-form[data-uid="935bcf6b0c"] .formkit-powered-by-convertkit[data-variant="light"]{color:#ffffff;background-image:url("data:image/svg+xml;charset=utf8,%3Csvg width='162' height='20' viewBox='0 0 162 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M83.0561 15.2457C86.675 15.2457 89.4722 12.5154 89.4722 9.14749C89.4722 5.99211 86.8443 4.06563 85.1038 4.06563C82.6801 4.06563 80.7373 5.76407 80.4605 8.28551C80.4092 8.75244 80.0387 9.14403 79.5686 9.14069C78.7871 9.13509 77.6507 9.12841 76.9314 9.13092C76.6217 9.13199 76.3658 8.88106 76.381 8.57196C76.4895 6.38513 77.2218 4.3404 78.618 2.76974C80.1695 1.02445 82.4289 0 85.1038 0C89.5979 0 93.8406 4.07791 93.8406 9.14749C93.8406 14.7608 89.1832 19.3113 83.1517 19.3113C78.8502 19.3113 74.5179 16.5041 73.0053 12.5795C72.9999 12.565 72.9986 12.5492 73.0015 12.534C73.0218 12.4179 73.0617 12.3118 73.1011 12.2074C73.1583 12.0555 73.2143 11.907 73.2062 11.7359L73.18 11.1892C73.174 11.0569 73.2075 10.9258 73.2764 10.8127C73.3452 10.6995 73.4463 10.6094 73.5666 10.554L73.7852 10.4523C73.9077 10.3957 74.0148 10.3105 74.0976 10.204C74.1803 10.0974 74.2363 9.97252 74.2608 9.83983C74.3341 9.43894 74.6865 9.14749 75.0979 9.14749C75.7404 9.14749 76.299 9.57412 76.5088 10.1806C77.5188 13.1 79.1245 15.2457 83.0561 15.2457Z' fill='white'/%3E%3Cpath d='M155.758 6.91365C155.028 6.91365 154.804 6.47916 154.804 5.98857C154.804 5.46997 154.986 5.06348 155.758 5.06348C156.53 5.06348 156.712 5.46997 156.712 5.98857C156.712 6.47905 156.516 6.91365 155.758 6.91365ZM142.441 12.9304V9.32833L141.415 9.32323V8.90392C141.415 8.44719 141.786 8.07758 142.244 8.07986L142.441 8.08095V6.55306L144.082 6.09057V8.08073H145.569V8.50416C145.569 8.61242 145.548 8.71961 145.506 8.81961C145.465 8.91961 145.404 9.01047 145.328 9.08699C145.251 9.16351 145.16 9.2242 145.06 9.26559C144.96 9.30698 144.853 9.32826 144.745 9.32822H144.082V12.7201C144.082 13.2423 144.378 13.4256 144.76 13.4887C145.209 13.5629 145.583 13.888 145.583 14.343V14.9626C144.029 14.9626 142.441 14.8942 142.441 12.9304Z' fill='white'/%3E%3Cpath d='M110.058 7.92554C108.417 7.88344 106.396 8.92062 106.396 11.5137C106.396 14.0646 108.417 15.0738 110.058 15.0318C111.742 15.0738 113.748 14.0646 113.748 11.5137C113.748 8.92062 111.742 7.88344 110.058 7.92554ZM110.07 13.7586C108.878 13.7586 108.032 12.8905 108.032 11.461C108.032 10.1013 108.878 9.20569 110.071 9.20569C111.263 9.20569 112.101 10.0995 112.101 11.459C112.101 12.8887 111.263 13.7586 110.07 13.7586Z' fill='white'/%3E%3Cpath d='M118.06 7.94098C119.491 7.94098 120.978 8.33337 120.978 11.1366V14.893H120.063C119.608 14.893 119.238 14.524 119.238 14.0689V10.9965C119.238 9.66506 118.747 9.16047 117.891 9.16047C117.414 9.16047 116.797 9.52486 116.502 9.81915V14.069C116.502 14.1773 116.481 14.2845 116.44 14.3845C116.398 14.4845 116.337 14.5753 116.261 14.6519C116.184 14.7284 116.093 14.7891 115.993 14.8305C115.893 14.8719 115.786 14.8931 115.678 14.8931H114.847V8.10918H115.773C115.932 8.10914 116.087 8.16315 116.212 8.26242C116.337 8.36168 116.424 8.50033 116.46 8.65577C116.881 8.19328 117.428 7.94098 118.06 7.94098ZM122.854 8.09713C123.024 8.09708 123.19 8.1496 123.329 8.2475C123.468 8.34541 123.574 8.48391 123.631 8.64405L125.133 12.8486L126.635 8.64415C126.692 8.48402 126.798 8.34551 126.937 8.2476C127.076 8.1497 127.242 8.09718 127.412 8.09724H128.598L126.152 14.3567C126.091 14.5112 125.986 14.6439 125.849 14.7374C125.711 14.831 125.549 14.881 125.383 14.8809H124.333L121.668 8.09713H122.854Z' fill='white'/%3E%3Cpath d='M135.085 14.5514C134.566 14.7616 133.513 15.0416 132.418 15.0416C130.496 15.0416 129.024 13.9345 129.024 11.4396C129.024 9.19701 130.451 7.99792 132.191 7.99792C134.338 7.99792 135.254 9.4378 135.158 11.3979C135.139 11.8029 134.786 12.0983 134.38 12.0983H130.679C130.763 13.1916 131.562 13.7662 132.615 13.7662C133.028 13.7662 133.462 13.7452 133.983 13.6481C134.535 13.545 135.085 13.9375 135.085 14.4985V14.5514ZM133.673 10.949C133.785 9.87621 133.061 9.28752 132.191 9.28752C131.321 9.28752 130.734 9.93979 130.679 10.9489L133.673 10.949Z' fill='white'/%3E%3Cpath d='M137.345 8.11122C137.497 8.11118 137.645 8.16229 137.765 8.25635C137.884 8.35041 137.969 8.48197 138.005 8.62993C138.566 8.20932 139.268 7.94303 139.759 7.94303C139.801 7.94303 140.068 7.94303 140.489 7.99913V8.7265C140.489 9.11748 140.15 9.4147 139.759 9.4147C139.31 9.4147 138.651 9.5829 138.131 9.8773V14.8951H136.462V8.11112L137.345 8.11122ZM156.6 14.0508V8.09104H155.769C155.314 8.09104 154.944 8.45999 154.944 8.9151V14.8748H155.775C156.23 14.8748 156.6 14.5058 156.6 14.0508ZM158.857 12.9447V9.34254H157.749V8.91912C157.749 8.46401 158.118 8.09506 158.574 8.09506H158.857V6.56739L160.499 6.10479V8.09506H161.986V8.51848C161.986 8.97359 161.617 9.34254 161.161 9.34254H160.499V12.7345C160.499 13.2566 160.795 13.44 161.177 13.503C161.626 13.5774 162 13.9024 162 14.3574V14.977C160.446 14.977 158.857 14.9086 158.857 12.9447ZM98.1929 10.1124C98.2033 6.94046 100.598 5.16809 102.895 5.16809C104.171 5.16809 105.342 5.44285 106.304 6.12953L105.914 6.6631C105.654 7.02011 105.16 7.16194 104.749 6.99949C104.169 6.7702 103.622 6.7218 103.215 6.7218C101.335 6.7218 99.9169 7.92849 99.9068 10.1123C99.9169 12.2959 101.335 13.5201 103.215 13.5201C103.622 13.5201 104.169 13.4717 104.749 13.2424C105.16 13.0799 105.654 13.2046 105.914 13.5615L106.304 14.0952C105.342 14.7819 104.171 15.0566 102.895 15.0566C100.598 15.0566 98.2033 13.2842 98.1929 10.1124ZM147.619 5.21768C148.074 5.21768 148.444 5.58663 148.444 6.04174V9.81968L151.82 5.58131C151.897 5.47733 151.997 5.39282 152.112 5.3346C152.227 5.27638 152.355 5.24607 152.484 5.24611H153.984L150.166 10.0615L153.984 14.8749H152.484C152.355 14.8749 152.227 14.8446 152.112 14.7864C151.997 14.7281 151.897 14.6436 151.82 14.5397L148.444 10.3025V14.0508C148.444 14.5059 148.074 14.8749 147.619 14.8749H146.746V5.21768H147.619Z' fill='white'/%3E%3Cpath d='M0.773438 6.5752H2.68066C3.56543 6.5752 4.2041 6.7041 4.59668 6.96191C4.99219 7.21973 5.18994 7.62695 5.18994 8.18359C5.18994 8.55859 5.09326 8.87061 4.8999 9.11963C4.70654 9.36865 4.42822 9.52539 4.06494 9.58984V9.63379C4.51611 9.71875 4.84717 9.88721 5.05811 10.1392C5.27197 10.3882 5.37891 10.7266 5.37891 11.1543C5.37891 11.7314 5.17676 12.1841 4.77246 12.5122C4.37109 12.8374 3.81152 13 3.09375 13H0.773438V6.5752ZM1.82373 9.22949H2.83447C3.27393 9.22949 3.59473 9.16064 3.79688 9.02295C3.99902 8.88232 4.1001 8.64502 4.1001 8.31104C4.1001 8.00928 3.99023 7.79102 3.77051 7.65625C3.55371 7.52148 3.20801 7.4541 2.7334 7.4541H1.82373V9.22949ZM1.82373 10.082V12.1167H2.93994C3.37939 12.1167 3.71045 12.0332 3.93311 11.8662C4.15869 11.6963 4.27148 11.4297 4.27148 11.0664C4.27148 10.7324 4.15723 10.4849 3.92871 10.3237C3.7002 10.1626 3.35303 10.082 2.88721 10.082H1.82373Z' fill='white'/%3E%3Cpath d='M13.011 6.5752V10.7324C13.011 11.207 12.9084 11.623 12.7034 11.9805C12.5012 12.335 12.2068 12.6089 11.8201 12.8022C11.4363 12.9927 10.9763 13.0879 10.4402 13.0879C9.6433 13.0879 9.02368 12.877 8.5813 12.4551C8.13892 12.0332 7.91772 11.4531 7.91772 10.7148V6.5752H8.9724V10.6401C8.9724 11.1704 9.09546 11.5615 9.34155 11.8135C9.58765 12.0654 9.96557 12.1914 10.4753 12.1914C11.4656 12.1914 11.9607 11.6714 11.9607 10.6313V6.5752H13.011Z' fill='white'/%3E%3Cpath d='M15.9146 13V6.5752H16.9649V13H15.9146Z' fill='white'/%3E%3Cpath d='M19.9255 13V6.5752H20.9758V12.0991H23.696V13H19.9255Z' fill='white'/%3E%3Cpath d='M28.2828 13H27.2325V7.47607H25.3428V6.5752H30.1724V7.47607H28.2828V13Z' fill='white'/%3E%3Cpath d='M41.9472 13H40.8046L39.7148 9.16796C39.6679 9.00097 39.6093 8.76074 39.539 8.44727C39.4687 8.13086 39.4262 7.91113 39.4116 7.78809C39.3823 7.97559 39.3339 8.21875 39.2665 8.51758C39.2021 8.81641 39.1479 9.03905 39.1039 9.18554L38.0405 13H36.8979L36.0673 9.7832L35.2236 6.5752H36.2958L37.2143 10.3193C37.3578 10.9199 37.4604 11.4502 37.5219 11.9102C37.5541 11.6611 37.6025 11.3828 37.6669 11.0752C37.7314 10.7676 37.79 10.5186 37.8427 10.3281L38.8886 6.5752H39.9301L41.0024 10.3457C41.1049 10.6943 41.2133 11.2158 41.3276 11.9102C41.3715 11.4912 41.477 10.958 41.644 10.3105L42.558 6.5752H43.6215L41.9472 13Z' fill='white'/%3E%3Cpath d='M45.7957 13V6.5752H46.846V13H45.7957Z' fill='white'/%3E%3Cpath d='M52.0258 13H50.9755V7.47607H49.0859V6.5752H53.9155V7.47607H52.0258V13Z' fill='white'/%3E%3Cpath d='M61.2312 13H60.1765V10.104H57.2146V13H56.1643V6.5752H57.2146V9.20312H60.1765V6.5752H61.2312V13Z' fill='white'/%3E%3C/svg%3E");}@-webkit-keyframes formkit-bouncedelay-formkit-form-data-uid-935bcf6b0c-{0%,80%,100%{-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);}40%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}}@keyframes formkit-bouncedelay-formkit-form-data-uid-935bcf6b0c-{0%,80%,100%{-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);}40%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}}.formkit-form[data-uid="935bcf6b0c"] blockquote{padding:10px 20px;margin:0 0 20px;border-left:5px solid #e1e1e1;}.formkit-form[data-uid="935bcf6b0c"] .seva-custom-content{padding:15px;font-size:16px;color:#fff;mix-blend-mode:difference;}.formkit-form[data-uid="935bcf6b0c"] .formkit-modal.guard{max-width:420px;width:100%;} .formkit-form[data-uid="935bcf6b0c"]{max-width:700px;}.formkit-form[data-uid="935bcf6b0c"] [data-style="clean"]{width:100%;}.formkit-form[data-uid="935bcf6b0c"] .formkit-fields{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin:0 auto;}.formkit-form[data-uid="935bcf6b0c"] .formkit-field,.formkit-form[data-uid="935bcf6b0c"] .formkit-submit{margin:0 0 15px 0;-webkit-flex:1 0 100%;-ms-flex:1 0 100%;flex:1 0 100%;}.formkit-form[data-uid="935bcf6b0c"] .formkit-powered-by-convertkit-container{margin:0;}.formkit-form[data-uid="935bcf6b0c"] .formkit-submit{position:static;}.formkit-form[data-uid="935bcf6b0c"][min-width~="700"] [data-style="clean"],.formkit-form[data-uid="935bcf6b0c"][min-width~="800"] [data-style="clean"]{padding:10px;}.formkit-form[data-uid="935bcf6b0c"][min-width~="700"] .formkit-fields[data-stacked="false"],.formkit-form[data-uid="935bcf6b0c"][min-width~="800"] .formkit-fields[data-stacked="false"]{margin-left:-5px;margin-right:-5px;}.formkit-form[data-uid="935bcf6b0c"][min-width~="700"] .formkit-fields[data-stacked="false"] .formkit-field,.formkit-form[data-uid="935bcf6b0c"][min-width~="800"] .formkit-fields[data-stacked="false"] .formkit-field,.formkit-form[data-uid="935bcf6b0c"][min-width~="700"] .formkit-fields[data-stacked="false"] .formkit-submit,.formkit-form[data-uid="935bcf6b0c"][min-width~="800"] .formkit-fields[data-stacked="false"] .formkit-submit{margin:0 5px 15px 5px;}.formkit-form[data-uid="935bcf6b0c"][min-width~="700"] .formkit-fields[data-stacked="false"] .formkit-field,.formkit-form[data-uid="935bcf6b0c"][min-width~="800"] .formkit-fields[data-stacked="false"] .formkit-field{-webkit-flex:100 1 auto;-ms-flex:100 1 auto;flex:100 1 auto;}.formkit-form[data-uid="935bcf6b0c"][min-width~="700"] .formkit-fields[data-stacked="false"] .formkit-submit,.formkit-form[data-uid="935bcf6b0c"][min-width~="800"] .formkit-fields[data-stacked="false"] .formkit-submit{-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;} </style></form>
                  `,
                }}
              />
            </div>
          </motion.div>
          {/* <script
          async
          data-uid="ce9e319eaf"
          src="https://femlove-by-franzi.ck.page/ce9e319eaf/index.js"
        ></script> */}
          {/* <div
            className="absolute"
            dangerouslySetInnerHTML={{
              __html: `
          <script async data-uid="ce9e319eaf" src="https://femlove-by-franzi.ck.page/ce9e319eaf/index.js"></script>
          `,
            }}
          /> */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.05 }}
            className="hidden lg:mt-0 lg:col-span-5 lg:flex"
          >
            <Image
              src="/images/woman.webp"
              alt="mockup"
              width={400}
              height={600}
              priority={true}
            />
          </motion.div>
        </Container>
        <BlogPreview posts={posts} />
        <AboutMe />
        <CTA />
        <Quote />
      </Layout>
    </>
  );
}

function Quote() {
  return (
    <section className="relative px-6 py-12 overflow-hidden isolate lg:px-8">
      {/* <WomenSVG /> */}
      <div className="absolute flex justify-center w-full">
        <WomenSVG className="z-0 opacity-5" />
      </div>
      <div className="relative z-10 max-w-2xl mx-auto lg:max-w-4xl">
        <figure className="mt-10">
          <blockquote className="text-xl italic font-medium leading-8 text-center text-gray-900 sm:text-2xl sm:leading-9 max-w-[700px] mx-auto">
            <p style={{ fontFamily: "Roxborough" }}>
              "To be beautiful means to be yourself. You don't need to be
              accepted by others. You need to accept yourself."
            </p>
          </blockquote>
          <figcaption className="flex justify-center mt-10">
            <div className="text-gray-600">Thích Nhất Hạnh</div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

const WomenSVG = ({ className }) => (
  <div className={className}>
    <svg
      width="297"
      height="275"
      viewBox="0 0 297 275"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_103_2"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="297"
        height="275"
      >
        <path d="M296.395 0H0V275H296.395V0Z" fill="white" />
      </mask>
      <g mask="url(#mask0_103_2)">
        <mask
          id="mask1_103_2"
          maskUnits="userSpaceOnUse"
          x="51"
          y="0"
          width="151"
          height="125"
        >
          <path
            d="M51.6603 0.582947H201.945V124.715H51.6603V0.582947Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask1_103_2)">
          <path
            d="M100.752 47.5672C98.8647 46.6764 96.9792 45.7877 95.2629 43.8981C93.5446 42.0086 91.9934 39.1202 90.9375 35.3859C89.8796 31.6537 89.317 27.0735 87.8371 22.8112C86.3573 18.551 83.9602 14.6048 82.939 11.1538C81.9177 7.70285 82.2704 4.74314 83.0796 3.09002C83.8909 1.43283 85.1587 1.0802 86.4449 1.92612C87.7312 2.77205 89.0337 4.81448 90.3015 10.3079C91.5714 15.8033 92.8046 24.7497 95.6216 33.9774C98.4407 43.2071 102.846 52.7161 107.301 60.5353C111.759 68.3524 116.268 74.4818 120.003 78.4627C123.739 82.4416 126.696 84.2741 131.067 86.6692C135.435 89.0643 141.214 92.0219 147.274 93.2918C153.334 94.5577 159.675 94.1357 163.693 93.1859C167.708 92.2339 169.4 90.7541 171.09 89.2763"
            stroke="#231F20"
            strokeWidth="2.41349"
            strokeMiterlimit="22.926"
          />
        </g>
        <path
          d="M170.795 57.91C167.226 56.9601 163.656 56.0082 160.428 55.1806C157.197 54.3551 154.308 53.6498 152.158 54.2124C150.009 54.775 148.599 56.6075 146.909 56.9601C145.217 57.3107 143.246 56.1855 140.992 56.3955C138.735 56.6075 136.2 58.1566 134.438 60.1298C132.677 62.1009 131.691 64.4959 130.669 65.5539C129.646 66.6097 128.59 66.3284 129.33 65.9758C130.07 65.6232 132.606 65.2012 135.072 64.4613C137.539 63.7214 139.934 62.6655 142.26 62.1355C144.583 61.6096 146.84 61.6096 149.094 61.257C151.349 60.9043 153.603 60.1991 155.54 59.8485C157.478 59.4958 159.099 59.4958 161.072 59.5651C163.045 59.6365 165.371 59.7771 167.219 59.3022C169.07 58.8272 170.444 57.7347 170.795 57.91ZM170.795 57.91C171.147 58.0873 170.481 59.5305 169.087 61.6626C167.694 63.7927 165.581 66.6097 161.918 68.6889C158.253 70.766 153.038 72.1031 148.848 72.3865C144.655 72.6677 141.483 71.8911 138.947 70.9412C136.41 69.9914 134.508 68.8642 133.134 67.9836C131.76 67.103 130.914 66.4691 130.07 65.8352"
          stroke="#231F20"
          strokeWidth="2.41329"
          strokeMiterlimit="22.926"
        />
        <mask
          id="mask2_103_2"
          maskUnits="userSpaceOnUse"
          x="0"
          y="43"
          width="149"
          height="190"
        >
          <path
            d="M0.260895 43.833H148.197V232.211H0.260895V43.833Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask2_103_2)">
          <path
            d="M0.915222 201.49C2.32373 191.767 3.73428 182.047 5.56677 172.819C7.39926 163.591 9.6537 154.857 13.8813 148.939C18.1088 143.022 24.3095 139.922 30.7222 137.245C37.1349 134.569 43.7596 132.315 51.1589 130.625C58.5561 128.933 66.732 127.806 75.5398 125.339C84.3476 122.875 93.7893 119.071 100.273 115.62C106.757 112.167 110.28 109.069 112.746 105.475C115.213 101.882 116.621 97.797 117.135 92.6093C117.648 87.4237 117.265 81.1354 116.882 74.845"
            stroke="#231F20"
            strokeWidth="2.41351"
            strokeMiterlimit="22.926"
          />
        </g>
        <mask
          id="mask3_103_2"
          maskUnits="userSpaceOnUse"
          x="163"
          y="49"
          width="90"
          height="226"
        >
          <path d="M163.33 49.573H252.04V274.539H163.33V49.573Z" fill="white" />
        </mask>
        <g mask="url(#mask3_103_2)">
          <path
            d="M204.287 256.435C200.483 232.484 196.678 208.531 195.126 194.794C193.575 181.058 194.28 177.536 194.564 174.79C194.845 172.042 194.704 170.069 196.113 166.054C197.524 162.038 200.483 155.98 203.372 149.922C206.262 143.864 209.079 137.806 211.829 133.65C214.576 129.494 217.255 127.239 218.311 125.125C219.369 123.012 218.804 121.04 219.297 119.349C219.791 117.657 221.342 116.248 221.27 113.715C221.199 111.177 219.509 107.514 218.451 101.808C217.396 96.1031 216.974 88.3533 216.55 80.6034"
            stroke="#231F20"
            strokeWidth="2.41358"
            strokeMiterlimit="22.926"
          />
        </g>
        <mask
          id="mask4_103_2"
          maskUnits="userSpaceOnUse"
          x="187"
          y="91"
          width="110"
          height="169"
        >
          <path
            d="M187.856 91.3187H296.134V259.345H187.856V91.3187Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask4_103_2)">
          <path
            d="M285.889 228.54C288.003 216.421 290.117 204.305 292.018 194.232C293.922 184.158 295.614 176.129 294.627 169.435C293.639 162.743 289.976 157.39 284.762 153.444C279.546 149.5 272.782 146.964 267.003 145.203C261.225 143.442 256.435 142.455 249.879 140.553C243.326 138.652 235.011 135.835 229.571 132.634C224.131 129.436 221.568 125.857 219.004 122.279"
            stroke="#231F20"
            strokeWidth="2.41356"
            strokeMiterlimit="22.926"
          />
        </g>
        <mask
          id="mask5_103_2"
          maskUnits="userSpaceOnUse"
          x="72"
          y="80"
          width="138"
          height="195"
        >
          <path
            d="M72.0114 80.3605H209.772V274.539H72.0114V80.3605Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask5_103_2)">
          <path
            d="M102.811 274.187C110.139 267.847 117.467 261.508 122.118 257.14C126.768 252.774 128.743 250.377 129.587 248.193C130.433 246.01 130.152 244.037 131.632 241.783C133.111 239.528 136.352 236.993 137.973 234.247C139.593 231.499 139.593 228.54 138.819 223.68C138.042 218.819 136.495 212.055 134.944 205.997C133.393 199.939 131.842 194.587 131.138 191.205C130.433 187.823 130.574 186.415 130.08 184.584C129.587 182.752 128.46 180.497 128.6 178.102C128.743 175.707 130.152 173.172 131.491 170.071C132.83 166.973 134.098 163.31 135.366 159.013C136.634 154.716 137.904 149.783 138.978 146.016C140.052 142.248 140.933 139.64 142.412 137.598C143.892 135.556 145.971 134.076 148.542 131.909C151.116 129.744 154.18 126.891 158.232 123.405C162.284 119.917 167.323 115.796 170.352 113.56C173.381 111.322 174.405 110.971 175.267 111.163C176.131 111.358 176.836 112.098 176.59 113.101C176.343 114.104 175.145 115.374 173.718 116.13C172.291 116.886 170.636 117.135 169.771 116.833C168.909 116.536 168.838 115.69 169.384 114.844C169.93 114 171.092 113.154 172.246 112.371C173.402 111.587 174.545 110.865 175.778 111.059C177.012 111.252 178.335 112.361 178.844 114.075C179.356 115.79 179.056 118.107 178.757 120.427"
            stroke="#231F20"
            strokeWidth="2.41351"
            strokeMiterlimit="22.926"
          />
        </g>
        <path
          d="M137.904 162.395C140.439 157.568 142.977 152.743 144.932 149.152C146.887 145.558 148.261 143.197 149.971 141.33C151.679 139.463 153.723 138.091 156.4 136.049C159.078 134.007 162.391 131.293 165.032 129.039C167.676 126.785 169.649 124.989 171.516 123.474C173.381 121.96 175.145 120.727 176.412 120.376C177.682 120.021 178.457 120.551 178.314 121.538C178.176 122.524 177.118 123.966 175.622 125.042C174.123 126.116 172.185 126.819 171.164 126.697C170.142 126.573 170.036 125.623 170.882 124.459C171.726 123.297 173.524 121.925 175.02 121.008C176.518 120.093 177.717 119.636 178.757 120.427C179.796 121.22 180.677 123.262 180.605 125.182C180.534 127.103 179.513 128.898 177.629 130.978C175.744 133.055 172.996 135.413 171.021 137.264C169.05 139.113 167.851 140.45 166.212 141.964C164.574 143.481 162.497 145.171 160.417 146.86"
          stroke="#231F20"
          strokeWidth="2.41351"
          strokeMiterlimit="22.926"
        />
        <path
          d="M162.953 219.031C160.77 212.198 158.585 205.363 156.752 200.751C154.92 196.136 153.44 193.741 152.384 192.719C151.328 191.698 150.692 192.051 150.835 191.804C150.974 191.558 151.891 190.712 152.315 188.107C152.737 185.5 152.665 181.131 152.278 179.089C151.891 177.046 151.186 177.328 151.328 176.623C151.467 175.919 152.453 174.227 153.265 171.973C154.076 169.721 154.71 166.902 155.978 164.718C157.246 162.535 159.149 160.984 161.051 159.435C162.953 157.886 164.857 156.335 166.724 154.61C168.591 152.884 170.424 150.982 172.079 149.221C173.736 147.46 175.216 145.839 175.85 144.149C176.484 142.458 176.272 140.696 175.322 140.099C174.37 139.5 172.678 140.064 171.208 140.749C169.739 141.434 168.489 142.241 168.031 142.981C167.574 143.721 167.906 144.394 168.938 144.264C169.965 144.131 171.692 143.197 172.89 142.248C174.089 141.296 174.757 140.327 174.615 139.983C174.474 139.636 173.522 139.916 172.466 140.338C171.408 140.76 170.246 141.326 168.22 142.439C166.196 143.55 163.306 145.205 160.98 146.756C158.656 148.306 156.893 149.749 155.097 151.282C153.299 152.814 151.467 154.435 149.812 155.701C148.157 156.971 146.677 157.886 145.197 159.857C143.717 161.83 142.237 164.859 140.721 168.416C139.206 171.975 137.657 176.06 136.389 178.842C135.119 181.625 134.133 183.105 133.146 184.584"
          stroke="#231F20"
          strokeWidth="2.41351"
          strokeMiterlimit="22.926"
        />
        <mask
          id="mask6_103_2"
          maskUnits="userSpaceOnUse"
          x="131"
          y="127"
          width="65"
          height="148"
        >
          <path
            d="M131.499 127.846H195.683V274.539H131.499V127.846Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask6_103_2)">
          <path
            d="M162.146 158.542C162.539 161.111 162.933 163.681 163.41 165.917C163.889 168.153 164.451 170.055 164.663 173.824C164.875 177.591 164.733 183.227 164.39 191.072C164.048 198.918 163.499 208.973 163.112 221.548C162.725 234.123 162.497 249.215 162.266 264.307"
            stroke="#231F20"
            strokeWidth="2.41351"
            strokeMiterlimit="22.926"
          />
        </g>
        <path
          d="M179.602 139.94C182.774 135.468 185.944 130.994 187.917 128.898C189.89 126.803 190.667 127.084 190.648 126.079C190.63 125.076 189.821 122.787 189.768 120.48C189.715 118.175 190.42 115.849 191.019 115.056C191.617 114.263 192.11 115.003 191.67 114.669C191.231 114.334 189.855 112.926 188.41 110.582C186.967 108.242 185.451 104.966 183.954 102.622C182.456 100.282 180.978 98.8733 179.549 97.3568C178.123 95.8423 176.749 94.2218 175.348 92.8581C173.948 91.4944 172.519 90.3835 170.935 89.3256C169.35 88.2698 167.605 87.2669 166.204 85.9888C164.806 84.7128 163.748 83.1637 163.395 81.5595C163.043 79.9573 163.395 78.3022 164.26 77.4216C165.122 76.541 166.496 76.435 168.1 77.2096C169.702 77.9862 171.535 79.6414 172.187 80.5382C172.837 81.4372 172.309 81.5778 171.076 81.4902C169.843 81.4005 167.904 81.0845 166.62 80.3263C165.334 79.57 164.698 78.3735 164.841 77.7559C164.981 77.1403 165.897 77.1036 167.747 77.9149C169.596 78.7261 172.381 80.3813 174.725 82.0181C177.067 83.6569 178.969 85.2774 181.488 86.9142C184.007 88.5531 187.142 90.2082 190.049 92.426C192.956 94.6457 195.634 97.4281 197.819 100.457C200.004 103.486 201.694 106.762 203.278 109.403C204.866 112.045 206.346 114.053 207.771 115.761C209.2 117.469 210.573 118.878 211.189 120.48C211.807 122.084 211.666 123.878 211.523 125.676"
          stroke="#231F20"
          strokeWidth="2.41351"
          strokeMiterlimit="22.926"
        />
        <path
          d="M175.267 111.163C176.131 109.821 176.995 108.476 177.534 107.188C178.07 105.897 178.282 104.666 178.404 103.627C178.528 102.587 178.563 101.741 178.61 100.59C178.657 99.4359 178.712 97.9744 178.769 96.5149"
          stroke="#231F20"
          strokeWidth="2.41351"
          strokeMiterlimit="22.926"
        />
        <path
          d="M180.795 86.4556C180.803 84.3642 180.811 82.2749 181.221 80.6687C181.629 79.0604 182.44 77.9332 183.233 77.0873C184.026 76.2434 184.798 75.6787 185.575 75.1141"
          stroke="#231F20"
          strokeWidth="2.41351"
          strokeMiterlimit="22.926"
        />
        <path
          d="M196.399 98.6243C195.714 95.8277 195.027 93.029 194.701 91.1191C194.377 89.2091 194.411 88.1879 193.743 86.8324C193.072 85.4769 191.698 83.785 190.043 81.5143C188.386 79.2415 186.45 76.3898 185.286 74.4717C184.124 72.5495 183.736 71.563 182.485 69.9262C181.235 68.2894 179.122 65.9982 177.623 64.1515C176.125 62.3006 175.247 60.8921 174.7 59.2553C174.152 57.6165 173.942 55.7493 174.558 54.3775C175.175 53.0037 176.618 52.1231 178.064 52.0171C179.509 51.9111 180.954 52.5817 182.24 54.0779C183.524 55.5741 184.652 57.8998 184.898 59.1656C185.145 60.4355 184.511 60.6455 183.227 60.0646C181.939 59.4836 180 58.1098 178.785 56.7196C177.57 55.3274 177.077 53.9189 177.377 53.126C177.676 52.333 178.769 52.1577 180.108 52.916C181.447 53.6723 183.031 55.3641 184.847 57.4595C186.662 59.555 188.704 62.0561 190.518 64.3778C192.334 66.7035 193.918 68.852 196.138 71.5467C198.358 74.2414 201.211 77.4824 203.343 80.0874C205.474 82.6945 206.882 84.6676 208.276 88.3815C209.667 92.0975 211.04 97.5562 212.186 101.256C213.332 104.953 214.247 106.892 215.164 108.828"
          stroke="#231F20"
          strokeWidth="2.41342"
          strokeMiterlimit="22.926"
        />
        <path
          d="M202.326 78.8604C202.305 77.5089 202.287 76.1554 201.627 74.2659C200.964 72.3743 199.662 69.9425 198.447 67.4965C197.23 65.0484 196.103 62.582 195.522 60.9798C194.941 59.3777 194.904 58.6398 194.376 57.8815C193.848 57.1232 192.825 56.3486 191.241 54.0596C189.655 51.7705 187.507 47.9669 187.313 44.7259C187.118 41.4849 188.879 38.8106 190.361 37.9646C191.838 37.1187 193.037 38.1053 194.252 39.6035C195.469 41.0976 196.702 43.1054 197.46 44.6199C198.216 46.1344 198.498 47.1577 198.129 47.6143C197.758 48.0729 196.737 47.9669 195.732 47.0333C194.729 46.0997 193.742 44.3386 192.984 42.9301C192.226 41.5216 191.7 40.4657 191.822 39.7258C191.944 38.9838 192.721 38.5619 193.867 39.5138C195.01 40.4657 196.525 42.7894 198.216 45.7655C199.908 48.7415 201.773 52.3698 204.083 55.8207C206.39 59.2717 209.14 62.5473 210.864 65.2074C212.591 67.8654 213.296 69.9079 214.071 71.775C214.845 73.6421 215.691 75.334 216.537 77.0238"
          stroke="#231F20"
          strokeWidth="2.41342"
          strokeMiterlimit="22.926"
        />
        <path
          d="M196.25 42.4857C196.038 41.2464 195.826 40.0071 196.319 39.2468C196.812 38.4865 198.011 38.2052 198.997 38.8738C199.984 39.5444 200.759 41.1628 201.339 43.083C201.92 45.0031 202.308 47.2209 201.757 47.7182C201.205 48.2136 199.713 46.9864 198.832 45.5779C197.952 44.1694 197.681 42.5775 197.528 41.3769C197.375 40.1763 197.34 39.367 197.658 38.9451C197.974 38.5211 198.645 38.4865 199.419 39.3487C200.194 40.213 201.074 41.9741 201.867 44.3325C202.66 46.6929 203.366 49.6526 204.093 52.1884C204.819 54.7261 205.567 56.8419 206.315 58.9578"
          stroke="#231F20"
          strokeWidth="2.4135"
          strokeMiterlimit="22.926"
        />
        <path
          d="M198.993 74.9226C198.152 73.19 197.306 71.4594 196.955 69.8879C196.602 68.3183 196.745 66.9078 196.339 65.3056C195.934 63.7035 194.982 61.9077 194.375 60.4176C193.767 58.9276 193.502 57.7474 193.431 57.7474C193.359 57.7474 193.486 58.9276 193.192 60.436C192.901 61.9444 192.193 63.7789 191.486 65.6114"
          stroke="#231F20"
          strokeWidth="2.41351"
          strokeMiterlimit="22.926"
        />
        <path
          d="M131.672 36.0114C131.285 37.3853 130.898 38.7571 131.091 39.919C131.285 41.0829 132.059 42.0328 133.258 42.632C134.454 43.2313 136.077 43.478 137.698 43.7246"
          stroke="#231F20"
          strokeWidth="2.41358"
          strokeMiterlimit="22.926"
        />
        <path
          d="M136.526 41.2038C136.385 40.5679 136.244 39.9339 136.791 39.5833C137.337 39.2307 138.57 39.1614 139.644 39.7077C140.719 40.2519 141.634 41.4158 142.41 42.1007C143.185 42.7877 143.819 42.9996 144.453 43.2096"
          stroke="#231F20"
          strokeWidth="2.41345"
          strokeMiterlimit="22.926"
        />
        <path
          d="M148.16 42.3533C148.866 40.9794 149.569 39.6056 150.417 38.831C151.263 38.0544 152.247 37.8791 152.671 38.1257C153.093 38.3723 152.953 39.0409 152.812 39.7095"
          stroke="#231F20"
          strokeWidth="2.41356"
          strokeMiterlimit="22.926"
        />
        <mask
          id="mask7_103_2"
          maskUnits="userSpaceOnUse"
          x="121"
          y="0"
          width="70"
          height="74"
        >
          <path
            d="M121.063 0.582947H190.465V73.055H121.063V0.582947Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask7_103_2)">
          <path
            d="M152.174 42.251C153.797 41.5804 155.417 40.9118 156.703 39.9435C157.988 38.9753 158.94 37.7075 159.38 36.5965C159.82 35.4877 159.751 34.5357 159.274 33.4615C158.799 32.3873 157.918 31.1908 157.036 29.9943"
            stroke="#231F20"
            strokeWidth="2.41352"
            strokeMiterlimit="22.926"
          />
        </g>
        <path
          d="M177.46 84.0299C178.714 82.9108 179.967 81.7898 181.272 80.1937C182.576 78.5997 183.936 76.5308 185.294 74.4639"
          stroke="#231F20"
          strokeWidth="2.41351"
          strokeMiterlimit="22.926"
        />
      </g>
    </svg>
  </div>
);

export async function getStaticProps() {
  const posts = await sanityClient.fetch(postqueryHome);
  const config = await sanityClient.fetch(configQuery);

  return {
    props: {
      siteConfig: { ...config },
      posts,
    },
  };
}
