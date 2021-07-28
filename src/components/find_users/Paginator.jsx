import q from "./Paginator.module.css";
import React, {useState} from "react";


const Paginator = (props) => {


    let pagesAmount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    for (let i = 1; i <= pagesAmount; i++) {

        pages.push(i);
    }


    let portionSize = 10;
    let portionCount = Math.ceil(pagesAmount / portionSize)

    let [portionNumber, setPortionNumber] = useState(1);

    let leftPortionBound = (portionNumber - 1) * portionSize + 1;
    let rightPortionBound = portionNumber * portionSize;


    return (
        <div className={q.paginator}>

            {
                portionNumber > 1 &&
                <button
                    className={q.first}
                    onClick={() => {
                        setPortionNumber(portionNumber - 1)
                    }}>BACK</button>


            }

            <div className={q.pages}>


                {pages.filter(p => p >= leftPortionBound && p <= rightPortionBound)
                    .map(p => {
                        return (
                            <span
                                onClick={() => {
                                    props.onPageChange(p)
                                }} className={props.currentPage === p && q.activePage}>{p}
                    </span>
                        )
                    })}


            </div>

            {
                portionCount > portionNumber &&
                <button
                    className={q.second}
                    onClick={() => {
                        setPortionNumber(portionNumber + 1)
                    }}>NEXT</button>


            }
        </div>
    )


}

export default Paginator;