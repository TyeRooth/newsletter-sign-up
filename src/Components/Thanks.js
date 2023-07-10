import success_icon from "../assets/images/icon-success.svg";

const Thanks = () => {
  return (
    <div className="thanks-container">
      <img src={success_icon} alt="success icon" />
      <h1>Thanks for subscribing!</h1>
      <p>
        A confirmation email has been sent to {"name@gmail.com"}. Please open it
        and check the button inside to confirm your subscription.
      </p>
      <button>Dismiss message</button>
    </div>
  );
};

export default Thanks;
