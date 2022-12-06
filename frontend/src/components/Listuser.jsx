import React from "react";
import { useState, useEffect } from "react";
import Header from "./Header";


function Listuser() {
    const [lusers, setUsers] = useState([])

    useEffect(() => {
        listusers();
    }, []);

    async function listusers() {

        const location = "localhost";
        const token = sessionStorage.getItem('token');
        const settings = {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            }
        };

        try {
            //user list
            const fetchResponse = await fetch(`http://${location}:3000/users/list-users/`, settings);
            const data = await fetchResponse.json();
            setUsers(data.users);
        }
        catch (e) {
            return e;
        }

    }
    return (
        <>
            <Header />
            <h3 id="update1" className="Update1 text-white">REGISTERED USER LIST</h3>
            <div className=" col-md-4 m-3 p-4 mx-auto">

                <table className="table table-bordered table-responsive" id="ulist" >

                    <thead className="thead-transparent text-center">
                        <tr>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Mobile</th>
                        </tr>
                    </thead>

                    <tbody className="usertable m-3 p-5" id="userData">
                        {lusers.map(users => {
                            return (
                                <tr>
                                    <td>{users.first_name}</td>
                                    <td>{users.last_name}</td>
                                    <td>{users.email}</td>
                                    <td>{users.mobile}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );

}

export default Listuser;