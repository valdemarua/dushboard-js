import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { Typography } from '@mui/material';

const Page = ({ title, children }) => {
    return jsxs(Fragment, { children: [jsx(Typography, { variant: "h2", children: title }), jsx("div", { children: children })] });
};

export { Page };
//# sourceMappingURL=index.js.map
