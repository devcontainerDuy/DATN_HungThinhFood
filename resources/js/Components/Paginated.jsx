import React from "react";
import { Pagination } from "react-bootstrap";
import PropTypes from "prop-types";

function Paginated({ current = 1, total = 1, handle }) {
    return (
        <>
            <Pagination className="justify-content-center mt-2">
                <Pagination.First linkClassName="text-body" onClick={() => handle(1)} disabled={current === 1} />
                <Pagination.Prev linkClassName="text-body" onClick={() => handle(current > 1 ? current - 1 : 1)} disabled={current === 1} />
                {current > 3 && (
                    <>
                        <Pagination.Item linkClassName="text-body" onClick={() => handle(1)}>
                            1
                        </Pagination.Item>
                        <Pagination.Ellipsis linkClassName="text-body" />
                    </>
                )}

                {current > 1 && (
                    <Pagination.Item linkClassName="text-body" onClick={() => handle(current - 1)}>
                        {current - 1}
                    </Pagination.Item>
                )}
                <Pagination.Item active linkClassName="text-bg-body border-body">
                    {current}
                </Pagination.Item>
                {current < total && (
                    <Pagination.Item linkClassName="text-body" onClick={() => handle(current + 1)}>
                        {current + 1}
                    </Pagination.Item>
                )}

                {current < total - 2 && (
                    <>
                        <Pagination.Ellipsis linkClassName="text-body" />
                        <Pagination.Item linkClassName="text-body" onClick={() => handle(total)}>
                            {total}
                        </Pagination.Item>
                    </>
                )}
                <Pagination.Next linkClassName="text-body" onClick={() => handle(current < total ? current + 1 : total)} disabled={current === total} />
                <Pagination.Last linkClassName="text-body" onClick={() => handle(total)} disabled={current === total} />
            </Pagination>
        </>
    );
}

export default Paginated;

Paginated.propTypes = {
    current: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    handle: PropTypes.func.isRequired,
};
