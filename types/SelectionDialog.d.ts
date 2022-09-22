export default SelectionDialog;
declare class SelectionDialog extends Component<any, any, any> {
    constructor(props: any);
    constructor(props: any, context: any);
    onColumnClicked: ({ target: { value } }: {
        target: {
            value: any;
        };
    }) => void;
    render(): JSX.Element;
}
declare namespace SelectionDialog {
    namespace propTypes {
        const columns: any;
        const selection: any;
    }
    namespace defaultProps {
        const columns_1: {};
        export { columns_1 as columns };
    }
}
import { Component } from "react";
