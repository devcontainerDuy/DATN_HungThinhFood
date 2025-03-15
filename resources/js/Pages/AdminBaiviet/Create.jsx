import React from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Layouts from "../../Layouts/Index";

function Create() {
    return (
        <>
            <Layouts>
                <h2>Thêm Bài viết</h2>
                <div className="container-fluid">
                    <Form encType="multipart/form-data">
                        <Form.Group controlId="tieude">
                            <Form.Label>Tiêu đề:</Form.Label>
                            <Form.Control
                                type="text"
                                name="tieude"
                                value=""
                                onChange=""
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="noidung">
                            <Form.Label>Nội dung:</Form.Label>
                            <Form.Control
                                as="textarea"
                                name="noidung"
                                value=""
                                onChange=""
                                rows={5}
                            />
                        </Form.Group>

                        <Form.Group controlId="anhdaidien">
                            <Form.Label>Ảnh đại diện:</Form.Label>
                            <Form.Control
                                type="file"
                                name="anhdaidien"
                                // onChange={handleChange}
                            />
                        </Form.Group>

                        <Button
                            variant="primary"
                            type="submit"
                            className="mt-3"
                        >
                            Thêm
                        </Button>
                    </Form>
                </div>
            </Layouts>
        </>
    );
}

export default Create;
