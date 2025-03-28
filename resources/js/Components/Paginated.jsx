import React from "react";
import { Pagination } from "react-bootstrap";
import PropTypes from "prop-types";

function Paginated({ meta, handle }) {
    if (!meta || !meta.next_cursor && !meta.prev_cursor) return null;

    const { next_cursor, prev_cursor } = meta;

    return (
        <Pagination className="justify-content-center mt-2">
            <Pagination.Prev 
                onClick={() => handle(prev_cursor)} 
                disabled={!prev_cursor} 
                title="Trang trước"
            />
            <Pagination.Next 
                onClick={() => handle(next_cursor)} 
                disabled={!next_cursor} 
                title="Trang sau"
            />
        </Pagination>
    );
}

Paginated.propTypes = {
    meta: PropTypes.shape({
        next_cursor: PropTypes.string,
        prev_cursor: PropTypes.string,
    }).isRequired,
    handle: PropTypes.func.isRequired,
};

export default Paginated;
