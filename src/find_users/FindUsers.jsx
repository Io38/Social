/* eslint-disable jsx-a11y/alt-text */
import * as axios from 'axios';
import React from 'react';
import q from "./FindUsers.module.css"
import photo from "../assets/photo.png"
import Preloader from '../preloader/Preloader';
import { NavLink } from 'react-router-dom';

class FindUsers extends React.Component {




    componentDidMount() {
        this.props.setIsLoading(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
            { withCredentials: true })
            .then(response => {
                this.props.setIsLoading(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            })



    }

    onPageChange = (e) => {

        this.props.setPage(e);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
            { withCredentials: true })
            .then(response => {

                this.props.setUsers(response.data.items);

            })
    }


    render = () => {

        let pagesAmount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];

        for (let i = 1; i <= pagesAmount; i++) {

            pages.push(i);
        }

        return (<>

            {this.props.isLoading ? <Preloader /> : <div>





                {
                    this.props.users.map(
                        u =>
                            <div key={u.id}>


                                <div>
                                    <span> </span>
                                </div>


                                <span>
                                    <div>
                                        <NavLink to={'/profile' + u.id}>
                                            <img src={u.photos.small == null ? photo : u.photos.small} className={q.ava} />
                                        </NavLink>
                                    </div>

                                    <div>{u.friend ?
                                        <button onClick={() => {
                                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {

                                                withCredentials: true,
                                                headers: {
                                                    "API-KEY": "4bfabc4e-fb16-4cce-b138-421ee880ae4d"
                                                }

                                            })
                                                .then(response => {

                                                    if (response.data.resultCode === 0) {

                                                        this.props.unFriend(u.id);
                                                    }
                                                })


                                        }} >
                                            Remove from a friend list</button> :

                                        <button onClick={() => {
                                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {

                                                withCredentials: true,
                                                headers: {
                                                    "API-KEY": "4bfabc4e-fb16-4cce-b138-421ee880ae4d"
                                                }

                                            })
                                                .then(response => {

                                                    if (response.data.resultCode === 0) {

                                                        this.props.friend(u.id);
                                                    }
                                                })


                                        }}>Add to friend list</button>}
                                    </div>

                                    <span>


                                        <span>
                                            <div>{u.name}</div>
                                            <div>{u.status}</div>
                                        </span>

                                        <span>
                                            <div>{`u.location.country`} </div>
                                            <div>{`u.location.city`}</div>
                                        </span>


                                    </span>


                                </span>
                            </ div>)
                }

                <div className={q.pages}>

                    {pages.map(e => {
                        return <span onClick={() => {
                            this.onPageChange(e)
                        }}
                            className={this.props.currentPage === e && q.activePage}>{e}   </span>
                    })}
                </div>


            </div>
            }
        </>

        );

    }
}

export default FindUsers;