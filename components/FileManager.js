
import React, { useEffect } from "react";

export class FileManager extends React.Component {

    componentDidMount() {
        const Flmngr = require("@flmngr/flmngr-react").default;
        this.setState({ Flmngr });
    }

    render() {
        return (
            <button
                onClick={() => {
                    if (this.state.Flmngr) {
                        this.state.Flmngr.open({
                            apiKey: "WrYOVz2j",
                            urlFileManager: "https://files.redliodesigns.com/flmngr",
                            urlFiles: "https://files.redliodesigns.com/files",
                            isMultiple: false,
                            acceptExtensions: ["png", "jpg", "jpeg", "gif", "webp"],
                            onFinish: (files) => {
                                console.log("User picked:");
                                console.log(files);
                            },
                        });
                    }
                }}
            >
                Open file manager
            </button>
        );
    }
}
