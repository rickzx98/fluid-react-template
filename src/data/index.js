const NODE_ENV = process.env.NODE_ENV || 'development';

export const getData = () => {
    switch (NODE_ENV) {
        case 'DEVELOPMENT':
        case 'development':
            return {};
        default:
            return {};
    }
};