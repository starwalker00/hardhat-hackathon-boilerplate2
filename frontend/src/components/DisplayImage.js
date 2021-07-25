import React from "react";

export function DisplayImage({ url }) {
  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="text-center">
          <p>
            <img
              style={{
                marginTop: '5%'
              }}
              src={url}
              alt="Banner" />
          </p>
        </div>
      </div>
    </div>
  );
}