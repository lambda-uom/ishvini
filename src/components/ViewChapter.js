import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Tableview from "./Tableview";
import swal from "sweetalert";

const ViewChapter = () => {
  function successmsg() {
    swal({
      text: 'Search for a Chapter".',
      content: "input",
      button: {
        text: "Search!",
        closeModal: false,
      },
    })
      .then((name) => {
        if (!name) throw null;

        return fetch(
          `https://itunes.apple.com/search?term=${name}&entity=movie` //want to change this code according to my scope
        );
      })
      .then((results) => {
        return results.json();
      })
      .then((json) => {
        const movie = json.results[0];

        if (!movie) {
          return swal("No chapter was found!");
        }

        const name = movie.trackName;
        const imageURL = movie.artworkUrl100;

        swal({
          title: "Founded!",
        });
      })
      .catch((err) => {
        if (err) {
          swal("Oh noes!", "The AJAX request failed!", "error");
        } else {
          swal.stopLoading();
          swal.close();
        }
      });
  }
  return (
    <div className="column mt-5 ">
      <br></br>
      <div className="title">NETS:View Chapters</div>
      <br></br>
      <button
        type="button"
        className="mx-auto btn btn-primary mr-1 btn-lg  mt-5"
        onClick={successmsg}
      >
        Search
      </button>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Related department</th>
            <th>Created By</th>
          </tr>
        </thead>
        <tbody>
          <Tableview
            chapid="C001"
            chapname="Financial Accounting"
            depname="Finance"
            createdby="A2121"
          ></Tableview>
          <Tableview
            chapid="C002"
            chapname="React"
            depname="Development"
            createdby="A2212"
          ></Tableview>
          <Tableview
            chapid="C003"
            chapname="JAVA"
            depname="Development"
            createdby="A1121"
          ></Tableview>
        </tbody>
      </table>
    </div>
  );
};

export default ViewChapter;
