import { jsxs, jsx } from 'react/jsx-runtime';
import { Typography, Box } from '@mui/material';

const Page = ({ title, children }) => {
    return jsxs("div", { children: [jsx(Typography, { variant: "h2", children: title }), jsxs("div", { children: [jsx(Box, { children: "test" }), children] })] });
};

export { Page };
//# sourceMappingURL=index.js.map
