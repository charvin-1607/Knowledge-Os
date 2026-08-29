import { useState } from "react";

import ReactSidebar from "./ReactSidebar";
import Introduction from "./Topics/Introduction";
import WhatIsReact from "./Topics/WhatIsReact";
import Installation from "./Topics/Installation";
import Components from "./Topics/Components";
import JSX from "./Topics/JSX";
import Props from "./Topics/Props";
import State from "./Topics/State";
import Events from "./Topics/Events";
import ConditionalRendering from "./Topics/ConditionalRendering";


const React = () => {

    const [selectedTopic, setSelectedTopic] = useState("introduction");


    const renderTopic = () => {

        switch (selectedTopic) {

            case "introduction":
                return <Introduction />;

            case "what-is-react":
                return <WhatIsReact />;

            case "installation":
                return <Installation />;
            
            case "components":
                return  <Components />;

            case "jsx":
                return <JSX />;

            case "props":
                return <Props />;

            case "state":
                return <State />;

            case "events":
                return <Events />;

            case "conditional-rendering":
                return <ConditionalRendering />;

            default:
                return <Introduction />;

        }

    };


    return (

        <div className="container-fluid py-4">

            <div className="row g-4">

                {/* SIDEBAR */}

                <div className="col-md-3">

                    <ReactSidebar
                        selectedTopic={selectedTopic}
                        setSelectedTopic={setSelectedTopic}
                    />

                </div>


                {/* CONTENT */}

                <div className="col-md-9">

                    <div className="card shadow-sm border border-dark">

                        <div className="card-body p-4">

                            {renderTopic()}

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );
};


export default React;