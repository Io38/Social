/* eslint-disable jsx-a11y/alt-text */
import * as axios from 'axios';
import React from 'react';
import q from "./FindUsers.module.css"
import defaultAva from "../assets/photo.png"
import Preloader from '../preloader/Preloader';
import { NavLink } from 'react-router-dom';
import { getUsers } from '../api/api';

class FindUsers extends React.Component {




    componentDidMount() {


        this.props.setIsLoading(true);

        getUsers(this.props.currentPage, this.props.pageSize)
            .then(response => {
                this.props.setIsLoading(false);

                // let qwe = response.items.map(el => {
                //     console.log(`el: ${el}
                //     id: ${el.id}`)
                //     return el.id
                // });

                this.props.setLoading(false, response.items.map(el => el.id));
                this.props.setUsers(response.items);
                this.props.setTotalUsersCount(response.totalCount);
            })
    }

    onPageChange = (e) => {

        this.props.setPage(e);
        getUsers(this.props.currentPage, this.props.pageSize)
            .then(response => {

                this.props.setUsers(response.items);

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
                                            <img src={u.photos.small == null ? defaultAva : u.photos.small} className={q.ava} />
                                        </NavLink>
                                    </div>

                                    <div>{u.friend ?
                                        <button disabled={this.props.Loading.some(id => id === u.id)} onClick={() => {
                                            this.props.setLoading(true, u.id);
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

                                                    this.props.setLoading(false, u.id);
                                                })


                                        }} >
                                            Remove from a friend list</button> :

                                        <button disabled={this.props.Loading.some(id => id === u.id)} onClick={() => {
                                            this.props.setLoading(true, u.id);
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

                                                    this.props.setLoading(false, u.id);
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