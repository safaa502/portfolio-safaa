import PageHeader from "../../components/PageHeader";
import SocialIcons from "../../components/SocialIcons";

import ContactInfo from "../../components/ContactInfo";

const Contact = ({ name, email, location }) => {
  return (
    <section className="contact">
      <PageHeader title="Contact" description="Contact me" />
      <div className="contactWrap container">
        <div className="row">
          <div className="col-12 col-lg-6">
            
          </div>
          <div className="col-12 col-lg-6">
            <ContactInfo name={name} location={location} email={email} />
          </div>
        </div>
      </div>
      <SocialIcons />
    </section>
  );
};

export default Contact;
