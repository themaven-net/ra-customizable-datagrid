export default CustomizableDatagrid;
declare class CustomizableDatagrid extends Component<any, any, any> {
    constructor(props: any);
    state: {
        modalOpened: boolean;
        selection: any;
    };
    getColumnNames(): any;
    getColumnLabels(): any;
    getInitialSelection(): any;
    updateStorage: () => void;
    toggleColumn: (columnName: any) => void;
    handleOpen: () => void;
    handleClose: () => void;
    renderChild: (child: any) => any;
    render(): JSX.Element;
}
declare namespace CustomizableDatagrid {
    namespace propTypes {
        const defaultColumns: any;
        const storage: any;
    }
    namespace defaultProps {
        const defaultColumns_1: any[];
        export { defaultColumns_1 as defaultColumns };
        export { LocalStorage as storage };
    }
}
import { Component } from "react";
import LocalStorage from "./LocalStorage";
