
import Table from "./table/Table"
import { useEffect, useState } from "react";
import  UserAdd from "../mainSection/user/userAdd/UserAdd"



const baseUrl = 'http://localhost:3030/jsonstore';

export default function MainSection() {
    const [users, setUsers] = useState([]);
    const [showAddUser, setShowAddUser] = useState(false);

    useEffect(
        () => {
            /* get request */
            (async function getUsers(){
                const response = await fetch(`${baseUrl}/users`);
                const result = await response.json();
                const userResult = Object.values(result);
                setUsers(userResult);
            })();
        },[]);
    
        const addUserClickHandler = () => {
            setShowAddUser(true);
        }


    return (
        <section className="card users-container">
            {/* <!-- Search bar component --> */}
            <form className="search-form">
                <h2>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user"
                        className="svg-inline--fa fa-user SearchBar_icon__cXpTg" role="img" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512">
                        <path fill="currentColor"
                            d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z">
                        </path>
                    </svg>
                    <span>Users</span>
                </h2>
                <div className="search-input-container">
                    <input type="text" placeholder="Please, select the search criteria" name="search" />
                    {/*  <!-- Show the clear button only if input field length !== 0 --> */}
                    <button className="btn close-btn">
                        <i className="fa-solid fa-xmark"></i>
                    </button>

                    <button className="btn" title="Please, select the search criteria">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>

                <div className="filter">
                    <span>Search Criteria:</span>
                    <select name="criteria" class="criteria">
                        <option value="">Not selected</option>
                        <option value="">First Name</option>
                        <option value="">Last Name</option>
                        <option value="">Email</option>
                        <option value="">Phone</option>
                    </select>
                </div>
            </form>

            {/* <!-- Table component --> */}
            <div className="table-wrapper">

                <Table 
                users={users}
                />

                 {showAddUser && (
                <UserAdd/>)}
            </div>

            {/*  <!-- New user button  --> */}
            <button className="btn-add btn" onClick={addUserClickHandler}>Add new user</button>

            {/* <!-- Pagination component  --> */}
            <div className="pagination position">
                <div className="limits">
                    <span>Items per page:</span>
                    <select name="limit" className="limit" value="5">
                        <option value="5">5</option>
                        <option value="5">10</option>
                        <option value="5">15</option>
                        <option value="5">20</option>
                    </select>
                </div>
                <p className="pages">1 - 1 of 1</p>
                <div className="actions">
                    <button className="btn" title="First Page">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angles-left"
                            className="svg-inline--fa fa-angles-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path fill="currentColor"
                                d="M77.25 256l137.4-137.4c12.5-12.5 12.5-32.75 0-45.25s-32.75-12.5-45.25 0l-160 160c-12.5 12.5-12.5 32.75 0 45.25l160 160C175.6 444.9 183.8 448 192 448s16.38-3.125 22.62-9.375c12.5-12.5 12.5-32.75 0-45.25L77.25 256zM269.3 256l137.4-137.4c12.5-12.5 12.5-32.75 0-45.25s-32.75-12.5-45.25 0l-160 160c-12.5 12.5-12.5 32.75 0 45.25l160 160C367.6 444.9 375.8 448 384 448s16.38-3.125 22.62-9.375c12.5-12.5 12.5-32.75 0-45.25L269.3 256z">
                            </path>
                        </svg>
                    </button>

                    <button className="btn" title="Previous Page">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-left"
                            className="svg-inline--fa fa-angle-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                            <path fill="currentColor"
                                d="M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z">
                            </path>
                        </svg>
                    </button>
                    <button className="btn" title="Next Page">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right"
                            className="svg-inline--fa fa-angle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                            <path fill="currentColor"
                                d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z">
                            </path>
                        </svg>
                    </button>

                    <button className="btn" title="Last Page">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angles-right"
                            className="svg-inline--fa fa-angles-right" role="img" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512">
                            <path fill="currentColor"
                                d="M246.6 233.4l-160-160c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25L178.8 256l-137.4 137.4c-12.5 12.5-12.5 32.75 0 45.25C47.63 444.9 55.81 448 64 448s16.38-3.125 22.62-9.375l160-160C259.1 266.1 259.1 245.9 246.6 233.4zM438.6 233.4l-160-160c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25L370.8 256l-137.4 137.4c-12.5 12.5-12.5 32.75 0 45.25C239.6 444.9 247.8 448 256 448s16.38-3.125 22.62-9.375l160-160C451.1 266.1 451.1 245.9 438.6 233.4z">
                            </path>
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    )
}