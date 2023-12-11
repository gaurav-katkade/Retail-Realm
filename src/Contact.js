import styled from "styled-components";

const Contact = () => {

  return <Wrapper>
    
    <h2 className="heading-content">Contact Us</h2>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242118.06894793978!2d73.86296739999999!3d18.524616450000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1695469781850!5m2!1sen!2sin"
      width="100%" 
      height="450"
      style={{border:0}}
      allowFullScreen="on"
      title="map" 
      referrerPolicy="no-referrer-when-downgrade"></iframe>
      <div className="container">
        <form  action="https://formspree.io/f/xaygpapq" method="POST" className="contact-form"><div className="contact-inputs">
          <input type="text" placeholder="Username" name="username" required autoComplete="off"/>
          <input type="email" placeholder="email id" name="email" required/>
          <textarea placeholder="Message"rows="10" cols="20" required autoComplete="off"></textarea>
          <input type="submit"></input></div>
        </form>
      </div>
  </Wrapper>;
};
const Wrapper = styled.section`
padding: 9rem 0 5rem 0;
text-align: center;
.heading-content{
  padding:3rem 0;
}
.container {
  margin-top: 6rem;

  .contact-form {
    max-width: 50rem;
    margin: auto;

    .contact-inputs {
      display: flex;
      flex-direction: column;
      gap: 3rem;

      input[type="submit"] {
        cursor: pointer;
        transition: all 0.2s;

        &:hover {
          background-color: ${({ theme }) => theme.colors.white};
          border: 1px solid ${({ theme }) => theme.colors.btn};
          color: ${({ theme }) => theme.colors.btn};
          transform: scale(0.9);
        }
      }
    }
  }
}
`;
export default Contact;
