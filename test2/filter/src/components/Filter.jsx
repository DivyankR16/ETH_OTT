import React from "react";
import { useState } from "react";

export default ({client, data, setData}) => {
    const [selectVal, setSelectVal] = useState("action");
    const [checkVal, setCheckVal] = useState('discription');

    function selectHandler(event) {
        setSelectVal(event.target.value)
    }

    function orderHandler(event) {
        setCheckVal(event.target.value)
    }

    async function submitHandler(event) {
        event.preventDefault()
        console.log({selectVal, checkVal})

        const query = `
        query {
            videoUploadeds(where: {${selectVal}: true}, orderBy: ${checkVal}) {
              VideoURI
              discription
              duration
              name
              gaming
              education
              comedy
              action
              movies
              music
            }
          }
        `
        let response = await client.query(query).toPromise();
        response = response.data.videoUploadeds;        ;
        setData(response);
        console.log(response)
    }

    return (
        <div className="container">
            <form onSubmit={submitHandler}>
                <h3>Category</h3>
                <select className="form-select" aria-label="Default select example" onClick={selectHandler}>
                    <option value="action" selected>Action</option>
                    <option value="gaming">Gaming</option>
                    <option value="movies">Movies</option>
                    <option value="music">Music</option>
                    <option value="education">Education</option>
                    <option value="comedy">Comedy</option>
                </select>
                <h3 className="my-3">Order</h3>
                <select className="form-select" aria-label="Default select example" onClick={orderHandler}>
                    <option value="discription" selected>Discription</option>
                    <option value="name">Name</option>
                </select>

                <button className="btn btn-outline-primary my-3" type="submit">Submit</button>
            </form>
        </div>
    )
}