import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";

export const Footer = () => {
  return (
    <footer>
      <div className="footer_container">
        <div className="footer_links">
          <div className="footer_link_wrapper">
            <div className="footer_link_items">
              <h3>Get to Know Us</h3>
              <a href="https://www.amazon.jobs/en">Careers</a>
              <a href="https://www.aboutamazon.co.uk/?utm_source=gateway&utm_medium=footer">
                About Us
              </a>
              <a href="https://www.amazon.co.uk/aa?_encoding=UTF8&bitCampaignCode=e0001&ref_=footer_bit_v2_e0001">
                Amazon Assistant
              </a>
              <a href="https://sustainability.aboutamazon.co.uk/?utm_source=gateway&utm_medium=footer&ref_=susty_footer">
                Sustainability
              </a>
              <a href="https://www.amazon.co.uk/amazonprime?_encoding=UTF8&ref_=footer_prime">
                Amazon Prime
              </a>
            </div>
            <div className="footer_link_items">
              <h3>Make Money with Us</h3>
              <a href="https://sell.amazon.co.uk/?ref_=sduk_soa_hp_r_f_t1&ld=AZUKSOAFooter_319849_T1">
                Sell on Amazon
              </a>
              <a href="https://www.amazon.co.uk/l/?node=16068396031&ref_=map_1_b2b_GW_FT">
                Sell Under Private Brands
              </a>
              <a href="https://services.amazon.co.uk/services/fulfilment-by-amazon/features-benefits.html?ld=AZUKFBAFooter">
                Fulfilment by Amazon
              </a>
              <a href="https://advertising.amazon.com/en-gb/solutions/products/sponsored-products">
                Advertise Your Product
              </a>
            </div>
            <div className="footer_link_items">
              <h3>Payment Methods</h3>
              <a href="https://www.amazon.co.uk/gp/cobrandcard/marketing.html?pr=ukndplat&plattr=footer&place=camp&ie=UTF-8&ref_=footer_cbcc">
                Amazon Platinum Mastercard
              </a>
              <a href="https://www.amazon.co.uk/gp/cobrandcard/marketing.html?pr=ukndclas&plattr=footer&place=camp&ie=UTF-8&ref_=footer_cbcc">
                Amazon Classic Mastercard
              </a>
              <a href="https://www.amazon.co.uk/gp/browse.html?node=1571304031&ref_=footer_giftcards">
                Gift Cards
              </a>
              <a href="https://www.amazon.co.uk/gp/help/customer/display.html?nodeId=201894900&ref_=footer_payment">
                Payment Methods Help
              </a>
            </div>
            <div className="footer_link_items">
              <h3>Let Us Help You</h3>
              <a href="https://www.amazon.co.uk/gp/help/customer/display.html?nodeId=GDFU3JS5AL6SYHRD&ref_=footer_covid">
                COVID-19 and Amazon
              </a>
              <a href="https://www.amazon.co.uk/ap/signin?_encoding=UTF8&accountStatusPolicy=P1&openid.assoc_handle=gbflex&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.ns.pape=http%3A%2F%2Fspecs.openid.net%2Fextensions%2Fpape%2F1.0&openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.co.uk%2Fgp%2Fcss%2Forder-history%3Fie%3DUTF8%26ref_%3Dfooter_hp_ss_comp_tmp&pageId=webcs-yourorder&showRmrMe=1">
                Track Packages or View Orders
              </a>
              <a href="https://www.amazon.co.uk/gp/help/customer/display.html?nodeId=201910060&ref_=footer_shiprates">
                Delivery Rates & Policies
              </a>
              <a href="https://www.amazon.co.uk/ap/signin?clientContext=260-3322143-0909744&openid.return_to=https%3A%2F%2Fwww.amazon.co.uk%2Fspr%2Freturns%2Fhomepage%2Fhomepage.html%3Fref_%3Dfooter_hy_f_4&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=amzn_psr_desktop_uk&openid.mode=checkid_setup&marketPlaceId=A1F83G8C2ARO7P&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&pageId=Amazon&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.pape.max_auth_age=3600&siteState=clientContext%3D262-6937965-0718205%2CsourceUrl%3Dhttps%253A%252F%252Fwww.amazon.co.uk%252Fspr%252Freturns%252Fhomepage%252Fhomepage.html%253Fref_%253Dfooter_hy_f_4%2Csignature%3DEnwwGA2maRrelMT52jyO56Vo080j3D">
                Returns & Replacements
              </a>
            </div>
          </div>
        </div>
        <section className="social_media">
          <div className="social_media_wrap">
            <div className="footer_logo_container">
              <Link to="/" className="social_logo">
                <img
                  className="footer_logo"
                  src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                  alt="Amazon Logo"
                />
              </Link>
            </div>
            <small className="website_rights">
              Amazon © 2021 | Privacy Policy | Terms of Use | Cookies Settings
            </small>
            <div className="social_icons">
              <a
                href="https://www.facebook.com/AmazonUK/"
                className="social_icon_link facebook"
              >
                <FacebookIcon className="footer_facebookIcon" />
              </a>
              <a
                href="https://www.instagram.com/amazon/"
                className="social_icon_link instagram"
              >
                <InstagramIcon className="footer_instagramIcon" />
              </a>
              <a
                href="https://twitter.com/amazonuk"
                className="social_icon_link twitter"
              >
                <TwitterIcon className="footer_twitterIcon" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
};
