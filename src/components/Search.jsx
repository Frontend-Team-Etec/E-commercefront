import { useState } from 'react';

const Search = () => {
  const [show, setShow] = useState(false)
  const [adddata, setAdddata] = useState([])
  const [search, setSearch] = useState("")

  const [id, setId] = useState("")
  const [name, setName] = useState("")
  const [gender, setGender] = useState("Male")
  const [age, setAge] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function submitdata(e) {
    e.preventDefault()

    const user = {
      id: id,
      name: name,
      gender: gender,
      age: age,
      email: email,
      password: password
    }

    setAdddata((data) => [...data, user])


    setShow(false)

    setId("")
    setName("")
    setGender("Male")
    setAge("")
    setEmail("")
    setPassword("")
  }

  const resultsearch = adddata.filter((data) =>
    data.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-10">

      <div className="max-w-6xl mx-auto mb-8">
        <h1 className="text-4xl font-extrabold text-slate-800 text-center">
          User Search
        </h1>

        <p className="text-center text-slate-500 mt-2">
          Search and manage registered users
        </p>
      </div>


      <div className="max-w-6xl mx-auto mb-6">

        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">

          <div className="flex flex-col md:flex-row md:items-end gap-5">

            {/* Search */}
            <div className="flex-1">

              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Search User
              </label>

              <div className="relative">

                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                  🔍
                </div>

                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search by name..."
                  className="
                    w-full
                    pl-12
                    pr-4
                    py-3
                    rounded-xl
                    border
                    border-slate-300
                    bg-slate-50
                    text-slate-700
                    outline-none
                    focus:bg-white
                    focus:border-indigo-500
                    focus:ring-4
                    focus:ring-indigo-100
                  "
                />

              </div>


              <button
                type="button"
                onClick={() => setShow(true)}
                className="
                  
                  border
                  border-green-300
                  rounded
                  w-[100px]
                  p-2
                  mt-4
                  bg-green-600
                  text-white
                  hover:bg-green-700
                "
              >
                Register
              </button>

            </div>

            <div className="bg-indigo-50 rounded-xl px-6 py-3 min-w-[150px]">

              <p className="text-sm text-slate-500">
                Total Found
              </p>

              <p className="text-2xl font-bold text-indigo-600">
                {resultsearch.length}
              </p>

            </div>

          </div>

        </div>
      </div>


      <div className=' relative'>
        {show && (
          <div className=" absolute flex justify-center ">

            <form

              onSubmit={submitdata}
              className="
              max-w-md
              bg-white
              border-2
              border-indigo-300
              rounded-2xl
              shadow-lg
              p-6
            "
            >

              <h2 className="text-2xl font-bold text-indigo-700 mb-5">
                Register User
              </h2>

              {/* ID */}
              <label className="block mb-2">
                ID:
              </label>

              <input
                type="text"
                value={id}
                onChange={(e) => setId(e.target.value)}
                className="w-full border-2 border-indigo-200 mb-4 p-2 rounded"
                required
              />

              <label className="block mb-2">
                Name:
              </label>

              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border-2 border-indigo-200 mb-4 p-2 rounded"
                required
              />

              <label className="block mb-2">
                Gender:
              </label>

              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="w-full p-2 mb-4 border-2 border-indigo-300 rounded"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>

              {/* Age */}
              <label className="block mb-2">
                Age:
              </label>

              <input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="w-full border-2 border-indigo-200 mb-4 p-2 rounded"
                required
              />


              <label className="block mb-2">
                Email:
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border-2 border-indigo-200 mb-4 p-2 rounded"
                required
              />

              {/* Password */}
              <label className="block mb-2">
                Password:
              </label>

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border-2 border-indigo-200 mb-4 p-2 rounded"
                required
              />

              {/* Buttons */}
              <div className="flex justify-between mt-5">

                <button
                  type="button"
                  onClick={() => setShow(false)}
                  className="
                  border
                  border-red-300
                  rounded
                  w-[100px]
                  p-2
                  bg-red-600
                  text-white
                  hover:bg-red-700
                "
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="
                  border
                  border-violet-300
                  rounded
                  w-[100px]
                  p-2
                  bg-violet-900
                  text-white
                  hover:bg-violet-800
                "
                >
                  Submit
                </button>

              </div>

            </form>

          </div>

        )}
      </div>

      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">

        {/* Table Header */}
        <div className="
          px-6
          py-5
          border-b
          border-slate-200
          flex
          flex-col
          sm:flex-row
          sm:items-center
          sm:justify-between
          gap-3
        ">

          <div>
            <h2 className="text-xl font-bold text-slate-800">
              User Data
            </h2>

            <p className="text-sm text-slate-500 mt-1">
              List of registered users
            </p>
          </div>

          <div className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-semibold">
            {adddata.length} Users
          </div>

        </div>

        {/* Table */}
        <div className="overflow-x-auto">

          <table className="w-full text-left">

            <thead className="bg-slate-50 border-b border-slate-200">

              <tr>

                <th className="px-6 py-4">ID</th>
                <th className="px-6 py-4">Name</th>
                <th className="px-6 py-4">Gender</th>
                <th className="px-6 py-4">Age</th>
                <th className="px-6 py-4">Email</th>
                <th className="px-6 py-4">Password</th>

              </tr>

            </thead>

            <tbody>

              {resultsearch.length > 0 ? (

                resultsearch.map((row) => (

                  <tr
                    key={row.id}
                    className="border-b border-slate-100 hover:bg-indigo-50"
                  >

                    <td className="px-6 py-4">
                      #{row.id}
                    </td>

                    <td className="px-6 py-4">

                      <div className="flex items-center gap-3">

                        <div className="
                          w-10
                          h-10
                          rounded-full
                          bg-indigo-100
                          text-indigo-600
                          flex
                          items-center
                          justify-center
                          font-bold
                        ">
                          {row.name.charAt(0).toUpperCase()}
                        </div>

                        <span className="font-semibold text-slate-800">
                          {row.name}
                        </span>

                      </div>

                    </td>


                    <td className="px-6 py-4 text-slate-500">
                      {row.gender}
                    </td>

                    <td className="px-6 py-4 text-slate-500">
                      {row.age}
                    </td>


                    <td className="px-6 py-4 text-slate-500">
                      {row.email}
                    </td>

                    <td className="px-6 py-4">
                      <span className="
                        inline-flex
                        px-3
                        py-1
                        rounded-full
                        bg-pink-100
                        text-pink-600
                        text-sm
                        font-semibold
                      ">
                        {row.password}
                      </span>
                    </td>

                  </tr>

                ))

              ) : (

                <tr>

                  <td
                    colSpan="6"
                    className="px-6 py-12 text-center"
                  >

                    <div className="text-5xl mb-3">
                      😔
                    </div>

                    <p className="text-lg font-semibold text-slate-600">
                      No user found
                    </p>

                    <p className="text-sm text-slate-400 mt-1">
                      Try searching with another name
                    </p>

                  </td>

                </tr>

              )}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  )
}

export default Search