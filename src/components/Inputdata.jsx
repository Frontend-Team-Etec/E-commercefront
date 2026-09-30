import { useState } from 'react';

const Inputdata = () => {
  const [username, setUsername] = useState(null);

  return (
    <div>
      <label className=' block mb-3'>Username:</label>
      <input className=' border-2 border-indigo-50 bg-amber-200 '
        onInput={(e) => { setUsername(e.target.value); }}
        type="text"
        placeholder="Enter name ..."
      />

      <h2>Username: {username}</h2>
    </div>
  );
};

export default Inputdata;