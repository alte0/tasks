import React from "react";
import "./pagination.scss"

const Pagination = (props) => {
    const arr = new Array(props.pages).fill(props.pages);
    const lastPage = arr.length;
    const pagePrev = (props.pageCurrent - 1) === 0 ? 1 : (props.pageCurrent - 1);
    const pageNext = (props.pageCurrent + 1) > lastPage ? lastPage : (props.pageCurrent + 1);

    return (
        <ul className="pagination-list">
            <li className="pagination-list__item pagination-list__item_prev">
                {
                    pagePrev ===  props.pageCurrent ?
                        <a className="pagination-list__link" href="#prev">&lt;</a>
                        : <a className="pagination-list__link" onClick={props.handleClickChangePagePagination} data-page-id-pag={pagePrev} href={"page-" + pagePrev}>&lt;</a>
                }
            </li>
            {
                arr.map((it, index) => (
                    <li className={`pagination-list__item${props.pageCurrent === (index + 1) ? " pagination-list__item_active" : ""}`} key={index}>
                        <a className="pagination-list__link" onClick={props.handleClickChangePagePagination} data-page-id-pag={index + 1} href={"page-" + (index + 1)}>{index + 1}</a>
                    </li>)
                )
            }
            <li className="pagination-list__item pagination-list__item_next">
                {
                    pageNext ===  props.pageCurrent ?
                        <a className="pagination-list__link" href="#next">&gt;</a>
                        : <a className="pagination-list__link" onClick={props.handleClickChangePagePagination} data-page-id-pag={pageNext} href={"page-" + pageNext}>&gt;</a>
                }
            </li>
        </ul>
    )
};

export default Pagination