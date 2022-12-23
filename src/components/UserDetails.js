const UserDetails = ({ userDetails }) => {
  const { Bio, profile, jobTitle, avatar } = userDetails;
  // const [bio, setBio] = useState("");
  // const [jobTitle, setJobTitle] = useState("");
  // const [username, setUsername] = useState("");
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");

  // const inputHandler = (e) => {
  //   console.log(e.target.name);
  // };

  return (
    <section className="border">
      <p className="bg-blue-500 rounded-t text-white overflow-hidden uppercase text-center text-xl  py-3 font-bold">
        Users Details
      </p>
      <div className="max-w-[400px]  mx-auto  mt-4 flex flex-col items-center py-4">
        <div className="flex items-center flex-col ">
          <img
            className="rounded-full w-40 h-40 object-center "
            src={avatar}
            alt=""
          />
          <p className="font-bold mt-4">@ {profile.username}</p>
        </div>

        <form className="w-full">
          <div className="my-8">
            <textarea
              className="textarea textarea-bordered w-full bg-gray-100 p-2 border"
              value={Bio}
              readOnly
              name="bio"
            ></textarea>
          </div>
          <div className=" w-full flex flex-col mb-3">
            <label className="label text-sm mb-1">
              <span className="label-text">Full Name</span>
            </label>
            <input
              type="text"
              className="input input-bordered   rounded-md text-black w-full p-2 bg-gray-100 border"
              value={`${profile.firstName} ${profile.lastName}`}
              name="name"
              readOnly
            />
          </div>
          <div className="w-full flex flex-col mb-3">
            <label className="label text-sm mb-1">
              <span className="label-text">Job Title</span>
            </label>
            <input
              type="text"
              className="input input-bordered  rounded-md text-black w-full p-2 bg-gray-100 border "
              value={jobTitle}
              name="jobTitle"
              readOnly
            />
          </div>
          <div className=" w-full flex flex-col ">
            <label className="label mb-1 text-sm ">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              className="input input-bordered  rounded-md text-black w-full p-2 bg-gray-100 border "
              value={profile.email}
              name="email"
              readOnly
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default UserDetails;
