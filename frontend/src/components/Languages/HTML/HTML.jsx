import { useState } from "react";

import HTMLSidebar from "./HTMLSidebar";

import Introduction from "./Topics/Introduction";
import Structure from "./Topics/Structure";
import Headings from "./Topics/Headings";
import Paragraph from "./Topics/Paragraph";
import Links from "./Topics/Links";
import Images from "./Topics/Images";
import Lists from "./Topics/Lists";
import Tables from "./Topics/Tables";
import Forms from "./Topics/Forms";
import Semantic from "./Topics/SemanticHTML";
import AudioVideo from "./Topics/AudioVideo";
import Iframes from "./Topics/Iframes";

const HTML = () => {

    const [selectedTopic, setSelectedTopic] = useState("introduction");


    const renderTopic = () => {

        switch (selectedTopic) {

            case "introduction":
                return <Introduction />;

            case "structure":
                return <Structure />;

            case "headings":
                return <Headings />;

            case "paragraph":
                return <Paragraph />;

            case "links":
                return <Links />;

            case "images":
                return <Images />;

            case "lists":
                return <Lists />;

            case "tables":
                return <Tables />;

            case "forms":
                return <Forms />;

            case "semantic":    
                return <Semantic />;

            case "media":
                return <AudioVideo />;

            case "iframes":
                return <Iframes />;

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

                        <HTMLSidebar
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

export default HTML;