import { useEffect, useState } from "react";
import Not_Found from "../assets/No_Contact_Found.png";
import { useDispatch } from "react-redux";
import { EditUser, addUser } from "../store/userData";
import { useSelector } from "react-redux";
import { removeUser } from "../store/userData";

const Contact = () => {
  const [FormVisiblility, SetFormVisibility] = useState(false);
  const [SaveContactClick, SetSaveContactClick] = useState(true);
  const [createContact, setCreateContact] = useState(false);
  const [RadioButtonValue, SetRadioButtonValue] = useState("");
  const [RadioButtonValue2, SetRadioButtonValue2] = useState("");
  const [EditButton, seteditButton] = useState("100");
  const dispatch = useDispatch();

  //received array from Redux
  const Users = useSelector((state: any) => {
    return state.users;
  });

  //Dispatching Data to Redux AddUser Reducer function
  const handleSubmit = (Param1: string, Param2: string, Param3: string) => {
    let UserDataObject = {
      firstName: Param1,
      lastName: Param2,
      status: Param3,
    };
    dispatch(addUser(UserDataObject));
  };

  // Dispaching data for Deleting user
  let handleDeleteUser = (payload: string, ni: any) => {
    let DeleteItem: any = {
      Index: payload,
    };
    console.log(DeleteItem);
    dispatch(removeUser(DeleteItem));
  };

  //Dispatching Data for EditUser
  const handleEdit = (
    Param1: string,
    Param2: string,
    Param3: string,
    Param4: string
  ) => {
    let UserEditObject = {
      firstName: Param1,
      lastName: Param2,
      status: Param3,
      Index: Param4,
    };
    dispatch(EditUser(UserEditObject));
  };

  //For SetVisibility Of Empty Conatacts
  useEffect(() => {
    if (Users.length == 0) {
      SetFormVisibility(false);
    } else {
      SetFormVisibility(true);
    }
  });

  return (
    <main className="flex max-h-fit min-h-screen w-screen flex-col items-center justify-start bg-zinc-100">
      {/* Create Contact (Main Button To Open Form)*/}
      <button
        className={`${
          createContact ? "hidden" : "block"
        } mb-10 mt-16 rounded-md border  border-black bg-neutral-200 px-5  py-2 text-lg md:border-2 md:px-10  md:py-3 md:font-semibold`}
        onClick={() => {
          SetFormVisibility(true);
          setCreateContact(true);
          SetSaveContactClick(false);
        }}
      >
        Create Contact
      </button>

      {/* Form*/}
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit(
            event.target[0].value,
            event.target[1].value,
            RadioButtonValue
          );
          (event.target[0].value = ""),
            (event.target[1].value = ""),
            SetRadioButtonValue("");
          SetSaveContactClick(true);
          setCreateContact(false);
        }}
        className={`${
          SaveContactClick ? "hidden" : "block"
        }  mx-4 mt-5 grid  place-items-center`}
      >
        {/* Used Div For contanarize form and Saparate Submit Button */}
        <div className=" rounded-md border border-black bg-white  px-10 py-10 md:border-2">
          <label htmlFor="firstName" className="text-lg font-semibold">
            First Name:
          </label>
          <input
            required
            className="mb-5  ml-2 w-60 rounded-sm border border-black py-1 pl-1"
            type="text"
            id="firstName"
          />
          <br />
          <label htmlFor="lastName" className="text-lg font-semibold">
            Last Name:
          </label>
          <input
            required
            className="ml-[.7rem] w-60 rounded-sm border border-black py-1 pl-1"
            type="text"
            id="lastName"
          />

          {/* Container Of Radio Buttons */}
          <div className="mt-7 flex items-center justify-center">
            <h1 className="mr-7 text-lg font-medium ">Status:</h1>
            <div className="flex flex-col text-xl  ">
              <span className="mb-1">
                <input
                  required
                  type="radio"
                  value="1"
                  name="status"
                  id="active"
                  onChange={(e) => SetRadioButtonValue(e.target.value)}
                />
                <label className="pl-2" htmlFor="active">
                  Active
                </label>
              </span>
              <span>
                <input
                  type="radio"
                  value="2"
                  name="status"
                  id="inActive"
                  onChange={(e) => SetRadioButtonValue(e.target.value)}
                />
                <label className="pl-2" htmlFor="inActive">
                  InActive
                </label>
              </span>
            </div>
          </div>
        </div>

        {/* Save Contact Button */}
        <input
          type="submit"
          value="Save Contact"
          className={`${
            SaveContactClick ? "hidden" : "block"
          } mt-10 rounded-md  border border-black bg-slate-100 px-8 py-2 font-light md:border-2 md:font-medium`}
        />
      </form>
      {/* Users (Received Array From RTL) Data */}
      <div className="">
        <ul className="mx-1  mt-3  grid grid-cols-2 gap-3 md:grid-cols-4">
          {Users.map(
            (
              i: { firstName: string; lastName: string; status: string },
              j: string
            ) => {
              return (
                // User Data FirstName,LastName,Status
                <li
                  key={`${j}`}
                  className="rounded-md  border-2 border-black px-5  py-3 md:w-72"
                >
                  <div
                    className={`${
                      EditButton == j ? "hidden" : "block"
                    } mb-3 font-bold  `}
                  >
                    <span className="mr-1 font-semibold text-cyan-700">
                      FullName:
                    </span>
                    <br className="md:hidden" />
                    <span className="w-40 text-justify">
                      {i.firstName + " " + i.lastName}
                    </span>
                    <br />
                    <span className="font-semibold text-cyan-700">Status</span>
                    <span>
                      :{" "}
                      {i.status === "1" || i.status === "3"
                        ? "Active"
                        : "Inactive"}
                    </span>
                  </div>
                  {/*  EDit Button form*/}
                  <div
                    className={`${EditButton == j ? "block" : "hidden"} mb-3 `}
                  >
                    <form
                      action=""
                      className="font-light"
                      onSubmit={(e) => {
                        e.preventDefault();
                        handleEdit(
                          e.target[0].value,
                          e.target[1].value,
                          RadioButtonValue2,
                          j
                        );
                        seteditButton("100");
                      }}
                    >
                      <span className="text-sm font-semibold md:mr-2">
                        FirstName
                      </span>
                      <input
                        required
                        className="w-32 rounded-md border border-black px-2  md:mb-2 md:w-40 md:border-2 md:py-1 md:font-normal"
                        type="text"
                        placeholder={`${i.firstName}`}
                      />
                      <br />
                      <span className="text-sm font-semibold md:mr-2">
                        LastName
                      </span>
                      <input
                        required
                        className="mb-2 w-32 rounded-md border border-black px-2 md:w-40 md:border-2 md:py-1 md:font-normal"
                        type="text"
                        placeholder={i.lastName}
                      />
                      <br />
                      <span className="text-sm font-medium">Status:</span>
                      <br />

                      <input
                        type="radio"
                        className="md:ml-12"
                        name="sStatus"
                        id="a3"
                        value="3"
                        required
                        onChange={(e) => SetRadioButtonValue2(e.target.value)}
                      />
                      <label htmlFor="a3" className="ml-1 md:font-semibold">
                        Active
                      </label>
                      <br />
                      <input
                        type="radio"
                        className="md:ml-12"
                        id="a4"
                        name="sStatus"
                        value="4"
                        onChange={(e) => SetRadioButtonValue2(e.target.value)}
                      />
                      <label htmlFor="a4" className="ml-1 md:font-semibold">
                        InActive
                      </label>

                      <br />
                      <input
                        className="ml-8 mt-2  rounded-md border border-black bg-slate-300 px-2 md:ml-16 md:border-2 md:px-10 md:py-1 md:font-medium"
                        type="submit"
                        value="Save"
                      />
                    </form>

                    {/* Edit and Delete Button For User Data */}
                  </div>
                  <button
                    onClick={() => handleDeleteUser(j, j)}
                    className="rounded-md border border-black bg-slate-400 px-2 font-extralight md:ml-5 md:border-2 md:px-5  md:py-1 md:font-normal"
                  >
                    {" "}
                    Delete
                  </button>
                  <button
                    onClick={() => seteditButton(j)}
                    className="rounded-md border border-black bg-slate-400 px-4 font-extralight md:ml-5 md:border-2 md:px-7  md:py-1 md:font-normal"
                  >
                    Edit
                  </button>
                </li>
              );
            }
          )}
        </ul>
      </div>

      {/* Empty Contancts  */}
      <section
        className={`${
          FormVisiblility ? "hidden" : "block"
        } flex w-80  items-center justify-center  rounded-md border border-black bg-neutral-100 px-5 py-7 text-lg`}
      >
        {" "}
        <img
          className="mb-10 ml-1 mr-4 w-10"
          src={Not_Found}
          alt="Not Found Image"
        />{" "}
        No Contacts Found Please Add Contact From Create Contact Button
      </section>
    </main>
  );
};

export default Contact;
