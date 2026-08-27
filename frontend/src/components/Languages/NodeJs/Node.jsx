import { useState } from "react";

import NodeSidebar from "./NodeSidebar";

import Introduction from "./Topics/Introduction";
import WhatIsNode from "./Topics/WhatIsNode";
import Installation from "./Topics/Installation";
import Architecture from "./Topics/Architecture";
import EventLoop from "./Topics/EventLoop";
import Modules from "./Topics/Modules";
import CommonJSVsESModules from "./Topics/CommonJSVsESModules";
import NPM from "./Topics/NPM";
import PackageJson from "./Topics/PackageJson";
import FileSystem from "./Topics/FileSystem";
import Events from "./Topics/Events";
import HTTPModule from "./Topics/HTTPModule";
import ExpressIntroduction from "./Topics/ExpressIntroduction";

const Node = () => {

    const [selectedTopic, setSelectedTopic] = useState("introduction");


    const renderTopic = () => {

        switch (selectedTopic) {

            case "introduction":
                return <Introduction />;

            case "what-is-node":
                return <WhatIsNode />;

            case "installation":
                return <Installation />;

            case "architecture":
                return <Architecture />;
            
            case "event-loop":
                return <EventLoop />;

            case "modules":
                return <Modules />;

            case "commonjs-esmodules":
                return <CommonJSVsESModules />;

            case "npm":
                return <NPM />;

            case "package-json":
                return <PackageJson />;

            case "file-system":
                return <FileSystem />;

            case "events":
                return <Events />;

            case "http-module":
                return <HTTPModule />;

            case "express-introduction":
                return <ExpressIntroduction />;

            default:
                return <Introduction />;
        }
    };


    return (

        <>

            <div className="container-fluid py-4">

                <div className="row g-4">

                    {/* SIDEBAR */}

                    <div className="col-md-3">

                        <NodeSidebar
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

        </>

    );

};


export default Node;