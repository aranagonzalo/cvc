"use client";

const Select = ({
    name,
    required,
    fieldName,
    handleChange,
    onBlur,
    options,
    onFocus,
    formData,
    focused,
}) => {
    return (
        <div className="relative">
            <label
                className={`transition-text duration-300 ease-out bg-custom-cream absolute font-medium text-2xl text-custom-blue/60 pointer-events-none ${
                    focused[name] || formData[name]
                        ? "text-base -top-5"
                        : "bottom-2 pb-2"
                }`}
            >
                {fieldName}
                {required && "*"}
            </label>
            <select
                name={name}
                onChange={handleChange}
                onBlur={onBlur}
                onFocus={onFocus}
                value={formData[name]}
                required={required}
                className={`border-b-[2.5px] h-12 w-1/2 border-custom-blue text-2xl font-medium text-custom-blue focus:outline-none bg-custom-cream`}
            >
                <option value="">[Seleccionar]</option>
                {options.map((o, i) => (
                    <option key={i} value={o}>
                        {o}
                    </option>
                ))}
            </select>
            {focused[name] && !formData[name] && (
                <p className="font-medium text-base text-custom-red/60">
                    Campo Requerido
                </p>
            )}
        </div>
    );
};

export default Select;
