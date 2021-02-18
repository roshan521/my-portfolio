import React from "react";
import Card from "./components/Card";

const Service = () => {
  const myService = [
    "App Devlopment",
    "Web Development",
    "Reactjs",
    "Laravel",
    "MySQL",
  ];
  return (
    <>
      <section className="my-2">
        <h1 className="text-center my-5">Our Service</h1>
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row gy-5">
                {myService.map((val, index) => {
                  return (
                    <Card
                      title={val}
                      content="Some quick example text to build on the card title and make up the bulk of the card's content."
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
