import React, { useState } from "react";

const CustomFileInput = ({}) => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
    };

    return (
        <div className="flex flex-col w-max gap-2">
            <label
                htmlFor="fileInput"
                className="text-custom-blue px-5 py-2 cursor-pointer border-[2.5px] border-custom-blue rounded-full text-xl w-max"
            >
                Adjuntar archivo
            </label>
            <span className="text-custom-blue">
                {selectedFile ? selectedFile.name : ""}
            </span>
            <input
                accept=".pdf, .doc, .docx"
                type="file"
                id="fileInput"
                className="hidden"
                onChange={handleFileChange}
            />
        </div>
    );
};

export default CustomFileInput;
