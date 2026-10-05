function Error({ message }) {
  return (
    <>
      <div>
        <div className="container">
          {message.tags === "info" ? (
            <div
              className="alert alert-info alert-dismissible fade show"
              role="alert"
            >
              <strong>{message.tags}</strong> {message}
              <button
                type="button"
                className="close"
                data-dismiss="alert"
                aria-label="Close"
              >
                <span aria-hidden="true">x</span>
              </button>
            </div>
          ) : message.tags === "debug" ? (
            <div
              className="alert alert-dark alert-dismissible fade show"
              role="alert"
            >
              <strong>{message.tags}</strong> {message}
              <button
                type="button"
                className="close"
                data-dismiss="alert"
                aria-label="Close"
              >
                <span aria-hidden="true">x</span>
              </button>
            </div>
          ) : message.tags === "success" ? (
            <div
              className="alert alert-success alert-dismissible fade show"
              role="alert"
            >
              <strong>{message.tags}</strong> {message}
              <button
                type="button"
                className="close"
                data-dismiss="alert"
                aria-label="Close"
              >
                <span aria-hidden="true">x</span>
              </button>
            </div>
          ) : message.tags === "error" ? (
            <div
              className="alert alert-danger alert-dismissible fade show"
              role="alert"
            >
              <strong>{message.tags}</strong> {message}
              <button
                type="button"
                className="close"
                data-dismiss="alert"
                aria-label="Close"
              >
                <span aria-hidden="true">x</span>
              </button>
            </div>
          ) : (
            <div
              className="alert alert-warning alert-dismissible fade show"
              role="alert"
            >
              <strong>{message.tags}</strong> {message}
              <button
                type="button"
                className="close"
                data-dismiss="alert"
                aria-label="Close"
              >
                <span aria-hidden="true">x</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Error;
