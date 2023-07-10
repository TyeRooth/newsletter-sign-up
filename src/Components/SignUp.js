import ListItem from "./ListItem";
import Form from "./Form";

const SignUp = () => {
  return (
    <div className="info-form-container">
      <h1>Stay Updated!</h1>
      <p>Join 60,000+ product managers receiving monthly updates on:</p>
      <ul>
        <ListItem item="Product discovery and building what matters" />
        <ListItem item="Measuring to ensure updates are a success" />
        <ListItem item="And much more!" />
      </ul>
      <Form />
    </div>
  );
};

export default SignUp;
