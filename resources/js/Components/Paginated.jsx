import React from "react";
import { Pagination } from "react-bootstrap";
import PropTypes from "prop-types";

function Paginated({ meta, handle }) {
    if (!meta || meta.total <= meta.per_page) return null;

    const { current_page, last_page } = meta;
    const maxVisiblePages = 5;
    let startPage = Math.max(1, current_page - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(last_page, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    return (
        <Pagination className="justify-content-center mt-2">
            <Pagination.First onClick={() => handle(1)} disabled={current_page === 1} />
            <Pagination.Prev onClick={() => handle(Math.max(1, current_page - 1))} disabled={current_page === 1} />

            {startPage > 1 && (
                <>
                    <Pagination.Item onClick={() => handle(1)}>1</Pagination.Item>
                    {startPage > 2 && <Pagination.Ellipsis disabled />}
                </>
            )}

            {Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index).map((page) => (
                <Pagination.Item key={page} active={page === current_page} onClick={() => handle(page)}>
                    {page}
                </Pagination.Item>
            ))}

            {endPage < last_page && (
                <>
                    {endPage < last_page - 1 && <Pagination.Ellipsis disabled />}
                    <Pagination.Item onClick={() => handle(last_page)}>{last_page}</Pagination.Item>
                </>
            )}

            <Pagination.Next onClick={() => handle(Math.min(last_page, current_page + 1))} disabled={current_page === last_page} />
            <Pagination.Last onClick={() => handle(last_page)} disabled={current_page === last_page} />
        </Pagination>
    );
}

Paginated.propTypes = {
    meta: PropTypes.shape({
        current_page: PropTypes.number.isRequired,
        last_page: PropTypes.number.isRequired,
        per_page: PropTypes.number.isRequired,
        total: PropTypes.number.isRequired,
    }).isRequired,
    handle: PropTypes.func.isRequired,
};

export default Paginated;
