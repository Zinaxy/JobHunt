import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useStateContext } from "../../context/ContextProvider.jsx";
import axiosClient from "../../utils/FetchApi.jsx";

const UpdateSettingsForm = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        id: null,
        name: "",
        email: "",
        firstName: "",
        lastName: "",
        dob: "",
        phoneNumber: "",
        gender: "",
        address: "",
        proffesion: "",
        password: "",
        password_confirmation: "",
    });
    const [errors, setErrors] = useState(null);
    const [loading, setLoading] = useState(false);
    const { setNotification } = useStateContext();

    useEffect(() => {
        setLoading(true);
        axiosClient
            .get(`/user`)
            .then(({ data }) => {
                setLoading(false);
                setUser(data.user);
                const date = new Date(user.dob);

                const year = date.getFullYear();
                const month = String(date.getMonth() + 1).padStart(2, "0"); // Adding 1 because months are zero-based
                const day = String(date.getDate()).padStart(2, "0");

                const formattedDate = `${year}-${month}-${day}`;
            })
            .catch(() => {
                setLoading(false);
            });
    }, []);

    const onSubmit = (ev) => {
        ev.preventDefault();
        setLoading(true);
        if (user.id) {
            axiosClient
                .put(`/users/${user.id}`, user)
                .then(() => {
                    setLoading(false);
                    setNotification("User was successfully updated");
                })
                .catch((err) => {
                    setLoading(false);
                    const response = err.response;
                    if (response && response.status === 422) {
                        setErrors(response.data.errors);
                    }
                });
        } else {
            axiosClient
                .post("/users", user)
                .then(() => {
                    setLoading(false);
                    setNotification("User was successfully created");
                })
                .catch((err) => {
                    setLoading(false);
                    const response = err.response;

                    if (response && response.status === 422) {
                        setErrors(response.data.errors);
                    }
                });
        }
    };
    const myClasses =
        "appearance-none block w-full bg-transparent text-gray-700 dark:text-gray-300 border border-gray-600 rounded py-3 px-4 mb-3 leading-tight focus:outline-none";
    const labelClass =
        "block uppercase tracking-wide text-gray-700 dark:text-gray-400 text-xs font-bold mb-2";
    const selectClass =
        "appearance-none block w-full bg-transparent text-gray-700 dark:text-gray-300 border border-gray-600 rounded py-3 px-4 mb-3 leading-tight focus:outline-none";
    return (
        <>
            {user.id && (
                <h1 className="dark:text-gray-200">Update User: {user.name}</h1>
            )}
            {!user.id && <h1 className="dark:text-gray-200">New User</h1>}
            <div className="card animated fadeInDown">
                {loading && <div className="text-center">Loading...</div>}
                {errors && (
                    <div className="bg-red-600 text-white p-4 rounded">
                        {Object.keys(errors).map((key) => (
                            <p key={key}>{errors[key][0]}</p>
                        ))}
                    </div>
                )}
                {!loading && (
                    <form onSubmit={onSubmit}>
                        {/* first row */}
                        <div className="flex items-center flex-col lg:flex-row w-full gap-3">
                            <div className="col-span-12 lg:col-span-6 w-full">
                                <div className="mb-3">
                                    <label
                                        htmlFor="name"
                                        className="text-sm text-gray-900 dark:text-gray-50"
                                    >
                                        User Name
                                    </label>
                                    <input
                                        value={user.name}
                                        onChange={(ev) =>
                                            setUser({
                                                ...user,
                                                name: ev.target.value,
                                            })
                                        }
                                        placeholder="Name"
                                        className={myClasses}
                                    />
                                    {errors && errors.name && (
                                        <span className="text-red-600 text-sm">
                                            {errors.name[0]}
                                        </span>
                                    )}{" "}
                                </div>
                            </div>
                            <div className="col-span-12 lg:col-span-6 w-full">
                                <div className="mb-3">
                                    <label
                                        htmlFor="name"
                                        className="text-sm text-gray-900 dark:text-gray-50"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        value={user.email}
                                        onChange={(ev) =>
                                            setUser({
                                                ...user,
                                                email: ev.target.value,
                                            })
                                        }
                                        placeholder="Email"
                                        className={myClasses}
                                    />
                                    {errors && errors.name && (
                                        <span className="text-red-600 text-sm">
                                            {errors.name[0]}
                                        </span>
                                    )}{" "}
                                </div>
                            </div>
                        </div>
                        {/* 2nd row */}
                        <div className="flex items-center flex-col lg:flex-row w-full gap-3">
                            <div className="col-span-12 lg:col-span-6 w-full">
                                <div className="mb-3">
                                    <label
                                        htmlFor="firstname"
                                        className="text-sm text-gray-900 dark:text-gray-50"
                                    >
                                        First Name
                                    </label>
                                    <input
                                        value={user.firstName}
                                        onChange={(ev) =>
                                            setUser({
                                                ...user,
                                                firstName: ev.target.value,
                                            })
                                        }
                                        placeholder="First Name"
                                        className={myClasses}
                                    />
                                    {errors && errors.firstName && (
                                        <span className="text-red-600 text-sm">
                                            {errors.firstName[0]}
                                        </span>
                                    )}{" "}
                                </div>
                            </div>
                            <div className="col-span-12 lg:col-span-6 w-full">
                                <div className="mb-3">
                                    <label
                                        htmlFor="name"
                                        className="text-sm text-gray-900 dark:text-gray-50"
                                    >
                                        Last Name
                                    </label>
                                    <input
                                        value={user.lastName}
                                        onChange={(ev) =>
                                            setUser({
                                                ...user,
                                                lastName: ev.target.value,
                                            })
                                        }
                                        placeholder="lastName"
                                        className={myClasses}
                                    />
                                    {errors && errors.lastName && (
                                        <span className="text-red-600 text-sm">
                                            {errors.lastName[0]}
                                        </span>
                                    )}{" "}
                                </div>
                            </div>
                        </div>
                        {/* 3rd row */}
                        <div className="flex items-center flex-col lg:flex-row w-full gap-3">
                            <div className="col-span-12 lg:col-span-6 w-full">
                                <div className="mb-3">
                                    <label
                                        htmlFor="dob"
                                        className="text-sm text-gray-900 dark:text-gray-50"
                                    >
                                        Date of Birth({user.dob})
                                    </label>
                                    <input
                                        type="date"
                                        value={user.dob}
                                        onChange={(ev) =>
                                            setUser({
                                                ...user,
                                                dob: ev.target.value,
                                            })
                                        }
                                        placeholder="First Name"
                                        className={myClasses}
                                    />
                                    {errors && errors.dob && (
                                        <span className="text-red-600 text-sm">
                                            {errors.dob[0]}
                                        </span>
                                    )}{" "}
                                </div>
                            </div>
                            <div className="col-span-12 lg:col-span-6 w-full">
                                <div className="mb-3">
                                    <label
                                        htmlFor="phoneNumber"
                                        className="text-sm text-gray-900 dark:text-gray-50"
                                    >
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        value={user.phoneNumber}
                                        onChange={(ev) =>
                                            setUser({
                                                ...user,
                                                phoneNumber: ev.target.value,
                                            })
                                        }
                                        placeholder="phoneNumber"
                                        className={myClasses}
                                    />
                                    {errors && errors.phoneNumber && (
                                        <span className="text-red-600 text-sm">
                                            {errors.phoneNumber[0]}
                                        </span>
                                    )}{" "}
                                </div>
                            </div>
                        </div>
                        {/* 3rd row */}
                        <div className="flex items-center flex-col lg:flex-row w-full gap-3">
                            <div className="col-span-12 lg:col-span-6 w-full">
                                <div className="mb-3">
                                    <label
                                        htmlFor="gender"
                                        className="text-sm text-gray-900 dark:text-gray-50"
                                    >
                                        Gender
                                    </label>
                                    <select
                                        className={selectClass}
                                        name="choices-single-categories"
                                        id="choices-single-categories"
                                        aria-label="Default select example"
                                        /*  value={user.gender} */
                                        onChange={(ev) =>
                                            setUser({
                                                ...user,
                                                gender: ev.target.value,
                                            })
                                        }
                                    >
                                        <option selected={user.gender} disabled>
                                            Select Gender
                                        </option>
                                        <option
                                            selected={user.gender === "Male"}
                                        >
                                            Male
                                        </option>
                                        <option
                                            selected={user.gender === "Female"}
                                        >
                                            Female
                                        </option>
                                        <option
                                            selected={user.gender === "Others"}
                                        >
                                            Others
                                        </option>
                                    </select>
                                    {errors && errors.gender && (
                                        <span className="text-red-600 text-sm">
                                            {errors.gender[0]}
                                        </span>
                                    )}{" "}
                                </div>
                            </div>
                            <div className="col-span-12 lg:col-span-6 w-full">
                                <div className="mb-3">
                                    <label
                                        htmlFor="proffesion"
                                        className="text-sm text-gray-900 dark:text-gray-50"
                                    >
                                        Proffession
                                    </label>
                                    <input
                                        value={user.proffesion}
                                        onChange={(ev) =>
                                            setUser({
                                                ...user,
                                                proffesion: ev.target.value,
                                            })
                                        }
                                        placeholder="software Developer"
                                        className={myClasses}
                                    />
                                    {errors && errors.proffesion && (
                                        <span className="text-red-600 text-sm">
                                            {errors.proffesion[0]}
                                        </span>
                                    )}{" "}
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="address"
                                className="form-label dark:text-gray-300"
                            >
                                Residential Address
                            </label>
                            <textarea
                                className={myClasses}
                                id="address"
                                rows="3"
                                onChange={(e) =>
                                    setUser({
                                        ...user,
                                        address: e.target.value,
                                    })
                                }
                            >
                                {user.address}
                            </textarea>
                        </div>
                        <div className="flex items-center flex-col lg:flex-row w-full gap-3">
                            <div className="col-span-12 lg:col-span-6 w-full">
                                <div className="mb-3">
                                    <label
                                        htmlFor="dob"
                                        className="text-sm text-gray-900 dark:text-gray-50"
                                    >
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        onChange={(ev) =>
                                            setUser({
                                                ...user,
                                                password: ev.target.value,
                                            })
                                        }
                                        placeholder="Password"
                                        className={myClasses}
                                    />
                                    {errors && errors.password && (
                                        <span className="text-red-600 text-sm">
                                            {errors.password[0]}
                                        </span>
                                    )}{" "}
                                </div>
                            </div>
                            <div className="col-span-12 lg:col-span-6 w-full">
                                <div className="mb-3">
                                    <label
                                        htmlFor=" password_confirmation"
                                        className="text-sm text-gray-900 dark:text-gray-50"
                                    >
                                        Confirm Password
                                    </label>
                                    <input
                                        type="password"
                                        onChange={(ev) =>
                                            setUser({
                                                ...user,
                                                password_confirmation:
                                                    ev.target.value,
                                            })
                                        }
                                        placeholder="Password Confirmation"
                                        className={myClasses}
                                    />
                                    {errors && errors.password_confirmation && (
                                        <span className="text-red-600 text-sm">
                                            {errors.password_confirmation[0]}
                                        </span>
                                    )}{" "}
                                </div>
                            </div>
                        </div>

                        <div className="mt-2 text-right">
                            <button
                                type="submit"
                                className="px-4 py-3 text-white bg-orange-600 rounded"
                            >
                                {loading ? (
                                    <span className="animate-bounce">
                                        Updating
                                    </span>
                                ) : (
                                    "Update Profile"
                                )}
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </>
    );
};

export default UpdateSettingsForm;
