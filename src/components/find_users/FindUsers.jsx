/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import q from "./FindUsers.module.css"
import defaultAva from "../../assets/photo.png"
import Preloader from '../preloader/Preloader';
import {NavLink} from 'react-router-dom';
import Paginator from "./Paginator";


class FindUsers extends React.Component {


    componentDidMount() {


        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChange = (pageNumber) => {

        this.props.getUsers(pageNumber, this.props.pageSize);
    }


    render = () => {

        let pagesAmount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];

        for (let i = 1; i <= pagesAmount; i++) {

            pages.push(i);
        }

        return (<div>

                {
                    this.props.isLoading
                        ?
                        <Preloader/>
                        :
                        <div className={q.users}>


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
                                            <img src={u.photos.small == null ? defaultAva : u.photos.small}
                                                 className={q.ava}/>
                                        </NavLink>
                                    </div>

                                    <div>


                                        {


                                            u.followed ?

                                                <button className={q.btn}
                                                        disabled={this.props.Loading.some(id => id === u.id)}
                                                        onClick={() => {
                                                            this.props.unFriend(u.id)
                                                        }}>
                                                    Remove from a friend list
                                                </button>

                                                :

                                                <button disabled={this.props.Loading.some(id => id === u.id)}
                                                        onClick={() => {
                                                            this.props.friend(u.id)
                                                        }}>
                                                    Add to friend list

                                                </button>

                                        }

                                    </div>

                                            <span className={q.userDescription}>


                                            <span>
                                            <div>{u.name}</div>
                                            <div>{u.status}</div>
                                            </span>




                                            </span>


                                            </span>
                                        </ div>)
                            }
                            <Paginator onPageChange={this.onPageChange}
                                       currentPage={this.props.currentPage}
                                       totalUsersCount={this.props.totalUsersCount}
                                       pageSize={this.props.pageSize}/>


                        </div>
                }
            </div>

        );

    }
}

export default FindUsers;