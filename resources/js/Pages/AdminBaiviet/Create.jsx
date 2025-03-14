import React from "react";
import Form from "react-bootstrap/Form";

function Create() {
    return (
        <>
            <Form onSubmit={handleSubmit} encType="multipart/form-data">
                <Form.Group controlId="tieude">
                    <Form.Label>Tiêu đề:</Form.Label>
                    <Form.Control
                        type="text"
                        name="tieude"
                        value={formData.tieude}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="noidung">
                    <Form.Label>Nội dung:</Form.Label>
                    <Form.Control
                        as="textarea"
                        name="noidung"
                        value={formData.noidung}
                        onChange={handleChange}
                        rows={5}
                    />
                </Form.Group>

                <Form.Group controlId="anhdaidien">
                    <Form.Label>Ảnh đại diện:</Form.Label>
                    <Form.Control
                        type="file"
                        name="anhdaidien"
                        onChange={handleChange}
                    />
                </Form.Group>

                <Button variant="primary" type="submit" className="mt-3">
                    Thêm
                </Button>
            </Form>
        </>
    );
}

export default Create;
