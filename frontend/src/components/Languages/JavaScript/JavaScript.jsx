import { useState } from "react";

import JavaScriptSidebar from "./JavaScriptSidebar";

import Introduction from "./Topics/Introduction";
import Variables from "./Topics/Variables";
import DataTypes from "./Topics/DataTypes";
import Operators from "./Topics/Operators";
import Conditionals from "./Topics/Conditionals";
import Loops from "./Topics/Loops";
import Functions from "./Topics/Functions";
import ArrowFunctions from "./Topics/ArrowFunctions";
import Arrays from "./Topics/Arrays";
import ArrayMethods from "./Topics/ArrayMethods";
import Objects from "./Topics/Objects";
import ObjectMethods from "./Topics/ObjectMethods";
import Strings from "./Topics/Strings";
import Destructuring from "./Topics/Destructuring";
import SpreadRest from "./Topics/SpreadRest";
import DOM from "./Topics/DOM";
import Events from "./Topics/Events";
import ES6 from "./Topics/ES6";
import AsynchronousJS from "./Topics/AsynchronousJS";
import PromisesAsyncAwait from "./Topics/PromisesAsyncAwait";




const JavaScript = () => {

    const [selectedTopic, setSelectedTopic] = useState("introduction");


    const renderTopic = () => {

        switch (selectedTopic) {

            case "introduction":
                return <Introduction />;

            case "variables":
                return <Variables />;

            case "data-types":
                return <DataTypes />;

            case "operators":
                return <Operators />;

            case "conditionals":
                return <Conditionals />;

            case "loops":
                return <Loops />;

            case "functions":
                return <Functions />;

            case "arrow-functions":
                return <ArrowFunctions />;

            case "arrays":
                return <Arrays />;

            case "array-methods":
                return <ArrayMethods />;

            case "objects":
                return <Objects />;

            case "object-methods":
                return <ObjectMethods />;

            case "strings":
                return <Strings />;

            case "destructuring":
                return <Destructuring />;

            case "spread-rest":
                return <SpreadRest />;

            case "dom":
                return <DOM />;

            case "events":
                return <Events />;

            case "es6":
                return <ES6 />;

            case "asynchronous-js":
                return <AsynchronousJS />;

            case "promises-async-await":
                return <PromisesAsyncAwait />;

            default:
                return <Introduction />;
        }
    };


    return (

        <div className="container-fluid py-4">

            <div className="row g-4">

                {/* SIDEBAR */}

                <div className="col-md-3">

                    <JavaScriptSidebar
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


export default JavaScript;