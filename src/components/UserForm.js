import useInput from '../hooks/useInput';

const UserForm = () => {
  const [firstName, bindFirstName, resetFirstName] = useInput('');
  const [lastName, bindLastName, resetLastName] = useInput('');

  const submitHandler = e => {
    e.preventDefault();
    console.log(firstName, lastName);
    resetFirstName();
    resetLastName();
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label>First Name</label>
          <input type='text' {...bindFirstName} />
        </div>
        <div>
          <label>Last Name</label>
          <input type='text' {...bindLastName} />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default UserForm;
