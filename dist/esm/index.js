import { jsxs, jsx } from 'react/jsx-runtime';
import { Box } from '@mui/material';

const Page = ({ title, children }) => {
    return jsxs("div", { children: [jsx("div", { children: title }), jsxs("div", { children: [jsx(Box, { children: "test" }), children] })] });
};

export { Page };
//# sourceMappingURL=index.js.map
