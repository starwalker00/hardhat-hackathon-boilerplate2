import React from "react";

import { NetworkErrorMessage } from "./NetworkErrorMessage";

export function ChangeImageUrl({ setImageUrl }) {
  return (
    <div className="container">
      <h4>Transfer</h4>
      <form
        onSubmit={(event) => {
          event.preventDefault();

          const formData = new FormData(event.target);
          const newImageUrl = formData.get("newImageUrl");

          if (newImageUrl) {
            setImageUrl(newImageUrl);
          }
        }}
      >
        <div className="form-group">
          <label>image url</label>
          <input className="form-control" type="text" name="newImageUrl" required />
        </div>
        <div className="form-group">
          <input className="btn btn-primary" type="submit" value="Set new image url" />
        </div>
      </form>
    </div>
  );
}
