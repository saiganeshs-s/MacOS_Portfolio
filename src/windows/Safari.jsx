import React from "react";
import WindowWrapper from "../hoc/WindowWrapper";

const CERTIFICATIONS = [
    { id: "developer", label: "Developer Certification" },
    { id: "datascience", label: "Data Science Certification" },
    { id: "generative-ai", label: "Generative AI Certification" },
    { id: "nptel-java", label: "NPTEL Java Certification" },
    { id: "devops", label: "DevOps Certification" },
    { id: "infosys-angular", label: "Infosys Angular Certification" },
];

const Safari = () => {
    return (
        <WindowWrapper title="Safari">
            <div className="safari-root">
                {/* Top bar / tab (simple, no “Blogs”) */}
                <div className="safari-tab-bar">
                    <div className="safari-tab safari-tab-active">
                        Certifications
                    </div>
                </div>

                {/* Main content */}
                <div className="safari-content">
                    <h2 className="safari-heading">Certifications</h2>

                    <ul className="cert-list">
                        {CERTIFICATIONS.map((cert) => (
                            <li key={cert.id} className="cert-item">
                                {cert.label}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </WindowWrapper>
    );
};

export default Safari;