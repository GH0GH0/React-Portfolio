import emailjs from "@emailjs/browser";


const mail = ({ name, email, message }) => {
  return emailjs.send(
    'service_nbzxbeq',
    'template_n0qqc1k',
    { name, email, message },
    'KR9ZnHq9rIzoyYe53'
  );
};

export default mail;

