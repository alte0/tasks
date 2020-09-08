import React from "react";
import "./pagination.scss";
import PropTypes from 'prop-types';

const Pagination = (props) => {
    const {
        pagesCount,
        pageCurrentPagination
    } = props;
    const arr = new Array(pagesCount).fill(pagesCount);
    const lastPage = arr.length;
    const pagePrev = (pageCurrentPagination - 1) === 0 ? 1 : (pageCurrentPagination - 1);
    const pageNext = (pageCurrentPagination + 1) > lastPage ? lastPage : (pageCurrentPagination + 1);

    return (
        <ul className="pagination-list">
            <li className="pagination-list__item pagination-list__item_prev">
                {
                    pagePrev ===  pageCurrentPagination?
                        <a className="pagination-list__link"
                           onClick={(evt) => evt.preventDefault()}
                           href="#prev">&lt;</a>
                        : <a className="pagination-list__link"
                             onClick={props.handleClickChangePagePagination}
                             data-page-id-pag={pagePrev} href={"page-" + pagePrev}>&lt;</a>
                }
            </li>
            {
                arr.map((it, index) => (
                    <li className={`pagination-list__item${pageCurrentPagination === (index + 1) ?
                        " pagination-list__item_active" 
                        : ""}`}
                        key={"page-" + index}>
                        <a className="pagination-list__link"
                           onClick={props.handleClickChangePagePagination}
                           data-page-id-pag={index + 1} href={"page-" + (index + 1)}>{index + 1}</a>
                    </li>)
                )
            }
            <li className="pagination-list__item pagination-list__item_next">
                {
                    pageNext ===  pageCurrentPagination ?
                        <a className="pagination-list__link"
                           onClick={(evt) => evt.preventDefault()}
                           href="#next">&gt;</a>
                        : <a className="pagination-list__link"
                             onClick={props.handleClickChangePagePagination}
                             data-page-id-pag={pageNext} href={"page-" + pageNext}>&gt;</a>
                }
            </li>
        </ul>
    )
};

Pagination.propTypes = {
    pagesCount: PropTypes.number.isRequired,
    pageCurrentPagination: PropTypes.number.isRequired
}

export default Pagination
