import { LinkSearch } from "./components/";
import { React } from "./imports";

export const CreateLinkComponent = (type, { label, name, pageName, fluidLink }) => {
    return function Component() {
        switch (type) {
            case "LinkSearch":
                return (<LinkSearch label={label}
                    name={name}
                    pageName={pageName}
                    fluidLink={fluidLink} />);
            default: return <div />;
        }
    };
};