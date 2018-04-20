import { FluidPage } from './FluidPage';
import { React } from './imports';

export function CreatePage(lifeCycle, propTypes, pages) {
    const Page = (props) => {
        return <FluidPage pages={pages} lifeCycle={lifeCycle} {...props} />;
    };
    Page.propTypes = propTypes;
    return Page;
}